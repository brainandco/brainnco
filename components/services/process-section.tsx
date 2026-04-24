"use client"

import { AnimatedSection } from "@/components/animated-section"

const steps = [
  {
    number: "01",
    title: "Discovery & Research",
    description:
      "We start by deeply understanding your business, industry, competitors, and target audience to build a solid strategic foundation.",
  },
  {
    number: "02",
    title: "Strategy Development",
    description:
      "Based on our findings, we develop a comprehensive marketing strategy with clear objectives, KPIs, and a detailed roadmap for execution.",
  },
  {
    number: "03",
    title: "Creative Execution",
    description:
      "Our team brings the strategy to life with compelling creative assets, campaigns, and content tailored to your audience.",
  },
  {
    number: "04",
    title: "Measure & Optimize",
    description:
      "We continuously monitor performance, analyze results, and optimize campaigns to maximize impact and deliver exceptional ROI.",
  },
]

export function ProcessSection() {
  return (
    <section className="py-16 lg:py-24 bg-secondary">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <AnimatedSection>
          <p className="text-xs font-semibold uppercase tracking-[0.2em] text-muted-foreground">
            Our Process
          </p>
          <h2 className="mt-3 font-serif text-3xl font-bold tracking-tight text-brand-accent sm:text-4xl text-balance">
            How we deliver results
          </h2>
        </AnimatedSection>

        <div className="mt-12 grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-4">
          {steps.map((step, i) => (
            <AnimatedSection
              key={step.number}
              delay={`animation-delay-${(i + 1) * 100}`}
            >
              <div className="relative rounded-2xl border border-border bg-background p-8">
                <span className="font-serif text-5xl font-bold text-primary/15">
                  {step.number}
                </span>
                <h3 className="mt-4 text-lg font-semibold text-primary">
                  {step.title}
                </h3>
                <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
                  {step.description}
                </p>
              </div>
            </AnimatedSection>
          ))}
        </div>
      </div>
    </section>
  )
}
