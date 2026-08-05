import type { Metadata } from "next";
import { PageHero, SectionHeading } from "@/components/shared/section-heading";
import { FadeIn } from "@/components/shared/fade-in";
import { CtaBand } from "@/components/shared/cta-band";
import { qualityPillars } from "@/lib/company";

export const metadata: Metadata = {
  title: "Quality Assurance",
  description:
    "Quality practices at Awadh Packaging — material integrity, dimensional accuracy, structural strength, and batch inspection.",
};

export default function QualityPage() {
  return (
    <>
      <PageHero
        title="Quality Assurance"
        description="Quality is engineered into every stage — from kraft selection to final inspection — so your products ship protected and on brand."
        breadcrumbs={[{ label: "Home", href: "/" }, { label: "Quality" }]}
      />

      <section className="section-pad">
        <div className="container-page">
          <FadeIn>
            <SectionHeading
              eyebrow="Standards"
              title="Inspection that protects performance"
              description="We align material grades, ply construction, and finishing checks with the real demands of stacking, humidity, and long-haul logistics."
            />
          </FadeIn>
          <div className="mt-12 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {qualityPillars.map((item, i) => (
              <FadeIn key={item.title} delay={i * 0.05}>
                <article className="h-full bg-grey-50 border border-grey-200 p-6">
                  <p className="text-gold-deep text-xs tracking-[0.2em]">
                    {String(i + 1).padStart(2, "0")}
                  </p>
                  <h3 className="mt-3 font-display text-2xl text-navy">
                    {item.title}
                  </h3>
                  <p className="mt-3 text-sm text-grey-600 leading-relaxed">
                    {item.description}
                  </p>
                </article>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      <section className="section-pad bg-navy text-white">
        <div className="container-page max-w-3xl">
          <FadeIn>
            <h2 className="font-display text-3xl md:text-4xl">
              Certifications
            </h2>
            <div className="gold-rule mt-4" />
            <p className="mt-5 text-white/70 leading-relaxed">
              Certification details (ISO, MSME, and others) will be published here
              once official documents are shared. Until then, our quality process
              remains focused on material integrity, dimensional control, and
              batch-level inspection.
            </p>
          </FadeIn>
        </div>
      </section>

      <CtaBand title="Request samples or a quality briefing" />
    </>
  );
}
