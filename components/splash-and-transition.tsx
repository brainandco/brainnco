"use client"

import { usePathname } from "next/navigation"
import { useState, useCallback } from "react"
import { SplashScreen } from "@/components/splash-screen"

type Props = {
  children: React.ReactNode
}

export function SplashAndTransition({ children }: Props) {
  const pathname = usePathname()
  const [showSplash, setShowSplash] = useState(true)

  const handleSplashComplete = useCallback(() => {
    setShowSplash(false)
  }, [])

  return (
    <>
      {showSplash && (
        <SplashScreen onComplete={handleSplashComplete} />
      )}
      <div
        key={pathname}
        className="min-h-screen transition-opacity duration-500 ease-out animate-page-in"
        style={{ opacity: showSplash ? 0 : 1, pointerEvents: showSplash ? "none" : "auto" }}
      >
        {children}
      </div>
    </>
  )
}
