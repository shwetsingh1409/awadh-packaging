import Link from "next/link";
import { Button } from "@/components/ui/button";
import { whatsappLink } from "@/lib/company";

type CtaBandProps = {
  title?: string;
  description?: string;
};

export function CtaBand({
  title = "Need packaging built for your product line?",
  description = "Share your dimensions, ply requirements, and volume. Our team will respond with a tailored quotation.",
}: CtaBandProps) {
  return (
    <section className="bg-grey-50">
      <div className="container-page section-pad">
        <div className="relative overflow-hidden bg-navy px-6 py-14 md:px-14 md:py-16">
          <div
            className="absolute inset-0 opacity-40"
            style={{
              background:
                "radial-gradient(ellipse 60% 80% at 90% 20%, rgba(201,162,39,0.22), transparent 55%)",
            }}
            aria-hidden
          />
          <div className="relative max-w-2xl">
            <p className="text-[11px] uppercase tracking-[0.22em] text-gold">
              Partner with Awadh Packaging
            </p>
            <h2 className="mt-4 font-display text-3xl md:text-5xl text-white leading-tight">
              {title}
            </h2>
            <p className="mt-4 text-white/65 leading-relaxed">{description}</p>
            <div className="mt-9 flex flex-wrap gap-3">
              <Button
                asChild
                variant="gold"
                size="lg"
                className="uppercase tracking-[0.12em] text-[12px]"
              >
                <Link href="/quote">Get a Quote</Link>
              </Button>
              <Button
                asChild
                variant="light"
                size="lg"
                className="uppercase tracking-[0.12em] text-[12px]"
              >
                <a href={whatsappLink()} target="_blank" rel="noopener noreferrer">
                  WhatsApp Enquiry
                </a>
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
