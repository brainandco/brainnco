"use client"

import { useEffect, useState } from "react"
import { BrandLogo } from "@/components/brand-logo"

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
      className={`splash-screen fixed inset-0 z-[100] flex flex-col items-center justify-center bg-primary transition-opacity duration-500 ease-out ${
        isExiting ? "opacity-0" : "opacity-100"
      }`}
      aria-hidden="true"
    >
      <div className="flex flex-col items-center text-center px-6">
        <BrandLogo variant="onBlue" className="h-12 w-auto sm:h-14" priority />
        <p
          className="mt-8 max-w-sm text-sm font-medium uppercase tracking-[0.2em] text-brand-accent opacity-0 sm:text-base animate-fade-up"
          style={{ animationDelay: "0.4s", animationFillMode: "forwards" }}
        >
          Marketing Without Limits
        </p>
      </div>
    </div>
  )
}
