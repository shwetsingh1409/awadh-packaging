import type { Metadata } from "next";
import { PageHero, SectionHeading } from "@/components/shared/section-heading";
import { FadeIn } from "@/components/shared/fade-in";
import { CtaBand } from "@/components/shared/cta-band";
import { QuoteForm } from "@/components/forms/quote-form";
import { company, whatsappLink } from "@/lib/company";

export const metadata: Metadata = {
  title: "Request a Quote",
  description:
    "Request a quotation for corrugated boxes, sheets, and custom paper packaging from Awadh Packaging.",
};

type QuotePageProps = {
  searchParams: Promise<{ product?: string }>;
};

export default async function QuotePage({ searchParams }: QuotePageProps) {
  const params = await searchParams;
  const defaultProduct = params.product
    ? decodeURIComponent(params.product)
    : undefined;

  return (
    <>
      <PageHero
        title="Request a Quote"
        description="Share your product, dimensions, quantity, and delivery needs. Our team will prepare a tailored quotation."
        breadcrumbs={[
          { label: "Home", href: "/" },
          { label: "Request a Quote" },
        ]}
      />

      <section className="section-pad">
        <div className="container-page grid gap-12 lg:grid-cols-[0.85fr_1.15fr]">
          <FadeIn>
            <SectionHeading
              eyebrow="Enquiry"
              title="Tell us what you need packed"
              description="The more detail you provide — ply, print, load, and monthly volume — the faster we can recommend the right construction."
            />
            <ul className="mt-8 space-y-3 text-sm text-grey-600">
              <li>• Typical response during office hours</li>
              <li>• Email: {company.email}</li>
              <li>• Call: {company.phones[0]}</li>
              <li>
                •{" "}
                <a
                  href={whatsappLink(
                    "Hello Awadh Packaging, I would like a quotation for corrugated packaging."
                  )}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gold-deep hover:underline"
                >
                  Continue on WhatsApp
                </a>
              </li>
            </ul>
          </FadeIn>

          <FadeIn delay={0.1}>
            <div className="border border-grey-200 bg-white p-6 md:p-8">
              <QuoteForm defaultProduct={defaultProduct} />
            </div>
          </FadeIn>
        </div>
      </section>

      <CtaBand
        title="Prefer a quick conversation?"
        description="Call or WhatsApp our team with your ply, quantity, and delivery timeline — we will guide you to the right specification."
      />
    </>
  );
}
