"use client"

import { useCallback, useEffect, useState, useRef } from "react"
import { BrandLogo } from "@/components/brand-logo"
import { cn } from "@/lib/utils"
import { ChevronUp, GripHorizontal } from "lucide-react"

const BLUE_SVG = "/images/SVG/Blue.svg"
const WHEEL_DAMP = 0.6
const DISMISS_WHEEL = 0.12
const DISMISS_TOUCH = 0.15

type Phase = "shutterReady" | "dismissing"

type Props = {
  onComplete: () => void
  onShutterReady?: () => void
}

function clampY(y: number) {
  if (typeof window === "undefined") return y
  return Math.max(-window.innerHeight, Math.min(0, y))
}

export function SplashScreen({ onComplete, onShutterReady }: Props) {
  const [reducedMotion, setReducedMotion] = useState(false)
  const [phase, setPhase] = useState<Phase>("shutterReady")
  const [yDrag, setYDrag] = useState(0)

  const phaseRef = useRef<Phase>("shutterReady")
  phaseRef.current = phase
  const yDragRef = useRef(0)
  yDragRef.current = yDrag

  const onCompleteRef = useRef(onComplete)
  onCompleteRef.current = onComplete
  const onShutterReadyRef = useRef(onShutterReady)
  onShutterReadyRef.current = onShutterReady

  const layerRef = useRef<HTMLDivElement>(null)
  const onCompleteOnceRef = useRef(false)
  const touchStartRef = useRef<{ y0: number; yDrag0: number } | null>(null)
  const touchingRef = useRef(false)
  const [snapWithTransition, setSnapWithTransition] = useState(false)

  useEffect(() => {
    setReducedMotion(
      typeof window !== "undefined" &&
        window.matchMedia("(prefers-reduced-motion: reduce)").matches
    )
  }, [])

  useEffect(() => {
    if (reducedMotion) return
    const a = new window.Image()
    a.src = BLUE_SVG
  }, [reducedMotion])

  const shutterNotified = useRef(false)
  useEffect(() => {
    if (!shutterNotified.current) {
      shutterNotified.current = true
      onShutterReadyRef.current?.()
    }
  }, [])

  const startDismiss = useCallback(() => {
    if (phaseRef.current === "dismissing" || onCompleteOnceRef.current) return
    const h = typeof window !== "undefined" ? window.innerHeight : 800
    setSnapWithTransition(false)
    yDragRef.current = -h
    setYDrag(-h)
    setPhase("dismissing")
  }, [])

  useEffect(() => {
    if (onCompleteOnceRef.current) return
    const onKey = (e: KeyboardEvent) => {
      if (e.key !== "Escape") return
      if (phaseRef.current !== "shutterReady") return
      e.preventDefault()
      startDismiss()
    }
    window.addEventListener("keydown", onKey)
    return () => window.removeEventListener("keydown", onKey)
  }, [startDismiss])

  useEffect(() => {
    if (reducedMotion) return
    if (phase !== "shutterReady" && phase !== "dismissing") return
    const el = layerRef.current
    if (!el) return

    const onWheel = (e: WheelEvent) => {
      if (phaseRef.current !== "shutterReady" || onCompleteOnceRef.current) return
      e.preventDefault()
      e.stopPropagation()
      const h = window.innerHeight
      const t = -DISMISS_WHEEL * h
      const next = clampY(yDragRef.current - e.deltaY * WHEEL_DAMP)
      if (next < t) {
        startDismiss()
        return
      }
      yDragRef.current = next
      setYDrag(next)
    }

    const onTouchStart = (e: TouchEvent) => {
      if (e.touches.length !== 1) return
      if (phaseRef.current !== "shutterReady") return
      setSnapWithTransition(false)
      touchingRef.current = true
      touchStartRef.current = {
        y0: e.touches[0].clientY,
        yDrag0: yDragRef.current,
      }
    }

    const onTouchMove = (e: TouchEvent) => {
      if (!touchingRef.current || e.touches.length !== 1) return
      e.preventDefault()
      if (phaseRef.current !== "shutterReady") return
      const t0 = touchStartRef.current
      if (!t0) return
      const d = e.touches[0].clientY - t0.y0
      const next = clampY(t0.yDrag0 + d)
      yDragRef.current = next
      setYDrag(next)
    }

    const onTouchEnd = () => {
      if (!touchingRef.current) return
      touchingRef.current = false
      touchStartRef.current = null
      const h = window.innerHeight
      const t = -DISMISS_TOUCH * h
      const y = yDragRef.current
      if (y < t) {
        startDismiss()
        return
      }
      setSnapWithTransition(true)
      yDragRef.current = 0
      setYDrag(0)
      window.setTimeout(() => setSnapWithTransition(false), 320)
    }

    el.addEventListener("wheel", onWheel, { passive: false })
    el.addEventListener("touchstart", onTouchStart, { passive: true })
    el.addEventListener("touchmove", onTouchMove, { passive: false })
    el.addEventListener("touchend", onTouchEnd)
    el.addEventListener("touchcancel", onTouchEnd)
    return () => {
      el.removeEventListener("wheel", onWheel)
      el.removeEventListener("touchstart", onTouchStart)
      el.removeEventListener("touchmove", onTouchMove)
      el.removeEventListener("touchend", onTouchEnd)
      el.removeEventListener("touchcancel", onTouchEnd)
    }
  }, [phase, reducedMotion, startDismiss])

  const onTranslateEnd = (e: React.TransitionEvent) => {
    if (e.propertyName !== "transform" || e.target !== layerRef.current) return
    if (phaseRef.current !== "dismissing") return
    if (onCompleteOnceRef.current) return
    onCompleteOnceRef.current = true
    onCompleteRef.current()
  }

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

  const canInteract = phase === "shutterReady" || phase === "dismissing"
  return (
    <div
      className="pointer-events-auto fixed inset-0 z-[100] overflow-hidden"
      style={{ touchAction: canInteract ? "none" : "auto" }}
    >
      <div
        ref={layerRef}
        className={cn(
          "relative h-[100dvh] w-full",
          phase === "dismissing" && "duration-500 ease-out transition-transform",
          snapWithTransition && "duration-300 ease-out transition-transform"
        )}
        style={{
          transform: `translate3d(0, ${yDrag}px, 0)`,
        }}
        onTransitionEnd={onTranslateEnd}
      >
        <div className="absolute inset-0 z-0 bg-primary" />
        <div
          className="pointer-events-none absolute inset-0 z-[1] bg-gradient-to-br from-primary-foreground/12 via-transparent to-primary-foreground/5 animate-splash-sheen"
          aria-hidden
        />

        <div className="absolute inset-0 z-20 grid h-full min-h-0 w-full place-content-center place-items-center overflow-hidden px-6 text-center">
          <div className="mx-auto w-full max-w-lg shrink-0 text-primary-foreground">
            <div className="relative mx-auto h-12 w-[min(200px,75vw)] sm:h-16 sm:w-[min(220px,80vw)]">
              <BrandLogo variant="onBlue" className="h-12 w-auto sm:h-14" priority />
            </div>

            <div
              className={cn("mt-8 w-full max-w-md space-y-3 sm:mt-10", "text-primary-foreground")}
            >
              <div
                className="flex w-full items-center justify-center gap-2 opacity-0 sm:gap-3 animate-fade-up"
                style={{ animationDelay: "0.15s", animationFillMode: "forwards" }}
              >
                <span className="h-px w-8 bg-primary-foreground/25 sm:w-10" />
                <div className="inline-flex min-w-0 max-w-full items-baseline justify-center gap-0">
                  <span className="shrink-0 text-[10px] font-semibold uppercase tracking-[0.2em] text-primary-foreground/85 sm:text-lg">
                    Marketing
                  </span>
                  <h2
                    className="m-0 inline font-serif text-2xl font-bold leading-tight tracking-tight opacity-0 sm:text-3xl animate-fade-up"
                    style={{ animationDelay: "0.3s", animationFillMode: "forwards" }}
                  >
                    <span>Without</span>{" "}
                    <span className="text-brand-accent">Limits</span>
                  </h2>
                </div>
                <span className="h-px w-8 bg-primary-foreground/25 sm:w-10" />
              </div>
            </div>
          </div>
        </div>

        {canInteract && (
          <div
            className="pointer-events-none absolute inset-x-0 bottom-0 z-50 flex w-full items-center justify-center"
            role="group"
            aria-label="Open site"
          >
            <div
              className="mb-[max(1.5rem,env(safe-area-inset-bottom))] flex w-full max-w-sm flex-col items-center justify-center gap-2 rounded-t-2xl border-t border-x border-primary-foreground/20 bg-primary-foreground/5 px-6 py-4 text-center backdrop-blur-sm sm:mb-0 sm:max-w-md sm:px-8"
            >
              <GripHorizontal
                className="h-5 w-5 text-primary-foreground/50"
                strokeWidth={1.5}
                aria-hidden
              />
              <div className="flex flex-col items-center gap-1.5 text-primary-foreground">
                <ChevronUp
                  className="h-6 w-6 text-primary-foreground/80"
                  strokeWidth={1.5}
                  aria-hidden
                />
                <p className="w-full text-center text-xs font-medium leading-relaxed text-primary-foreground/80 sm:text-sm">
                  Swipe or scroll up
                </p>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  )
}
