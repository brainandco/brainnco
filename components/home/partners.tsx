"use client"

import { AnimatedSection } from "@/components/animated-section"

const partners = [
  "Accenture",
  "Deloitte",
  "Salesforce",
  "HubSpot",
  "Stripe",
  "Notion",
  "Figma",
  "Webflow",
  "Shopify",
  "Zendesk",
  "Slack",
  "Atlassian",
]

export function Partners() {
  return (
    <section className="py-16 lg:py-20 border-y border-border bg-secondary">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <AnimatedSection>
          <p className="text-center text-xs font-semibold uppercase tracking-[0.2em] text-muted-foreground mb-10">
            Trusted by leading companies worldwide
          </p>
        </AnimatedSection>
        <div className="overflow-hidden hover-pause">
          <div className="flex animate-scroll-left">
            {[...partners, ...partners].map((partner, i) => (
              <div
                key={`${partner}-${i}`}
                className="flex-shrink-0 px-8 lg:px-12"
              >
                <span className="text-lg font-semibold text-muted-foreground/40 whitespace-nowrap tracking-wide transition-colors duration-300 hover:text-foreground cursor-default">
                  {partner}
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
