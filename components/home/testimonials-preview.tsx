"use client"

import Link from "next/link"
import { ArrowUpRight, Quote } from "lucide-react"
import { AnimatedSection } from "@/components/animated-section"

const testimonials = [
  {
    quote:
      "brain & co. transformed our digital presence completely. Their strategic approach to content marketing generated a 400% increase in qualified leads within just six months.",
    author: "Sarah Chen",
    role: "VP of Marketing, TechVault",
  },
  {
    quote:
      "Working with brain & co. was a game-changer. Their data-driven methodology and creative campaigns helped us break into a new market segment with remarkable efficiency.",
    author: "Michael Torres",
    role: "CEO, Apex Industries",
  },
  {
    quote:
      "The team at brain & co. doesn't just deliver campaigns - they deliver results. Our ROI has increased by 280% since partnering with them.",
    author: "Emily Nakamura",
    role: "Director of Growth, CloudSync",
  },
]

export function TestimonialsPreview() {
  return (
    <section className="py-24 lg:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <AnimatedSection>
          <div className="flex flex-col justify-between gap-4 sm:flex-row sm:items-end">
            <div>
              <p className="text-xs font-semibold uppercase tracking-[0.2em] text-muted-foreground">
                Client Feedback
              </p>
              <h2 className="mt-3 font-serif text-3xl font-bold tracking-tight text-brand-accent sm:text-4xl text-balance">
                Trusted by industry leaders
              </h2>
            </div>
            <Link
              href="/testimonials"
              className="inline-flex items-center gap-1 text-sm font-medium text-primary transition-opacity hover:opacity-80"
            >
              All Testimonials
              <ArrowUpRight className="h-4 w-4" />
            </Link>
          </div>
        </AnimatedSection>

        <div className="mt-12 grid grid-cols-1 gap-6 md:grid-cols-3">
          {testimonials.map((t, i) => (
            <AnimatedSection
              key={t.author}
              delay={`animation-delay-${(i + 1) * 100}`}
            >
              <div className="flex h-full flex-col justify-between rounded-2xl border border-border p-8 transition-all duration-300 hover:border-primary/25 hover:shadow-lg">
                <div>
                  <Quote className="h-5 w-5 text-muted-foreground/40" />
                  <p className="mt-4 text-sm leading-relaxed text-foreground">
                    {t.quote}
                  </p>
                </div>
                <div className="mt-6 border-t border-border pt-4">
                  <p className="text-sm font-semibold text-foreground">
                    {t.author}
                  </p>
                  <p className="text-xs text-muted-foreground">{t.role}</p>
                </div>
              </div>
            </AnimatedSection>
          ))}
        </div>
      </div>
    </section>
  )
}
