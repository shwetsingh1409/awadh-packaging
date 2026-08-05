import type { Metadata } from "next";
import Link from "next/link";
import { Mail, MapPin, Phone, Clock } from "lucide-react";
import { PageHero, SectionHeading } from "@/components/shared/section-heading";
import { FadeIn } from "@/components/shared/fade-in";
import { ContactForm } from "@/components/forms/contact-form";
import {
  company,
  formatAddress,
  telLink,
  whatsappLink,
} from "@/lib/company";

export const metadata: Metadata = {
  title: "Contact Us",
  description:
    "Contact Awadh Packaging in Ayodhya for corrugated box enquiries, quotations, and manufacturing partnerships.",
};

export default function ContactPage() {
  return (
    <>
      <PageHero
        title="Contact Us"
        description="Speak with our team about specifications, volumes, and delivery requirements. We respond during business hours."
        breadcrumbs={[{ label: "Home", href: "/" }, { label: "Contact" }]}
      />

      <section className="section-pad">
        <div className="container-page grid gap-12 lg:grid-cols-[0.9fr_1.1fr]">
          <FadeIn>
            <SectionHeading
              eyebrow="Get in Touch"
              title="Factory & commercial enquiries"
            />
            <ul className="mt-8 space-y-6">
              <li className="flex gap-4">
                <MapPin className="mt-1 h-5 w-5 shrink-0 text-gold-deep" />
                <div>
                  <p className="text-xs uppercase tracking-[0.14em] text-grey-400">
                    Address
                  </p>
                  <p className="mt-1 text-navy leading-relaxed">{formatAddress()}</p>
                  <a
                    href={company.mapsUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="mt-2 inline-block text-sm text-gold-deep hover:underline"
                  >
                    Open in Google Maps
                  </a>
                </div>
              </li>
              <li className="flex gap-4">
                <Phone className="mt-1 h-5 w-5 shrink-0 text-gold-deep" />
                <div>
                  <p className="text-xs uppercase tracking-[0.14em] text-grey-400">
                    Phone
                  </p>
                  <div className="mt-1 flex flex-col gap-1">
                    {company.phones.map((phone) => (
                      <a
                        key={phone}
                        href={telLink(phone)}
                        className="text-navy hover:text-gold-deep"
                      >
                        {phone}
                      </a>
                    ))}
                  </div>
                  <a
                    href={whatsappLink()}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="mt-2 inline-block text-sm text-gold-deep hover:underline"
                  >
                    WhatsApp: {company.whatsappDisplay}
                  </a>
                </div>
              </li>
              <li className="flex gap-4">
                <Mail className="mt-1 h-5 w-5 shrink-0 text-gold-deep" />
                <div>
                  <p className="text-xs uppercase tracking-[0.14em] text-grey-400">
                    Email
                  </p>
                  <a
                    href={`mailto:${company.email}`}
                    className="mt-1 text-navy hover:text-gold-deep"
                  >
                    {company.email}
                  </a>
                </div>
              </li>
              <li className="flex gap-4">
                <Clock className="mt-1 h-5 w-5 shrink-0 text-gold-deep" />
                <div>
                  <p className="text-xs uppercase tracking-[0.14em] text-grey-400">
                    Office Hours
                  </p>
                  <p className="mt-1 text-navy">{company.officeHours}</p>
                </div>
              </li>
            </ul>
          </FadeIn>

          <FadeIn delay={0.1}>
            <div className="border border-grey-200 bg-white p-6 md:p-8">
              <h2 className="font-display text-2xl text-navy">Send a message</h2>
              <p className="mt-2 text-sm text-grey-600">
                Prefer a quotation? Use the{" "}
                <Link href="/quote" className="text-gold-deep hover:underline">
                  Request a Quote
                </Link>{" "}
                form for product-specific details.
              </p>
              <div className="mt-6">
                <ContactForm />
              </div>
            </div>
          </FadeIn>
        </div>
      </section>

      <section className="section-pad bg-grey-50 pt-0">
        <div className="container-page">
          <FadeIn>
            <h2 className="font-display text-2xl text-navy mb-6">Find us on the map</h2>
          </FadeIn>
          <div className="overflow-hidden border border-grey-200 bg-white shadow-[0_12px_40px_rgba(6,21,45,0.06)]">
            <iframe
              title="Awadh Packaging location on Google Maps"
              src={company.mapsEmbed}
              className="h-[400px] w-full"
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              allowFullScreen
            />
          </div>
        </div>
      </section>
    </>
  );
}
