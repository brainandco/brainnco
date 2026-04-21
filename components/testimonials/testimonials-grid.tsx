"use client"

import { Star, Quote } from "lucide-react"
import { AnimatedSection } from "@/components/animated-section"

const testimonials = [
  {
    quote:
      "Brainnco completely transformed our digital presence. Within six months, our organic traffic grew by 280% and our lead generation pipeline tripled. Their strategic approach is unmatched.",
    name: "Sarah Mitchell",
    title: "VP of Marketing",
    company: "TechScale Solutions",
    rating: 5,
  },
  {
    quote:
      "Working with Brainnco was a game-changer for our SaaS company. Their PPC campaigns delivered a 5.2x ROAS, and their content strategy established us as a thought leader in our space.",
    name: "James Rodriguez",
    title: "CEO",
    company: "CloudSync Pro",
    rating: 5,
  },
  {
    quote:
      "The team at Brainnco genuinely understands marketing. They took the time to learn our industry, our customers, and delivered campaigns that resonated deeply with our target audience.",
    name: "Emily Chen",
    title: "Head of Growth",
    company: "DataBridge Analytics",
    rating: 5,
  },
  {
    quote:
      "We partnered with Brainnco for a complete brand overhaul and go-to-market strategy. The results exceeded all expectations: 40% increase in qualified leads within the first quarter.",
    name: "Michael Thompson",
    title: "CMO",
    company: "NovaTech Industries",
    rating: 5,
  },
  {
    quote:
      "Brainnco's SEO expertise is second to none. They identified opportunities we had been missing for years and executed a strategy that brought us to page one for our most valuable keywords.",
    name: "Laura Kim",
    title: "Director of Digital",
    company: "Apex Manufacturing",
    rating: 5,
  },
  {
    quote:
      "What sets Brainnco apart is their commitment to transparency and results. Monthly reporting was thorough, and they always went above and beyond to optimize our campaigns.",
    name: "David Okafor",
    title: "Founder",
    company: "PipelineIQ",
    rating: 5,
  },
  {
    quote:
      "From strategy to execution, Brainnco handled our entire content marketing operation. Our blog became our top lead source, contributing 35% of all qualified pipeline within eight months.",
    name: "Rachel Nguyen",
    title: "VP of Sales & Marketing",
    company: "InfraBuild Corp",
    rating: 5,
  },
  {
    quote:
      "Their account-based marketing approach helped us land three enterprise deals worth over $2M combined. Brainnco is more than an agency; they are a strategic partner.",
    name: "Thomas Weber",
    title: "CRO",
    company: "Elevate Partners",
    rating: 5,
  },
]

export function TestimonialsGrid() {
  return (
    <section className="py-16 lg:py-24">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <AnimatedSection>
          <p className="text-xs font-semibold uppercase tracking-[0.2em] text-muted-foreground">
            Testimonials
          </p>
          <h2 className="mt-3 font-serif text-3xl font-bold tracking-tight text-foreground sm:text-4xl text-balance">
            Trusted by ambitious brands
          </h2>
        </AnimatedSection>

        <div className="mt-12 columns-1 gap-6 md:columns-2 lg:columns-3">
          {testimonials.map((testimonial, i) => (
            <AnimatedSection
              key={testimonial.name}
              delay={`animation-delay-${((i % 3) + 1) * 100}`}
            >
              <div className="mb-6 break-inside-avoid rounded-2xl border border-border bg-card p-8 transition-all duration-300 hover:shadow-lg hover:-translate-y-1">
                <Quote className="h-8 w-8 text-muted-foreground/20" />
                <div className="mt-4 flex gap-0.5">
                  {Array.from({ length: testimonial.rating }).map((_, j) => (
                    <Star
                      key={j}
                      className="h-4 w-4 fill-foreground text-foreground"
                    />
                  ))}
                </div>
                <p className="mt-4 text-sm leading-relaxed text-foreground/80">
                  {`"${testimonial.quote}"`}
                </p>
                <div className="mt-6 border-t border-border pt-4">
                  <p className="text-sm font-semibold text-foreground">
                    {testimonial.name}
                  </p>
                  <p className="text-xs text-muted-foreground">
                    {testimonial.title}, {testimonial.company}
                  </p>
                </div>
              </div>
            </AnimatedSection>
          ))}
        </div>
      </div>
    </section>
  )
}
