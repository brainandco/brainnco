import { Hero } from "@/components/home/hero"
import { HeroSupportSection } from "@/components/home/hero-support-section"
import { Overview } from "@/components/home/overview"
import { KeyFactors } from "@/components/home/key-factors"
import { FeaturedProjects } from "@/components/home/featured-projects"
import { IndustryExpertise } from "@/components/home/industry-expertise"
import { ClientsSlider } from "@/components/home/clients-slider"
import { Partners } from "@/components/home/partners"
import { TestimonialsPreview } from "@/components/home/testimonials-preview"
import { CTASection } from "@/components/home/cta-section"

/** Set to true to hide client stories, trusted-by, and testimonials sections (components remain in codebase). */
const HIDE_CLIENT_SECTIONS = true
/** Set to true to hide the featured projects section (components remain in codebase). */
const HIDE_PROJECTS_SECTION = true

export default function HomePage() {
  return (
    <>
      <Hero />
      <HeroSupportSection />
      <Overview />
      <KeyFactors />
      {!HIDE_PROJECTS_SECTION && <FeaturedProjects />}
      <IndustryExpertise />
      {!HIDE_CLIENT_SECTIONS && (
        <>
          <ClientsSlider />
          <Partners />
          <TestimonialsPreview />
        </>
      )}
      <CTASection />
    </>
  )
}
