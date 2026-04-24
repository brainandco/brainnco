import Link from "next/link"
import { ArrowUpRight } from "lucide-react"
import { NewsletterForm } from "@/components/footer/newsletter-form"
import { BrandLogo } from "@/components/brand-logo"

const footerLinks = {
  Navigation: [
    { href: "/", label: "Home" },
    { href: "/about", label: "About" },
    { href: "/services", label: "Services" },
    { href: "/blog", label: "Blog" },
  ],
  Company: [
    { href: "/contact", label: "Contact" },
    { href: "/privacy", label: "Privacy Policy" },
    { href: "/terms", label: "Terms & Conditions" },
  ],
  Social: [
    { href: "https://www.linkedin.com/company/thebrainnco/", label: "LinkedIn" },
    { href: "https://www.instagram.com/brainandco/", label: "Instagram" },
  ],
}

const linkClass =
  "group inline-flex items-center gap-1 text-sm text-primary-foreground/80 transition-colors hover:text-brand-accent"

const headingClass = "text-xs font-semibold uppercase tracking-widest text-brand-accent/90 mb-4"

export function Footer() {
  return (
    <footer className="border-t border-primary-foreground/10 bg-primary text-primary-foreground">
      <div className="mx-auto max-w-7xl px-6 py-16 lg:px-8">
        <div className="grid grid-cols-1 gap-12 md:grid-cols-2 lg:grid-cols-4">
          <div className="min-w-0 lg:col-span-1">
            <Link href="/" className="inline-block">
              <BrandLogo variant="onBlue" />
            </Link>
            <p className="mt-4 text-sm leading-relaxed text-primary-foreground/75">
              We build brands that grow.
              <br />
              <span className="whitespace-nowrap">Strategy, creativity, and results—no fluff.</span>
            </p>
            <div className="mt-8 min-w-0 max-w-sm">
              <p className="text-sm font-medium text-brand-accent mb-3">Stay Updated</p>
              <NewsletterForm />
            </div>
          </div>

          {Object.entries(footerLinks).map(([title, links]) => (
            <div key={title}>
              <h3 className={headingClass}>{title}</h3>
              <ul className="flex flex-col gap-3">
                {links.map((link) => (
                  <li key={link.label}>
                    <Link
                      href={link.href}
                      className={linkClass}
                      target={link.href.startsWith("https://") ? "_blank" : undefined}
                      rel={link.href.startsWith("https://") ? "noopener noreferrer" : undefined}
                    >
                      {link.label}
                      <ArrowUpRight className="h-3 w-3 opacity-0 transition-opacity group-hover:opacity-100" />
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="mt-16 flex flex-col items-center justify-between gap-4 border-t border-primary-foreground/10 pt-8 md:flex-row pr-0 pr-20">
          <p className="text-xs text-primary-foreground/50">
            &copy; {new Date().getFullYear()} brain & co. All rights reserved.
          </p>
          <p className="text-xs text-primary-foreground/50 text-center md:text-right">
            A Division of Fast Technology Solutions.
          </p>
        </div>
      </div>
    </footer>
  )
}
