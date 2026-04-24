import Image from "next/image"
import { cn } from "@/lib/utils"

const BLUE = "/images/SVG/Blue.svg"
const WHITE = "/images/SVG/White.svg"

type BrandLogoProps = {
  /** Use on light backgrounds (white / gray sections). */
  variant: "onLight" | "onBlue"
  className?: string
  priority?: boolean
}

/**
 * Logos: Blue.svg on light sections, White.svg on primary (#1d488f) headers/footers and blue blocks.
 */
export function BrandLogo({ variant, className, priority }: BrandLogoProps) {
  const src = variant === "onBlue" ? WHITE : BLUE
  return (
    <Image
      src={src}
      alt="brain & co."
      width={200}
      height={56}
      className={cn("h-7 w-auto sm:h-8", className)}
      priority={priority}
      unoptimized
    />
  )
}
