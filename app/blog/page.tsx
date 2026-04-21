import type { Metadata } from "next"
import { BlogHero } from "@/components/blog/blog-hero"
import { BlogGrid } from "@/components/blog/blog-grid"

export const metadata: Metadata = {
  title: "Blog",
  description:
    "Industry insights, marketing tips, and case studies from the brain & co. team.",
}

export default function BlogPage() {
  return (
    <>
      <BlogHero />
      <BlogGrid />
    </>
  )
}
