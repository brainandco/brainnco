"use client"

import { useState } from "react"
import {
  Search,
  MousePointerClick,
  Share2,
  PenTool,
  Mail,
  BarChart3,
  Globe,
  Megaphone,
} from "lucide-react"
import { AnimatedSection } from "@/components/animated-section"
import { cn } from "@/lib/utils"

const services = [
  {
    icon: Search,
    title: "Search Engine Optimization",
    shortDesc: "Dominate organic search results",
    fullDesc:
      "Our comprehensive SEO strategies combine technical optimization, content excellence, and authoritative link building to position your brand at the top of search results. We focus on high-intent keywords that drive qualified traffic and conversions.",
    results: "Average 250% increase in organic traffic",
  },
  {
    icon: MousePointerClick,
    title: "Pay-Per-Click Advertising",
    shortDesc: "Precision-targeted paid campaigns",
    fullDesc:
      "Strategic PPC campaigns across Google Ads, LinkedIn, and programmatic platforms. We optimize every dollar of your ad spend to maximize ROI through continuous testing, audience refinement, and conversion rate optimization.",
    results: "Average 4.5x ROAS across campaigns",
  },
  {
    icon: Share2,
    title: "Social Media Marketing",
    shortDesc: "Build authority on social platforms",
    fullDesc:
      "Develop a commanding social media presence that positions your brand as a thought leader. We create engaging content calendars, manage community engagement, and run targeted social campaigns that drive meaningful business conversations.",
    results: "150% average engagement increase",
  },
  {
    icon: PenTool,
    title: "Content Strategy & Creation",
    shortDesc: "Content that converts",
    fullDesc:
      "From whitepapers and case studies to blog posts and video content, we create compelling narratives that educate your audience, build trust, and move prospects through your sales funnel with intention and precision.",
    results: "3x increase in content-driven leads",
  },
  {
    icon: Mail,
    title: "Email Marketing & Automation",
    shortDesc: "Nurture leads at scale",
    fullDesc:
      "Build sophisticated email nurture sequences that guide prospects from awareness to decision. Our automation workflows leverage behavioral triggers, dynamic content, and A/B testing to maximize engagement and conversion rates.",
    results: "45% average open rate for campaigns",
  },
  {
    icon: BarChart3,
    title: "Analytics & Reporting",
    shortDesc: "Data-driven decision making",
    fullDesc:
      "Comprehensive analytics setup and reporting that gives you full visibility into your marketing performance. We build custom dashboards, implement attribution modeling, and provide actionable insights to continuously improve results.",
    results: "Real-time dashboards with custom KPIs",
  },
  {
    icon: Globe,
    title: "Web Design & Development",
    shortDesc: "Conversion-optimized websites",
    fullDesc:
      "Design and develop high-performance websites that convert visitors into leads. We focus on user experience, page speed, and conversion rate optimization to ensure your website works as your best salesperson 24/7.",
    results: "2x average conversion rate improvement",
  },
  {
    icon: Megaphone,
    title: "Brand Strategy & Positioning",
    shortDesc: "Define your market presence",
    fullDesc:
      "Develop a powerful brand strategy that differentiates you from competitors and resonates with your target audience. We define your brand voice, visual identity, and positioning to create a cohesive and memorable market presence.",
    results: "Complete brand transformation in 12 weeks",
  },
]

export function ServicesGrid() {
  const [expandedIndex, setExpandedIndex] = useState<number | null>(null)

  return (
    <section className="py-16 lg:py-24 border-t border-border">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {services.map((service, i) => (
            <AnimatedSection
              key={service.title}
              delay={`animation-delay-${((i % 4) + 1) * 100}`}
            >
              <div
                className={cn(
                  "group relative cursor-pointer rounded-2xl border border-border p-8 transition-all duration-300",
                  expandedIndex === i
                    ? "border-primary/40 bg-primary text-primary-foreground shadow-xl"
                    : "hover:border-primary/25 hover:shadow-lg"
                )}
                onClick={() =>
                  setExpandedIndex(expandedIndex === i ? null : i)
                }
                role="button"
                tabIndex={0}
                onKeyDown={(e) => {
                  if (e.key === "Enter" || e.key === " ") {
                    setExpandedIndex(expandedIndex === i ? null : i)
                  }
                }}
                aria-expanded={expandedIndex === i}
              >
                <service.icon
                  className={cn(
                    "h-6 w-6 transition-colors",
                    expandedIndex === i
                      ? "text-primary-foreground"
                      : "text-foreground"
                  )}
                />
                <h3
                  className={cn(
                    "mt-4 text-lg font-semibold transition-colors",
                    expandedIndex === i
                      ? "text-primary-foreground"
                      : "text-foreground"
                  )}
                >
                  {service.title}
                </h3>
                <p
                  className={cn(
                    "mt-2 text-sm transition-colors",
                    expandedIndex === i
                      ? "text-primary-foreground/80"
                      : "text-muted-foreground"
                  )}
                >
                  {expandedIndex === i ? service.fullDesc : service.shortDesc}
                </p>
                {expandedIndex === i && (
                  <p className="mt-4 text-xs font-semibold uppercase tracking-wider text-brand-accent/90">
                    {service.results}
                  </p>
                )}
              </div>
            </AnimatedSection>
          ))}
        </div>
      </div>
    </section>
  )
}
