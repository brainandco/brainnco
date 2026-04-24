"use client"

import { useState } from "react"
import Image from "next/image"
import { AnimatedSection } from "@/components/animated-section"
import { X } from "lucide-react"
import { cn } from "@/lib/utils"

const categories = ["All", "SEO", "PPC", "Content", "Brand", "Social"]

const projects = [
  {
    title: "TechVault Growth Campaign",
    category: "SEO",
    image: "/images/project-1.jpg",
    description:
      "Complete SEO overhaul and content strategy for a SaaS platform, resulting in dominant organic search positions across 200+ high-intent keywords.",
    results: [
      "312% increase in organic traffic",
      "180 new ranking keywords in top 10",
      "$2.1M in attributed pipeline",
    ],
    testimonial: {
      quote: "brain & co. transformed our digital presence completely.",
      author: "Sarah Chen, VP of Marketing",
    },
  },
  {
    title: "Apex Industries Rebrand",
    category: "Brand",
    image: "/images/project-2.jpg",
    description:
      "Full brand transformation including visual identity, messaging framework, and go-to-market strategy for a manufacturing industry leader entering the digital era.",
    results: [
      "5x return on ad spend",
      "Brand awareness up 200%",
      "40% increase in qualified leads",
    ],
    testimonial: {
      quote: "The rebrand positioned us as the clear industry leader.",
      author: "Michael Torres, CEO",
    },
  },
  {
    title: "CloudSync Market Entry",
    category: "PPC",
    image: "/images/project-3.jpg",
    description:
      "Multi-channel paid acquisition strategy for a cloud infrastructure startup entering a competitive enterprise market segment.",
    results: [
      "150+ enterprise leads in 90 days",
      "Cost per lead reduced by 60%",
      "$5M in first-year pipeline",
    ],
    testimonial: {
      quote: "Their PPC strategy was the catalyst for our growth.",
      author: "Emily Nakamura, Director of Growth",
    },
  },
  {
    title: "NovaTech Content Engine",
    category: "Content",
    image: "/images/project-4.jpg",
    description:
      "Built a comprehensive content marketing engine including blog, podcast, and thought leadership program that established the brand as a category authority.",
    results: [
      "500% increase in blog traffic",
      "50 leads per month from content",
      "Industry award for best blog",
    ],
    testimonial: {
      quote: "Our content now drives more leads than our sales team.",
      author: "James Wright, CMO",
    },
  },
  {
    title: "Meridian Analytics Scale-up",
    category: "Social",
    image: "/images/project-5.jpg",
    description:
      "LinkedIn-focused social media strategy that positioned the company as a thought leader in the analytics space, driving executive-level engagement.",
    results: [
      "10x LinkedIn follower growth",
      "300% increase in engagement",
      "25 speaking invitations",
    ],
    testimonial: {
      quote: "We went from unknown to industry thought leaders.",
      author: "Rachel Kim, Head of Marketing",
    },
  },
  {
    title: "Vertex Solutions Pipeline",
    category: "PPC",
    image: "/images/project-6.jpg",
    description:
      "Integrated demand generation campaign combining paid search, LinkedIn advertising, and ABM to accelerate enterprise pipeline growth.",
    results: [
      "400% pipeline growth",
      "3.2x return on marketing investment",
      "65% shorter sales cycle",
    ],
    testimonial: {
      quote: "The results exceeded every expectation we had.",
      author: "Tom Bradley, VP Sales",
    },
  },
  {
    title: "DataFlow Lead Gen Program",
    category: "Content",
    image: "/images/project-1.jpg",
    description:
      "End-to-end content and lead magnet strategy for a data analytics vendor, including whitepapers, webinars, and nurture sequences that converted visitors into qualified opportunities.",
    results: [
      "2,400+ gated asset downloads in 6 months",
      "18% conversion from lead to opportunity",
      "Cost per lead down 45%",
    ],
    testimonial: {
      quote: "Our pipeline quality improved dramatically with their content approach.",
      author: "Lisa Park, Head of Demand Gen",
    },
  },
  {
    title: "FinServe Brand Launch",
    category: "Brand",
    image: "/images/project-2.jpg",
    description:
      "New brand identity and launch campaign for a financial services firm entering the SMB segment, including positioning, visual system, and integrated launch campaign.",
    results: [
      "Brand recall up 3x in target segment",
      "2,000+ sign-ups in launch month",
      "Award shortlist for best launch",
    ],
    testimonial: {
      quote: "They gave us a brand that stands out in a crowded market.",
      author: "David Okonkwo, Chief Marketing Officer",
    },
  },
  {
    title: "SupplyChain SEO Dominance",
    category: "SEO",
    image: "/images/project-3.jpg",
    description:
      "Technical SEO and content expansion for a supply chain software company, targeting high-value commercial intent keywords and building topical authority in the space.",
    results: [
      "Top 3 rankings for 120+ target keywords",
      "Organic traffic up 280% year-over-year",
      "40% of new deals from organic search",
    ],
    testimonial: {
      quote: "We finally own our category in search. Game-changing.",
      author: "Anna Schmidt, VP Digital",
    },
  },
  {
    title: "HR Tech LinkedIn Program",
    category: "Social",
    image: "/images/project-4.jpg",
    description:
      "Executive and employer brand program on LinkedIn for an HR technology company, with consistent thought leadership and paid amplification driving pipeline from social.",
    results: [
      "8x growth in LinkedIn engagement",
      "200+ marketing-qualified leads from social",
      "Named top HR tech brand on LinkedIn",
    ],
    testimonial: {
      quote: "Our executives are now recognized voices in the industry.",
      author: "Chris Morgan, CEO",
    },
  },
  {
    title: "MedTech ABM Campaign",
    category: "PPC",
    image: "/images/project-5.jpg",
    description:
      "Account-based marketing and targeted paid campaigns for a medical technology vendor selling into hospitals and health systems across North America.",
    results: [
      "350 target accounts engaged",
      "22% account-to-opportunity rate",
      "4.5x ROAS on ABM spend",
    ],
    testimonial: {
      quote: "Precision targeting that actually reached decision-makers.",
      author: "Jennifer Walsh, SVP Sales & Marketing",
    },
  },
]

