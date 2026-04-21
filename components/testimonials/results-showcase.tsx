"use client"

import { AnimatedSection } from "@/components/animated-section"

const metrics = [
  { value: "312%", label: "Average Traffic Increase", description: "Across all SEO campaigns" },
  { value: "4.5x", label: "Average ROAS", description: "Return on ad spend" },
  { value: "98%", label: "Client Retention Rate", description: "Year-over-year" },
  { value: "$50M+", label: "Revenue Generated", description: "For our clients" },
]

export function ResultsShowcase() {
  return (
    <section className="py-16 lg:py-24 bg-foreground text-background">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <AnimatedSection>
          <p className="text-xs font-semibold uppercase tracking-[0.2em] text-background/40">
            By The Numbers
          </p>
          <h2 className="mt-3 font-serif text-3xl font-bold tracking-tight sm:text-4xl text-balance">
            Results that matter
          </h2>
        </AnimatedSection>

        <div className="mt-12 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {metrics.map((metric, i) => (
            <AnimatedSection
              key={metric.label}
              delay={`animation-delay-${(i + 1) * 100}`}
            >
              <div className="rounded-2xl border border-background/10 p-8 text-center transition-all duration-300 hover:border-background/25">
                <p className="font-serif text-4xl font-bold lg:text-5xl">
                  {metric.value}
                </p>
                <p className="mt-2 text-sm font-semibold text-background/80">
                  {metric.label}
                </p>
                <p className="mt-1 text-xs text-background/50">
                  {metric.description}
                </p>
              </div>
            </AnimatedSection>
          ))}
        </div>
      </div>
    </section>
  )
}
