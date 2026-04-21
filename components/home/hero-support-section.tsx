"use client"

import { Target, Zap, Award } from "lucide-react"
import { useCounterAnimation } from "@/hooks/use-counter-animation"
import { AnimatedSection } from "@/components/animated-section"

function StatItem({
  target,
  suffix,
  label,
}: {
  target: number
  suffix: string
  label: string
}) {
  const { count, ref } = useCounterAnimation(target, 2000)
  return (
    <div ref={ref} className="text-center">
      <p className="text-2xl font-bold font-serif tabular-nums text-foreground sm:text-3xl">
        {count}
        {suffix}
      </p>
      <p className="mt-0.5 text-[10px] uppercase tracking-[0.15em] text-muted-foreground">
        {label}
      </p>
    </div>
  )
}

const highlights = [
  { icon: Target, text: "Data-driven strategies" },
  { icon: Zap, text: "Faster time to results" },
  { icon: Award, text: "Proven ROI focus" },
]

const HIDE_TRUSTED_BY_STATS = true

export function HeroSupportSection() {
  return (
    <section className="border-t border-border bg-muted/30 py-16 sm:py-20 lg:py-24">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-3xl text-center">
          <AnimatedSection>
            <p className="text-sm leading-relaxed text-muted-foreground sm:text-base">
              We combine strategy, creativity, and data to deliver measurable results for all types of brands and companies. From SEO and PPC to content and brand—we help you grow.
            </p>
          </AnimatedSection>
        </div>

        {!HIDE_TRUSTED_BY_STATS && (
          <AnimatedSection delay="animation-delay-100">
            <p className="mt-12 text-center text-xs font-semibold uppercase tracking-wider text-muted-foreground">
              Trusted by growing brands
            </p>
            <div className="mt-6 grid grid-cols-2 gap-8 sm:grid-cols-4 sm:gap-10">
              <StatItem target={200} suffix="+" label="Clients Served" />
              <StatItem target={50} suffix="M+" label="Revenue Generated" />
              <StatItem target={1200} suffix="+" label="Campaigns Launched" />
              <StatItem target={12} suffix="+" label="Years Experience" />
            </div>
          </AnimatedSection>
        )}

        <AnimatedSection delay="animation-delay-200">
          <ul className="mx-auto mt-12 flex max-w-2xl flex-wrap justify-center gap-6 border-t border-border pt-10 sm:gap-8">
            {highlights.map((item) => (
              <li
                key={item.text}
                className="flex items-center gap-3 text-sm text-foreground"
              >
                <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-lg bg-foreground/10">
                  <item.icon className="h-4 w-4 text-foreground" />
                </span>
                <span className="font-medium">{item.text}</span>
              </li>
            ))}
          </ul>
        </AnimatedSection>
      </div>
    </section>
  )
}
