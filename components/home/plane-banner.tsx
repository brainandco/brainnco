"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import { Plane, Mail, Phone, MessageCircle, ArrowRight } from "lucide-react"
import { cn } from "@/lib/utils"

type Phase = "plane-enter" | "plane-wait" | "plane-exit" | "banner-show"

const ENTER_DURATION = 2000
const WAIT_DURATION = 2800
const EXIT_DURATION = 1800
const BANNER_DELAY = 300

export function PlaneBanner() {
  const [phase, setPhase] = useState<Phase>("plane-enter")
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
  }, [])

  useEffect(() => {
    if (!mounted) return
    const t1 = setTimeout(() => setPhase("plane-wait"), ENTER_DURATION)
    const t2 = setTimeout(() => setPhase("plane-exit"), ENTER_DURATION + WAIT_DURATION)
    const t3 = setTimeout(
      () => setPhase("banner-show"),
      ENTER_DURATION + WAIT_DURATION + EXIT_DURATION + BANNER_DELAY
    )
    const fallback = setTimeout(() => setPhase("banner-show"), 12000)
    return () => {
      clearTimeout(t1)
      clearTimeout(t2)
      clearTimeout(t3)
      clearTimeout(fallback)
    }
  }, [mounted])

  return (
    <section className="relative border-y border-border bg-secondary/50 py-24 lg:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="relative flex min-h-[380px] flex-col items-center justify-center">
          <div className="absolute inset-0 flex flex-col items-center justify-center">
            <p
              className={cn(
                "absolute left-1/2 top-1/2 z-10 -translate-x-1/2 -translate-y-1/2 whitespace-nowrap text-center text-xl font-semibold text-primary transition-all duration-500 sm:text-2xl",
                phase === "plane-wait"
                  ? "opacity-100 scale-100"
                  : "opacity-0 scale-95 pointer-events-none"
              )}
            >
              Want to reach us?
            </p>

            <div
              className={cn(
                "absolute left-1/2 top-1/2 flex h-16 w-16 -translate-x-1/2 items-center justify-center rounded-full border-2 border-primary/25 bg-background shadow-lg transition-all duration-700 ease-out sm:h-20 sm:w-20",
                phase === "plane-enter" && "translate-y-[85%] opacity-100",
                phase === "plane-wait" && "-translate-y-1/2 opacity-100",
                phase === "plane-exit" && "-translate-y-[130%] opacity-70",
                phase === "banner-show" && "-translate-y-[150%] opacity-0 pointer-events-none"
              )}
            >
              <Plane className="h-7 w-7 text-primary sm:h-8 sm:w-8" aria-hidden />
            </div>
          </div>

          <div
            className={cn(
              "relative z-20 w-full max-w-4xl transition-all duration-700 ease-out",
              phase === "banner-show"
                ? "translate-y-0 opacity-100"
                : "translate-y-16 opacity-0 pointer-events-none"
            )}
          >
            <div className="rounded-2xl border border-border bg-card p-8 shadow-xl shadow-primary/5 sm:p-10 lg:p-12">
              <p className="text-center font-serif text-2xl font-bold leading-snug text-primary sm:text-3xl lg:text-4xl">
                Your next growth story starts with a conversation.
              </p>
              <p className="mx-auto mt-4 max-w-2xl text-center text-sm leading-relaxed text-muted-foreground sm:text-base">
                Whether you&apos;re ready to scale, need a fresh strategy, or just want to explore—we&apos;re here. Reach out and let&apos;s build something that drives results.
              </p>

              <div className="mt-8 flex flex-wrap items-center justify-center gap-4">
                <Link
                  href="/contact"
                  className="group inline-flex items-center gap-2 rounded-full bg-primary px-6 py-3.5 text-sm font-medium text-primary-foreground shadow-md transition-all hover:scale-[1.02] hover:shadow-lg hover:opacity-95"
                >
                  <Mail className="h-4 w-4" />
                  Get in Touch
                  <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5" />
                </Link>
                <Link
                  href="/contact"
                  className="inline-flex items-center gap-2 rounded-full border-2 border-primary/25 px-6 py-3.5 text-sm font-medium text-foreground transition-all hover:border-primary/50 hover:bg-primary/5"
                >
                  <MessageCircle className="h-4 w-4" />
                  Book a Call
                </Link>
                <a
                  href="mailto:contact@brainnco.com"
                  className="inline-flex items-center gap-2 rounded-full border-2 border-primary/25 px-6 py-3.5 text-sm font-medium text-foreground transition-all hover:border-primary/50 hover:bg-primary/5"
                >
                  <Phone className="h-4 w-4" />
                  Email Us
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
