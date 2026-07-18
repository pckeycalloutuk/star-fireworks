"use client";

import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import {
  Heart,
  Flame,
  Building2,
  Music4,
  Plane,
  PartyPopper,
  ArrowLeft,
  ArrowRight,
  CheckCircle2,
  Loader2,
  Phone,
} from "lucide-react";
import { site } from "@/config/site";

const eventTypes = [
  { value: "Wedding", icon: Heart },
  { value: "Bonfire Night", icon: Flame },
  { value: "Corporate / TV", icon: Building2 },
  { value: "Pyromusical", icon: Music4 },
  { value: "Drone Show", icon: Plane },
  { value: "Party / Celebration", icon: PartyPopper },
];

const budgets = ["Under £750", "£750 – £1,500", "£1,500 – £3,000", "£3,000 – £6,000", "£6,000+"];
const sizes = ["Intimate (1–2 min)", "Standard (2–4 min)", "Large (4–6 min)", "Grand / Pyromusical (6 min+)"];

const schema = z.object({
  eventType: z.string().min(1, "Please choose an event type"),
  date: z.string().min(1, "Please choose a date"),
  postcode: z.string().min(3, "Please enter a valid postcode").max(10),
  budget: z.string().min(1, "Please select a budget"),
  displaySize: z.string().min(1, "Please select a display size"),
  name: z.string().min(2, "Please enter your name"),
  email: z.string().email("Please enter a valid email"),
  phone: z.string().min(6, "Please enter a valid phone number"),
  message: z.string().max(4000).optional(),
  company: z.string().max(0).optional(), // honeypot
});

type FormData = z.infer<typeof schema>;

const inputClass =
  "min-h-[44px] w-full rounded-xl border border-white/15 bg-white/5 px-4 text-white placeholder:text-white/40 focus:border-gold focus:outline-none";

