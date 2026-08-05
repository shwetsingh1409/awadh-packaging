"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Menu, Phone, X } from "lucide-react";

import { Logo } from "@/components/layout/logo";
import { Button } from "@/components/ui/button";
import { company, navLinks, telLink } from "@/lib/company";
import { cn } from "@/lib/utils";

export function Header() {
  const pathname = usePathname();

  const [mobileOpen, setMobileOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 30);
    };

    handleScroll();

    window.addEventListener("scroll", handleScroll, {
      passive: true,
    });

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = mobileOpen ? "hidden" : "";

    return () => {
      document.body.style.overflow = "";
    };
  }, [mobileOpen]);

  return (
    <>
      <header
        className={cn(
          "fixed inset-x-0 top-0 z-50 border-b transition-all duration-300",
          scrolled
            ? "bg-[#06152d]/95 backdrop-blur-xl border-white/10 shadow-xl"
            : "bg-[#06152d] border-transparent"
        )}
      >
        <div className="container-page">
          <div className="flex h-20 items-center justify-between">

            {/* Logo */}
            <div className="shrink-0">
              <Logo size="md" />
            </div>

            {/* Desktop Navigation */}
            <nav
              className="hidden lg:flex flex-1 items-center justify-center"
              aria-label="Primary Navigation"
            >
              <ul className="flex items-center gap-8">
                {navLinks.map((link: { href: string; label: string }) => {
                  const active =
                    link.href === "/"
                      ? pathname === "/"
                      : pathname.startsWith(link.href);

                  return (
                    <li key={link.href}>
                      <Link
                        href={link.href}
                        className={cn(
                          "group relative inline-flex items-center py-2 text-sm font-semibold uppercase tracking-wider transition-colors duration-300",
                          active
                            ? "text-gold"
                            : "text-white hover:text-gold"
                        )}
                      >
                        {link.label}

                        <span
                          className={cn(
                            "absolute left-0 -bottom-1 h-0.5 bg-gold transition-all duration-300",
                                active
                                  ? "w-full"
                                    : "w-0 group-hover:w-full"
                        )}
                        />
                      </Link>
                    </li>
                  );
                })}
              </ul>
            </nav>

            {/* RIGHT */}
                                  {/* RIGHT */}

            <div className="hidden lg:flex items-center gap-5 shrink-0">
              <a
                href={telLink(company.phones[0])}
                aria-label={`Call ${company.phones[0]}`}
                className="flex items-center gap-2 text-sm text-white/80 transition-colors duration-300 hover:text-gold"
              >
                <Phone
                  size={18}
                  className="text-gold"
                />

                <span className="hidden xl:inline">
                  {company.phones[0]}
                </span>
              </a>

              <Button
                asChild
                variant="gold"
                className="h-11 rounded-md px-7 text-[12px] font-semibold uppercase tracking-[0.14em]"
              >
                <Link href="/quote">
                  Get Quote
                </Link>
              </Button>
            </div>

            {/* MOBILE MENU BUTTON */}

            <button
              type="button"
              onClick={() => setMobileOpen((prev) => !prev)}
              className="lg:hidden rounded-md p-2 text-white transition hover:bg-white/10"
              aria-label={mobileOpen ? "Close menu" : "Open menu"}
              aria-expanded={mobileOpen}
            >
              {mobileOpen ? (
                <X size={28} />
              ) : (
                <Menu size={28} />
              )}
            </button>

          </div>
        </div>
      </header>

      {/* MOBILE MENU */}

      <div
        className={cn(
          "fixed inset-x-0 top-20 bottom-0 z-40 bg-[#06152d] transition-transform duration-300 lg:hidden",
          mobileOpen ? "translate-x-0" : "translate-x-full"
        )}
      >
        <div className="container-page py-8">
          <nav
            className="flex flex-col"
            aria-label="Mobile Navigation"
          >
            <Link
              href="/"
              onClick={() => setMobileOpen(false)}
              className="border-b border-white/10 py-4 text-sm font-medium uppercase tracking-[0.12em] text-white transition-colors hover:text-gold"
            >
              Home
            </Link>

            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                onClick={() => setMobileOpen(false)}
                className="border-b border-white/10 py-4 text-sm font-medium uppercase tracking-[0.12em] text-white transition-colors hover:text-gold"
              >
                {link.label}
              </Link>
            ))}

            <Button
              asChild
              variant="gold"
              className="mt-8 h-11"
            >
              <Link
                href="/quote"
                onClick={() => setMobileOpen(false)}
              >
                Get Quote
              </Link>
            </Button>
          </nav>
        </div>
      </div>

      {/* Header Spacer */}

      <div className="h-20" />
    </>
  );
}