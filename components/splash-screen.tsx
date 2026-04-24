"use client"

import { useEffect, useState, useRef, useLayoutEffect } from "react"
import { BrandLogo } from "@/components/brand-logo"
import { cn } from "@/lib/utils"

const WIPE_START_MS = 2000
const WIPE_DURATION_MS = 1200
const BLUE_SVG = "/images/SVG/Blue.svg"
const WHITE_SVG = "/images/SVG/White.svg"
const HOLD_MS = 400
const FADE_OUT_MS = 600

type Props = {
  onComplete: () => void
}

export function SplashScreen({ onComplete }: Props) {
  const [reducedMotion, setReducedMotion] = useState(false)
  const [wipeActive, setWipeActive] = useState(false)
  const [contentOnLight, setContentOnLight] = useState(false)
  const [isExiting, setIsExiting] = useState(false)
  const onCompleteRef = useRef(onComplete)
  onCompleteRef.current = onComplete

  const curtainRef = useRef<HTMLDivElement>(null)
  const logoWrapRef = useRef<HTMLDivElement>(null)
  const onLightLayerRef = useRef<HTMLDivElement>(null)
  const onBlueLayerRef = useRef<HTMLDivElement>(null)
  const contentFlippedRef = useRef(false)

  useEffect(() => {
    setReducedMotion(
      typeof window !== "undefined" &&
        window.matchMedia("(prefers-reduced-motion: reduce)").matches
    )
  }, [])

  useEffect(() => {
    if (reducedMotion) return
    const a = new window.Image()
    a.src = WHITE_SVG
    const b = new window.Image()
    b.src = BLUE_SVG
  }, [reducedMotion])

  useLayoutEffect(() => {
    if (reducedMotion) {
      const t = setTimeout(() => onCompleteRef.current(), 1200)
      return () => clearTimeout(t)
    }

    const tWipe = setTimeout(() => setWipeActive(true), WIPE_START_MS)
    const tExit = setTimeout(
      () => setIsExiting(true),
      WIPE_START_MS + WIPE_DURATION_MS + HOLD_MS
    )
    const tDone = setTimeout(
      () => onCompleteRef.current(),
      WIPE_START_MS + WIPE_DURATION_MS + HOLD_MS + FADE_OUT_MS
    )

    return () => {
      clearTimeout(tWipe)
      clearTimeout(tExit)
      clearTimeout(tDone)
    }
  }, [reducedMotion])

  useLayoutEffect(() => {
    if (reducedMotion) return

    const onLight = onLightLayerRef.current
    const onBlue = onBlueLayerRef.current
    if (!onLight || !onBlue) return

    if (!wipeActive) {
      onLight.style.clipPath = "inset(0 100% 0 0)"
      onBlue.style.clipPath = "none"
      return
    }

    if (!curtainRef.current || !logoWrapRef.current) return

    contentFlippedRef.current = false
    setContentOnLight(false)

    let raf = 0
    let done = false
    const t0 = performance.now()

    const applyClips = () => {
      const Lel = onLightLayerRef.current
      const Bel = onBlueLayerRef.current
      const c = curtainRef.current
      const wr = logoWrapRef.current
      if (!Lel || !Bel || !c || !wr) return
      const edge = c.getBoundingClientRect().right
      const b = Math.min(
        document.documentElement.clientWidth,
        typeof window !== "undefined" ? window.innerWidth : 0
      ) || 1
      const wrect = wr.getBoundingClientRect()
      const l = wrect.left
      const r = wrect.right
      const w = r - l
      let frac = 0
      if (w > 0) {
        frac = Math.max(0, Math.min(1, (Math.min(edge, r) - l) / w))
      }
      const p = `${(frac * 100).toFixed(3)}%`
      Lel.style.clipPath = `polygon(0% 0, ${p} 0, ${p} 100%, 0% 100%)`
      Bel.style.clipPath = `polygon(${p} 0, 100% 0, 100% 100%, ${p} 100%)`

      if (frac >= 0.5 && !contentFlippedRef.current) {
        contentFlippedRef.current = true
        setContentOnLight(true)
      }

      const byGeom = edge >= b - 1.5
      const byTime = performance.now() - t0 > WIPE_DURATION_MS + 80
      if (byGeom || byTime) {
        Lel.style.clipPath = "polygon(0% 0, 100% 0, 100% 100%, 0% 100%)"
        Bel.style.clipPath =
          "polygon(100% 0, 100% 0, 100% 100%, 100% 100%)"
        if (!contentFlippedRef.current) {
          contentFlippedRef.current = true
          setContentOnLight(true)
        }
        done = true
      }
    }

    const tick = () => {
      if (done) return
      applyClips()
      if (done) return
      raf = requestAnimationFrame(tick)
    }

    applyClips()
    raf = requestAnimationFrame(tick)

    return () => {
      done = true
      cancelAnimationFrame(raf)
    }
  }, [wipeActive, reducedMotion])

  if (reducedMotion) {
    return (
      <div
        className="fixed inset-0 z-[100] flex flex-col items-center justify-center bg-primary"
        aria-hidden="true"
      >
        <BrandLogo variant="onBlue" className="h-12 w-auto" priority />
        <p className="mt-6 text-sm text-primary-foreground/90">brain &amp; co.</p>
      </div>
    )
  }

  return (
    <div
      className={cn(
        "splash-screen fixed inset-0 z-[100] flex flex-col items-center justify-center overflow-hidden",
        "transition-opacity ease-out",
        isExiting ? "pointer-events-none opacity-0" : "opacity-100"
      )}
      style={{ transitionDuration: `${FADE_OUT_MS}ms` }}
      aria-hidden="true"
    >
      <div className="absolute inset-0 z-0 bg-primary" />
      <div
        className="pointer-events-none absolute inset-0 z-[1] bg-gradient-to-br from-primary-foreground/12 via-transparent to-primary-foreground/5 animate-splash-sheen"
        aria-hidden
      />

      <div
        ref={curtainRef}
        className={cn(
          "absolute inset-0 z-10 bg-background will-change-transform",
          !wipeActive && "-translate-x-full",
          wipeActive && "animate-splash-curtain"
        )}
        style={{ backfaceVisibility: "hidden" }}
      />

      <div className="relative z-20 flex max-w-lg flex-col items-center px-6 text-center">
        <div
          ref={logoWrapRef}
          className="relative h-12 w-[min(200px,75vw)] sm:h-16 sm:w-[min(220px,80vw)]"
        >
          <div
            ref={onBlueLayerRef}
            className="absolute inset-0 flex items-center justify-center [will-change:clip-path]"
          >
            <BrandLogo
              variant="onBlue"
              className="h-12 w-auto sm:h-14"
              priority
            />
          </div>
          <div
            ref={onLightLayerRef}
            className="absolute inset-0 z-[1] flex items-center justify-center [will-change:clip-path]"
          >
            <BrandLogo
              variant="onLight"
              className="h-12 w-auto sm:h-14"
              priority
            />
          </div>
        </div>

        <div
          className={cn(
            "mt-8 space-y-3 sm:mt-10",
            "transition-[color,opacity] duration-300",
            contentOnLight ? "text-primary" : "text-primary-foreground"
          )}
        >
          <p
            className="opacity-0 text-[9px] font-medium uppercase tracking-[0.3em] sm:text-[10px] animate-fade-up"
            style={{ animationDelay: "0.2s", animationFillMode: "forwards" }}
          >
            Strategy · Creative · Data · Growth
          </p>
          <div
            className="flex items-center justify-center gap-2 opacity-0 sm:gap-3 animate-fade-up"
            style={{ animationDelay: "0.4s", animationFillMode: "forwards" }}
          >
            <span
              className={cn(
                "h-px w-8 sm:w-10",
                contentOnLight ? "bg-primary/20" : "bg-primary-foreground/25"
              )}
            />
            <span
              className={cn(
                "text-[10px] font-semibold uppercase tracking-[0.2em] sm:text-xs",
                !contentOnLight && "text-primary-foreground/85",
                contentOnLight && "text-primary/50"
              )}
            >
              Marketing
            </span>
            <span
              className={cn(
                "h-px w-8 sm:w-10",
                contentOnLight ? "bg-primary/20" : "bg-primary-foreground/25"
              )}
            />
          </div>
          <h2
            className="font-serif text-2xl font-bold leading-tight tracking-tight opacity-0 sm:text-3xl animate-fade-up"
            style={{ animationDelay: "0.55s", animationFillMode: "forwards" }}
          >
            <span
              className={cn(
                !contentOnLight ? "text-primary-foreground" : "text-primary"
              )}
            >
              Without
            </span>{" "}
            <span className="text-brand-accent">
              Limits
            </span>
          </h2>
          <p
            className={cn(
              "max-w-sm text-xs font-normal leading-relaxed opacity-0 sm:text-sm animate-fade-up",
              !contentOnLight
                ? "text-primary-foreground/60"
                : "text-muted-foreground"
            )}
            style={{ animationDelay: "0.75s", animationFillMode: "forwards" }}
          >
            Building brands that move business forward — with clarity, courage,
            and measurable results.
          </p>
        </div>
      </div>
    </div>
  )
}
