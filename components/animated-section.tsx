"use client"

import { cn } from "@/lib/utils"
import { useScrollAnimation } from "@/hooks/use-scroll-animation"

interface AnimatedSectionProps {
  children: React.ReactNode
  className?: string
  animation?: "fade-up" | "fade-in" | "slide-in-left" | "slide-in-right" | "scale-in" | "blur-in" | "slide-up-stagger"
  delay?: string
}

export function AnimatedSection({
  children,
  className,
  animation = "fade-up",
  delay,
}: AnimatedSectionProps) {
  const { ref, isVisible } = useScrollAnimation(0.1)

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
