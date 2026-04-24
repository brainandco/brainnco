"use client"

import Image from "next/image"
import { AnimatedSection } from "@/components/animated-section"
import { Linkedin, Twitter } from "lucide-react"

const team = [
  {
    name: "Jessica Morgan",
    role: "Founder & CEO",
    image: "/images/team-1.jpg",
    bio: "15+ years leading marketing strategy for Fortune 500 companies.",
  },
  {
    name: "David Park",
    role: "Head of Strategy",
    image: "/images/team-2.jpg",
    bio: "Former McKinsey consultant specializing in digital transformation.",
  },
  {
    name: "Alex Rivera",
    role: "Creative Director",
    image: "/images/team-3.jpg",
    bio: "Award-winning creative with a passion for brand storytelling.",
  },
  {
    name: "Priya Sharma",
    role: "Head of Analytics",
    image: "/images/team-4.jpg",
    bio: "Data scientist turned marketer, driving ROI through insights.",
  },
]

export function Team() {
  return (
    <section className="py-16 lg:py-24 bg-secondary">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <AnimatedSection>
          <p className="text-xs font-semibold uppercase tracking-[0.2em] text-muted-foreground">
            Our Team
          </p>
          <h2 className="mt-3 font-serif text-3xl font-bold tracking-tight text-brand-accent sm:text-4xl text-balance">
            Meet the people behind the strategy
          </h2>
        </AnimatedSection>

        <div className="mt-12 grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-4">
          {team.map((member, i) => (
            <AnimatedSection
              key={member.name}
              delay={`animation-delay-${(i + 1) * 100}`}
            >
              <div className="group">
                <div className="overflow-hidden rounded-2xl">
                  <Image
                    src={member.image}
                    alt={member.name}
                    width={400}
                    height={500}
                    className="aspect-[4/5] w-full object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                </div>
                <div className="mt-4">
                  <h3 className="text-base font-semibold text-foreground">
                    {member.name}
                  </h3>
                  <p className="text-sm font-medium text-muted-foreground">
                    {member.role}
                  </p>
                  <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                    {member.bio}
                  </p>
                  <div className="mt-3 flex gap-3">
                    <a
                      href="#"
                      className="text-muted-foreground transition-colors hover:text-foreground"
                      aria-label={`${member.name} on LinkedIn`}
                    >
                      <Linkedin className="h-4 w-4" />
                    </a>
                    <a
                      href="#"
                      className="text-muted-foreground transition-colors hover:text-foreground"
                      aria-label={`${member.name} on Twitter`}
                    >
                      <Twitter className="h-4 w-4" />
                    </a>
                  </div>
                </div>
              </div>
            </AnimatedSection>
          ))}
        </div>
      </div>
    </section>
  )
}
