import Link from "next/link"
import { ArrowUpRight } from "lucide-react"
import { NewsletterForm } from "@/components/footer/newsletter-form"

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
    // { href: "#", label: "Twitter" },
    { href: "https://www.instagram.com/brainandco/", label: "Instagram" },
  ],
}

export function Footer() {
  return (
    <footer className="border-t border-border bg-foreground text-background">
      <div className="mx-auto max-w-7xl px-6 py-16 lg:px-8">
        <div className="grid grid-cols-1 gap-12 md:grid-cols-2 lg:grid-cols-4">
          {/* Brand */}
          <div className="min-w-0 lg:col-span-1">
            <Link href="/" className="inline-block">
              <span className="font-serif text-xl font-bold tracking-tight text-background sm:text-2xl">
                brain & co.
              </span>
            </Link>
            <p className="mt-4 text-sm leading-relaxed text-background/60">
              We build brands that grow.
              <br />
              <span className="whitespace-nowrap">Strategy, creativity, and results—no fluff.</span>
            </p>
            {/* Newsletter – signups sent to newsletter@brainnco.com (or NEWSLETTER_TO) */}
            <div className="mt-8 min-w-0 max-w-sm">
              <p className="text-sm font-medium mb-3">Stay Updated</p>
              <NewsletterForm />
            </div>
          </div>

          {/* Link Columns */}
          {Object.entries(footerLinks).map(([title, links]) => (
            <div key={title}>
              <h3 className="text-xs font-semibold uppercase tracking-widest text-background/40 mb-4">
                {title}
              </h3>
              <ul className="flex flex-col gap-3">
                {links.map((link) => (
                  <li key={link.label}>
                    <Link
                      href={link.href}
                      className="group inline-flex items-center gap-1 text-sm text-background/70 transition-colors hover:text-background"
                      target={link.href.includes("https://") ? "_blank" : undefined}
                      rel={link.href.includes("https://") ? "noopener noreferrer" : undefined}
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

        <div className="mt-16 flex flex-col items-center justify-between gap-4 border-t border-background/10 pt-8 md:flex-row pr-0 pr-20">
          <p className="text-xs text-background/40">
            &copy; {new Date().getFullYear()} brain & co. All rights reserved.
          </p>
          <p className="text-xs text-background/40 text-center md:text-right">
            A Division of Fast Technology Solutions.
          </p>
        </div>
      </div>
    </footer>
  )
}
