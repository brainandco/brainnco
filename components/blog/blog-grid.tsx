"use client"

import { useState } from "react"
import Image from "next/image"
import Link from "next/link"
import { ArrowRight, Clock } from "lucide-react"
import { AnimatedSection } from "@/components/animated-section"
import { cn } from "@/lib/utils"
import { blogPosts } from "@/lib/blog-posts"

const blogCategories = ["All", "Strategy", "SEO", "Content", "PPC", "Trends"]

export function BlogGrid() {
  const [activeCategory, setActiveCategory] = useState("All")

  const filteredPosts =
    activeCategory === "All"
      ? blogPosts
      : blogPosts.filter((p) => p.category === activeCategory)

  const featured = filteredPosts.filter((p) => p.featured)
  const regular = filteredPosts.filter((p) => !p.featured)

  return (
    <section className="pb-24 lg:pb-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        {/* Category Filters */}
        <AnimatedSection>
          <div className="flex flex-wrap gap-2 border-b border-border pb-6">
            {blogCategories.map((cat) => (
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

        {/* Featured Posts */}
        {featured.length > 0 && (
          <div className="mt-12 grid grid-cols-1 gap-8 lg:grid-cols-2">
            {featured.map((post, i) => (
              <AnimatedSection
                key={post.slug}
                delay={`animation-delay-${(i + 1) * 100}`}
              >
                <Link href={`/blog/${post.slug}`}>
                  <article className="group cursor-pointer">
                    <div className="overflow-hidden rounded-2xl">
                      <Image
                        src={post.image}
                        alt={post.title}
                        width={800}
                        height={500}
                        className="aspect-[16/10] w-full object-cover transition-transform duration-500 group-hover:scale-105"
                      />
                    </div>
                    <div className="mt-5">
                      <div className="flex items-center gap-3 text-xs text-muted-foreground">
                        <span className="font-medium uppercase tracking-wider">
                          {post.category}
                        </span>
                        <span className="h-1 w-1 rounded-full bg-muted-foreground" />
                        <span>{post.date}</span>
                        <span className="h-1 w-1 rounded-full bg-muted-foreground" />
                        <span className="inline-flex items-center gap-1">
                          <Clock className="h-3 w-3" />
                          {post.readTime}
                        </span>
                      </div>
                      <h2 className="mt-3 font-serif text-xl font-bold text-primary group-hover:underline underline-offset-4 sm:text-2xl text-balance">
                        {post.title}
                      </h2>
                      <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
                        {post.excerpt}
                      </p>
                      <span className="mt-4 inline-flex items-center gap-1 text-sm font-medium text-primary">
                        Read Article
                        <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
                      </span>
                    </div>
                  </article>
                </Link>
              </AnimatedSection>
            ))}
          </div>
        )}

        {/* Regular Posts */}
        {regular.length > 0 && (
          <div className="mt-12 grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
            {regular.map((post, i) => (
              <AnimatedSection
                key={post.slug}
                delay={`animation-delay-${((i % 3) + 1) * 100}`}
              >
                <Link href={`/blog/${post.slug}`}>
                  <article className="group cursor-pointer">
                    <div className="overflow-hidden rounded-2xl">
                      <Image
                        src={post.image}
                        alt={post.title}
                        width={600}
                        height={400}
                        className="aspect-[3/2] w-full object-cover transition-transform duration-500 group-hover:scale-105"
                      />
                    </div>
                    <div className="mt-4">
                      <div className="flex items-center gap-3 text-xs text-muted-foreground">
                        <span className="font-medium uppercase tracking-wider">
                          {post.category}
                        </span>
                        <span className="h-1 w-1 rounded-full bg-muted-foreground" />
                        <span className="inline-flex items-center gap-1">
                          <Clock className="h-3 w-3" />
                          {post.readTime}
                        </span>
                      </div>
                      <h3 className="mt-2 text-base font-semibold text-primary group-hover:underline underline-offset-4 text-balance">
                        {post.title}
                      </h3>
                      <p className="mt-2 text-sm text-muted-foreground line-clamp-2">
                        {post.excerpt}
                      </p>
                    </div>
                  </article>
                </Link>
              </AnimatedSection>
            ))}
          </div>
        )}
      </div>
    </section>
  )
}