export function QuoteBuilder() {
  const [step, setStep] = useState(0);
  const [done, setDone] = useState(false);

  const {
    register,
    handleSubmit,
    setValue,
    watch,
    trigger,
    formState: { errors, isSubmitting },
  } = useForm<FormData>({
    resolver: zodResolver(schema),
    mode: "onTouched",
    defaultValues: { eventType: "", budget: "", displaySize: "" },
  });

  const values = watch();
  const totalSteps = 4;

  const next = async () => {
    const fieldsByStep: (keyof FormData)[][] = [
      ["eventType"],
      ["date", "postcode"],
      ["budget", "displaySize"],
      ["name", "email", "phone"],
    ];
    const valid = await trigger(fieldsByStep[step]);
    if (valid) setStep((s) => Math.min(totalSteps - 1, s + 1));
  };

  const onSubmit = async (data: FormData) => {
    try {
      await fetch("/api/quote", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });
      setDone(true);
    } catch {
      setDone(true);
    }
  };

  if (done) {
    return (
      <div className="rounded-card border border-success/30 bg-success/10 p-8 text-center sm:p-12">
        <CheckCircle2 className="mx-auto h-14 w-14 text-success" />
        <h2 className="mt-4 text-3xl text-white">Quote Request Received</h2>
        <p className="mx-auto mt-3 max-w-md text-white/70">
          Thank you, {values.name?.split(" ")[0] || "there"}. We&apos;ll reply within 24 hours with a
          tailored quote for your {values.eventType?.toLowerCase() || "event"}. Prefer to talk it through now?
        </p>
        <a
          href={`tel:${site.phone.replace(/\s/g, "")}`}
          className="mt-6 inline-flex items-center gap-2 rounded-full bg-gold px-6 py-3 font-semibold text-night"
        >
          <Phone className="h-4 w-4" /> {site.phone}
        </a>
      </div>
    );
  }

  return (
    <div className="rounded-card border border-white/10 bg-smoke p-6 sm:p-10">
      {/* Progress */}
      <div className="mb-8">
        <div className="mb-2 flex justify-between text-xs font-semibold uppercase tracking-wide text-white/50">
          <span>Step {step + 1} of {totalSteps}</span>
          <span>{Math.round(((step + 1) / totalSteps) * 100)}%</span>
        </div>
        <div className="h-2 w-full overflow-hidden rounded-full bg-white/10">
          <div
            className="h-full rounded-full bg-ember-gradient transition-all duration-500"
            style={{ width: `${((step + 1) / totalSteps) * 100}%` }}
          />
        </div>
      </div>

      <form onSubmit={handleSubmit(onSubmit)} noValidate>
        <div className="hidden" aria-hidden>
          <input tabIndex={-1} autoComplete="off" {...register("company")} />
        </div>

        {/* Step 1 — event type */}
        {step === 0 && (
          <div>
            <h2 className="text-2xl text-white">What are you celebrating?</h2>
            <p className="mt-1 text-sm text-white/60">Pick the option that best fits your event.</p>
            <div className="mt-6 grid grid-cols-2 gap-3 sm:grid-cols-3">
              {eventTypes.map((t) => {
                const active = values.eventType === t.value;
                return (
                  <button
                    type="button"
                    key={t.value}
                    onClick={() => setValue("eventType", t.value, { shouldValidate: true })}
                    className={`flex min-h-[100px] flex-col items-center justify-center gap-2 rounded-xl border p-4 text-center text-sm font-medium transition-colors ${
                      active ? "border-gold bg-gold/10 text-white" : "border-white/15 text-white/70 hover:border-white/30"
                    }`}
                  >
                    <t.icon className={`h-7 w-7 ${active ? "text-gold" : "text-white/50"}`} />
                    {t.value}
                  </button>
                );
              })}
            </div>
            {errors.eventType && <p className="mt-2 text-sm text-ember">{errors.eventType.message}</p>}
          </div>
        )}

        {/* Step 2 — date + postcode */}
        {step === 1 && (
          <div>
            <h2 className="text-2xl text-white">When and where?</h2>
            <p className="mt-1 text-sm text-white/60">A rough date is fine if you&apos;re still deciding.</p>
            <div className="mt-6 space-y-4">
              <div>
                <label htmlFor="date" className="mb-1 block text-sm font-medium text-white/80">Event date</label>
                <input id="date" type="date" className={inputClass} {...register("date")} />
                {errors.date && <p className="mt-1 text-sm text-ember">{errors.date.message}</p>}
              </div>
              <div>
                <label htmlFor="postcode" className="mb-1 block text-sm font-medium text-white/80">Venue postcode</label>
                <input id="postcode" className={inputClass} placeholder="e.g. HG3 0AB" {...register("postcode")} />
                {errors.postcode && <p className="mt-1 text-sm text-ember">{errors.postcode.message}</p>}
              </div>
            </div>
          </div>
        )}

        {/* Step 3 — budget + size */}
        {step === 2 && (
          <div>
            <h2 className="text-2xl text-white">Budget &amp; display size</h2>
            <p className="mt-1 text-sm text-white/60">This helps us design the right show for you.</p>
            <div className="mt-6 space-y-6">
              <div>
                <p className="mb-2 text-sm font-medium text-white/80">Approximate budget</p>
                <div className="flex flex-wrap gap-2">
                  {budgets.map((b) => (
                    <button
                      type="button"
                      key={b}
                      onClick={() => setValue("budget", b, { shouldValidate: true })}
                      className={`rounded-full border px-4 py-2 text-sm transition-colors ${
                        values.budget === b ? "border-gold bg-gold/10 text-white" : "border-white/15 text-white/70 hover:border-white/30"
                      }`}
                    >
                      {b}
                    </button>
                  ))}
                </div>
                {errors.budget && <p className="mt-2 text-sm text-ember">{errors.budget.message}</p>}
              </div>
              <div>
                <p className="mb-2 text-sm font-medium text-white/80">Display size</p>
                <div className="flex flex-wrap gap-2">
                  {sizes.map((s) => (
                    <button
                      type="button"
                      key={s}
                      onClick={() => setValue("displaySize", s, { shouldValidate: true })}
                      className={`rounded-full border px-4 py-2 text-sm transition-colors ${
                        values.displaySize === s ? "border-gold bg-gold/10 text-white" : "border-white/15 text-white/70 hover:border-white/30"
                      }`}
                    >
                      {s}
                    </button>
                  ))}
                </div>
                {errors.displaySize && <p className="mt-2 text-sm text-ember">{errors.displaySize.message}</p>}
              </div>
            </div>
          </div>
        )}

        {/* Step 4 — contact */}
        {step === 3 && (
          <div>
            <h2 className="text-2xl text-white">Your details</h2>
            <p className="mt-1 text-sm text-white/60">We&apos;ll send your tailored quote within 24 hours.</p>
            <div className="mt-6 space-y-4">
              <div>
                <label htmlFor="q-name" className="mb-1 block text-sm font-medium text-white/80">Name</label>
                <input id="q-name" className={inputClass} placeholder="Your full name" {...register("name")} />
                {errors.name && <p className="mt-1 text-sm text-ember">{errors.name.message}</p>}
              </div>
              <div className="grid gap-4 sm:grid-cols-2">
                <div>
                  <label htmlFor="q-email" className="mb-1 block text-sm font-medium text-white/80">Email</label>
                  <input id="q-email" type="email" className={inputClass} placeholder="you@example.co.uk" {...register("email")} />
                  {errors.email && <p className="mt-1 text-sm text-ember">{errors.email.message}</p>}
                </div>
                <div>
                  <label htmlFor="q-phone" className="mb-1 block text-sm font-medium text-white/80">Phone</label>
                  <input id="q-phone" type="tel" className={inputClass} placeholder="07000 000000" {...register("phone")} />
                  {errors.phone && <p className="mt-1 text-sm text-ember">{errors.phone.message}</p>}
                </div>
              </div>
              <div>
                <label htmlFor="q-message" className="mb-1 block text-sm font-medium text-white/80">Anything else? (optional)</label>
                <textarea id="q-message" rows={3} className={`${inputClass} min-h-[90px] py-3`} placeholder="Song choices, venue details, special requests…" {...register("message")} />
              </div>
            </div>
          </div>
        )}

        {/* Navigation */}
        <div className="mt-8 flex items-center justify-between gap-4">
          {step > 0 ? (
            <button
              type="button"
              onClick={() => setStep((s) => Math.max(0, s - 1))}
              className="flex items-center gap-2 rounded-full border border-white/20 px-5 py-3 text-sm font-semibold text-white hover:border-gold hover:text-gold"
            >
              <ArrowLeft className="h-4 w-4" /> Back
            </button>
          ) : (
            <span />
          )}

          {step < totalSteps - 1 ? (
            <button
              type="button"
              onClick={next}
              className="flex items-center gap-2 rounded-full bg-gold px-6 py-3 text-sm font-semibold text-night hover:bg-gold/90"
            >
              Continue <ArrowRight className="h-4 w-4" />
            </button>
          ) : (
            <button
              type="submit"
              disabled={isSubmitting}
              className="flex items-center gap-2 rounded-full bg-gold px-6 py-3 text-sm font-semibold text-night hover:bg-gold/90 disabled:opacity-60"
            >
              {isSubmitting ? <Loader2 className="h-4 w-4 animate-spin" /> : null}
              Get My Quote
            </button>
          )}
        </div>
      </form>
    </div>
  );
}
