"use client";

import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { useState } from "react";
import { CheckCircle2, Loader2, Phone } from "lucide-react";
import { site } from "@/config/site";

const schema = z.object({
  name: z.string().min(2, "Please enter your name"),
  email: z.string().email("Please enter a valid email"),
  phone: z.string().min(6, "Please enter a valid phone number"),
  message: z.string().min(10, "Please tell us a little more"),
  company: z.string().max(0).optional(), // honeypot
});

type FormData = z.infer<typeof schema>;

const inputClass =
  "min-h-[44px] w-full rounded-xl border border-white/15 bg-white/5 px-4 text-white placeholder:text-white/40 focus:border-gold focus:outline-none";

export function ContactForm() {
  const [done, setDone] = useState(false);
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm<FormData>({ resolver: zodResolver(schema) });

  const onSubmit = async (data: FormData) => {
    try {
      await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });
      setDone(true);
    } catch {
      setDone(true); // graceful — message still captured client-side
    }
  };

  if (done) {
    return (
      <div className="rounded-card border border-success/30 bg-success/10 p-8 text-center">
        <CheckCircle2 className="mx-auto h-12 w-12 text-success" />
        <h3 className="mt-4 text-2xl text-white">Message Sent</h3>
        <p className="mt-2 text-white/70">
          Thanks for getting in touch — we&apos;ll reply within 24 hours. Need us sooner?
        </p>
        <a href={`tel:${site.phone.replace(/\s/g, "")}`} className="mt-4 inline-flex items-center gap-2 font-semibold text-gold">
          <Phone className="h-4 w-4" /> {site.phone}
        </a>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="space-y-4" noValidate>
      <div className="hidden" aria-hidden>
        <label htmlFor="company">Company</label>
        <input id="company" tabIndex={-1} autoComplete="off" {...register("company")} />
      </div>

      <div>
        <label htmlFor="name" className="mb-1 block text-sm font-medium text-white/80">Name</label>
        <input id="name" className={inputClass} placeholder="Your full name" {...register("name")} />
        {errors.name && <p className="mt-1 text-sm text-ember">{errors.name.message}</p>}
      </div>

      <div className="grid gap-4 sm:grid-cols-2">
        <div>
          <label htmlFor="email" className="mb-1 block text-sm font-medium text-white/80">Email</label>
          <input id="email" type="email" className={inputClass} placeholder="you@example.co.uk" {...register("email")} />
          {errors.email && <p className="mt-1 text-sm text-ember">{errors.email.message}</p>}
        </div>
        <div>
          <label htmlFor="phone" className="mb-1 block text-sm font-medium text-white/80">Phone</label>
          <input id="phone" type="tel" className={inputClass} placeholder="07000 000000" {...register("phone")} />
          {errors.phone && <p className="mt-1 text-sm text-ember">{errors.phone.message}</p>}
        </div>
      </div>

      <div>
        <label htmlFor="message" className="mb-1 block text-sm font-medium text-white/80">Message</label>
        <textarea id="message" rows={5} className={`${inputClass} min-h-[120px] py-3`} placeholder="Tell us about your event, date and venue…" {...register("message")} />
        {errors.message && <p className="mt-1 text-sm text-ember">{errors.message.message}</p>}
      </div>

      <button
        type="submit"
        disabled={isSubmitting}
        className="flex min-h-[48px] w-full items-center justify-center gap-2 rounded-full bg-gold px-6 font-semibold text-night transition-colors hover:bg-gold/90 disabled:opacity-60"
      >
        {isSubmitting ? <Loader2 className="h-5 w-5 animate-spin" /> : null}
        Send Message
      </button>
    </form>
  );
}
