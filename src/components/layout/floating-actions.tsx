"use client";

import { MessageCircle, Phone } from "lucide-react";
import { company, telLink, whatsappLink } from "@/lib/company";

export function FloatingActions() {
  return (
    <div className="fixed bottom-5 right-5 z-50 flex flex-col gap-3">
      <a
        href={telLink(company.phones[0])}
        className="inline-flex h-12 w-12 items-center justify-center rounded-full bg-navy text-white shadow-lg ring-1 ring-white/20 transition hover:bg-navy-soft focus-ring"
        aria-label={`Call ${company.phones[0]}`}
      >
        <Phone className="h-5 w-5" />
      </a>
      <a
        href={whatsappLink()}
        target="_blank"
        rel="noopener noreferrer"
        className="inline-flex h-12 w-12 items-center justify-center rounded-full bg-[#25D366] text-white shadow-lg transition hover:brightness-110 focus-ring"
        aria-label="Chat on WhatsApp"
      >
        <MessageCircle className="h-5 w-5" />
      </a>
    </div>
  );
}
