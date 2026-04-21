import type { Metadata } from "next"
import { AboutHero } from "@/components/about/about-hero"
import { Mission } from "@/components/about/mission"
import { Team } from "@/components/about/team"
import { WhyChooseUs } from "@/components/about/why-choose-us"

const HIDE_TEAM_SECTION = true

export const metadata: Metadata = {
  title: "About Us",
  description:
    "Learn about brain & co., our mission, team, and the values that drive our marketing excellence for brands and companies of all kinds.",
}

export default function AboutPage() {
  return (
    <>
      <AboutHero />
      <Mission />
      {!HIDE_TEAM_SECTION && <Team />}
      <WhyChooseUs />
    </>
  )
}
