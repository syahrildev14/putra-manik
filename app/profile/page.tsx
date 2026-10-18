import Image from "next/image"
import bareng from "@/app/images/bareng.webp"
import SectionGaleri from "@/components/Galeri"

import { Target, Eye, History, MapPin } from "lucide-react"
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
            Profil Karang Taruna Putra Manik
          </h1>

          <p className="text-lg text-gray-200">
            <strong>Karang Taruna Putra Manik</strong> merupakan organisasi
            kepemudaan yang berkomitmen dalam membangun generasi muda yang
            aktif, kreatif, dan berdaya saing. Melalui berbagai program
            pemberdayaan pemuda, kegiatan sosial, olahraga, seni budaya,
            serta pengabdian kepada masyarakat.
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
              <p className="font-semibold">2024</p>
              <p className=" text-sm">
                Pembentukan Karang Taruna Manik sebagai wadah organisasi pemuda.
              </p>
            </div>

            <div className="mb-6">
              <p className="font-semibold">2025</p>
              <p className=" text-sm">
                Mulai aktif mengadakan kegiatan sosial dan kepemudaan di desa.
              </p>
            </div>

            <div>
              <p className="font-semibold">2026</p>
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

        {/* LOKASI */}
        <div>
          <div className="text-center mb-12">
            <div className="flex items-center justify-center gap-2 text-primary mb-3">
              <MapPin size={20} />
              <span className="font-semibold">Lokasi</span>
            </div>

            <h2 className="text-3xl font-bold mb-3">
              Sekretariat Karang Taruna
            </h2>
            <p className="text-primary text-white/50 max-w-xl mx-auto">
              Dusun Gambang, RW 02 / RT 06, Desa Plumbon Gambang, Kec. Gudo,
              Kabupaten Jombang, Jawa Timur.
            </p>
          </div>

          <div className="overflow-hidden rounded-xl border shadow-sm">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d31637.039575193194!2d112.1585428564726!3d-7.615183513595162!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2e78417b55d4bd75%3A0xf1e6ed56bead082d!2sPlumbon%20Gambang%2C%20Kec.%20Gudo%2C%20Kabupaten%20Jombang%2C%20Jawa%20Timur!5e0!3m2!1sid!2sid!4v1791161990589!5m2!1sid!2sid"
              width="100%"
              height="450"
              style={{ border: 0 }}
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="Lokasi Karang Taruna Putra Manik"
              className="w-full"
            />
          </div>

          <div className="mt-4 text-center">
            <a
              href="https://www.google.com/maps/search/?api=1&query=Plumbon+Gambang%2C+Kec.+Gudo%2C+Kabupaten+Jombang%2C+Jawa+Timur"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 text-primary font-semibold hover:underline"
            >
              <MapPin size={16} />
              Buka di Google Maps
            </a>
          </div>
        </div>

      </section>

      {/* Galeri */}
      <SectionGaleri />

    </div>
  )
}

export default Page
