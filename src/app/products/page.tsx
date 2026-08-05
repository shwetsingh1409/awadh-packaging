import type { Metadata } from "next";
import Link from "next/link";
import { PageHero, SectionHeading } from "@/components/shared/section-heading";
import { FadeIn } from "@/components/shared/fade-in";
import { CtaBand } from "@/components/shared/cta-band";
import { Button } from "@/components/ui/button";
import { customization, materials } from "@/lib/company";
import { productCategories, products } from "@/lib/products";

export const metadata: Metadata = {
  title: "Products",
  description:
    "Corrugated boxes, sheets, and paper-based packaging solutions from Awadh Packaging — 3 ply, 5 ply, 7 ply, die-cut, and custom printed cartons.",
};

export default function ProductsPage() {
  return (
    <>
      <PageHero
        title="Products"
        description="Corrugated boxes, sheets, and customized paper packaging engineered for strength, branding, and reliable transit performance."
        breadcrumbs={[{ label: "Home", href: "/" }, { label: "Products" }]}
      />

      <section className="section-pad">
        <div className="container-page">
          {productCategories.map((cat) => {
            const items = products.filter((p) => p.category === cat.id);
            return (
              <div key={cat.id} className="mb-16 last:mb-0">
                <FadeIn>
                  <SectionHeading eyebrow="Range" title={cat.label} />
                </FadeIn>
                <div className="mt-10 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
                  {items.map((product, i) => (
                    <FadeIn key={product.slug} delay={i * 0.05}>
                      <article className="h-full border border-grey-200 bg-white p-6 flex flex-col">
                        <h3 className="font-display text-2xl text-navy">
                          {product.name}
                        </h3>
                        <p className="mt-3 text-sm text-grey-600 leading-relaxed flex-1">
                          {product.description}
                        </p>
                        <div className="mt-5">
                          <p className="text-xs uppercase tracking-[0.14em] text-gold-deep">
                            Specs
                          </p>
                          <ul className="mt-2 space-y-1 text-sm text-grey-600">
                            {product.specs.map((s) => (
                              <li key={s}>• {s}</li>
                            ))}
                          </ul>
                        </div>
                        <div className="mt-4">
                          <p className="text-xs uppercase tracking-[0.14em] text-gold-deep">
                            Applications
                          </p>
                          <p className="mt-2 text-sm text-grey-600">
                            {product.applications.join(" · ")}
                          </p>
                        </div>
                        <div className="mt-6">
                          <Button asChild variant="outline" size="sm">
                            <Link href={`/quote?product=${encodeURIComponent(product.name)}`}>
                              Enquire
                            </Link>
                          </Button>
                        </div>
                      </article>
                    </FadeIn>
                  ))}
                </div>
              </div>
            );
          })}
        </div>
      </section>

      <section className="section-pad bg-grey-50">
        <div className="container-page grid gap-12 lg:grid-cols-2">
          <FadeIn>
            <SectionHeading
              eyebrow="Materials"
              title="Kraft grades matched to the job"
              description="We work with virgin, recycled, and high-GSM kraft paper to balance strength, cost, and sustainability goals."
            />
            <ul className="mt-8 space-y-3">
              {materials.map((m) => (
                <li
                  key={m}
                  className="border-l-2 border-gold pl-4 py-2 text-navy font-medium"
                >
                  {m}
                </li>
              ))}
            </ul>
          </FadeIn>
          <FadeIn delay={0.1}>
            <SectionHeading
              eyebrow="Customization"
              title="Built around your brand and line"
            />
            <ul className="mt-8 grid gap-3 sm:grid-cols-2">
              {customization.map((c) => (
                <li
                  key={c}
                  className="bg-white border border-grey-200 px-4 py-4 text-sm text-navy"
                >
                  {c}
                </li>
              ))}
            </ul>
          </FadeIn>
        </div>
      </section>

      <CtaBand
        title="Need a custom ply, size, or print specification?"
        description="Tell us your product weight, transit conditions, and branding needs — we will recommend the right construction."
      />
    </>
  );
}
