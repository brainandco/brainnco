import type { Metadata } from "next"
import Image from "next/image"
import Link from "next/link"
import { notFound } from "next/navigation"
import { ArrowLeft, Clock } from "lucide-react"
import { blogPosts, getPostBySlug, getAllSlugs } from "@/lib/blog-posts"

type Props = { params: Promise<{ slug: string }> }

export async function generateStaticParams() {
  return getAllSlugs().map((slug) => ({ slug }))
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params
  const post = getPostBySlug(slug)
  if (!post) return { title: "Post not found" }
  return {
    title: `${post.title} | Blog`,
    description: post.excerpt,
  }
}

function PostBody({ body }: { body: string }) {
  const paragraphs = body.trim().split(/\n\n+/)
  return (
    <div className="prose prose-neutral dark:prose-invert max-w-none">
      {paragraphs.map((para, i) => {
        const parts = para.split(/(\*\*[^*]+\*\*)/g)
        return (
          <p key={i} className="mb-4 text-muted-foreground leading-relaxed">
            {parts.map((part, j) =>
              part.startsWith("**") && part.endsWith("**") ? (
                <strong key={j} className="font-semibold text-primary">
                  {part.slice(2, -2)}
                </strong>
              ) : (
                <span key={j}>{part}</span>
              )
            )}
          </p>
        )
      })}
    </div>
  )
}

export default async function BlogPostPage({ params }: Props) {
  const { slug } = await params
  const post = getPostBySlug(slug)
  if (!post) notFound()

  return (
    <article className="min-h-screen">
      <div className="mx-auto max-w-3xl px-6 pt-32 pb-16 lg:pt-40 lg:pb-24">
        <Link
          href="/blog"
          className="inline-flex items-center gap-2 text-sm text-muted-foreground hover:text-primary mb-8"
        >
          <ArrowLeft className="h-4 w-4" />
          Back to Blog
        </Link>

        <header className="mb-10">
          <span className="text-xs font-medium uppercase tracking-wider text-muted-foreground">
            {post.category}
          </span>
          <h1 className="mt-2 font-serif text-3xl font-bold tracking-tight text-primary sm:text-4xl text-balance">
            {post.title}
          </h1>
          <div className="mt-4 flex items-center gap-3 text-sm text-muted-foreground">
            <time dateTime={post.date}>{post.date}</time>
            <span className="h-1 w-1 rounded-full bg-muted-foreground" />
            <span className="inline-flex items-center gap-1">
              <Clock className="h-4 w-4" />
              {post.readTime}
            </span>
          </div>
        </header>

        <div className="overflow-hidden rounded-2xl border border-border">
          <Image
            src={post.image}
            alt={post.title}
            width={960}
            height={540}
            className="aspect-video w-full object-cover"
            priority
          />
        </div>

        <div className="mt-10">
          <PostBody body={post.body} />
        </div>

        <footer className="mt-12 pt-8 border-t border-border">
          <Link
            href="/blog"
            className="inline-flex items-center gap-2 text-sm font-medium text-primary hover:underline underline-offset-4"
          >
            <ArrowLeft className="h-4 w-4" />
            Back to Blog
          </Link>
        </footer>
      </div>
    </article>
  )
}
