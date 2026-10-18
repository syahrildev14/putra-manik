"use client"

import Image from "next/image"
import Link from "next/link"
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
  CardDescription
} from "@/components/ui/card"

import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious
} from "@/components/ui/carousel"

import { posts } from "@/app/blog/blog-data"

const latestPosts = posts.slice(0, 6)

export default function SectionBlog() {
  return (
    <section className="py-24">
      <div className="max-w-6xl mx-auto px-4">

        {/* TITLE */}
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-primary text-white">
            Blog & Kegiatan
          </h2>
          <p className="text-gray-500 mt-2">
            Informasi terbaru kegiatan Karang Taruna
          </p>
        </div>

        {/* CAROUSEL */}
        <Carousel
          opts={{
            align: "start",
          }}
          className="w-full"
        >
          <CarouselContent>

            {latestPosts.map((post) => (
              <CarouselItem key={post.slug} className="md:basis-1/2 lg:basis-1/3">

                <Card className="overflow-hidden hover:shadow-xl transition">

                  <div className="relative h-48 w-full">
                    <Image
                      src={post.image}
                      alt={post.title}
                      fill
                      className="object-cover"
                    />
                  </div>

                  <CardHeader>
                    <CardTitle>{post.title}</CardTitle>
                    <CardDescription className="text-primary/50 text-white/50">
                      {post.excerpt}
                    </CardDescription>
                  </CardHeader>

                  <CardContent>
                    <Link
                      href={`/blog/${post.slug}`}
                      className="text-primary text-white font-semibold"
                    >
                      Baca Selengkapnya →
                    </Link>
                  </CardContent>

                </Card>

              </CarouselItem>
            ))}

          </CarouselContent>

          <CarouselPrevious />
          <CarouselNext />
        </Carousel>

      </div>
    </section>
  )
}
