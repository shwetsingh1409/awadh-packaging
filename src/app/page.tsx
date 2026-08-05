"use client";

import Image from "next/image";
import Link from "next/link";
import { useEffect, useRef } from "react";
import gsap from "gsap";
import { useReducedMotion } from "framer-motion";
import {
  ArrowRight,
  BadgeCheck,
  Boxes,
  Clock3,
  Cog,
  Factory,
  Handshake,
  PackageCheck,
  Phone,
  ShieldCheck,
  Sparkles,
  Timer,
  Users,
} from "lucide-react";
import { FaWhatsapp } from "react-icons/fa";
import { Button } from "@/components/ui/button";
import { AnimatedCounter } from "@/components/shared/animated-counter";
import { FadeIn } from "@/components/shared/fade-in";
import { SectionHeading } from "@/components/shared/section-heading";
import { CtaBand } from "@/components/shared/cta-band";
import { company, processSteps, telLink, whatsappLink } from "@/lib/company";
import { products } from "@/lib/products";
import { siteImages } from "@/lib/gallery";
import { IndustriesSwiper } from "@/components/home/industries-swiper";

const productVisuals: Record<string, string> = {
  "3-ply-corrugated-boxes": siteImages.warehouse,
  "5-ply-corrugated-boxes": siteImages.printing,
  "7-ply-corrugated-boxes": "/images/gallery/14-corrugated-stacks-floor.jpg",
  "printed-corrugated-boxes": siteImages.printing,
  "heavy-duty-corrugated-boxes": siteImages.stitching,
  "die-cut-boxes": "/images/gallery/08-finished-sheets-bundled.jpg",
};

const whyChoose = [
  { icon: Cog, title: "Advanced Machinery" },
  { icon: PackageCheck, title: "Premium Kraft Grades" },
  { icon: BadgeCheck, title: "Quality Inspection" },
  { icon: Timer, title: "On-Time Dispatch" },
  { icon: Boxes, title: "Custom Dimensions" },
  { icon: Sparkles, title: "Brand Printing" },
  { icon: Handshake, title: "B2B Partnerships" },
  { icon: Users, title: "Skilled Workforce" },
];

const galleryPreview = [
  { src: siteImages.exteriorWide, label: "Factory Exterior" },
  { src: siteImages.infrastructure, label: "Corrugation Line" },
  { src: siteImages.stitching, label: "Stitching Station" },
  { src: siteImages.warehouse, label: "Finished Sheets" },
  { src: siteImages.kraftRolls, label: "Raw Material" },
  { src: siteImages.manufacturing, label: "Production Floor" },
];