export function ProjectsGallery() {
  const [activeCategory, setActiveCategory] = useState("All")
  const [selectedProject, setSelectedProject] = useState<
    (typeof projects)[0] | null
  >(null)

  const filteredProjects =
    activeCategory === "All"
      ? projects
      : projects.filter((p) => p.category === activeCategory)

  return (
    <section className="py-16 lg:py-24 border-t border-border">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        {/* Category Filters */}
        <AnimatedSection>
          <div className="flex flex-wrap gap-2">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setActiveCategory(cat)}
                className={cn(
                  "rounded-full px-5 py-2 text-sm font-medium transition-all duration-200",
                  activeCategory === cat
                    ? "bg-primary text-primary-foreground"
                    : "border border-border text-muted-foreground hover:border-primary/35 hover:text-primary"
                )}
              >
                {cat}
              </button>
            ))}
          </div>
        </AnimatedSection>

        {/* Projects Grid */}
        <div className="mt-12 grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
          {filteredProjects.map((project, i) => (
            <AnimatedSection
              key={project.title}
              delay={`animation-delay-${((i % 3) + 1) * 100}`}
            >
              <div
                className="group cursor-pointer"
                onClick={() => setSelectedProject(project)}
                role="button"
                tabIndex={0}
                onKeyDown={(e) => {
                  if (e.key === "Enter" || e.key === " ") {
                    setSelectedProject(project)
                  }
                }}
              >
                <div className="overflow-hidden rounded-2xl">
                  <Image
                    src={project.image}
                    alt={project.title}
                    width={600}
                    height={400}
                    className="aspect-[3/2] w-full object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                </div>
                <div className="mt-4">
                  <span className="text-xs font-medium uppercase tracking-wider text-muted-foreground">
                    {project.category}
                  </span>
                  <h3 className="mt-1 text-lg font-semibold text-foreground group-hover:underline underline-offset-4">
                    {project.title}
                  </h3>
                  <p className="mt-2 text-sm text-muted-foreground line-clamp-2">
                    {project.description}
                  </p>
                </div>
              </div>
            </AnimatedSection>
          ))}
        </div>
      </div>

      {/* Lightbox / Detail Modal */}
      {selectedProject && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-primary/85 p-6 animate-fade-in"
          onClick={() => setSelectedProject(null)}
          role="dialog"
          aria-modal="true"
          aria-label={selectedProject.title}
        >
          <div
            className="relative max-h-[90vh] w-full max-w-3xl overflow-y-auto rounded-3xl bg-background p-8 shadow-2xl animate-fade-up lg:p-12"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              onClick={() => setSelectedProject(null)}
              className="absolute right-4 top-4 rounded-full p-2 text-muted-foreground transition-colors hover:bg-secondary hover:text-foreground"
              aria-label="Close modal"
            >
              <X className="h-5 w-5" />
            </button>

            <Image
              src={selectedProject.image}
              alt={selectedProject.title}
              width={800}
              height={400}
              className="w-full rounded-2xl object-cover aspect-[2/1]"
            />

            <div className="mt-6">
              <span className="text-xs font-medium uppercase tracking-wider text-muted-foreground">
                {selectedProject.category}
              </span>
              <h2 className="mt-2 font-serif text-2xl font-bold text-primary sm:text-3xl">
                {selectedProject.title}
              </h2>
              <p className="mt-4 text-base leading-relaxed text-muted-foreground">
                {selectedProject.description}
              </p>

              <div className="mt-6">
                <h3 className="text-sm font-semibold uppercase tracking-wider text-foreground">
                  Key Results
                </h3>
                <ul className="mt-3 flex flex-col gap-2">
                  {selectedProject.results.map((result) => (
                    <li
                      key={result}
                      className="flex items-center gap-2 text-sm text-muted-foreground"
                    >
                      <span className="h-1.5 w-1.5 rounded-full bg-primary flex-shrink-0" />
                      {result}
                    </li>
                  ))}
                </ul>
              </div>

              <div className="mt-6 rounded-xl border border-border p-6">
                <p className="text-sm italic text-foreground leading-relaxed">
                  {`"${selectedProject.testimonial.quote}"`}
                </p>
                <p className="mt-3 text-xs font-medium text-muted-foreground">
                  {selectedProject.testimonial.author}
                </p>
              </div>
            </div>
          </div>
        </div>
      )}
    </section>
  )
}
