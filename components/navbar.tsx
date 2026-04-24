"use client"

import Link from "next/link"
import { usePathname } from "next/navigation"
import { useState } from "react"
import { Menu, X } from "lucide-react"
import { cn } from "@/lib/utils"
import { BrandLogo } from "@/components/brand-logo"
import { useHeaderScrolled } from "@/hooks/use-header-scrolled"

const navLinks = [
  { href: "/", label: "Home" },
  { href: "/about", label: "About" },
  { href: "/services", label: "Services" },
  { href: "/blog", label: "Blog" },
  { href: "/contact", label: "Contact" },
]

export function Navbar() {
  const pathname = usePathname()
  const [mobileOpen, setMobileOpen] = useState(false)
  const scrolled = useHeaderScrolled(28)

  const isActive = (href: string) => pathname === href

  const linkBase = (active: boolean) =>
    cn(
      "text-sm tracking-wide transition-colors duration-500 ease-out",
      scrolled
        ? active
          ? "text-primary font-semibold"
          : "text-foreground/90 hover:text-primary"
        : active
          ? "text-white font-semibold"
          : "text-brand-accent/95 hover:text-brand-accent"
    )

  const ctaClass = cn(
    "inline-flex items-center justify-center rounded-full border-2 px-6 py-2 text-sm font-medium transition-all duration-500 ease-out sm:py-2.5",
    scrolled
      ? "border-primary/40 bg-white text-primary hover:border-primary/60 hover:bg-primary/5"
      : "border-brand-accent/80 bg-white/0 text-brand-accent shadow-sm hover:border-brand-accent hover:bg-brand-accent/10"
  )

  return (
    <header
      className={cn(
        "fixed top-0 left-0 right-0 z-50 w-full",
        "transition-all duration-500 ease-[cubic-bezier(0.16,1,0.3,1)]",
        scrolled
          ? "border-b border-border bg-white/95 py-2 shadow-md backdrop-blur-md sm:py-2.5"
          : "border-b border-primary-foreground/10 bg-primary py-3.5 shadow-[0_4px_24px_-2px_rgba(15,40,80,0.45)] sm:py-4"
      )}
    >
      <nav
        className={cn(
          "mx-auto flex max-w-7xl items-center justify-between px-6 transition-[padding] duration-500 ease-out lg:px-8",
          scrolled ? "min-h-[2.75rem]" : "min-h-[3.25rem]"
        )}
      >
        <Link href="/" className="flex items-center">
          <BrandLogo
            variant={scrolled ? "onLight" : "onBlue"}
            className={cn(
              "w-auto transition-all duration-500 ease-out",
              scrolled ? "h-7 sm:h-8" : "h-8 sm:h-10"
            )}
            priority
          />
        </Link>

        <ul className="hidden lg:flex items-center gap-8">
          {navLinks.map((link) => (
            <li key={link.href}>
              <Link
                href={link.href}
                className={linkBase(isActive(link.href))}
              >
                {link.label}
              </Link>
            </li>
          ))}
        </ul>

        <div className="hidden lg:flex items-center gap-4">
          <Link href="/contact" className={ctaClass}>
            Get in Touch
          </Link>
        </div>

        <button
          onClick={() => setMobileOpen(!mobileOpen)}
          className={cn(
            "lg:hidden rounded-lg p-2 transition-colors duration-500",
            scrolled
              ? "text-primary"
              : "text-brand-accent hover:bg-primary-foreground/10"
          )}
          aria-label={mobileOpen ? "Close menu" : "Open menu"}
        >
          {mobileOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
        </button>
      </nav>

      {mobileOpen && (
        <div
          className={cn(
            "lg:hidden border-t transition-colors duration-500",
            "animate-fade-in border-border bg-white/98 backdrop-blur-md shadow-sm"
          )}
        >
          <ul className="flex flex-col gap-1 px-6 py-4">
            {navLinks.map((link) => (
              <li key={link.href}>
                <Link
                  href={link.href}
                  onClick={() => setMobileOpen(false)}
                  className={cn(
                    "block rounded-lg px-2 py-2.5 text-base transition-colors",
                    isActive(link.href)
                      ? "font-semibold text-primary"
                      : "text-foreground/90 hover:text-primary"
                  )}
                >
                  {link.label}
                </Link>
              </li>
            ))}
            <li className="pt-1">
              <Link
                href="/contact"
                onClick={() => setMobileOpen(false)}
                className="inline-flex w-full items-center justify-center rounded-full border-2 border-primary/35 bg-primary/5 px-6 py-3 text-sm font-medium text-primary transition-opacity hover:opacity-90"
              >
                Get in Touch
              </Link>
            </li>
          </ul>
        </div>
      )}
    </header>
  )
}
