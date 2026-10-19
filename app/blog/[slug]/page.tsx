import Image from "next/image"
import Link from "next/link"
import { notFound } from "next/navigation"
import { ArrowLeft } from "lucide-react"

import { getPostBySlug, getRelatedPosts, posts } from "@/app/blog/blog-data"

const INDONESIAN_MONTHS: Record<string, string> = {
  januari: "01",
  februari: "02",
  maret: "03",
  april: "04",
  mei: "05",
  juni: "06",
  juli: "07",
  agustus: "08",
  september: "09",
  oktober: "10",
  november: "11",
  desember: "12",
}

function toIsoDate(date: string) {
  const [day, month, year] = date.toLowerCase().split(" ")
  const monthNumber = INDONESIAN_MONTHS[month]
  if (!monthNumber) return undefined
  return `${year}-${monthNumber}-${day.padStart(2, "0")}`
}

export function generateStaticParams() {
  return posts.map((p) => ({ slug: p.slug }))
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;

  const post = getPostBySlug(slug);

  if (!post) {
    return {};
  }

  return {
    title: post.title,
    description: post.excerpt,
    alternates: {
      canonical: `/blog/${post.slug}`,
    },
    openGraph: {
      type: "article",
      title: post.title,
      description: post.excerpt,
      url: `/blog/${post.slug}`,
      publishedTime: toIsoDate(post.date),
      authors: [post.author],
      images: [
        {
          url: post.image.src,
          width: post.image.width,
          height: post.image.height,
          alt: post.title,
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title: post.title,
      description: post.excerpt,
      images: [post.image.src],
    },
  };
}

export default async function BlogDetailPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;

  const post = getPostBySlug(slug);

  if (!post) {
    notFound();
  }

  const related = getRelatedPosts(post.slug);

  const articleJsonLd = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: post.title,
    description: post.excerpt,
    image: [post.image.src],
    datePublished: toIsoDate(post.date),
    author: {
      "@type": "Organization",
      name: post.author,
    },
    publisher: {
      "@type": "Organization",
      name: "Karang Taruna Putra Manik",
      logo: {
        "@type": "ImageObject",
        url: "https://kartarputramanik.my.id/og-image.png",
      },
    },
    mainEntityOfPage: {
      "@type": "WebPage",
      "@id": `https://kartarputramanik.my.id/blog/${post.slug}`,
    },
  };

  return (
    <main className="text-white">
      <script
        type="application/ld+json"
        // eslint-disable-next-line react/no-danger
        dangerouslySetInnerHTML={{ __html: JSON.stringify(articleJsonLd) }}
      />
      <article className="max-w-5xl mx-auto px-4 md:px-6 pt-10 pb-24">
        {/* Back link */}
        <Link
          href="/blog"
          className="inline-flex items-center gap-2 font-mono text-xs uppercase tracking-[0.2em] text-white/50  hover:text-white transition-colors mb-10"
        >
          <ArrowLeft size={14} />
          Kembali ke blog
        </Link>

        {/* Header */}
        <div className="space-y-5 mb-10">
          <span className="inline-block font-mono text-[11px] uppercase tracking-[0.3em] text-amber-600 text-amber-400">
            {post.category}
          </span>

          <h1 className="font-serif text-3xl md:text-5xl font-medium leading-tight tracking-tight">
            {post.title}
          </h1>

          <div className="flex items-center gap-3 font-mono text-xs text-primary/40 text-white/40">
            <span>{post.author}</span>
            <span>&middot;</span>
            <span>{post.date}</span>
            <span>&middot;</span>
            <span>{post.readTime} baca</span>
          </div>
        </div>

        {/* Hero image */}
        <div className="relative w-full h-64 md:h-[420px] overflow-hidden rounded-sm mb-12">
          <Image
            src={post.image}
            alt={post.title}
            fill
            sizes="(max-width: 768px) 100vw, 768px"
            className="object-cover"
            priority
          />
        </div>

        {/* Content */}
        <div className="space-y-6">
          {post.content.map((paragraph, i) => (
            <p
              key={i}
              className={`text-base leading-relaxed text-primary/80 text-white/70 ${i === 0
                ? "first-letter:font-serif first-letter:text-5xl first-letter:font-medium first-letter:text-amber-600 first-letter:text-amber-400 first-letter:mr-2 first-letter:float-left first-letter:leading-[0.9]"
                : ""
                }`}
            >
              {paragraph}
            </p>
          ))}
        </div>

        <div className="h-px w-full bg-primary/10 bg-white/10 mt-16 mb-12" />

        {/* Related posts */}
        {related.length > 0 && (
          <div className="space-y-6">
            <span className="inline-block font-mono text-[11px] uppercase tracking-[0.3em] text-primary/40 text-white/40">
              Baca juga
            </span>

            <div className="grid sm:grid-cols-3 gap-6">
              {related.map((r) => (
                <Link
                  key={r.slug}
                  href={`/blog/${r.slug}`}
                  className="group flex flex-col overflow-hidden rounded-sm border border-primary/10 border-white/10 hover:border-amber-500/40 transition-colors duration-300"
                >
                  <div className="relative aspect-[4/3] overflow-hidden">
                    <Image
                      src={r.image}
                      alt={r.title}
                      fill
                      sizes="33vw"
                      className="object-cover transition-transform duration-500 group-hover:scale-105"
                    />
                  </div>
                  <div className="p-4 space-y-2">
                    <span className="font-mono text-[10px] uppercase tracking-[0.2em] text-amber-600 text-amber-400">
                      {r.category}
                    </span>
                    <h4 className="font-serif text-base font-medium leading-snug">
                      {r.title}
                    </h4>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        )}
      </article>
    </main>
  )
}
