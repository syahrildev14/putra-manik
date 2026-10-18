
import { Expand } from "lucide-react"
import Marquee from "@/components/ui/Marquee"
import AboutSection from "@/components/About";
import HeroSection from "@/components/Hero";
import StatistikSection from "@/components/DataStatistik";
import DivisiKartarSection from "@/components/Divisi";

// humasy
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
      <Marquee gap={40}>
        {Array.from({ length: 5 }).map((_, i) => (
          <span key={i} className="flex items-center gap-3 font-semibold whitespace-nowrap">
            Putra Manik <Expand size={16} />
          </span>
        ))}
      </Marquee>

      {/* Pengurus Inti */}
      <section className="mt-10">
        <Medusa />

      </section>

      <StatistikSection />

      {/* Carousel Blog */}
      <CarouselBlog />

    </div>
  )
}

export default Page
