import Image from "next/image"
import imageHero from "./images/hero.png"
import img1 from "./images/1.webp"
import img2 from "./images/2.webp"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { ArrowUpRightIcon, Expand } from "lucide-react"
import Marquee from "@/components/ui/Marquee"
import { History, Eye, Target } from "lucide-react";
import ChartAnggota from "@/components/chartkartar"

// humasy
import medusa from "./images/medusa.png"
import SectionPengurus from "@/components/section-pengurus"
import CarouselBlog from "@/components/CarouselBlog"

import { Badge } from "@/components/ui/badge"


import {
  Card,
  CardAction,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"

const Page = () => {
  return (
    <div className="w-full">

      {/* Hero Section */}
      <div className="grid grid-cols-1 md:grid-cols-2 px-6 md:px-14 rounded-4xl items-center gap-8 md:gap-14 text-white py-10 md:py-0">

        <div className="text-primary dark:text-white space-y-5 text-center md:text-left">
          <h1 className="text-5xl sm:text-6xl md:text-8xl font-bold texthero">
            Karang Taruna Putra Manik
          </h1>

          <p className="mt-4 texthero">
            Karang Taruna Manik menjadi wadah pemuda untuk berkontribusi,
            berinovasi, dan membangun lingkungan yang lebih baik.
          </p>

          <Link href="">
            <Button className="dark:text-white p-6 hover:bg-primary/80 transition duration-200 cursor-pointer">
              Learn More <ArrowUpRightIcon />
            </Button>
          </Link>
        </div>

        <div className="flex items-center justify-center">
          <Image src={imageHero} alt="Hero" className="w-full max-w-xs sm:max-w-sm md:w-2xl" />
        </div>
      </div>


      {/* Section About */}
      <section className="py-16 md:py-32 min-h-screen flex items-center">
        <div className="max-w-6xl mx-auto px-6">

          {/* Header */}
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold">
              About Us
            </h2>
            <p className="mt-4 max-w-2xl mx-auto">
              Kami adalah organisasi kepemudaan yang berkomitmen untuk
              membangun generasi muda yang aktif, kreatif, dan peduli terhadap
              lingkungan serta masyarakat sekitar.
            </p>
          </div>

          {/* Content */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">

            {/* Sejarah (Full Width) */}
            <div className="relative p-8 border rounded-xl md:col-span-2 bg-primary text-white">
              <div className="bg-white/30 p-3 rounded-md inline-flex mb-4">
                <History size={30} className="text-white/80 backdrop-blur-2xl" />
              </div>
              <h3 className="text-xl font-semibold mb-3 text-center">Sejarah</h3>
              <p className="text-gray-300 text-justify font-extralight">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusamus quam ea numquam repellat alias mollitia libero, omnis commodi quibusdam unde, incidunt reprehenderit vero distinctio est aperiam, perferendis sunt atque et!
                Tempora vel quaerat optio inventore, at sit sunt velit placeat illo nam? Deserunt, ex mollitia? Harum nobis necessitatibus in est? Obcaecati itaque repellendus unde laborum praesentium optio iste sed excepturi.
                Non necessitatibus, nostrum accusantium aliquam laudantium eaque blanditiis incidunt, officia, nemo consequuntur debitis quas! Veniam dignissimos laudantium officia cumque quibusdam commodi asperiores totam nihil consectetur corrupti? Possimus, distinctio provident! Accusantium!
                Quis eligendi harum voluptate ea at nam illum ex sequi molestiae cupiditate soluta accusantium vel pariatur dicta odit, facere sint libero debitis dolore mollitia suscipit corporis quibusdam deleniti? Obcaecati, quaerat.
                Beatae autem voluptatum nihil illum sapiente dicta incidunt aliquid sint ullam esse nostrum inventore facere, quae sequi iure deserunt fugit! Natus, delectus id tenetur optio dicta perferendis at nobis laboriosam!
              </p>
            </div>

            {/* Visi */}
            <div className="p-8 border rounded-xl bg-primary text-white">
              <div className="bg-white/30 p-3 mb-4 rounded-md inline-flex">
                <Eye size={30} className="text-white/80 backdrop-blur-2xl" />
              </div>
              <h3 className="text-xl font-semibold mb-3">Visi</h3>
              <p className="text-gray-300 text-justify font-extralight">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsa inventore
                aperiam, cupiditate atque illum cum voluptas, minus libero porro totam
                hic suscipit quae magni!
              </p>
            </div>

            {/* Misi */}
            <div className="p-8 border rounded-xl bg-primary text-white">
              <div className="bg-white/30 p-3 mb-4 rounded-md inline-flex">
                <Target size={30} className="text-white/80 backdrop-blur-2xl" />
              </div>
              <h3 className="text-xl font-semibold mb-3">Misi</h3>
              <p className="text-gray-300 text-justify font-extralight">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsa inventore
                aperiam, cupiditate atque illum cum voluptas, minus libero porro totam
                hic suscipit quae magni!
              </p>
            </div>

          </div>
        </div>
      </section>

      {/* Section Divisi */}
      <section className="py-16 md:py-20 min-h-screen flex items-center">
        <div className="max-w-6xl mx-auto px-6 w-full">

          {/* Header */}
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold">
              Divisi Kami
            </h2>
            <p className="mt-4 max-w-2xl mx-auto">
              Kami adalah organisasi kepemudaan yang berkomitmen untuk
              membangun generasi muda yang aktif, kreatif, dan peduli terhadap
              lingkungan serta masyarakat sekitar.
            </p>
          </div>

          {/* Mobile: Stack Layout */}
          <div className="flex flex-col gap-8 md:hidden">
            {/* Pengurus Inti */}
            <div className="flex flex-col items-center gap-4">
              <h3 className="text-4xl font-bold text-center">Pengurus Inti</h3>
              <Card className="w-full max-w-sm">
                <Image src={img1} alt="Event cover" className="aspect-video w-full object-cover" />
                <CardHeader>
                  <CardAction><Badge variant="secondary">Kartar Manik</Badge></CardAction>
                  <CardTitle>Pengurus Utama</CardTitle>
                  <CardDescription className="text-primary dark:text-muted-foreground">
                    Informasi mengenai pengurus utama organisasi.
                  </CardDescription>
                </CardHeader>
                <CardFooter><Button className="w-full text-white hover:bg-primary/80">Learn More</Button></CardFooter>
              </Card>
            </div>

            {/* Hubungan Masyarakat */}
            <div className="flex flex-col items-center gap-4">
              <h3 className="text-4xl font-bold text-center">Hubungan Masyarakat</h3>
              <Card className="w-full max-w-sm">
                <Image src={img1} alt="Event cover" className="aspect-video w-full object-cover" />
                <CardHeader>
                  <CardAction><Badge variant="secondary">Kartar Manik</Badge></CardAction>
                  <CardTitle>Divisi Humasy</CardTitle>
                  <CardDescription className="text-primary dark:text-muted-foreground">
                    Informasi mengenai divisi organisasi.
                  </CardDescription>
                </CardHeader>
                <CardFooter><Button className="w-full text-white hover:bg-primary/80">Learn More</Button></CardFooter>
              </Card>
            </div>

            {/* Divisi Media */}
            <div className="flex flex-col items-center gap-4">
              <h3 className="text-4xl font-bold text-center">Divisi Media</h3>
              <Card className="w-full max-w-sm">
                <Image src={img2} alt="Event cover" className="aspect-video w-full object-cover" />
                <CardHeader>
                  <CardAction><Badge variant="secondary">Kartar Manik</Badge></CardAction>
                  <CardTitle>Divisi Media</CardTitle>
                  <CardDescription className="text-primary dark:text-muted-foreground">
                    Informasi mengenai pengurus utama organisasi.
                  </CardDescription>
                </CardHeader>
                <CardFooter><Button className="w-full text-white hover:bg-primary/80">Learn More</Button></CardFooter>
              </Card>
            </div>
          </div>

          {/* Desktop: Timeline Layout */}
          <div className="relative space-y-24 hidden md:block">
            {/* Garis Tengah */}
            <div className="absolute left-1/2 top-0 h-full w-[2px] -translate-x-1/2 bg-gray-400"></div>

            {/* Pengurus Inti */}
            <div className="relative grid grid-cols-2 items-center">
              <div className="pr-16 flex justify-end">
                <Card className="w-full max-w-sm">
                  <Image src={img1} alt="Event cover" className="aspect-video w-full object-cover" />
                  <CardHeader>
                    <CardAction><Badge variant="secondary">Kartar Manik</Badge></CardAction>
                    <CardTitle>Pengurus Utama</CardTitle>
                    <CardDescription className="text-primary dark:text-muted-foreground">
                      Informasi mengenai pengurus utama organisasi.
                    </CardDescription>
                  </CardHeader>
                  <CardFooter><Button className="w-full text-white hover:bg-primary/80">Learn More</Button></CardFooter>
                </Card>
              </div>
              <div className="pl-16">
                <article className="text-7xl font-bold">Pengurus Inti</article>
              </div>
              <div className="absolute left-1/2 -translate-x-1/2 w-5 h-5 bg-red-500 rounded-full border-4 border-black"></div>
            </div>

            {/* Divisi Humasy */}
            <div className="relative grid grid-cols-2 items-center">
              <div className="pr-16 flex justify-end">
                <article className="text-7xl font-bold">Hubugan Masyarakat</article>
              </div>
              <div className="pl-16">
                <Card className="w-full max-w-sm">
                  <Image src={img1} alt="Event cover" className="aspect-video w-full object-cover" />
                  <CardHeader>
                    <CardAction><Badge variant="secondary">Kartar Manik</Badge></CardAction>
                    <CardTitle>Divisi Humasy</CardTitle>
                    <CardDescription className="text-primary dark:text-muted-foreground">
                      Informasi mengenai divisi organisasi.
                    </CardDescription>
                  </CardHeader>
                  <CardFooter><Button className="w-full text-white hover:bg-primary/80">Learn More</Button></CardFooter>
                </Card>
              </div>
              <div className="absolute left-1/2 -translate-x-1/2 w-5 h-5 bg-red-500 rounded-full border-4 border-black"></div>
            </div>

            {/* Divisi Media */}
            <div className="relative grid grid-cols-2 items-center">
              <div className="pr-16 flex justify-end">
                <Card className="w-full max-w-sm">
                  <Image src={img2} alt="Event cover" className="aspect-video w-full object-cover" />
                  <CardHeader>
                    <CardAction><Badge variant="secondary">Kartar Manik</Badge></CardAction>
                    <CardTitle>Divisi Media</CardTitle>
                    <CardDescription className="text-primary dark:text-muted-foreground">
                      Informasi mengenai pengurus utama organisasi.
                    </CardDescription>
                  </CardHeader>
                  <CardFooter><Button className="w-full text-white hover:bg-primary/80">Learn More</Button></CardFooter>
                </Card>
              </div>
              <div className="pl-16">
                <article className="text-7xl font-bold">Divisi Media</article>
              </div>
              <div className="absolute left-1/2 -translate-x-1/2 w-5 h-5 bg-red-500 rounded-full border-4 border-black"></div>
            </div>
          </div>

        </div>
      </section>

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
        <div className="relative flex justify-center items-center mt-20 overflow-hidden">

          {/* TEXT BELAKANG */}
          <h1 className="absolute uppercase leading-[0.8] text-[8rem] sm:text-[14rem] md:text-[22rem] font-extrabold text-gray-300 z-0 text-center select-none pointer-events-none">
            karang <br /> taruna
          </h1>

          {/* IMAGE DEPAN */}
          <Image
            src={medusa}
            alt="medusa"
            className="relative z-10 max-w-[200px] sm:max-w-xs md:max-w-none"
          />

        </div>

        <SectionPengurus />

      </section>

      <div className="space-y-10 px-4 md:px-0">
        <div className="text-center">
          <h1 className="text-3xl font-bold text-primary dark:text-white">
            Data Statistik Karang Taruna
          </h1>
          <p className="text-gray-500 mt-2">
            Statistik anggota dan kegiatan organisasi
          </p>
        </div>

        <ChartAnggota />
      </div>

      {/* Carousel Blog */}
      <CarouselBlog />

    </div>
  )
}

export default Page
