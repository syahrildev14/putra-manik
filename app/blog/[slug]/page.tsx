import Image from "next/image"
import Link from "next/link"
import { notFound } from "next/navigation"
import { ArrowLeft } from "lucide-react"

import { getPostBySlug, getRelatedPosts, posts } from "@/app/blog/blog-data"

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

  return (
    <main className="text-white">
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
