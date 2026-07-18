import { NextResponse } from "next/server";
import { z } from "zod";

const quoteSchema = z.object({
  eventType: z.string().min(2),
  date: z.string().min(1),
  postcode: z.string().min(3).max(10),
  budget: z.string().min(1),
  displaySize: z.string().min(1),
  name: z.string().min(2).max(120),
  email: z.string().email(),
  phone: z.string().min(6).max(40),
  message: z.string().max(4000).optional(),
  // Honeypot
  company: z.string().max(0).optional(),
});

export async function POST(request: Request) {
  let body: unknown;
  try {
    body = await request.json();
  } catch {
    return NextResponse.json({ ok: false, error: "Invalid request body." }, { status: 400 });
  }

  const parsed = quoteSchema.safeParse(body);
  if (!parsed.success) {
    return NextResponse.json(
      { ok: false, error: "Please check your details and try again." },
      { status: 400 }
    );
  }

  const { company, ...payload } = parsed.data;
  if (company) {
    return NextResponse.json({ ok: true }); // silently drop bots
  }

  // Basic spam/rate-limit note: add IP-based rate limiting in production.
  console.log("[quote] new quote request:", payload);

  // TODO: connect email provider (Resend / SMTP) here to send the quote request.

  return NextResponse.json({
    ok: true,
    message: "Thanks — we'll reply within 24 hours with your tailored quote.",
  });
}
