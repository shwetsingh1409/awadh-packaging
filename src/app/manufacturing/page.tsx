import type { Metadata } from "next";
import Image from "next/image";
import { PageHero, SectionHeading } from "@/components/shared/section-heading";
import { FadeIn } from "@/components/shared/fade-in";
import { CtaBand } from "@/components/shared/cta-band";
import { ProcessTimeline } from "@/components/manufacturing/process-timeline";
import { siteImages } from "@/lib/gallery";

export const metadata: Metadata = {
  title: "Manufacturing Process",
  description:
    "Ten-stage corrugated packaging manufacturing process at Awadh Packaging — from raw material storage to dispatch.",
};

const processHighlights = [
  {
    src: siteImages.kraftRolls,
    title: "Raw Material Feeding",
    text: "Kraft paper rolls mounted and fed into the corrugation line.",
  },
  {
    src: siteImages.infrastructure,
    title: "Corrugation & Conversion",
    text: "Champion production line forming and processing corrugated board.",
  },
  {
    src: siteImages.printing,
    title: "Printing",
    text: "Custom brand printing for industrial and commercial cartons.",
  },
  {
    src: siteImages.stitching,
    title: "Stitching & Finishing",
    text: "ACME stitching stations assembling boxes for dispatch readiness.",
  },
];

export default function ManufacturingPage() {
  return (
    <>
      <PageHero
        title="Manufacturing Process"
        description="A controlled, ten-stage production flow from raw kraft storage to final dispatch — designed for consistency and structural performance."
        breadcrumbs={[
          { label: "Home", href: "/" },
          { label: "Manufacturing" },
        ]}
      />

      <section className="section-pad bg-grey-50">
        <div className="container-page">
          <FadeIn>
            <SectionHeading
              eyebrow="On the Floor"
              title="Process captured in production"
            />
          </FadeIn>
          <div className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {processHighlights.map((item, i) => (
              <FadeIn key={item.title} delay={i * 0.05}>
                <article className="overflow-hidden border border-grey-200 bg-white">
                  <div className="relative aspect-[4/3]">
                    <Image
                      src={item.src}
                      alt={item.title}
                      fill
                      sizes="(max-width: 768px) 100vw, 25vw"
                      className="object-cover"
                    />
                  </div>
                  <div className="p-4">
                    <h3 className="font-display text-xl text-navy">{item.title}</h3>
                    <p className="mt-2 text-sm text-grey-600 leading-relaxed">
                      {item.text}
                    </p>
                  </div>
                </article>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      <section className="section-pad">
        <div className="container-page">
          <FadeIn>
            <SectionHeading
              eyebrow="How We Work"
              title="From kraft paper to finished cartons"
              description="Each stage is sequenced to protect dimensional accuracy, flute integrity, and finish quality."
            />
          </FadeIn>
          <ProcessTimeline />
        </div>
      </section>

      <CtaBand title="Discuss your production requirements" />
    </>
  );
}
