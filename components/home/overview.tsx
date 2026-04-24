"use client"

import { AnimatedSection } from "@/components/animated-section"
import {
  TrendingUp,
  Target,
  Lightbulb,
  BarChart3,
  ArrowUpRight,
} from "lucide-react"
import { cn } from "@/lib/utils"
import { useScrollAnimation } from "@/hooks/use-scroll-animation"

const pillars = [
  {
    icon: TrendingUp,
    title: "Growth Strategy",
    description:
      "Data-driven marketing strategies tailored to accelerate your business growth and market presence.",
    metric: "312%",
    metricLabel: "Avg. Traffic Growth",
  },
  {
    icon: Target,
    title: "Precision Targeting",
    description:
      "Reach the right audience at the right time with our advanced targeting and segmentation methods.",
    metric: "4.5x",
    metricLabel: "Return on Ad Spend",
  },
  {
    icon: Lightbulb,
    title: "Creative Excellence",
    description:
      "Compelling content and creative campaigns that cut through the noise and resonate with your audience.",
    metric: "89%",
    metricLabel: "Client Retention",
  },
  {
    icon: BarChart3,
    title: "Measurable Results",
    description:
      "Transparent reporting and analytics so you can track ROI and make informed decisions.",
    metric: "150+",
    metricLabel: "Active Dashboards",
  },
]

export function Overview() {
  const { ref: lineRef, isVisible: lineVisible } = useScrollAnimation(0.2)

  return (
    <section className="py-24 lg:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        {/* Section intro with animated line */}
        <div className="mb-20">
          <AnimatedSection>
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-muted-foreground">
              Our Approach
            </p>
            <h2 className="mt-3 font-serif text-3xl font-bold tracking-tight text-primary sm:text-4xl lg:text-5xl text-balance">
              Built on four core pillars
              {/* <span className="text-brand-highlight">four core pillars</span> */}
            </h2>
            <p className="mt-4 max-w-2xl text-base leading-relaxed text-muted-foreground">
              Every strategy we craft is built on a proven framework that
              combines data, creativity, precision, and transparency.
            </p>
          </AnimatedSection>
          {/* Animated divider line */}
          <div ref={lineRef} className="mt-8 h-[1px] bg-border overflow-hidden">
            <div
              className={cn(
                "h-full bg-primary w-0",
                lineVisible && "animate-draw-line"
              )}
            />
          </div>
        </div>

        {/* Pillar Cards */}
        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {pillars.map((pillar, i) => (
            <AnimatedSection
              key={pillar.title}
              delay={`animation-delay-${(i + 1) * 100}`}
            >
              <div className="group relative rounded-2xl border border-border p-8 transition-all duration-500 hover:border-primary/25 hover-lift overflow-hidden">
                {/* Hover background fill */}
                <div className="absolute inset-0 bg-primary opacity-0 transition-opacity duration-500 group-hover:opacity-100" />

                <div className="relative z-10">
                  <div className="flex items-center justify-between">
                    <pillar.icon className="h-6 w-6 text-primary transition-colors duration-500 group-hover:text-primary-foreground" />
                    <ArrowUpRight className="h-4 w-4 text-muted-foreground opacity-0 transition-all duration-500 group-hover:opacity-100 group-hover:text-primary-foreground" />
                  </div>
                  <h3 className="mt-6 text-lg font-semibold text-foreground transition-colors duration-500 group-hover:text-primary-foreground">
                    {pillar.title}
                  </h3>
                  <p className="mt-3 text-sm leading-relaxed text-muted-foreground transition-colors duration-500 group-hover:text-primary-foreground/80">
                    {pillar.description}
                  </p>
                  <div className="mt-6 border-t border-border pt-4 transition-colors duration-500 group-hover:border-primary-foreground/25">
                    <p className="text-2xl font-bold font-serif text-brand-highlight transition-colors duration-500 group-hover:text-primary-foreground">
                      {pillar.metric}
                    </p>
                    <p className="text-xs text-muted-foreground transition-colors duration-500 group-hover:text-primary-foreground/60">
                      {pillar.metricLabel}
                    </p>
                  </div>
                </div>
              </div>
            </AnimatedSection>
          ))}
        </div>
      </div>
    </section>
  )
}
