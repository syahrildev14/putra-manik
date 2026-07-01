
import { Expand } from "lucide-react"
import Marquee from "@/components/ui/Marquee"
import AboutSection from "@/components/About";
import HeroSection from "@/components/Hero";
import StatistikSection from "@/components/DataStatistik";
import DivisiKartarSection from "@/components/Divisi";

// humasy
import medusa from "./images/medusa.png"
import SectionPengurus from "@/components/section-pengurus"
import CarouselBlog from "@/components/CarouselBlog"
import Medusa from "@/components/Medusa";



const Page = () => {
  return (
    <div className="w-full">

      {/* Hero Section */}
      <HeroSection />


      {/* Section About */}
      <AboutSection />

      {/* Section Divisi */}
      <DivisiKartarSection />

      {/* Marquee */}
      <Marquee>
        <span className="flex items-center gap-6 font-semibold whitespace-nowrap">
          Kartar Manik <Expand size={16} />
          Kartar Manik <Expand size={16} />
          Kartar Manik <Expand size={16} />
          Kartar Manik <Expand size={16} />
          Kartar Manik <Expand size={16} />
        </span>
      </Marquee>

      {/* Pengurus Inti */}
      <section className="mt-10">
        <Medusa />

        <SectionPengurus />

      </section>

      <StatistikSection />

      {/* Carousel Blog */}
      <CarouselBlog />

    </div>
  )
}

export default Page
