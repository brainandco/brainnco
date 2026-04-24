"use client"

import Link from "next/link"
import { ArrowRight, TrendingUp } from "lucide-react"
import { useScrollAnimation } from "@/hooks/use-scroll-animation"
import { cn } from "@/lib/utils"

export function Hero() {
  const { ref, isVisible } = useScrollAnimation(0.05)

  return (
    <section
      ref={ref}
      className="relative min-h-screen flex flex-col justify-center overflow-hidden"
    >
      {/* Base + gradient – full coverage */}
      <div className="absolute inset-0 bg-background" />
      <div
        className="absolute inset-0 opacity-[0.5]"
        style={{
          backgroundImage: `
            linear-gradient(rgba(0,0,0,0.04) 1px, transparent 1px),
            linear-gradient(90deg, rgba(0,0,0,0.04) 1px, transparent 1px)
          `,
          backgroundSize: "48px 48px",
        }}
      />
      {/* Soft blobs */}
      {/* <div className="absolute -right-[15%] -top-[5%] h-[60vmax] w-[60vmax] rounded-full bg-gradient-to-br from-neutral-200/20 to-transparent blur-3xl animate-hero-blob" />
      <div className="absolute -left-[10%] bottom-[10%] h-[40vmax] w-[40vmax] rounded-full bg-gradient-to-tr from-neutral-100/25 to-transparent blur-3xl animate-hero-blob" style={{ animationDelay: "-4s" }} /> */}

      {/* Full-width top strip – uses space, adds appeal */}
      {/* <div className="relative z-10 border-b border-foreground/10 bg-white/60 backdrop-blur-sm">
        <div className="mx-auto flex max-w-7xl flex-wrap items-center justify-center gap-x-8 gap-y-3 px-6 py-3 text-center lg:justify-between lg:px-8">
          <p className="text-xs font-semibold uppercase tracking-widest text-muted-foreground">
            Results-driven marketing for every brand
          </p>
          <div className="flex items-center gap-6">
            <span className="flex items-center gap-1.5 text-xs text-foreground">
              <TrendingUp className="h-3.5 w-3.5" />
              <span>200+ clients</span>
            </span>
            <span className="hidden text-foreground/40 sm:inline">|</span>
            <span className="text-xs text-muted-foreground">Saudi & MENA focus</span>
          </div>
        </div>
      </div> */}

      {/* Main content – centered, wide spread, equal space both sides */}
      <div className="relative z-10 mx-auto w-full max-w-7xl flex-1 px-6 pt-24 pb-12 sm:pt-28 sm:pb-16 lg:px-8 lg:pt-32 lg:pb-20">
        <div className="mx-auto w-full max-w-6xl text-center">
            <p
              className={cn(
                "text-xs font-semibold uppercase tracking-[0.2em] text-muted-foreground opacity-0",
                isVisible && "animate-hero-reveal-up"
              )}
              style={isVisible ? { animationDelay: "0ms", animationFillMode: "forwards" } : undefined}
            >
              Marketing without limits.
            </p>
            <h1 className="mt-3 font-serif font-bold leading-[1.08] tracking-tight">
              <span
                className={cn(
                  "block text-4xl text-primary opacity-0 sm:text-5xl md:text-6xl lg:text-6xl xl:text-7xl",
                  isVisible && "animate-hero-reveal-up"
                )}
                style={isVisible ? { animationDelay: "60ms", animationFillMode: "forwards" } : undefined}
              >
                We build
              </span>
              <span
                className={cn(
                  "block text-5xl text-brand-accent opacity-0 sm:text-6xl md:text-7xl lg:text-7xl xl:text-8xl",
                  isVisible && "animate-hero-reveal-up"
                )}
                style={isVisible ? { animationDelay: "180ms", animationFillMode: "forwards" } : undefined}
              >
                brands
              </span>
              <span
                className={cn(
                  "mt-1 block opacity-0 sm:mt-2",
                  isVisible && "animate-hero-reveal-up"
                )}
                style={isVisible ? { animationDelay: "320ms", animationFillMode: "forwards" } : undefined}
              >
                <span className="text-2xl font-medium text-muted-foreground sm:text-3xl md:text-4xl lg:text-4xl">
                  that{" "}
                </span>
                <span className="relative inline-block">
                  <span className="relative z-10 text-2xl font-bold text-primary sm:text-3xl md:text-4xl lg:text-4xl">
                    drive growth
                  </span>
                  <span
                    className={cn(
                      "absolute -bottom-0.5 left-0 right-0 h-1.5 origin-left rounded-full bg-primary/30 md:h-2",
                      isVisible && "animate-hero-line"
                    )}
                    style={isVisible ? { animationDelay: "520ms", animationFillMode: "forwards" } : undefined}
                  />
                </span>
              </span>
            </h1>
            <p
              className={cn(
                "mx-auto mt-6 max-w-2xl text-sm leading-relaxed text-muted-foreground opacity-0 sm:text-base",
                isVisible && "animate-hero-reveal-up"
              )}
              style={isVisible ? { animationDelay: "420ms", animationFillMode: "forwards" } : undefined}
            >
              Strategic marketing that transforms ambitious companies into market leaders. Data-driven, creative, results-focused.
            </p>
            <div
              className={cn(
                "mt-8 flex flex-wrap justify-center gap-4 opacity-0",
                isVisible && "animate-hero-reveal-up"
              )}
              style={isVisible ? { animationDelay: "580ms", animationFillMode: "forwards" } : undefined}
            >
              <Link
                href="/services"
                className="group inline-flex items-center gap-2 rounded-full bg-brand-accent px-7 py-3.5 text-sm font-semibold text-primary shadow-lg transition-all hover:scale-[1.02] hover:shadow-xl hover:shadow-brand-accent/35 hover:opacity-95"
              >
                Explore Our Services
                <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5" />
              </Link>
            </div>
        </div>
      </div>

      {/* Scroll cue */}
      <div
        className={cn(
          "absolute bottom-6 left-1/2 flex -translate-x-1/2 flex-col items-center gap-2 opacity-0",
          isVisible && "animate-fade-in"
        )}
        style={isVisible ? { animationDelay: "900ms", animationFillMode: "forwards" } : undefined}
      >
        <span className="text-[10px] font-medium uppercase tracking-[0.2em] text-muted-foreground">
          Scroll
        </span>
        <div className="h-8 w-px bg-gradient-to-b from-primary/35 to-transparent animate-float" />
      </div>
    </section>
  )
}
