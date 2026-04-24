"use client"

import { AnimatedSection } from "@/components/animated-section"
import { Crosshair, Heart, Rocket } from "lucide-react"

const values = [
  {
    icon: Crosshair,
    title: "Precision",
    description:
      "Every strategy is built on data, analytics, and deep market understanding. We don't guess - we know.",
  },
  {
    icon: Heart,
    title: "Partnership",
    description:
      "We embed ourselves in your business, working as an extension of your team to achieve shared goals.",
  },
  {
    icon: Rocket,
    title: "Innovation",
    description:
      "We continuously evolve our methods, staying ahead of industry trends to give our clients the competitive edge.",
  },
]

export function Mission() {
  return (
    <section className="py-16 lg:py-24 border-t border-border">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="grid grid-cols-1 gap-16 lg:grid-cols-2">
          <AnimatedSection animation="slide-in-left">
            <div>
              <p className="text-xs font-semibold uppercase tracking-[0.2em] text-muted-foreground">
                Our Mission
              </p>
              <h2 className="mt-3 font-serif text-3xl font-bold tracking-tight text-brand-accent sm:text-4xl text-balance">
                Empowering businesses through intelligent marketing
              </h2>
              <p className="mt-6 text-base leading-relaxed text-muted-foreground">
                At brain & co., we exist to help companies of all kinds unlock their full growth potential. We combine strategic thinking with creative execution to deliver marketing programs that generate measurable business outcomes.
              </p>
              <p className="mt-4 text-base leading-relaxed text-muted-foreground">
                Our approach is rooted in understanding your unique market position, competitive landscape, and growth objectives. We then craft tailored strategies that position your brand as the go-to choice in your industry.
              </p>
            </div>
          </AnimatedSection>

          <AnimatedSection animation="slide-in-right">
            <div className="flex flex-col gap-6">
              {values.map((value) => (
                <div
                  key={value.title}
                  className="flex gap-4 rounded-2xl border border-border p-6 transition-all duration-300 hover:border-primary/25"
                >
                  <div className="flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-xl bg-primary">
                    <value.icon className="h-5 w-5 text-primary-foreground" />
                  </div>
                  <div>
                    <h3 className="text-base font-semibold text-primary">
                      {value.title}
                    </h3>
                    <p className="mt-1 text-sm leading-relaxed text-muted-foreground">
                      {value.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </AnimatedSection>
        </div>
      </div>
    </section>
  )
}
