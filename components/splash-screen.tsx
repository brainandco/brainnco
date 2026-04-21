"use client"

import { useEffect, useState } from "react"

const SPLASH_DURATION_MS = 3200
const FADE_OUT_MS = 600

type Props = {
  onComplete: () => void
}

export function SplashScreen({ onComplete }: Props) {
  const [isExiting, setIsExiting] = useState(false)

  useEffect(() => {
    const exitTimer = setTimeout(() => {
      setIsExiting(true)
    }, SPLASH_DURATION_MS - FADE_OUT_MS)

    const completeTimer = setTimeout(() => {
      onComplete()
    }, SPLASH_DURATION_MS)

    return () => {
      clearTimeout(exitTimer)
      clearTimeout(completeTimer)
    }
  }, [onComplete])

  return (
    <div
      className={`splash-screen fixed inset-0 z-[100] flex flex-col items-center justify-center bg-background transition-opacity duration-500 ease-out ${
        isExiting ? "opacity-0" : "opacity-100"
      }`}
      aria-hidden="true"
    >
      {/* Animated logo text */}
      <div className="flex flex-col items-center text-center px-6">
        <h1 className="font-serif text-4xl font-bold tracking-tight text-foreground sm:text-5xl md:text-6xl lg:text-7xl">
          <span
            className="inline-block opacity-0 animate-fade-up"
            style={{ animationDelay: "0.2s", animationFillMode: "forwards" }}
          >
            brain
          </span>
          <span
            className="mx-1.5 inline-block opacity-0 animate-fade-up"
            style={{ animationDelay: "0.5s", animationFillMode: "forwards" }}
          >
            &amp;
          </span>
          <span
            className="inline-block opacity-0 animate-fade-up"
            style={{ animationDelay: "0.7s", animationFillMode: "forwards" }}
          >
            co.
          </span>
        </h1>
        <p
          className="mt-5 max-w-sm text-sm font-medium uppercase tracking-[0.2em] text-muted-foreground opacity-0 sm:text-base animate-fade-up"
          style={{ animationDelay: "1.1s", animationFillMode: "forwards" }}
        >
          Marketing Without Limits
        </p>
      </div>
    </div>
  )
}
