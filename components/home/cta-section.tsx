"use client"

import Link from "next/link"
import { ArrowRight, Phone } from "lucide-react"
import { AnimatedSection } from "@/components/animated-section"
import { cn } from "@/lib/utils"
import { useScrollAnimation } from "@/hooks/use-scroll-animation"

export function CTASection() {
  const { ref, isVisible } = useScrollAnimation(0.2)

  return (
    <section className="py-24 lg:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <AnimatedSection animation="scale-in">
          <div
            ref={ref}
            className="relative rounded-3xl bg-primary px-8 py-16 text-center text-primary-foreground sm:px-16 lg:py-24 overflow-hidden"
          >
            {/* Decorative dots */}
            <div className="absolute top-8 left-8 h-2 w-2 rounded-full bg-primary-foreground/15 animate-pulse-dot" />
            <div className="absolute bottom-12 right-12 h-3 w-3 rounded-full bg-primary-foreground/15 animate-pulse-dot animation-delay-300" />
            <div className="absolute top-1/3 right-8 h-1.5 w-1.5 rounded-full bg-primary-foreground/10 animate-pulse-dot animation-delay-600" />

            <h2
              className={cn(
                "font-serif text-3xl font-bold tracking-tight sm:text-4xl lg:text-5xl text-balance text-brand-accent opacity-0",
                isVisible && "animate-slide-up-stagger"
              )}
            >
              Ready to accelerate your growth?
            </h2>
            <p
              className={cn(
                "mx-auto mt-6 max-w-xl text-base leading-relaxed text-primary-foreground/75 opacity-0",
                isVisible && "animate-blur-in animation-delay-200"
              )}
            >
              {"Let's discuss how brain & co. can help transform your marketing strategy and drive measurable business results."}
            </p>
            <div
              className={cn(
                "mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row opacity-0",
                isVisible && "animate-fade-up animation-delay-400"
              )}
            >
              <Link
                href="/contact"
                className="group inline-flex items-center gap-2 rounded-full bg-brand-accent px-8 py-4 text-sm font-semibold text-primary transition-all duration-300 hover:scale-105 hover:shadow-xl hover:shadow-brand-accent/30"
              >
                Start a Conversation
                <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
              </Link>
              <a
                href="tel:+966554231498"
                className="group inline-flex items-center gap-2 rounded-full border-2 border-brand-accent/50 px-8 py-4 text-sm font-medium text-brand-accent transition-all duration-300 hover:bg-brand-accent/10 hover:border-brand-accent"
              >
                <Phone className="h-4 w-4 shrink-0" />
                <span>Call Us</span>
              </a>
            </div>
          </div>
        </AnimatedSection>
      </div>
    </section>
  )
}
