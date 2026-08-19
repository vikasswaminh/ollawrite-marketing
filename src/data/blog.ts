export interface BlogPost {
  slug: string;
  title: string;
  category: string;
  excerpt: string;
  date: string;
  readTime: string;
  author: {
    name: string;
    role: string;
  };
  body: string;
}

const articleBody = (excerpt: string): string =>
  `## Executive Summary

${excerpt}

## 1. The Necessity of Site-First Verification

Most generative AI systems begin with an isolated prompt and lack contextual awareness of what an organization actually produces. By ingesting public sitemaps and robots.txt directives first, OllaWrite ensures that every claim, statistic, and structural element is directly anchored to established documentation.

## 2. Multi-Agent Pipeline Governance

Four dedicated autonomous agents oversee the editorial workflow:
- **Auditor Agent**: Inspects sitemap structure, HTTP headers, and existing indexing signals.
- **Briefing Agent**: Dissects ranking gaps and creates constrained briefs.
- **Drafter Agent**: Generates concise, grounded copy.
- **Editor Critic Agent**: Enforces strict factual consistency and issues formal SHIP or REWRITE clearance.

## 3. Measurable Publishing Outcomes

Organizations utilizing grounded editorial workflows eliminate hallucinated specifications and reduce post-generation review time by up to 12x while preserving brand trust.`;

const meta = [
  {
    slug: "why-site-first-ai-writing-replaces-prompt-guessing",
    title:
      "Content that starts with your actual website: Why site-first AI replaces prompt guessing",
    category: "Product & Research",
    excerpt:
      "Most AI writing tools start from a prompt and invent the rest. Discover how reading your site first produces grounded drafts that search engines actually rank.",
    date: "Aug 2026",
    readTime: "4 min read",
    author: {
      name: "OllaWrite Team",
      role: "Editorial & Search Architecture",
    },
  },
  {
    slug: "four-agents-one-job-each",
    title:
      "Four specialist agents, each with one job: Inside the OllaWrite pipeline",
    category: "Engineering",
    excerpt:
      "Research, a check on that research, writing, then an edit. How an independent critic agent rejects thin drafts before they ever reach you.",
    date: "Aug 2026",
    readTime: "5 min read",
    author: {
      name: "OllaWrite Engineering",
      role: "Core Systems Lead",
    },
  },
  {
    slug: "the-editor-critic-ship-verdict",
    title: "A brief you can argue with, then a draft you can ship",
    category: "SEO & Strategy",
    excerpt:
      "Why every draft arrives with the brief it was written against and the audit findings it drew on, so you can check the reasoning instead of trusting it.",
    date: "Aug 2026",
    readTime: "4 min read",
    author: {
      name: "OllaWrite Editorial",
      role: "Content Strategist",
    },
  },
];

export const BLOG_POSTS: BlogPost[] = meta.map((m) => ({
  ...m,
  body: articleBody(m.excerpt),
}));

export const getPostBySlug = (slug: string): BlogPost | undefined =>
  BLOG_POSTS.find((p) => p.slug === slug);