export default function HomePage() {
  const heroRef = useRef<HTMLElement>(null);
  const reduce = useReducedMotion();

  useEffect(() => {
    if (reduce || !heroRef.current) return;
    const ctx = gsap.context(() => {
      gsap.from("[data-hero-anim]", {
        y: 28,
        opacity: 0,
        duration: 0.85,
        stagger: 0.1,
        ease: "power3.out",
        delay: 0.08,
      });
    }, heroRef);
    return () => ctx.revert();
  }, [reduce]);

  const featured = products.filter((p) =>
    [
      "3-ply-corrugated-boxes",
      "5-ply-corrugated-boxes",
      "7-ply-corrugated-boxes",
      "printed-corrugated-boxes",
      "heavy-duty-corrugated-boxes",
      "die-cut-boxes",
    ].includes(p.slug)
  );

  return (
    <>
      {/* HERO */}
      <section
        ref={heroRef}
        className="relative min-h-[90vh] overflow-hidden text-white"
      >
        <Image
          src={siteImages.hero}
          alt="Awadh Packaging manufacturing facility exterior in Ayodhya"
          fill
          priority
          sizes="100vw"
          className="object-cover object-[center_32%] scale-[1.02]"
        />
        <div
          className="absolute inset-0 bg-[linear-gradient(100deg,rgba(6,21,45,0.94)_0%,rgba(6,21,45,0.82)_48%,rgba(6,21,45,0.5)_100%)]"
          aria-hidden
        />

        <div className="container-page relative flex min-h-[85vh] sm:min-h-[90vh] flex-col justify-center py-16 sm:py-24">
          <p
            data-hero-anim
            className="text-[10px] sm:text-[11px] uppercase tracking-[0.22em] sm:tracking-[0.28em] text-gold"
          >
            Awadh Packaging · Ayodhya
          </p>
          <h1
            data-hero-anim
            className="mt-4 sm:mt-5 max-w-4xl font-display text-[2rem] leading-[1.1] sm:text-5xl md:text-6xl lg:text-[4.25rem] lg:leading-[1.05] text-white"
          >
            Manufacturers of{" "}
            <span className="text-gold">Corrugated Boxes</span> & Packaging
            Solutions
          </h1>
          <p
            data-hero-anim
            className="mt-4 sm:mt-6 max-w-xl text-sm sm:text-base md:text-lg text-white/75 leading-relaxed"
          >
            {company.tagline} Engineered for industrial strength, brand
            presentation, and reliable B2B supply.
          </p>

          <div
            data-hero-anim
            className="mt-6 sm:mt-8 flex flex-col sm:flex-row sm:flex-wrap gap-3 sm:gap-x-6 sm:gap-y-3 text-sm text-white/85"
          >
            {[
              { icon: ShieldCheck, label: "Premium Quality" },
              { icon: Clock3, label: "On-Time Delivery" },
              { icon: BadgeCheck, label: "Customer Trust" },
            ].map((item) => (
              <span key={item.label} className="inline-flex items-center gap-2">
                <item.icon className="h-4 w-4 text-gold shrink-0" aria-hidden />
                {item.label}
              </span>
            ))}
          </div>

          <div data-hero-anim className="mt-8 sm:mt-10 flex flex-col sm:flex-row flex-wrap gap-3 w-full sm:w-auto">
            <Button asChild variant="gold" size="lg" className="w-full sm:w-auto uppercase tracking-[0.12em] text-[12px]">
              <Link href="/quote">Get a Quote</Link>
            </Button>
            <Button asChild variant="light" size="lg" className="w-full sm:w-auto uppercase tracking-[0.12em] text-[12px]">
              <a href={telLink(company.phones[0])}>
                <Phone className="h-4 w-4" /> Call Now
              </a>
            </Button>
            <Button asChild variant="whatsapp" size="lg" className="w-full sm:w-auto uppercase tracking-[0.12em] text-[12px]">
              <a href={whatsappLink()} target="_blank" rel="noopener noreferrer">
                <FaWhatsapp className="h-4 w-4" /> WhatsApp
              </a>
            </Button>
          </div>
        </div>
      </section>

      {/* STATS */}
      <section className="bg-navy border-y border-white/10">
        <div className="container-page grid gap-10 py-14 sm:grid-cols-2 lg:grid-cols-4">
          <AnimatedCounter value={company.yearEstablished} label="Established" />
          <AnimatedCounter value={10} suffix="+" label="Process Stages" />
          <AnimatedCounter value={11} suffix="+" label="Industries Served" />
          <AnimatedCounter value={100} suffix="%" label="Quality Focus" />
        </div>
      </section>

      {/* ABOUT */}
      <section className="section-pad">
        <div className="container-page grid gap-12 lg:grid-cols-2 items-center">
          <FadeIn className="relative aspect-[4/5] overflow-hidden md:aspect-[5/6]">
            <Image
              src={siteImages.exteriorWide}
              alt="Awadh Packaging factory exterior"
              fill
              sizes="(max-width: 1024px) 100vw, 50vw"
              className="object-cover"
            />
            <div className="absolute bottom-0 left-0 right-0 label-bar">
              Manufacturing Facility · Ayodhya
            </div>
          </FadeIn>

          <FadeIn delay={0.1}>
            <p className="text-[11px] uppercase tracking-[0.22em] text-gold-deep">
              About Us
            </p>
            <h2 className="mt-3 font-display text-3xl md:text-5xl text-navy leading-tight">
              Delivering Strength, Quality & Trust
            </h2>
            <div className="gold-rule mt-5" />
            <p className="mt-5 text-grey-600 leading-relaxed">
              Awadh Packaging manufactures corrugated boxes and paper-based
              packaging for industrial and commercial applications — with a clear
              focus on quality, customization, and long-term partnerships.
            </p>
            <div className="mt-8 grid grid-cols-2 gap-5">
              {[
                { icon: Factory, title: "Modern Machinery" },
                { icon: Users, title: "Skilled Workforce" },
                { icon: PackageCheck, title: "Quality Materials" },
                { icon: Timer, title: "Timely Delivery" },
              ].map((item) => (
                <div key={item.title} className="flex items-start gap-3">
                  <span className="icon-chip">
                    <item.icon className="h-4 w-4" />
                  </span>
                  <p className="pt-2 text-sm font-medium text-navy">{item.title}</p>
                </div>
              ))}
            </div>
            <div className="mt-9">
              <Button asChild variant="outline" className="uppercase tracking-[0.12em] text-[11px]">
                <Link href="/about">
                  Know More <ArrowRight className="h-3.5 w-3.5" />
                </Link>
              </Button>
            </div>
          </FadeIn>
        </div>
      </section>

      {/* PRODUCTS */}
      <section className="section-pad bg-grey-50">
        <div className="container-page">
          <FadeIn>
            <SectionHeading
              align="center"
              eyebrow="Our Products"
              title="Corrugated packaging built for performance"
              description="From 3 ply shippers to heavy-duty industrial cartons — customized ply, size, and branding."
            />
          </FadeIn>
          <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {featured.map((product, i) => (
              <FadeIn key={product.slug} delay={i * 0.05}>
                <Link
                  href={`/quote?product=${encodeURIComponent(product.name)}`}
                  className="group block overflow-hidden bg-white shadow-[0_1px_0_rgba(6,21,45,0.06)] transition hover:-translate-y-0.5 hover:shadow-[0_18px_40px_rgba(6,21,45,0.1)]"
                >
                  <div className="relative aspect-[4/3] overflow-hidden">
                    <Image
                      src={productVisuals[product.slug] || siteImages.warehouse}
                      alt={product.name}
                      fill
                      sizes="(max-width: 768px) 100vw, 33vw"
                      className="object-cover transition duration-700 group-hover:scale-105"
                    />
                  </div>
                  <div className="label-bar flex items-center justify-between gap-3">
                    <span>{product.name}</span>
                    <ArrowRight className="h-3.5 w-3.5 text-gold shrink-0" />
                  </div>
                </Link>
              </FadeIn>
            ))}
          </div>
          <div className="mt-10 text-center">
            <Button asChild variant="gold" className="uppercase tracking-[0.12em] text-[11px]">
              <Link href="/products">View All Products</Link>
            </Button>
          </div>
        </div>
      </section>

      {/* PROCESS */}
      <section className="section-pad bg-navy text-white overflow-hidden">
        <div className="container-page">
          <FadeIn>
            <SectionHeading
              light
              align="center"
              eyebrow="Manufacturing Process"
              title="From kraft paper to dispatch"
              description="A disciplined production flow designed for structural integrity and finish quality."
            />
          </FadeIn>
          <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {processSteps.slice(0, 8).map((step, i) => (
              <FadeIn key={step.step} delay={i * 0.04}>
                <div className="relative h-full border border-white/10 bg-white/[0.03] p-5">
                  <div className="flex h-11 w-11 items-center justify-center rounded-full border border-gold/60 text-gold text-sm font-semibold">
                    {step.step}
                  </div>
                  <h3 className="mt-4 font-display text-xl text-white">
                    {step.title}
                  </h3>
                  <p className="mt-2 text-sm text-white/60 leading-relaxed">
                    {step.description}
                  </p>
                </div>
              </FadeIn>
            ))}
          </div>
          <div className="mt-10 text-center">
            <Button asChild variant="gold" className="uppercase tracking-[0.12em] text-[11px]">
              <Link href="/manufacturing">Full Process</Link>
            </Button>
          </div>
        </div>
      </section>

      {/* WHY CHOOSE */}
      <section className="section-pad">
        <div className="container-page">
          <FadeIn>
            <SectionHeading
              align="center"
              eyebrow="Why Choose Us"
              title="Why choose Awadh Packaging?"
              description="A manufacturing partner focused on strength, precision, and dependable commercial supply."
            />
          </FadeIn>
          <div className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {whyChoose.map((item, i) => (
              <FadeIn key={item.title} delay={i * 0.04}>
                <div className="flex items-center gap-4 border border-grey-200 bg-white px-5 py-5 transition hover:border-gold/50">
                  <span className="icon-chip shrink-0">
                    <item.icon className="h-4 w-4" />
                  </span>
                  <h3 className="text-sm font-semibold text-navy tracking-wide">
                    {item.title}
                  </h3>
                </div>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      {/* INDUSTRIES */}
      <section className="section-pad bg-navy text-white">
        <div className="container-page">
          <FadeIn>
            <SectionHeading
              light
              eyebrow="Industries We Serve"
              title="Packaging partnerships across sectors"
            />
          </FadeIn>
          <div className="mt-12">
            <FadeIn>
              <IndustriesSwiper />
            </FadeIn>
          </div>
          <div className="mt-10">
            <Button asChild variant="gold" className="uppercase tracking-[0.12em] text-[11px]">
              <Link href="/industries">View All Industries</Link>
            </Button>
          </div>
        </div>
      </section>

      {/* GALLERY */}
      <section className="section-pad bg-grey-50">
        <div className="container-page">
          <FadeIn>
            <SectionHeading
              align="center"
              eyebrow="Infrastructure & Gallery"
              title="Inside the Ayodhya facility"
              description="Real views of our plant, machinery, production areas, and finished corrugated inventory."
            />
          </FadeIn>
          <div className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {galleryPreview.map((item, i) => (
              <FadeIn key={item.src} delay={i * 0.05}>
                <Link
                  href="/gallery"
                  className="group block overflow-hidden bg-white"
                >
                  <div className="relative aspect-[4/3] overflow-hidden">
                    <Image
                      src={item.src}
                      alt={item.label}
                      fill
                      sizes="(max-width: 768px) 100vw, 33vw"
                      className="object-cover transition duration-700 group-hover:scale-105"
                    />
                  </div>
                  <div className="label-bar">{item.label}</div>
                </Link>
              </FadeIn>
            ))}
          </div>
          <div className="mt-10 text-center">
            <Button asChild variant="gold" className="uppercase tracking-[0.12em] text-[11px]">
              <Link href="/gallery">View More Photos</Link>
            </Button>
          </div>
        </div>
      </section>

      <CtaBand />
    </>
  );
}
