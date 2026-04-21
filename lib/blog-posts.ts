export type BlogPost = {
  slug: string
  title: string
  excerpt: string
  body: string
  image: string
  category: string
  readTime: string
  date: string
  featured: boolean
}

export const blogPosts: BlogPost[] = [
  {
    slug: "ultimate-guide-content-marketing-2026",
    title: "The Ultimate Guide to Content Marketing in 2026",
    excerpt:
      "Discover the proven content frameworks that are driving results for top companies this year. From long-form thought leadership to micro-content strategies.",
    body: `Content marketing continues to evolve at a rapid pace. In 2026, the companies seeing the best results are those that blend long-form thought leadership with a disciplined micro-content strategy.

**Why long-form still wins**

Decision-makers spend time researching before they buy. In-depth guides, research-backed articles, and clear frameworks build trust and authority. Aim for pieces that answer one big question thoroughly rather than many questions superficially.

**Micro-content that supports the funnel**

Short-form content—LinkedIn posts, email snippets, and one-page summaries—should tie directly to your flagship assets. Use micro-content to drive traffic to your long-form pieces and to reinforce key messages at each stage of the buyer journey.

**Frameworks that scale**

Adopt a content operating model: one hero asset per quarter, supported by 6–8 derivative pieces and a consistent cadence of social and email. This keeps your team focused and your message coherent.

**Measurement that matters**

Track engagement depth (time on page, scroll depth, repeat visits) alongside lead conversion. Optimize for content that both attracts and nurtures; vanity metrics alone won’t show whether your content is actually moving deals forward.`,
    image: "/images/blog-1.jpg",
    category: "Content",
    readTime: "8 min read",
    date: "Feb 15, 2026",
    featured: true,
  },
  {
    slug: "how-ai-reshaping-marketing-strategy",
    title: "How AI is Reshaping Marketing Strategy",
    excerpt:
      "Explore how artificial intelligence is transforming every aspect of marketing, from predictive analytics to personalized content delivery at scale.",
    body: `Artificial intelligence is no longer a future possibility—it’s reshaping how marketing teams plan, execute, and optimize every day.

**Predictive analytics and pipeline**

AI-powered tools can score leads, predict which accounts are most likely to convert, and suggest the best next action for each contact. Marketing and sales alignment improves when both sides use the same signals to prioritize effort.

**Personalization at scale**

From dynamic web experiences to tailored email sequences, AI makes it feasible to deliver relevant messages to large audiences without manual segment builds for every variation. The key is clean data and clear rules for how AI can use it.

**Content and creative support**

AI assists with research, outlines, and first drafts, freeing strategists to focus on positioning and narrative. Use it to speed up production while keeping a human in the loop for accuracy and brand voice.

**What to do next**

Start with one use case: better lead scoring, smarter email flows, or faster content production. Prove value there, then expand. The goal isn’t to adopt every AI tool, but to use AI where it clearly improves outcomes.`,
    image: "/images/blog-2.jpg",
    category: "Trends",
    readTime: "6 min read",
    date: "Feb 10, 2026",
    featured: true,
  },
  {
    slug: "building-high-converting-landing-page",
    title: "Building a High-Converting Landing Page",
    excerpt:
      "Learn the essential elements of landing pages that convert, backed by data from over 500 A/B tests across industries.",
    body: `Landing pages remain one of the highest-leverage assets in marketing. Here’s what consistently works across hundreds of tests.

**One goal, one page**

Each landing page should have a single primary action: download, demo request, or contact. Remove navigation and secondary CTAs that compete for attention. Clarity beats choice.

**Headline and value proposition**

The headline must state the specific outcome or benefit in the visitor’s language. Support it with a short subhead that adds proof or context. If they don’t understand the offer in three seconds, they leave.

**Social proof above the fold**

Use logos, short testimonials, or one strong stat near the top. Buyers look for signals that others like them have trusted you. Place the most relevant proof next to the main CTA.

**Form length and friction**

Ask only what you need to qualify and follow up. Longer forms can work when the offer is high-value and the audience is warm; for cold traffic, shorter forms typically convert better. Test.

**Mobile and speed**

Many researchers first visit on mobile. Ensure the page loads quickly and the form is easy to complete on small screens. Small improvements in speed often yield meaningful conversion gains.`,
    image: "/images/blog-3.jpg",
    category: "Strategy",
    readTime: "5 min read",
    date: "Feb 5, 2026",
    featured: false,
  },
  {
    slug: "seo-complete-playbook",
    title: "SEO: A Complete Playbook",
    excerpt:
      "Master the unique challenges of SEO with our comprehensive playbook covering technical SEO, content optimization, and link building strategies.",
    body: `SEO differs by intent, keywords, and sales cycles. This playbook focuses on what actually moves the needle for brands.

**Technical foundation**

Crawlability, indexing, and core web vitals matter for every site. Ensure key landing pages and blog sections are in the sitemap, use clean URL structures, and fix any critical errors. Enterprise sites often have large, complex architectures—technical SEO keeps the important pages visible.

**Keyword and topic strategy**

Target terms that reflect buying intent: comparison keywords, “best [solution] for [industry],” and problem-aware phrases. Create one primary page per major topic and avoid thin or duplicate content. Align titles and meta with what users actually search for.

**Content that ranks and converts**

Answer the query fully and structure content with clear headings and sections. Include internal links to product and solution pages so SEO traffic can turn into leads. Update top pages regularly to maintain relevance.

**Link building for authority**

Focus on earned links from reputable industry sites, partners, and PR. Guest posts, original research, and tools can attract links. Avoid manipulative link schemes; buyers and search engines both value credibility.`,
    image: "/images/project-1.jpg",
    category: "SEO",
    readTime: "10 min read",
    date: "Jan 28, 2026",
    featured: false,
  },
  {
    slug: "maximizing-roi-linkedin-advertising",
    title: "Maximizing ROI with LinkedIn Advertising",
    excerpt:
      "A deep dive into LinkedIn ad formats, targeting options, and optimization strategies that deliver measurable pipeline growth.",
    body: `LinkedIn remains a dominant paid channel for demand generation. Here’s how to structure campaigns for pipeline and ROI.

**Choosing the right format**

Sponsored Content (single image, video, carousel, document) works well for awareness and consideration. Message Ads and InMail suit high-intent, personalized follow-up. Lead Gen Forms reduce friction when the offer is strong. Match the format to the stage and goal.

**Targeting that reaches decision-makers**

Use job function, seniority, company size, and industry to narrow the audience. Layered targeting keeps reach reasonable while focusing on accounts that can actually buy. Test lookalike audiences based on your best customers.

**Creative that performs**

Lead with a clear benefit or question. Use professional but engaging creative; avoid generic stock imagery. Test headlines and short copy; small changes often have a big impact on CTR and cost per lead.

**Optimization and measurement**

Track cost per lead and cost per opportunity, not just clicks. Use conversion objectives and the LinkedIn Insight Tag to close the loop. Pause underperformers, scale winners, and refresh creative regularly to combat fatigue.`,
    image: "/images/project-5.jpg",
    category: "PPC",
    readTime: "7 min read",
    date: "Jan 20, 2026",
    featured: false,
  },
  {
    slug: "future-of-account-based-marketing",
    title: "The Future of Account-Based Marketing",
    excerpt:
      "How ABM is evolving with new technology and data capabilities, and what it means for your marketing strategy in the coming years.",
    body: `Account-based marketing is evolving from a set of tactics into a core go-to-market motion. Here’s what’s changing and how to adapt.

**From list-based to signal-based ABM**

Instead of static account lists, use intent data, engagement signals, and firmographics to identify accounts that are in-market now. Allocate budget and touchpoints based on propensity and opportunity, not just size and industry.

**Personalization without infinite variation**

Technology makes it possible to tailor messaging and experiences at the account level without building thousands of manual variants. Use dynamic content, smart segments, and clear playbooks so personalization scales.

**Sales and marketing as one motion**

ABM works best when sales and marketing share the same account view, sequences, and metrics. Joint planning, shared targets, and a single source of truth for account status remove friction and improve results.

**What to do next**

Audit your current ABM setup: data quality, intent signals, and alignment with sales. Start with one segment (e.g. top-tier accounts) and prove impact before expanding. The future of ABM is more integrated, more signal-driven, and more measurable.`,
    image: "/images/project-6.jpg",
    category: "Strategy",
    readTime: "6 min read",
    date: "Jan 15, 2026",
    featured: false,
  },
]

export function getPostBySlug(slug: string): BlogPost | undefined {
  return blogPosts.find((p) => p.slug === slug)
}

export function getAllSlugs(): string[] {
  return blogPosts.map((p) => p.slug)
}
