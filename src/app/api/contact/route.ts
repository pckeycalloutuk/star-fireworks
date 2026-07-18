import { NextResponse } from "next/server";
import { z } from "zod";

const contactSchema = z.object({
  name: z.string().min(2).max(120),
  email: z.string().email(),
  phone: z.string().min(6).max(40),
  message: z.string().min(10).max(4000),
  // Honeypot — must be empty
  company: z.string().max(0).optional(),
});

export async function POST(request: Request) {
  let body: unknown;
  try {
    body = await request.json();
  } catch {
    return NextResponse.json({ ok: false, error: "Invalid request body." }, { status: 400 });
  }

  const parsed = contactSchema.safeParse(body);
  if (!parsed.success) {
    // Honeypot triggered or validation failed — respond generically
    return NextResponse.json(
      { ok: false, error: "Please check your details and try again." },
      { status: 400 }
    );
  }

  // Basic spam/rate-limit note: in production, add IP-based rate limiting
  // (e.g. Upstash Ratelimit) and verify honeypot before processing.
  const { company, ...payload } = parsed.data;
  if (company) {
    return NextResponse.json({ ok: true }); // silently drop bots
  }

  console.log("[contact] new enquiry:", payload);

  // TODO: connect email provider (Resend / SMTP) here to send the enquiry.

  return NextResponse.json({ ok: true, message: "Thanks — we'll be in touch within 24 hours." });
}
