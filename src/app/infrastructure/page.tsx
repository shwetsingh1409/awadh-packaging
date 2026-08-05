import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { PageHero, SectionHeading } from "@/components/shared/section-heading";
import { FadeIn } from "@/components/shared/fade-in";
import { CtaBand } from "@/components/shared/cta-band";
import { Button } from "@/components/ui/button";
import { company, formatAddress } from "@/lib/company";
import { siteImages } from "@/lib/gallery";

export const metadata: Metadata = {
  title: "Infrastructure",
  description:
    "Explore Awadh Packaging’s manufacturing infrastructure for premium corrugated boxes and paper-based packaging in Ayodhya.",
};

const facilityShots = [
  {
    src: siteImages.exteriorWide,
    title: "Factory Exterior",
    text: "Purpose-built corrugated manufacturing unit in Ayodhya.",
  },
  {
    src: siteImages.infrastructure,
    title: "Champion Corrugation Line",
    text: "Industrial corrugation and sheet processing machinery.",
  },
  {
    src: siteImages.stitching,
    title: "ACME Stitching Station",
    text: "Finishing and assembly for durable carton construction.",
  },
  {
    src: siteImages.kraftRolls,
    title: "Kraft Paper Handling",
    text: "Raw material roll stands feeding the production line.",
  },
  {
    src: siteImages.warehouse,
    title: "Finished Sheet Storage",
    text: "Organized warehouse staging for sheets and dispatch.",
  },
  {
    src: siteImages.printing,
    title: "Custom Print Capability",
    text: "Multi-color branding for industrial and commercial cartons.",
  },
];

const capabilities = [
  {
    title: "Corrugation Capability",
    text: "Champion corrugation lines for consistent flute formation across 3, 5, and 7 ply constructions.",
  },
  {
    title: "Cutting & Conversion",
    text: "Precision sheet cutting, creasing, and slotting for accurate carton geometry.",
  },
  {
    title: "Printing & Branding",
    text: "Multi-color printing infrastructure for logos, brand panels, and product identification.",
  },
  {
    title: "Finishing & Assembly",
    text: "ACME stitching systems suited to light shippers and heavy-duty industrial cartons.",
  },
  {
    title: "Raw Material Storage",
    text: "Organized kraft storage supporting virgin, recycled, and high-GSM paper grades.",
  },
  {
    title: "Dispatch Readiness",
    text: "Warehouse and packing flow designed for orderly staging and timely outbound logistics.",
  },
];

export default function InfrastructurePage() {
  return (
    <>
      <PageHero
        title="Infrastructure"
        description="A manufacturing facility equipped for premium corrugated packaging — from raw kraft handling to finished goods dispatch."
        breadcrumbs={[
          { label: "Home", href: "/" },
          { label: "Infrastructure" },
        ]}
      />

      <section className="section-pad">
        <div className="container-page grid gap-12 lg:grid-cols-[1fr_1.1fr]">
          <FadeIn>
            <SectionHeading
              eyebrow="Facility"
              title="Built for industrial packaging output"
              description="Our plant in Ayodhya supports end-to-end corrugated box and sheet manufacturing for B2B customers across multiple industries."
            />
            <dl className="mt-8 space-y-5">
              <div>
                <dt className="text-xs uppercase tracking-[0.14em] text-grey-400">
                  Address
                </dt>
                <dd className="mt-2 text-navy leading-relaxed">{formatAddress()}</dd>
              </div>
              <div>
                <dt className="text-xs uppercase tracking-[0.14em] text-grey-400">
                  Established
                </dt>
                <dd className="mt-2 font-display text-2xl text-navy">
                  {company.yearEstablished}
                </dd>
              </div>
              <div>
                <dt className="text-xs uppercase tracking-[0.14em] text-grey-400">
                  Focus
                </dt>
                <dd className="mt-2 text-navy">
                  Corrugated boxes, sheets & paper-based packaging solutions
                </dd>
              </div>
            </dl>
          </FadeIn>

          <FadeIn delay={0.1}>
            <div className="relative min-h-[360px] overflow-hidden">
              <Image
                src={siteImages.hero}
                alt="Awadh Packaging factory entrance"
                fill
                sizes="(max-width: 1024px) 100vw, 50vw"
                className="object-cover object-center"
              />
            </div>
          </FadeIn>
        </div>
      </section>

      <section className="section-pad bg-grey-50">
        <div className="container-page">
          <FadeIn>
            <SectionHeading
              eyebrow="Plant Gallery"
              title="Machinery and production infrastructure"
            />
          </FadeIn>
          <div className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {facilityShots.map((shot, i) => (
              <FadeIn key={shot.title} delay={i * 0.05}>
                <article className="overflow-hidden border border-grey-200 bg-white">
                  <div className="relative aspect-[4/3]">
                    <Image
                      src={shot.src}
                      alt={shot.title}
                      fill
                      sizes="(max-width: 768px) 100vw, 33vw"
                      className="object-cover"
                    />
                  </div>
                  <div className="p-5">
                    <h3 className="font-display text-xl text-navy">{shot.title}</h3>
                    <p className="mt-2 text-sm text-grey-600 leading-relaxed">
                      {shot.text}
                    </p>
                  </div>
                </article>
              </FadeIn>
            ))}
          </div>
          <div className="mt-8">
            <Button asChild variant="outline">
              <Link href="/gallery">Open Full Gallery</Link>
            </Button>
          </div>
        </div>
      </section>

      <section className="section-pad">
        <div className="container-page">
          <FadeIn>
            <SectionHeading eyebrow="Capabilities" title="What the plant supports" />
          </FadeIn>
          <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {capabilities.map((item) => (
              <article
                key={item.title}
                className="border border-grey-200 bg-grey-50 p-5"
              >
                <h3 className="font-display text-xl text-navy">{item.title}</h3>
                <p className="mt-2 text-sm text-grey-600 leading-relaxed">
                  {item.text}
                </p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <CtaBand />
    </>
  );
}
