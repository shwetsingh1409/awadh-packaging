import type { Metadata } from "next";
import { PageHero, SectionHeading } from "@/components/shared/section-heading";
import { FadeIn } from "@/components/shared/fade-in";
import { CtaBand } from "@/components/shared/cta-band";
import { GalleryGridClient } from "@/components/gallery/gallery-grid-client";
import { galleryItems } from "@/lib/gallery";

export const metadata: Metadata = {
  title: "Gallery",
  description:
    "Factory, production, machinery, and finished goods gallery from Awadh Packaging.",
};

export default function GalleryPage() {
  return (
    <>
      <PageHero
        title="Gallery"
        description="Real views of our Ayodhya facility — exterior, production floor, corrugation lines, stitching stations, and finished corrugated sheets."
        breadcrumbs={[{ label: "Home", href: "/" }, { label: "Gallery" }]}
      />

      <section className="section-pad">
        <div className="container-page">
          <FadeIn>
            <SectionHeading
              eyebrow="Visual Tour"
              title="Manufacturing in focus"
              description="Browse factory exterior, interior production areas, machinery, and warehouse inventory. Click any image to open the lightbox."
            />
          </FadeIn>
          <div className="mt-12">
            <GalleryGridClient items={galleryItems} />
          </div>
        </div>
      </section>

      <CtaBand />
    </>
  );
}
