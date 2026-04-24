"use client"

import Link from "next/link"
import { usePathname } from "next/navigation"
import { useState } from "react"
import { Menu, X } from "lucide-react"
import { cn } from "@/lib/utils"
import { BrandLogo } from "@/components/brand-logo"

const navLinks = [
  { href: "/", label: "Home" },
  { href: "/about", label: "About" },
  { href: "/services", label: "Services" },
  { href: "/blog", label: "Blog" },
  { href: "/contact", label: "Contact" },
]

const navClass =
  "text-sm tracking-wide text-primary-foreground/90 transition-colors duration-200 hover:text-primary-foreground"
const navActive = "text-primary-foreground font-semibold"

const ctaClass =
  "inline-flex items-center justify-center rounded-full border-2 border-primary-foreground/50 bg-primary-foreground/5 px-6 py-2.5 text-sm font-medium text-primary-foreground transition-colors hover:border-primary-foreground/80 hover:bg-primary-foreground/10"

export function Navbar() {
  const pathname = usePathname()
  const [mobileOpen, setMobileOpen] = useState(false)

  return (
    <header className="fixed top-0 left-0 right-0 z-50 border-b border-primary-foreground/15 bg-primary shadow-sm">
      <nav className="mx-auto flex max-w-7xl items-center justify-between px-6 py-3.5 lg:px-8">
        <Link href="/" className="flex items-center">
          <BrandLogo variant="onBlue" priority />
        </Link>

        {/* Desktop Nav */}
        <ul className="hidden lg:flex items-center gap-8">
          {navLinks.map((link) => (
            <li key={link.href}>
              <Link
                href={link.href}
                className={cn(
                  navClass,
                  pathname === link.href ? navActive : undefined
                )}
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

        {/* Mobile Toggle */}
        <button
          onClick={() => setMobileOpen(!mobileOpen)}
          className="lg:hidden p-2 text-primary-foreground/90"
          aria-label={mobileOpen ? "Close menu" : "Open menu"}
        >
          {mobileOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
        </button>
      </nav>

      {/* Mobile Nav */}
      {mobileOpen && (
        <div className="lg:hidden border-t border-primary-foreground/10 bg-primary animate-fade-in">
          <ul className="flex flex-col px-6 py-6 gap-4">
            {navLinks.map((link) => (
              <li key={link.href}>
                <Link
                  href={link.href}
                  onClick={() => setMobileOpen(false)}
                  className={cn(
                    "block text-base transition-colors",
                    pathname === link.href
                      ? navActive
                      : "text-primary-foreground/85"
                  )}
                >
                  {link.label}
                </Link>
              </li>
            ))}
            <li className="pt-2">
              <Link
                href="/contact"
                onClick={() => setMobileOpen(false)}
                className="inline-flex w-full items-center justify-center rounded-full border-2 border-primary-foreground/50 px-6 py-3 text-sm font-medium text-primary-foreground hover:bg-primary-foreground/10"
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
