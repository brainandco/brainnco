"use client"

import { useScrollAnimation } from "@/hooks/use-scroll-animation"
import { cn } from "@/lib/utils"

export function ServicesHero() {
  const { ref, isVisible } = useScrollAnimation(0.05)

  return (
    <section ref={ref} className="pt-32 pb-16 lg:pt-40 lg:pb-24">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="max-w-3xl">
          <p
            className={cn(
              "text-xs font-semibold uppercase tracking-[0.2em] text-muted-foreground opacity-0",
              isVisible && "animate-fade-up"
            )}
          >
            Our Services
          </p>
          <h1
            className={cn(
              "mt-4 font-serif text-4xl font-bold tracking-tight text-brand-accent sm:text-5xl lg:text-6xl opacity-0",
              isVisible && "animate-fade-up animation-delay-100"
            )}
          >
            <span className="text-balance">
              Full-spectrum marketing solutions
            </span>
          </h1>
          <p
            className={cn(
              "mt-6 text-lg leading-relaxed text-muted-foreground opacity-0",
              isVisible && "animate-fade-up animation-delay-200"
            )}
          >
            From strategy to execution, we offer comprehensive marketing services designed to drive growth, build brand authority, and generate qualified leads—for all types of brands and companies.
          </p>
        </div>
      </div>
    </section>
  )
}
