"use client"

import { useState, useEffect, useCallback, useRef } from "react"
import Image from "next/image"
import { AnimatedSection } from "@/components/animated-section"
import { ChevronLeft, ChevronRight, Quote, Star } from "lucide-react"
import { cn } from "@/lib/utils"

const clients = [
  {
    name: "Sarah Chen",
    role: "VP of Marketing",
    company: "TechVault",
    industry: "SaaS & Technology",
    image: "/images/client-1.jpg",
    rating: 5,
    quote:
      "brain & co. completely transformed our digital presence. Their strategic approach to content marketing generated a 400% increase in qualified leads within just six months. They didn't just run campaigns -- they became an extension of our team, deeply understanding our product and audience.",
    result: "400% increase in qualified leads",
  },
  {
    name: "James Rodriguez",
    role: "CEO",
    company: "Apex Industries",
    industry: "Manufacturing",
    image: "/images/client-2.jpg",
    rating: 5,
    quote:
      "Working with brain & co. was a game-changer for our entire organization. Their data-driven methodology and creative campaigns helped us break into a new market segment with remarkable efficiency. The ROI we've seen has exceeded every projection we had.",
    result: "5x return on ad spend",
  },
  {
    name: "Emily Nakamura",
    role: "Director of Growth",
    company: "CloudSync",
    industry: "Cloud Technology",
    image: "/images/client-3.jpg",
    rating: 5,
    quote:
      "The team at brain & co. doesn't just deliver campaigns -- they deliver results. Our ROI has increased by 280% since partnering with them. Their ability to combine creative storytelling with hard data analytics is truly unique in the industry.",
    result: "280% ROI increase",
  },
  {
    name: "David Park",
    role: "Founder & CTO",
    company: "NeuralPath AI",
    industry: "Artificial Intelligence",
    image: "/images/client-4.jpg",
    rating: 5,
    quote:
      "As a technical founder, I was skeptical of marketing agencies. brain & co. changed my mind entirely. They took the time to understand our complex AI products and translated them into compelling narratives that resonated with enterprise buyers.",
    result: "150+ enterprise leads in 90 days",
  },
  {
    name: "Maria Gonzalez",
    role: "Head of Operations",
    company: "HealthBridge",
    industry: "Healthcare Tech",
    image: "/images/client-5.jpg",
    rating: 5,
    quote:
      "In healthcare, trust and compliance are everything. brain & co. demonstrated an incredible understanding of our regulatory landscape while still delivering creative, engaging campaigns that drove real patient engagement and provider adoption.",
    result: "3x patient engagement growth",
  },
  {
    name: "Thomas Weber",
    role: "Chief Revenue Officer",
    company: "FinCore Systems",
    industry: "Financial Technology",
    image: "/images/client-6.jpg",
    rating: 5,
    quote:
      "brain & co. helped us redefine our entire go-to-market strategy. Their full-funnel approach -- from brand awareness campaigns to conversion optimization -- delivered a pipeline worth $12M in our first year of partnership. Simply outstanding.",
    result: "$12M pipeline generated",
  },
]

