import Link from "next/link";
import { Mail, MapPin, Phone } from "lucide-react";

import { Logo } from "@/components/layout/logo";
import { ContactForm } from "@/components/forms/contact-form";
import {
  company,
  formatAddress,
  navLinks,
  telLink,
} from "@/lib/company";

export function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="bg-navy text-white">
      <div className="container-page section-pad grid gap-10 sm:gap-12 lg:grid-cols-2 xl:grid-cols-[1.1fr_0.85fr_0.85fr_1.15fr]">

        {/* Company Info */}

        <div className="xl:col-span-1 flex flex-col items-center lg:items-start">

          <Logo
            size="lg"
            className="scale-125 origin-center"
          />

          <p className="mt-8 max-w-sm text-center lg:text-left text-sm leading-relaxed text-white/65">
            Manufacturers of corrugated boxes and paper-based packaging
            solutions — built on quality, reliability, and long-term
            partnerships.
          </p>

          <p className="mt-6 text-center lg:text-left text-[11px] uppercase tracking-[0.18em] text-gold">
            {company.tagline}
          </p>

        </div>

        {/* Links & Contact */}

        <div className="grid grid-cols-2 gap-10 sm:gap-12 lg:contents">

          {/* Quick Links */}

          <div>
            <h3 className="text-xs font-semibold uppercase tracking-[0.18em] text-gold">
              Quick Links
            </h3>

            <ul className="mt-5 space-y-2.5 text-sm text-white/70">
              <li>
                <Link
                  href="/"
                  className="transition-colors hover:text-gold"
                >
                  Home
                </Link>
              </li>

              {navLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="transition-colors hover:text-gold"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}

              <li>
                <Link
                  href="/quote"
                  className="transition-colors hover:text-gold"
                >
                  Get a Quote
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact */}

          <div>
            <h3 className="text-xs font-semibold uppercase tracking-[0.18em] text-gold">
              Contact
            </h3>

            <ul className="mt-5 space-y-4 text-sm text-white/70">

              <li className="flex gap-3">
                <MapPin
                  className="mt-0.5 h-4 w-4 shrink-0 text-gold"
                  aria-hidden
                />
                <span>{formatAddress()}</span>
              </li>

              <li className="flex gap-3">
                <Mail
                  className="mt-0.5 h-4 w-4 shrink-0 text-gold"
                  aria-hidden
                />

                <a
                  href={`mailto:${company.email}`}
                  className="break-all transition-colors hover:text-gold"
                >
                  {company.email}
                </a>
              </li>

              <li className="flex gap-3">
                <Phone
                  className="mt-0.5 h-4 w-4 shrink-0 text-gold"
                  aria-hidden
                />

                <div className="flex flex-col gap-1">
                  {company.phones.map((phone) => (
                    <a
                      key={phone}
                      href={telLink(phone)}
                      className="transition-colors hover:text-gold"
                    >
                      {phone}
                    </a>
                  ))}
                </div>
              </li>

            </ul>

            <p className="mt-5 text-xs text-white/40">
              GSTIN: {company.gstin}
            </p>
          </div>

        </div>

        {/* Contact Form */}

        <div className="lg:col-span-2 xl:col-span-1">
          <h3 className="text-xs font-semibold uppercase tracking-[0.18em] text-gold">
            Send a Message
          </h3>

          <div className="mt-5 rounded-sm border border-white/10 bg-white/5 p-4 [&_label]:text-white/80 [&_input]:bg-white [&_textarea]:bg-white">
            <ContactForm />
          </div>
        </div>

      </div>

      {/* Bottom Bar */}

      <div className="border-t border-white/10">
        <div className="container-page flex flex-col items-center justify-between gap-3 py-5 text-xs text-white/45 md:flex-row">
          <p>
            © {year} {company.name}. All rights reserved.
          </p>

          <p>
            Corrugated Boxes & Paper Packaging · Ayodhya, Uttar Pradesh
          </p>
        </div>
      </div>
    </footer>
  );
}