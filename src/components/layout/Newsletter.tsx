"use client";

import { useState } from "react";
import { Send, Check } from "lucide-react";

export function Newsletter({ compact = false }: { compact?: boolean }) {
  const [email, setEmail] = useState("");
  const [done, setDone] = useState(false);

  const submit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!/^[^@\s]+@[^@\s]+\.[^@\s]+$/.test(email)) return;
    setDone(true);
  };

  if (done) {
    return (
      <p className="flex items-center gap-2 text-sm text-success">
        <Check className="h-4 w-4" /> Thanks — you&apos;re on the list.
      </p>
    );
  }

  return (
    <form onSubmit={submit} className={`flex gap-2 ${compact ? "" : "max-w-md"}`}>
      <label htmlFor="newsletter-email" className="sr-only">
        Email address
      </label>
      <input
        id="newsletter-email"
        type="email"
        required
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        placeholder="Your email address"
        className="min-h-[44px] w-full rounded-full border border-white/15 bg-white/5 px-4 text-sm text-white placeholder:text-white/40 focus:border-gold focus:outline-none"
      />
      <button
        type="submit"
        className="flex min-h-[44px] items-center gap-1 rounded-full bg-gold px-5 text-sm font-semibold text-night hover:bg-gold/90"
      >
        <Send className="h-4 w-4" />
        <span className="hidden sm:inline">Sign up</span>
      </button>
    </form>
  );
}
