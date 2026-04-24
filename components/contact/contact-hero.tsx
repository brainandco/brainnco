"use client"

import { useScrollAnimation } from "@/hooks/use-scroll-animation"
import { cn } from "@/lib/utils"

export function ContactHero() {
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
            Get In Touch
          </p>
          <h1
            className={cn(
              "mt-4 font-serif text-4xl font-bold tracking-tight text-brand-accent sm:text-5xl lg:text-6xl opacity-0",
              isVisible && "animate-fade-up animation-delay-100"
            )}
          >
            <span className="text-balance">
              {"Let's start something great together"}
            </span>
          </h1>
          <p
            className={cn(
              "mt-6 text-lg leading-relaxed text-muted-foreground opacity-0",
              isVisible && "animate-fade-up animation-delay-200"
            )}
          >
            Whether you have a specific project in mind or want to explore how we can help your business grow, we would love to hear from you.
          </p>
        </div>
      </div>
    </section>
  )
}
