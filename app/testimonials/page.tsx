import type { Metadata } from "next"
import { TestimonialsHero } from "@/components/testimonials/testimonials-hero"
import { TestimonialsGrid } from "@/components/testimonials/testimonials-grid"
import { ResultsShowcase } from "@/components/testimonials/results-showcase"
import { CTASection } from "@/components/home/cta-section"

export const metadata: Metadata = {
  title: "Client Testimonials",
  description:
    "Read success stories and feedback from brain & co. clients who have experienced transformative marketing results.",
}

export default function TestimonialsPage() {
  return (
    <>
      <TestimonialsHero />
      <ResultsShowcase />
      <TestimonialsGrid />
      <CTASection />
    </>
  )
}
