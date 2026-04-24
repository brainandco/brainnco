"use client"

import { cn } from "@/lib/utils"
import { useScrollAnimation } from "@/hooks/use-scroll-animation"

const transitionBase =
  "transition-all duration-700 ease-[cubic-bezier(0.16,1,0.3,1)] will-change-[transform,opacity]"

type SectionAnimation =
  | "fade-up"
  | "fade-in"
  | "slide-in-left"
  | "slide-in-right"
  | "scale-in"
  | "blur-in"
  | "slide-up-stagger"

const REPEAT_MAP: Record<SectionAnimation, { in: string; out: string }> = {
  "fade-up": {
    in: "opacity-100 translate-y-0",
    out: "opacity-0 translate-y-8",
  },
  "slide-up-stagger": {
    in: "opacity-100 translate-y-0",
    out: "opacity-0 translate-y-8",
  },
  "fade-in": {
    in: "opacity-100",
    out: "opacity-0",
  },
  "slide-in-left": {
    in: "opacity-100 translate-x-0",
    out: "opacity-0 -translate-x-8",
  },
  "slide-in-right": {
    in: "opacity-100 translate-x-0",
    out: "opacity-0 translate-x-8",
  },
  "scale-in": {
    in: "opacity-100 scale-100",
    out: "opacity-0 scale-[0.96]",
  },
  "blur-in": {
    in: "opacity-100 blur-0",
    out: "opacity-0 blur-sm",
  },
}

function repeatClasses(
  animation: string,
  visible: boolean
): string {
  const k =
    REPEAT_MAP[animation as SectionAnimation] ?? REPEAT_MAP["fade-up"]
  return cn(transitionBase, visible ? k.in : k.out)
}

/** Map legacy `animation-delay-*` to transition-delay for repeat mode. */
function transitionDelayClass(delay?: string) {
  if (!delay) return undefined
  const m = delay.match(/animation-delay-(\d+)/)
  if (m) return `delay-[${m[1]}ms]`
  return undefined
}

interface AnimatedSectionProps {
  children: React.ReactNode
  className?: string
  animation?: "fade-up" | "fade-in" | "slide-in-left" | "slide-in-right" | "scale-in" | "blur-in" | "slide-up-stagger"
  delay?: string
  /**
   * `repeat` = reveal when entering the viewport, soft-hide when leaving (scroll up/down).
   * `once` = single keyframe run (legacy).
   */
  reveal?: "once" | "repeat"
}

export function AnimatedSection({
  children,
  className,
  animation = "fade-up",
  delay,
  reveal = "repeat",
}: AnimatedSectionProps) {
  const { ref, isVisible } = useScrollAnimation(
    reveal === "repeat"
      ? { once: false, threshold: 0.12, rootMargin: "0px 0px -4% 0px" }
      : { once: true, threshold: 0.1, rootMargin: "0px 0px -6% 0px" }
  )

  if (reveal === "once") {
    return (
      <div
        ref={ref}
        className={cn(
          "opacity-0",
          isVisible && `animate-${animation}`,
          delay && isVisible && delay,
          className
        )}
      >
        {children}
      </div>
    )
  }

  return (
    <div
      ref={ref}
      className={cn(
        repeatClasses(animation, isVisible),
        transitionDelayClass(delay),
        className
      )}
    >
      {children}
    </div>
  )
}