export function ClientsSlider() {
  const [activeIndex, setActiveIndex] = useState(0)
  const [isAutoPlaying, setIsAutoPlaying] = useState(true)
  const [direction, setDirection] = useState<"left" | "right">("right")
  const intervalRef = useRef<NodeJS.Timeout | null>(null)

  const startAutoPlay = useCallback(() => {
    if (intervalRef.current) clearInterval(intervalRef.current)
    intervalRef.current = setInterval(() => {
      setDirection("right")
      setActiveIndex((prev) => (prev + 1) % clients.length)
    }, 5000)
  }, [])

  useEffect(() => {
    if (isAutoPlaying) {
      startAutoPlay()
    }
    return () => {
      if (intervalRef.current) clearInterval(intervalRef.current)
    }
  }, [isAutoPlaying, startAutoPlay])

  const goTo = (index: number) => {
    setDirection(index > activeIndex ? "right" : "left")
    setActiveIndex(index)
    setIsAutoPlaying(false)
    setTimeout(() => setIsAutoPlaying(true), 10000)
  }

  const goNext = () => {
    setDirection("right")
    setActiveIndex((prev) => (prev + 1) % clients.length)
    setIsAutoPlaying(false)
    setTimeout(() => setIsAutoPlaying(true), 10000)
  }

  const goPrev = () => {
    setDirection("left")
    setActiveIndex((prev) => (prev - 1 + clients.length) % clients.length)
    setIsAutoPlaying(false)
    setTimeout(() => setIsAutoPlaying(true), 10000)
  }

  const client = clients[activeIndex]

  return (
    <section className="py-24 lg:py-32 overflow-hidden">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <AnimatedSection>
          <div className="text-center max-w-3xl mx-auto mb-16">
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-muted-foreground">
              Client Stories
            </p>
            <h2 className="mt-3 font-serif text-3xl font-bold tracking-tight text-primary sm:text-4xl lg:text-5xl text-balance">
              What our clients say about us
            </h2>
          </div>
        </AnimatedSection>

        {/* Main slider area */}
        <div className="relative">
          {/* Navigation arrows */}
          <button
            onClick={goPrev}
            className="absolute -left-4 top-1/2 -translate-y-1/2 z-20 hidden lg:flex items-center justify-center h-12 w-12 rounded-full border border-border bg-background text-primary transition-all duration-300 hover:bg-primary hover:text-primary-foreground hover:border-primary hover:scale-110"
            aria-label="Previous testimonial"
          >
            <ChevronLeft className="h-5 w-5" />
          </button>
          <button
            onClick={goNext}
            className="absolute -right-4 top-1/2 -translate-y-1/2 z-20 hidden lg:flex items-center justify-center h-12 w-12 rounded-full border border-border bg-background text-primary transition-all duration-300 hover:bg-primary hover:text-primary-foreground hover:border-primary hover:scale-110"
            aria-label="Next testimonial"
          >
            <ChevronRight className="h-5 w-5" />
          </button>

          {/* Slider content */}
          <div className="rounded-3xl border border-border overflow-hidden">
            <div className="grid grid-cols-1 lg:grid-cols-5">
              {/* Client photo & info */}
              <div className="relative lg:col-span-2 bg-primary text-primary-foreground p-8 lg:p-12 flex flex-col justify-between min-h-[300px] lg:min-h-[500px]">
                <div
                  key={`photo-${activeIndex}`}
                  className={cn(
                    "opacity-0",
                    direction === "right"
                      ? "animate-slide-in-left"
                      : "animate-slide-in-right"
                  )}
                >
                  <div className="relative h-20 w-20 rounded-full overflow-hidden border-2 border-primary-foreground/25">
                    <Image
                      src={client.image}
                      alt={client.name}
                      fill
                      className="object-cover"
                    />
                  </div>
                  <div className="mt-6">
                    <h3 className="text-xl font-bold text-primary-foreground font-serif">
                      {client.name}
                    </h3>
                    <p className="mt-1 text-sm text-primary-foreground/70">
                      {client.role}
                    </p>
                    <p className="text-sm font-medium text-primary-foreground/90">
                      {client.company}
                    </p>
                    <span className="mt-3 inline-block rounded-full bg-primary-foreground/10 px-3 py-1 text-xs text-primary-foreground/65">
                      {client.industry}
                    </span>
                  </div>
                </div>

                <div
                  key={`result-${activeIndex}`}
                  className={cn(
                    "mt-8 opacity-0",
                    direction === "right"
                      ? "animate-fade-up animation-delay-200"
                      : "animate-fade-up animation-delay-200"
                  )}
                >
                  <p className="text-xs uppercase tracking-[0.15em] text-primary-foreground/45">
                    Key Result
                  </p>
                  <p className="mt-1 text-lg font-bold text-on-primary-bright font-serif">
                    {client.result}
                  </p>
                </div>
              </div>

              {/* Quote section */}
              <div className="lg:col-span-3 p-8 lg:p-12 flex flex-col justify-center">
                <div
                  key={`quote-${activeIndex}`}
                  className={cn(
                    "opacity-0",
                    direction === "right"
                      ? "animate-blur-in"
                      : "animate-blur-in"
                  )}
                >
                  <Quote className="h-8 w-8 text-muted-foreground/20" />

                  {/* Star rating */}
                  <div className="mt-4 flex items-center gap-1">
                    {Array.from({ length: client.rating }).map((_, i) => (
                      <Star
                        key={i}
                        className="h-4 w-4 fill-amber-400 text-amber-500"
                      />
                    ))}
                  </div>

                  <blockquote className="mt-6 text-lg leading-relaxed text-foreground lg:text-xl">
                    {`"${client.quote}"`}
                  </blockquote>

                  <div className="mt-8 flex items-center gap-3 lg:hidden">
                    <div className="relative h-10 w-10 rounded-full overflow-hidden">
                      <Image
                        src={client.image}
                        alt={client.name}
                        fill
                        className="object-cover"
                      />
                    </div>
                    <div>
                      <p className="text-sm font-semibold text-foreground">
                        {client.name}
                      </p>
                      <p className="text-xs text-muted-foreground">
                        {client.role}, {client.company}
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Dot indicators and mobile arrows */}
          <div className="mt-8 flex items-center justify-center gap-6">
            <button
              onClick={goPrev}
              className="lg:hidden flex items-center justify-center h-10 w-10 rounded-full border border-border text-primary transition-all duration-300 hover:bg-primary hover:text-primary-foreground"
              aria-label="Previous testimonial"
            >
              <ChevronLeft className="h-4 w-4" />
            </button>

            <div className="flex items-center gap-2">
              {clients.map((_, i) => (
                <button
                  key={i}
                  onClick={() => goTo(i)}
                  className={cn(
                    "transition-all duration-300 rounded-full",
                    i === activeIndex
                      ? "h-2.5 w-8 bg-primary"
                      : "h-2.5 w-2.5 bg-border hover:bg-muted-foreground"
                  )}
                  aria-label={`Go to testimonial ${i + 1}`}
                />
              ))}
            </div>

            <button
              onClick={goNext}
              className="lg:hidden flex items-center justify-center h-10 w-10 rounded-full border border-border text-primary transition-all duration-300 hover:bg-primary hover:text-primary-foreground"
              aria-label="Next testimonial"
            >
              <ChevronRight className="h-4 w-4" />
            </button>
          </div>

          {/* Auto-scroll client preview strip */}
          <div className="mt-12 border-t border-border pt-8">
            <div className="flex items-center justify-center gap-4 flex-wrap">
              {clients.map((c, i) => (
                <button
                  key={c.name}
                  onClick={() => goTo(i)}
                  className={cn(
                    "group flex items-center gap-3 rounded-full border px-4 py-2 transition-all duration-300",
                    i === activeIndex
                      ? "border-primary bg-primary text-primary-foreground"
                      : "border-border hover:border-primary/30"
                  )}
                >
                  <div className="relative h-7 w-7 rounded-full overflow-hidden flex-shrink-0">
                    <Image
                      src={c.image}
                      alt={c.name}
                      fill
                      className="object-cover"
                    />
                  </div>
                  <span
                    className={cn(
                      "text-xs font-medium whitespace-nowrap hidden sm:block",
                      i === activeIndex
                        ? "text-primary-foreground"
                        : "text-muted-foreground group-hover:text-primary"
                    )}
                  >
                    {c.name}
                  </span>
                </button>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
