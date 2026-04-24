"use client"

import { useEffect, useState } from "react"

const DEFAULT_THRESHOLD = 32

/**
 * true when window.scrollY is past a threshold; updates on scroll (passive).
 */
export function useHeaderScrolled(threshold = DEFAULT_THRESHOLD) {
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const run = () => {
      setScrolled(window.scrollY > threshold)
    }
    run()
    window.addEventListener("scroll", run, { passive: true })
    return () => window.removeEventListener("scroll", run)
  }, [threshold])

  return scrolled
}
