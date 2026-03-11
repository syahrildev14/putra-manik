"use client"

import Image from "next/image"
import img1 from "@/app/images/1.webp"
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

const blogs = [
  {
    title: "Kegiatan Bakti Sosial 2026",
    desc: "Karang Taruna mengadakan kegiatan bakti sosial untuk membantu warga sekitar.",
    image: img1,
  },
  {
    title: "Turnamen Futsal Antar RT",
    desc: "Ajang olahraga tahunan yang mempererat persaudaraan antar pemuda.",
    image: img1,
  },
  {
    title: "Pelatihan Digital Marketing",
    desc: "Meningkatkan kemampuan pemuda dalam dunia digital dan bisnis online.",
    image: img1,
  },
  {
    title: "Kerja Bakti Lingkungan",
    desc: "Membersihkan lingkungan dan meningkatkan kepedulian masyarakat.",
    image: img1,
  },
]

export default function SectionBlog() {
  return (
    <section className="py-24">
      <div className="max-w-6xl mx-auto px-4">

        {/* TITLE */}
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-primary dark:text-white">
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

            {blogs.map((blog, i) => (
              <CarouselItem key={i} className="md:basis-1/2 lg:basis-1/3">

                <Card className="overflow-hidden hover:shadow-xl transition">

                  <div className="relative h-48 w-full">
                    <Image
                      src={blog.image}
                      alt={blog.title}
                      fill
                      className="object-cover"
                    />
                  </div>

                  <CardHeader>
                    <CardTitle>{blog.title}</CardTitle>
                    <CardDescription className="text-primary/50 dark:text-white/50">
                      {blog.desc}
                    </CardDescription>
                  </CardHeader>

                  <CardContent>
                    <button className="text-primary dark:text-white font-semibold">
                      Baca Selengkapnya →
                    </button>
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
