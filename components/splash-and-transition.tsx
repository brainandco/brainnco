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
  const [underlayVisible, setUnderlayVisible] = useState(false)

  const handleSplashComplete = useCallback(() => {
    setShowSplash(false)
  }, [])

  const handleShutterReady = useCallback(() => {
    setUnderlayVisible(true)
  }, [])

  const pageVisible = !showSplash || underlayVisible

  return (
    <>
      {showSplash && (
        <SplashScreen
          onComplete={handleSplashComplete}
          onShutterReady={handleShutterReady}
        />
      )}
      <div
        key={pathname}
        className="min-h-screen transition-opacity duration-500 ease-out animate-page-in"
        style={{
          opacity: pageVisible ? 1 : 0,
          pointerEvents: showSplash ? "none" : "auto",
        }}
      >
        {children}
      </div>
    </>
  )
}
