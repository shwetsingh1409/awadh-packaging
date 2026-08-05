import Link from "next/link";
import { cn } from "@/lib/utils";

type SectionHeadingProps = {
  eyebrow?: string;
  title: string;
  description?: string;
  align?: "left" | "center";
  light?: boolean;
  className?: string;
};

export function SectionHeading({
  eyebrow,
  title,
  description,
  align = "left",
  light = false,
  className,
}: SectionHeadingProps) {
  return (
    <div
      className={cn(
        "max-w-2xl",
        align === "center" && "mx-auto text-center",
        className
      )}
    >
      {eyebrow ? (
        <p
          className={cn(
            "mb-3 text-xs font-medium uppercase tracking-[0.2em]",
            light ? "text-gold" : "text-gold-deep"
          )}
        >
          {eyebrow}
        </p>
      ) : null}
      <h2
        className={cn(
          "font-display text-3xl md:text-4xl lg:text-5xl leading-tight",
          light ? "text-white" : "text-navy"
        )}
      >
        {title}
      </h2>
      <div
        className={cn(
          "gold-rule mt-4",
          align === "center" && "mx-auto"
        )}
      />
      {description ? (
        <p
          className={cn(
            "mt-5 text-base md:text-lg leading-relaxed",
            light ? "text-white/75" : "text-grey-600"
          )}
        >
          {description}
        </p>
      ) : null}
    </div>
  );
}

type PageHeroProps = {
  title: string;
  description: string;
  breadcrumbs?: { label: string; href?: string }[];
};

export function PageHero({ title, description, breadcrumbs }: PageHeroProps) {
  return (
    <section className="relative overflow-hidden bg-navy text-white border-b border-white/10">
      <div className="absolute inset-0 hero-mesh opacity-90" aria-hidden />
      <div className="absolute inset-0 texture-corrugated opacity-25" aria-hidden />
      <div className="container-page relative py-16 md:py-24 lg:py-28">
        {breadcrumbs ? (
          <nav aria-label="Breadcrumb" className="mb-6 text-sm text-white/55">
            <ol className="flex flex-wrap items-center gap-2">
              {breadcrumbs.map((item, i) => (
                <li key={item.label} className="flex items-center gap-2">
                  {i > 0 ? <span aria-hidden>/</span> : null}
                  {item.href ? (
                    <Link href={item.href} className="hover:text-gold transition-colors">
                      {item.label}
                    </Link>
                  ) : (
                    <span className="text-white/90">{item.label}</span>
                  )}
                </li>
              ))}
            </ol>
          </nav>
        ) : null}
        <p className="text-[11px] uppercase tracking-[0.22em] text-gold mb-3">
          Awadh Packaging
        </p>
        <h1 className="font-display text-4xl md:text-5xl lg:text-6xl max-w-3xl">
          {title}
        </h1>
        <div className="gold-rule mt-5" />
        <p className="mt-5 max-w-2xl text-base md:text-lg text-white/70 leading-relaxed">
          {description}
        </p>
      </div>
    </section>
  );
}
