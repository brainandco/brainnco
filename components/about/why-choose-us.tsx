"use client"

import Link from "next/link"
import { ArrowRight, CheckCircle2 } from "lucide-react"
import { AnimatedSection } from "@/components/animated-section"

const reasons = [
  "5+ years of marketing experience across industries",
  "Dedicated account team for every client engagement",
  "Transparent reporting with real-time performance dashboards",
  "Proven track record of 50+ successful campaigns",
  "Full-funnel marketing expertise from awareness to conversion",
  "Agile methodology with continuous optimization",
]

export function WhyChooseUs() {
  return (
    <section className="py-16 lg:py-24">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="grid grid-cols-1 gap-16 lg:grid-cols-2 lg:items-center">
          <AnimatedSection animation="slide-in-left">
            <div>
              <p className="text-xs font-semibold uppercase tracking-[0.2em] text-muted-foreground">
                Why brain & co.
              </p>
              <h2 className="mt-3 font-serif text-3xl font-bold tracking-tight text-primary sm:text-4xl text-balance">
                Why industry leaders choose us
              </h2>
              <p className="mt-6 text-base leading-relaxed text-muted-foreground">
                {"We don't just execute marketing tactics - we become your strategic growth partner, deeply embedded in understanding your business and driving measurable outcomes."}
              </p>
              <div className="mt-8">
                <Link
                  href="/contact"
                  className="inline-flex items-center gap-2 rounded-full bg-brand-accent px-8 py-3.5 text-sm font-semibold text-primary shadow-sm transition-transform hover:scale-105 hover:opacity-95"
                >
                  Work With Us
                  <ArrowRight className="h-4 w-4" />
                </Link>
              </div>
            </div>
          </AnimatedSection>

          <AnimatedSection animation="slide-in-right">
            <div className="flex flex-col gap-4">
              {reasons.map((reason) => (
                <div
                  key={reason}
                  className="flex items-start gap-3 rounded-xl border border-border p-4 transition-all duration-300 hover:border-primary/25"
                >
                  <CheckCircle2 className="mt-0.5 h-5 w-5 flex-shrink-0 text-primary" />
                  <p className="text-sm leading-relaxed text-foreground">
                    {reason}
                  </p>
                </div>
              ))}
            </div>
          </AnimatedSection>
        </div>
      </div>
    </section>
  )
}
