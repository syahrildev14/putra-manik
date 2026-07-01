import Image from "next/image"
import bareng from "@/app/images/bareng.webp"
import SectionGaleri from "@/components/Galeri"

import { Target, Eye, History } from "lucide-react"
import About from "@/components/division/core/About"

const Page = () => {
  return (
    <div>

      {/* HERO SECTION */}
      <section className="relative h-[70vh] flex items-center justify-center text-center text-white overflow-hidden">

        {/* BACKGROUND IMAGE */}
        <Image
          src={bareng}
          alt="Karang Taruna"
          fill
          priority
          className="object-cover object-[center_30%]"
        />

        {/* OVERLAY */}
        <div className="absolute inset-0 bg-black/60"></div>

        {/* CONTENT */}
        <div className="relative z-10 max-w-3xl px-6">
          <h1 className="text-5xl font-bold mb-4">
            Profil Karang Taruna
          </h1>

          <p className="text-lg text-gray-200">
            Karang Taruna adalah organisasi kepemudaan yang berperan aktif
            dalam kegiatan sosial, pembangunan masyarakat, dan pengembangan
            potensi generasi muda.
          </p>
        </div>

      </section>
      
      <About />

      <section className="max-w-7xl mx-auto px-4 py-20 space-y-20">

        {/* SEJARAH */}
        <div className="grid md:grid-cols-2 gap-10 items-center">

          {/* TEXT */}
          <div>
            <div className="flex items-center gap-2 text-primary mb-3">
              <History size={20} />
              <span className="font-semibold">Sejarah</span>
            </div>

            <h2 className="text-3xl font-bold mb-4">
              Sejarah Karang Taruna
            </h2>

            <p className=" leading-relaxed">
              Karang Taruna merupakan organisasi kepemudaan yang tumbuh dari
              kesadaran generasi muda untuk berperan aktif dalam pembangunan
              masyarakat. Organisasi ini menjadi wadah bagi pemuda untuk
              mengembangkan potensi, meningkatkan solidaritas sosial, serta
              berkontribusi dalam kegiatan kemasyarakatan.
            </p>

            <p className=" leading-relaxed mt-4">
              Karang Taruna Manik berdiri sebagai bentuk semangat kebersamaan
              pemuda Desa Gambang untuk menciptakan lingkungan yang aktif,
              kreatif, dan berdaya. Melalui berbagai kegiatan sosial, budaya,
              dan kepemudaan, organisasi ini terus berupaya memberikan
              kontribusi positif bagi masyarakat sekitar.
            </p>
          </div>

          {/* TIMELINE */}
          <div className="relative pl-6 border-l">

            <div className="mb-6">
              <p className="font-semibold">2020</p>
              <p className=" text-sm">
                Pembentukan Karang Taruna Manik sebagai wadah organisasi pemuda.
              </p>
            </div>

            <div className="mb-6">
              <p className="font-semibold">2022</p>
              <p className=" text-sm">
                Mulai aktif mengadakan kegiatan sosial dan kepemudaan di desa.
              </p>
            </div>

            <div>
              <p className="font-semibold">2024</p>
              <p className="text-sm">
                Pengembangan divisi organisasi dan kegiatan kreatif pemuda.
              </p>
            </div>

          </div>

        </div>

        {/* VISI MISI */}
        <div>

          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-3">
              Visi & Misi
            </h2>
            <p className="text-primary text-white/50 max-w-xl mx-auto">
              Komitmen Karang Taruna dalam membangun generasi muda yang aktif,
              kreatif, dan berkontribusi bagi masyarakat.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">

            {/* VISI */}
            <div className="border rounded-xl p-6 shadow-sm bg-background">
              <div className="flex items-center gap-2 text-primary mb-3">
                <Eye size={20} />
                <h3 className="text-xl font-semibold">Visi</h3>
              </div>

              <p className="text-primary text-white">
                Menjadi organisasi kepemudaan yang aktif, inovatif, dan
                berkontribusi dalam pembangunan masyarakat serta pengembangan
                potensi generasi muda.
              </p>
            </div>

            {/* MISI */}
            <div className="border rounded-xl p-6 shadow-sm bg-background">
              <div className="flex items-center gap-2 text-primary mb-3">
                <Target size={20} />
                <h3 className="text-xl font-semibold">Misi</h3>
              </div>

              <ul className="space-y-2 text-primary text-white list-disc list-inside">
                <li>Meningkatkan solidaritas dan kepedulian sosial pemuda.</li>
                <li>Mengembangkan potensi dan kreativitas generasi muda.</li>
                <li>Menyelenggarakan kegiatan sosial dan kemasyarakatan.</li>
                <li>Mendorong partisipasi aktif pemuda dalam pembangunan desa.</li>
              </ul>
            </div>

          </div>

        </div>

      </section>

      {/* Galeri */}
      <SectionGaleri />

    </div>
  )
}

export default Page
