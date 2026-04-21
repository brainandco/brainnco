import type { Metadata } from "next"
import { ProjectsHero } from "@/components/projects/projects-hero"
import { ProjectsGallery } from "@/components/projects/projects-gallery"
import { Partners } from "@/components/home/partners"
import { CTASection } from "@/components/home/cta-section"

export const metadata: Metadata = {
  title: "Projects",
  description:
    "Explore our portfolio of successful marketing campaigns and the measurable results we've delivered for brands and companies of all kinds.",
}

export default function ProjectsPage() {
  return (
    <>
      <ProjectsHero />
      <ProjectsGallery />
      <Partners />
      <CTASection />
    </>
  )
}
