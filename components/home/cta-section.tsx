"use client"

import Link from "next/link"
import { ArrowRight, Phone } from "lucide-react"
import { AnimatedSection } from "@/components/animated-section"

export function CTASection() {
  return (
    <section className="py-24 lg:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <AnimatedSection animation="scale-in" reveal="repeat">
          <div className="relative overflow-hidden rounded-3xl bg-primary px-8 py-16 text-center text-primary-foreground sm:px-16 lg:py-24">
            <div className="absolute top-8 left-8 h-2 w-2 rounded-full bg-primary-foreground/15 animate-pulse-dot" />
            <div className="absolute bottom-12 right-12 h-3 w-3 rounded-full bg-primary-foreground/15 animate-pulse-dot animation-delay-300" />
            <div className="absolute top-1/3 right-8 h-1.5 w-1.5 rounded-full bg-primary-foreground/10 animate-pulse-dot animation-delay-600" />

            <h2 className="font-serif text-3xl font-bold tracking-tight text-primary-foreground sm:text-4xl lg:text-5xl text-balance">
              Ready to accelerate your growth?
            </h2>
            <p className="mx-auto mt-6 max-w-xl text-base leading-relaxed text-primary-foreground/75">
              {"Let's discuss how brain & co. can help transform your marketing strategy and drive measurable business results."}
            </p>
            <div className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row">
              <Link
                href="/contact"
                className="group inline-flex items-center gap-2 rounded-full bg-brand-accent px-8 py-4 text-sm font-semibold text-primary transition-all duration-500 hover:scale-105 hover:shadow-lg hover:shadow-brand-accent/25"
              >
                Start a Conversation
                <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
              </Link>
              <a
                href="tel:+966554231498"
                className="group inline-flex items-center gap-2 rounded-full border-2 border-primary-foreground/40 px-8 py-4 text-sm font-medium text-primary-foreground transition-all duration-500 hover:border-primary-foreground/70 hover:bg-primary-foreground/10"
              >
                <Phone className="h-4 w-4 shrink-0" />
                <span>Call Us</span>
              </a>
            </div>
          </div>
        </AnimatedSection>
      </div>
    </section>
  )
}
