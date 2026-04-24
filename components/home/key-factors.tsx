"use client"

import { AnimatedSection } from "@/components/animated-section"
import { useCounterAnimation } from "@/hooks/use-counter-animation"
import { cn } from "@/lib/utils"
import { useScrollAnimation } from "@/hooks/use-scroll-animation"
import {
  Shield,
  Zap,
  Users,
  Award,
  Clock,
  LineChart,
  Handshake,
  Layers,
} from "lucide-react"

function AnimatedBar({
  percentage,
  label,
}: {
  percentage: number
  label: string
}) {
  const { count, ref } = useCounterAnimation(percentage, 1500)

  return (
    <div ref={ref} className="flex flex-col gap-2">
      <div className="flex items-center justify-between">
        <span className="text-sm font-medium text-foreground">{label}</span>
        <span className="text-sm font-bold text-primary font-serif">
          {count}%
        </span>
      </div>
      <div className="h-1.5 w-full rounded-full bg-secondary overflow-hidden">
        <div
          className="h-full rounded-full bg-primary transition-all duration-1500 ease-out"
          style={{ width: `${count}%` }}
        />
      </div>
    </div>
  )
}

const keyFactors = [
  {
    icon: Shield,
    title: "Proven ROI Framework",
    description:
      "Every campaign is built on our proprietary ROI framework that guarantees measurable outcomes and data-backed decisions.",
  },
  {
    icon: Zap,
    title: "Rapid Execution",
    description:
      "From strategy to launch in weeks, not months. Our agile process ensures you see results faster than traditional agencies.",
  },
  {
    icon: Users,
    title: "Dedicated Account Team",
    description:
      "A dedicated strategist, designer, and analyst assigned to your account for consistent, personalized attention.",
  },
  {
    icon: Award,
    title: "Industry-Leading Talent",
    description:
      "We combine 5+ years average experience with AI-powered tools for research, creative, and optimization—so strategy stays sharp and execution scales.",
  },
  {
    icon: Clock,
    title: "24/7 Campaign Monitoring",
    description:
      "Real-time performance monitoring ensures your campaigns are always optimized for maximum impact and spend efficiency.",
  },
  {
    icon: LineChart,
    title: "Transparent Reporting",
    description:
      "Custom dashboards with real-time KPIs. No vanity metrics -- only the numbers that matter to your bottom line.",
  },
  {
    icon: Handshake,
    title: "Long-Term Partnerships",
    description:
      "89% client retention rate. We invest in understanding your business deeply because long-term success requires long-term commitment.",
  },
  {
    icon: Layers,
    title: "Full-Funnel Strategy",
    description:
      "From awareness to conversion and retention, we cover every stage of the buyer journey with coordinated, multi-channel strategies.",
  },
]

const competencies = [
  { label: "SEO & Organic Growth", percentage: 97 },
  { label: "Paid Media & PPC", percentage: 94 },
  { label: "Content Marketing", percentage: 92 },
  { label: "Analytics & Attribution", percentage: 96 },
  { label: "Brand Strategy", percentage: 90 },
  { label: "Marketing Automation", percentage: 88 },
]

export function KeyFactors() {
  const { ref: dividerRef, isVisible: dividerVisible } = useScrollAnimation(0.2)

  return (
    <section className="py-24 lg:py-32 border-t border-border">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        {/* Section heading */}
        <AnimatedSection>
          <div className="text-center max-w-3xl mx-auto">
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-muted-foreground">
              Why brain & co.
            </p>
            <h2 className="mt-3 font-serif text-3xl font-bold tracking-tight text-primary sm:text-4xl lg:text-5xl text-balance">
              The key factors that set us apart
            </h2>
            <p className="mt-4 text-base leading-relaxed text-muted-foreground">
              We combine strategic thinking, creative execution, and relentless
              optimization to deliver marketing that moves the needle.
            </p>
          </div>
        </AnimatedSection>

        {/* Key factors grid */}
        <div className="mt-16 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {keyFactors.map((factor, i) => (
            <AnimatedSection
              key={factor.title}
              delay={`animation-delay-${((i % 4) + 1) * 100}`}
            >
              <div className="group rounded-2xl border border-border p-6 transition-all duration-400 hover:border-primary/25 hover-lift h-full">
                <div className="inline-flex items-center justify-center rounded-xl bg-secondary p-3 transition-colors duration-300 group-hover:bg-primary">
                  <factor.icon className="h-5 w-5 text-primary transition-colors duration-300 group-hover:text-primary-foreground" />
                </div>
                <h3 className="mt-4 text-base font-semibold text-foreground">
                  {factor.title}
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                  {factor.description}
                </p>
              </div>
            </AnimatedSection>
          ))}
        </div>

        {/* Animated divider */}
        <div ref={dividerRef} className="my-20 h-[1px] bg-border overflow-hidden">
          <div
            className={cn(
              "h-full bg-primary/30 w-0",
              dividerVisible && "animate-draw-line"
            )}
          />
        </div>

        {/* Competency bars */}
        <div className="grid grid-cols-1 gap-12 lg:grid-cols-2 items-center">
          <AnimatedSection animation="slide-in-left">
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-muted-foreground">
              Core Competencies
            </p>
            <h3 className="mt-3 font-serif text-2xl font-bold tracking-tight text-primary sm:text-3xl text-balance">
              Deep expertise across every digital channel
            </h3>
            <p className="mt-4 text-sm leading-relaxed text-muted-foreground">
              Our team maintains industry-leading certifications and invests
              hundreds of hours annually in training to stay ahead of the
              evolving digital landscape.
            </p>
          </AnimatedSection>

          <AnimatedSection animation="slide-in-right">
            <div className="flex flex-col gap-5">
              {competencies.map((comp) => (
                <AnimatedBar
                  key={comp.label}
                  percentage={comp.percentage}
                  label={comp.label}
                />
              ))}
            </div>
          </AnimatedSection>
        </div>
      </div>
    </section>
  )
}
