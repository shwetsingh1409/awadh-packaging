import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { PageHero } from "@/components/shared/section-heading";
import { FadeIn } from "@/components/shared/fade-in";
import { CtaBand } from "@/components/shared/cta-band";
import { Button } from "@/components/ui/button";
import { company, formatAddress } from "@/lib/company";
import { siteImages } from "@/lib/gallery";

export const metadata: Metadata = {
  title: "About Us",
  description:
    "Learn about Awadh Packaging — manufacturers of corrugated boxes and paper-based packaging solutions in Ayodhya, Uttar Pradesh.",
};

export default function AboutPage() {
  return (
    <>
      <PageHero
        title="About Awadh Packaging"
        description="An Indian manufacturing company specializing in high-quality corrugated boxes and paper-based packaging for industrial and commercial applications."
        breadcrumbs={[
          { label: "Home", href: "/" },
          { label: "About Us" },
        ]}
      />

      <section className="section-pad">
        <div className="container-page grid gap-12 lg:grid-cols-2">
          <FadeIn>
            <p className="text-xs uppercase tracking-[0.2em] text-gold-deep">Our Story</p>
            <h2 className="mt-3 font-display text-3xl md:text-4xl text-navy">
              Premium packaging rooted in reliability
            </h2>
            <div className="gold-rule mt-4" />
            <div className="mt-6 space-y-4 text-grey-600 leading-relaxed">
              <p>
                {company.name} manufactures corrugated packaging designed for the demands
                of modern supply chains — from FMCG and pharma to electronics, textiles,
                and industrial logistics.
              </p>
              <p>
                Established in {company.yearEstablished}, we operate from our facility in
                Ayodhya, Uttar Pradesh, with a clear focus on quality, customization,
                timely delivery, and long-term customer relationships.
              </p>
              <p>
                Every order is treated as an engineering brief: the right ply, the right
                kraft grade, the right print, and the right schedule.
              </p>
            </div>
          </FadeIn>

          <FadeIn delay={0.1} className="space-y-6">
            <div className="relative aspect-[4/3] overflow-hidden">
              <Image
                src={siteImages.about}
                alt="Interior of Awadh Packaging manufacturing facility"
                fill
                sizes="(max-width: 1024px) 100vw, 50vw"
                className="object-cover"
              />
            </div>
            <dl className="grid gap-6 sm:grid-cols-2">
              {[
                { label: "Registered Name", value: company.registeredName },
                { label: "Business Type", value: company.businessType },
                { label: "Year Established", value: String(company.yearEstablished) },
                { label: "GSTIN", value: company.gstin },
                { label: "Location", value: `${company.address.city}, ${company.address.state}` },
                { label: "Activity", value: "Corrugated & Paper Packaging" },
              ].map((item) => (
                <div key={item.label} className="border-t border-grey-200 pt-4">
                  <dt className="text-xs uppercase tracking-[0.14em] text-grey-400">
                    {item.label}
                  </dt>
                  <dd className="mt-2 font-display text-xl text-navy">{item.value}</dd>
                </div>
              ))}
            </dl>
          </FadeIn>
        </div>
      </section>

      <section className="section-pad bg-grey-50">
        <div className="container-page">
          <FadeIn>
            <h2 className="font-display text-3xl md:text-4xl text-navy">What we stand for</h2>
            <div className="gold-rule mt-4" />
          </FadeIn>
          <div className="mt-10 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {[
              {
                title: "Trust",
                text: "Transparent communication and commitments we intend to keep.",
              },
              {
                title: "Quality",
                text: "Material selection and process control that protect your products.",
              },
              {
                title: "Engineering Excellence",
                text: "Ply, flute, and finish choices matched to real-world transit loads.",
              },
              {
                title: "Premium Manufacturing",
                text: "Clean production discipline from corrugation through dispatch.",
              },
              {
                title: "Modern Infrastructure",
                text: "A facility built for industrial-scale corrugated packaging.",
              },
              {
                title: "Corporate Reliability",
                text: "B2B partnerships designed for repeat supply and growth.",
              },
            ].map((item, i) => (
              <FadeIn key={item.title} delay={i * 0.05}>
                <article className="bg-white border border-grey-200 p-6 h-full">
                  <h3 className="font-display text-2xl text-navy">{item.title}</h3>
                  <p className="mt-3 text-sm text-grey-600 leading-relaxed">{item.text}</p>
                </article>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      <section className="section-pad">
        <div className="container-page max-w-3xl">
          <FadeIn>
            <h2 className="font-display text-3xl text-navy">Facility address</h2>
            <p className="mt-4 text-grey-600 leading-relaxed">{formatAddress()}</p>
            <div className="mt-6 flex flex-wrap gap-3">
              <Button asChild variant="gold">
                <Link href="/contact">Contact Us</Link>
              </Button>
              <Button asChild variant="outline">
                <Link href="/infrastructure">View Infrastructure</Link>
              </Button>
            </div>
          </FadeIn>
        </div>
      </section>

      <CtaBand />
    </>
  );
}
