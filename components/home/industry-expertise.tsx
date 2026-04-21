"use client"

import { AnimatedSection } from "@/components/animated-section"
import {
  Building2,
  Cpu,
  HeartPulse,
  GraduationCap,
  Factory,
  ShoppingBag,
  UtensilsCrossed,
  Shirt,
  Wallet,
} from "lucide-react"

const industries = [
  {
    icon: UtensilsCrossed,
    name: "Food & Beverages",
    clients: "30+ clients",
    hidden: false,
  },
  {
    icon: Shirt,
    name: "Fashion & Retail",
    clients: "35+ clients",
    hidden: false,
  },
  {
    icon: ShoppingBag,
    name: "E-commerce",
    clients: "45+ clients",
    hidden: false,
  },
  {
    icon: Cpu,
    name: "SaaS & Technology",
    clients: "80+ clients",
    hidden: false,
  },
  {
    icon: Wallet,
    name: "Financial Services",
    clients: "35+ clients",
    hidden: true,
  },
  {
    icon: HeartPulse,
    name: "Healthcare & Biotech",
    clients: "25+ clients",
    hidden: false,
  },
  {
    icon: Building2,
    name: "Professional Services",
    clients: "40+ clients",
    hidden: false,
  },
  // {
  //   icon: GraduationCap,
  //   name: "Education & EdTech",
  //   clients: "20+ clients",
  //   hidden: false,
  // },
  {
    icon: Factory,
    name: "Manufacturing & Industrial",
    clients: "15+ clients",
    hidden: true,
  }
]

const awards = [
  {
    title: "Top Agency 2025",
    org: "Clutch",
    description:
      "Recognized as a top-performing marketing agency based on client reviews and proven results.",
  },
  {
    title: "Best Digital Campaign",
    org: "Webby Awards",
    description:
      "Our campaign creativity and impact earned industry recognition at the Webby Awards.",
  },
  {
    title: "Google Premier Partner",
    org: "Google",
    description:
      "Premier Partner status reflects our expertise in Google Ads and commitment to driving measurable growth.",
  },
  {
    title: "HubSpot Diamond Partner",
    org: "HubSpot",
    description:
      "Top-tier HubSpot partnership demonstrating excellence in inbound marketing and CRM-driven strategies.",
  },
  {
    title: "Inc. 5000 Fastest Growing",
    org: "Inc. Magazine",
    description:
      "Ranked among the fastest-growing private companies in America by Inc. Magazine.",
  },
  {
    title: "Best Places to Work",
    org: "AdAge",
    description:
      "Awarded for our culture, talent development, and commitment to team excellence.",
  },
  {
    title: "ISO 9001",
    org: "Quality Management",
    description:
      "Our quality management system ensures consistent delivery of high-standard marketing services and continuous improvement.",
  },
  {
    title: "ISO 27001",
    org: "Information Security",
    description:
      "We protect your data and intellectual property with certified information security management practices.",
  },
  {
    title: "ISO 14001",
    org: "Environmental Management",
    description:
      "Committed to responsible operations and environmental best practices in our business processes.",
  },
]

export function IndustryExpertise() {
  return (
    <section className="py-24 lg:py-32 bg-foreground text-background">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        {/* Deep vertical knowledge – full width */}
        <div>
          <AnimatedSection>
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-background/50">
              Industry Expertise
            </p>
            <h2 className="mt-3 font-serif text-3xl font-bold tracking-tight text-background sm:text-4xl text-balance">
              Deep vertical knowledge
            </h2>
            <p className="mt-4 max-w-2xl text-sm leading-relaxed text-background/60">
              We specialize in industries where complex buying cycles and
              technical audiences require nuanced marketing approaches.
            </p>
          </AnimatedSection>

          <div className="mt-10 grid grid-cols-1 gap-3 sm:grid-cols-2 lg:grid-cols-3">
            {industries.filter((i) => !i.hidden).map((industry, i) => (
              <AnimatedSection
                key={industry.name}
                delay={`animation-delay-${((i % 4) + 1) * 100}`}
              >
                <div className="group flex items-center gap-4 rounded-xl border border-background/10 p-4 transition-all duration-300 hover:bg-background/5 hover:border-background/20">
                  <div className="flex-shrink-0 rounded-lg bg-background/10 p-2.5 transition-colors duration-300 group-hover:bg-background/20">
                    <industry.icon className="h-5 w-5 text-background/80" />
                  </div>
                  <div>
                    <p className="text-sm font-semibold text-background">
                      {industry.name}
                    </p>
                    {/* <p className="text-xs text-background/50">
                      {industry.clients}
                    </p> */}
                  </div>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>

        {/* Awards & Certifications – slider below, details on hover */}
        {/* <div className="mt-20 lg:mt-24">
          <AnimatedSection>
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-background/50">
              Recognition
            </p>
            <h2 className="mt-3 font-serif text-3xl font-bold tracking-tight text-background sm:text-4xl text-balance">
              Awards & certifications
            </h2>
            <p className="mt-4 max-w-2xl text-sm leading-relaxed text-background/60">
              Our work speaks for itself. Hover over each item to see more.
            </p>
          </AnimatedSection>

          <div className="mt-8 overflow-hidden hover-pause">
            <div className="flex animate-scroll-left gap-4 pb-4 pt-2">
              {[...awards, ...awards].map((award, i) => (
                <div
                  key={`${award.title}-${i}`}
                  className="group relative flex-shrink-0 w-[280px] cursor-default"
                >
                  <div className="flex h-[180px] flex-col rounded-xl border border-background/10 bg-background/5 p-5 transition-all duration-300 group-hover:border-background/25 group-hover:bg-background/10">
                    <p className="text-sm font-semibold text-background">
                      {award.title}
                    </p>
                    <p className="mt-1 text-xs text-background/50">
                      {award.org}
                    </p>
                    <div className="absolute inset-0 rounded-xl border border-transparent bg-foreground/95 p-5 opacity-0 transition-opacity duration-300 group-hover:opacity-100 pointer-events-none group-hover:pointer-events-auto">
                      <p className="text-xs font-semibold text-background">
                        {award.title}
                      </p>
                      <p className="mt-0.5 text-[10px] text-background/60">
                        {award.org}
                      </p>
                      <p className="mt-3 text-xs leading-relaxed text-background/90">
                        {award.description}
                      </p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div> */}
      </div>
    </section>
  )
}
