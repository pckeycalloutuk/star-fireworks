import { Phone, MessageCircle, Sparkles } from "lucide-react";
import { site } from "@/config/site";

/** Persistent bottom action bar, mobile only. */
export function MobileActionBar() {
  return (
    <div className="fixed inset-x-0 bottom-0 z-40 border-t border-white/10 bg-night/95 backdrop-blur-md lg:hidden">
      <div className="grid grid-cols-3">
        <a
          href={`tel:${site.phone.replace(/\s/g, "")}`}
          className="flex min-h-[56px] flex-col items-center justify-center gap-0.5 py-2 text-xs font-semibold text-white"
        >
          <Phone className="h-5 w-5 text-gold" />
          Call
        </a>
        <a
          href={`https://wa.me/${site.whatsapp}`}
          target="_blank"
          rel="noopener noreferrer"
          className="flex min-h-[56px] flex-col items-center justify-center gap-0.5 border-x border-white/10 py-2 text-xs font-semibold text-white"
        >
          <MessageCircle className="h-5 w-5 text-success" />
          WhatsApp
        </a>
        <a
          href="/quote"
          className="flex min-h-[56px] flex-col items-center justify-center gap-0.5 bg-gold py-2 text-xs font-bold text-night"
        >
          <Sparkles className="h-5 w-5" />
          Get Quote
        </a>
      </div>
    </div>
  );
}
