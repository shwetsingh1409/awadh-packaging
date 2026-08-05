import type { Metadata } from "next";
import { PageHero, SectionHeading } from "@/components/shared/section-heading";
import { FadeIn } from "@/components/shared/fade-in";
import { CtaBand } from "@/components/shared/cta-band";
import { industries } from "@/lib/company";

export const metadata: Metadata = {
  title: "Industries We Serve",
  description:
    "Awadh Packaging supplies corrugated packaging to FMCG, pharma, electronics, automobile, e-commerce, logistics, and more.",
};

export default function IndustriesPage() {
  return (
    <>
      <PageHero
        title="Industries We Serve"
        description="Sector-ready corrugated packaging for brands and manufacturers that need consistent quality at commercial volumes."
        breadcrumbs={[
          { label: "Home", href: "/" },
          { label: "Industries" },
        ]}
      />

      <section className="section-pad">
        <div className="container-page">
          <FadeIn>
            <SectionHeading
              eyebrow="Sectors"
              title="Packaging that travels with your product"
              description="From food and pharma to automotive and e-commerce — constructions tailored to load, climate, and channel requirements."
            />
          </FadeIn>
          <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {industries.map((ind, i) => (
              <FadeIn key={ind.name} delay={i * 0.04}>
                <article className="h-full border border-grey-200 border-t-2 border-t-gold bg-white p-6 shadow-[0_1px_0_rgba(6,21,45,0.04)] transition hover:border-gold/40">
                  <h3 className="font-display text-2xl text-navy">{ind.name}</h3>
                  <p className="mt-3 text-sm text-grey-600 leading-relaxed">
                    {ind.description}
                  </p>
                </article>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      <CtaBand title="Serving your industry with the right carton spec" />
    </>
  );
}
