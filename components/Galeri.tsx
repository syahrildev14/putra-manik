"use client"

import Image from "next/image"
import { useState } from "react"
import { X } from "lucide-react"

import img1 from "@/app/images/1.webp"
import img2 from "@/app/images/2.webp"
import img3 from "@/app/images/1.webp"
import img4 from "@/app/images/2.webp"
import img5 from "@/app/images/1.webp"
import img6 from "@/app/images/2.webp"


const images = [img1, img2, img3, img4, img5, img6]

export default function SectionGaleri() {
  const [selected, setSelected] = useState<number | null>(null)

  return (
    <section className="max-w-7xl mx-auto px-4 py-20">

      {/* TITLE */}
      <div className="text-center mb-12">
        <h2 className="text-3xl font-bold mb-3">
          Galeri Putra Manik
        </h2>
        <p className="">
          Dokumentasi kegiatan Karang Taruna dalam berbagai kegiatan sosial,
          kepemudaan, dan kemasyarakatan.
        </p>
      </div>

      {/* GRID GALERI */}
      <div className="grid grid-cols-2 md:grid-cols-3 gap-6">

        {images.map((img, i) => (
          <div
            key={i}
            onClick={() => setSelected(i)}
            className="relative h-[220px] rounded-xl overflow-hidden cursor-pointer group"
          >
            <Image
              src={img}
              alt="galeri"
              fill
              className="object-cover transition-transform duration-500 group-hover:scale-110"
            />

            {/* overlay hover */}
            <div className="absolute inset-0 bg-black/20 opacity-0 group-hover:opacity-100 transition"></div>
          </div>
        ))}

      </div>


      {/* LIGHTBOX */}
      {selected !== null && (
        <div
          className="fixed inset-0 bg-black/80 flex items-center justify-center z-50"
          onClick={() => setSelected(null)}
        >

          <button className="absolute top-6 right-6 text-white">
            <X size={32} />
          </button>

          <div className="relative w-[90%] max-w-4xl h-[70vh]">
            <Image
              src={images[selected]}
              alt="preview"
              fill
              className="object-contain"
            />
          </div>

        </div>
      )}

    </section>
  )
}
