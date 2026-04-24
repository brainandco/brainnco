"use client"

import { useEffect, useRef, useState } from "react"

export type UseScrollOptions = {
  /** Intersection ratio threshold (default 0.1) */
  threshold?: number
  /**
   * If true, fire once and stop observing. If false, follow intersection (in/out) for continuous reveal.
   * @default true
   */
  once?: boolean
  rootMargin?: string
}

function parseOptions(
  input: number | UseScrollOptions | undefined
): Required<UseScrollOptions> {
  if (input === undefined || typeof input === "number") {
    return {
      threshold: typeof input === "number" ? input : 0.1,
      once: true,
      rootMargin: "0px 0px -6% 0px",
    }
  }
  return {
    threshold: input.threshold ?? 0.1,
    once: input.once ?? true,
    rootMargin: input.rootMargin ?? "0px 0px -6% 0px",
  }
}

/**
 * @param input - numeric threshold (legacy) or { threshold, once, rootMargin }
 */
export function useScrollAnimation(
  input: number | UseScrollOptions = 0.1
) {
  const { threshold, once, rootMargin } = parseOptions(input)
  const ref = useRef<HTMLDivElement>(null)
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    if (
      typeof window !== "undefined" &&
      window.matchMedia("(prefers-reduced-motion: reduce)").matches
    ) {
      setIsVisible(true)
      return
    }
    const element = ref.current
    if (!element) return

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (once) {
          if (entry.isIntersecting) {
            setIsVisible(true)
            observer.unobserve(element)
          }
        } else {
          setIsVisible(entry.isIntersecting)
        }
      },
      { threshold, rootMargin }
    )

    observer.observe(element)

    return () => {
      observer.unobserve(element)
    }
  }, [threshold, once, rootMargin])

  return { ref, isVisible }
}
