"use client"

import Image from "next/image"
import Link from "next/link"
import { ArrowUpRight } from "lucide-react"
import { AnimatedSection } from "@/components/animated-section"
import { cn } from "@/lib/utils"
import { useScrollAnimation } from "@/hooks/use-scroll-animation"

const projects = [
  {
    title: "TechVault Growth Campaign",
    category: "SEO & Content Strategy",
    image: "/images/project-1.jpg",
    result: "312% increase in organic traffic",
  },
  {
    title: "Apex Industries Rebrand",
    category: "Brand Strategy & PPC",
    image: "/images/project-2.jpg",
    result: "5x return on ad spend",
  },
  {
    title: "CloudSync Market Entry",
    category: "Digital Marketing & Analytics",
    image: "/images/project-3.jpg",
    result: "150+ enterprise leads in 90 days",
  },
  {
    title: "DataFlow Lead Gen Program",
    category: "Content & Demand Gen",
    image: "/images/project-4.jpg",
    result: "2,400+ downloads, 18% lead-to-opportunity",
  },
  {
    title: "SupplyChain SEO Dominance",
    category: "SEO",
    image: "/images/project-5.jpg",
    result: "Top 3 for 120+ keywords, 280% traffic growth",
  },
  {
    title: "MedTech ABM Campaign",
    category: "PPC & ABM",
    image: "/images/project-6.jpg",
    result: "350 accounts engaged, 4.5x ROAS",
  },
]

export function FeaturedProjects() {
  const { ref: lineRef, isVisible: lineVisible } = useScrollAnimation(0.2)

  return (
    <section className="py-24 lg:py-32 bg-secondary">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <AnimatedSection>
          <div className="flex flex-col justify-between gap-4 sm:flex-row sm:items-end">
            <div>
              <p className="text-xs font-semibold uppercase tracking-[0.2em] text-muted-foreground">
                Featured Work
              </p>
              <h2 className="mt-3 font-serif text-3xl font-bold tracking-tight text-foreground sm:text-4xl text-balance">
                Projects that deliver results
              </h2>
            </div>
            <Link
              href="/projects"
              className="inline-flex items-center gap-1 text-sm font-medium text-foreground hover-underline-reveal transition-opacity hover:opacity-70"
            >
              View All Projects
              <ArrowUpRight className="h-4 w-4" />
            </Link>
          </div>
        </AnimatedSection>

        {/* Animated line */}
        <div
          ref={lineRef}
          className="mt-8 mb-12 h-[1px] bg-border overflow-hidden"
        >
          <div
            className={cn(
              "h-full bg-foreground/30 w-0",
              lineVisible && "animate-draw-line"
            )}
          />
        </div>

        <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
          {projects.map((project, i) => (
            <AnimatedSection
              key={project.title}
              delay={`animation-delay-${(i + 1) * 200}`}
            >
              <Link href="/projects" className="group block">
                <div className="overflow-hidden rounded-2xl">
                  <Image
                    src={project.image}
                    alt={project.title}
                    width={600}
                    height={400}
                    className="aspect-[3/2] w-full object-cover transition-all duration-700 group-hover:scale-110 group-hover:brightness-90"
                  />
                </div>
                <div className="mt-5">
                  <p className="text-xs font-medium uppercase tracking-wider text-muted-foreground">
                    {project.category}
                  </p>
                  <h3 className="mt-2 text-lg font-semibold text-foreground group-hover:underline underline-offset-4 transition-all">
                    {project.title}
                  </h3>
                  <div className="mt-3 flex items-center gap-2">
                    <div className="h-1.5 w-1.5 rounded-full bg-foreground" />
                    <p className="text-sm font-medium text-foreground">
                      {project.result}
                    </p>
                  </div>
                </div>
              </Link>
            </AnimatedSection>
          ))}
        </div>
      </div>
    </section>
  )
}
