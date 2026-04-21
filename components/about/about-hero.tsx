"use client"

import { useScrollAnimation } from "@/hooks/use-scroll-animation"
import { cn } from "@/lib/utils"

export function AboutHero() {
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
            About brain & co.
          </p>
          <h1
            className={cn(
              "mt-4 font-serif text-4xl font-bold tracking-tight text-foreground sm:text-5xl lg:text-6xl opacity-0",
              isVisible && "animate-fade-up animation-delay-100"
            )}
          >
            <span className="text-balance">
              We believe in the power of strategic marketing
            </span>
          </h1>
          <p
            className={cn(
              "mt-6 text-lg leading-relaxed text-muted-foreground opacity-0",
              isVisible && "animate-fade-up animation-delay-200"
            )}
          >
            Founded with a singular vision: to bridge the gap between companies and their ideal audiences through data-driven, creative marketing solutions.
          </p>
        </div>
      </div>
    </section>
  )
}
