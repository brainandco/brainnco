import type { Metadata } from "next"
import { ServicesHero } from "@/components/services/services-hero"
import { ServicesGrid } from "@/components/services/services-grid"
import { ProcessSection } from "@/components/services/process-section"
import { CTASection } from "@/components/home/cta-section"

export const metadata: Metadata = {
  title: "Services",
  description:
    "Explore brain & co.'s marketing services including SEO, PPC, content marketing, social media strategy, and more—for all types of brands and companies.",
}

export default function ServicesPage() {
  return (
    <>
      <ServicesHero />
      <ServicesGrid />
      <ProcessSection />
      <CTASection />
    </>
  )
}
