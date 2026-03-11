"use client"

import { useState } from "react"
import Image from "next/image"

import humasy1 from "@/app/images/humasy/humasy.png"
import humasy2 from "@/app/images/humasy/humasy.png"
import humasy3 from "@/app/images/humasy/humasy.png"
import humasy4 from "@/app/images/humasy/humasy.png"
import humasy5 from "@/app/images/humasy/humasy.png"

export default function Section() {

  const data = [
    {
      nama: "SYAHRIL CAESA MAHIRA",
      divisi: "ketua karang taruna",
      dusun: "Gambang",
      rw: "02",
      rt: "06",
      image: humasy1
    },
    {
      nama: "AFIF BAGUS",
      divisi: "wakil ketua karang taruna",
      dusun: "Sido Makmur",
      rw: "01",
      rt: "03",
      image: humasy2
    },
    {
      nama: "BUDI SANTOSO",
      divisi: "sekretaris karang taruna",
      dusun: "Karang Anyar",
      rw: "04",
      rt: "02",
      image: humasy3
    },
    {
      nama: "RIZKY MAULANA",
      divisi: "bendahara karang taruna",
      dusun: "Tegal Rejo",
      rw: "03",
      rt: "01",
      image: humasy4
    },
    {
      nama: "ANDI SAPUTRA",
      divisi: "koor divisi humasy",
      dusun: "Sumber Rejo",
      rw: "05",
      rt: "04",
      image: humasy5
    },
    {
      nama: "ANDI SAPUTRA",
      divisi: "koor divisi media",
      dusun: "Sumber Rejo",
      rw: "05",
      rt: "04",
      image: humasy5
    }
  ]

  const [active, setActive] = useState(0)
  const current = data[active]

  return (
    <section className="relative w-full dark:text-white overflow-hidden mt-20 ">
      <div className="max-w-7xl mx-auto grid md:grid-cols-2 items-center min-h-screen px-8 ">

        {/* LEFT CONTENT */}
        <div className="space-y-6 text-primary dark:text-white">

          <h1 className="text-7xl font-bold tracking-widest text-gray-300">
            未来
          </h1>

          <div>
            <h2 className="text-5xl font-bold leading-tight">
              {current.nama}
            </h2>

            <p className="text-sm dark:text-white/60 mt-2 uppercase">
              {current.divisi}
            </p>
          </div>

          {/* info */}
          <div className="flex gap-10 text-xs text-primary dark:text-white/60 pt-8">
            <div>
              <p className="uppercase">Dusun</p>
              <p className="dark:text-white">{current.dusun}</p>
            </div>

            <div>
              <p className="uppercase">RW</p>
              <p className="dark:text-white">{current.rw}</p>
            </div>

            <div>
              <p className="uppercase">RT</p>
              <p className="dark:text-white">{current.rt}</p>
            </div>
          </div>

          {/* pagination */}
          <div className="flex items-center gap-6 pt-12">
            <div className="flex items-center gap-4 text-sm">

              {data.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setActive(index)}
                  className={`transition ${
                    active === index
                      ? "text-white font-bold bg-primary p-2 rounded-lg"
                      : "dark:text-white/40 hover:dark:text-white"
                  }`}
                >
                  {String(index + 1).padStart(2, "0")}
                </button>
              ))}

            </div>
          </div>

        </div>

        {/* RIGHT IMAGE */}
        <div className="relative flex justify-end">
          <Image
            src={current.image}
            alt={current.nama}
            className="w-[520px] object-cover transition-all duration-500"
          />
        </div>

      </div>
    </section>
  )
}