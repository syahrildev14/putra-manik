import type { Metadata } from "next";
import "./globals.css";

import Link from "next/link";

import { Button } from "@/components/ui/button";
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
} from "@/components/ui/navigation-menu";

import Footer from "@/components/ui/Footer";

// font
import { Righteous, Roboto } from "next/font/google";

// icons
import {
  Home,
  Phone,
  Shield,
  Newspaper,
  Landmark,
  Menu,
} from "lucide-react";
import { ThemeProvider } from "@/components/theme-provider";
import {
  Sheet,
  SheetContent,
  SheetTrigger,
  SheetHeader,
  SheetTitle,
} from "@/components/ui/sheet";


const roboto = Roboto({
  subsets: ["latin"],
  weight: ["300", "400", "500", "700"], // lebih fleksibel
  display: "swap",
});

const logoFont = Righteous({
  weight: "400",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Kartar Manik",
  description: "Organisasi karang taruna plumbon desa gambang",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="en"
      className="light"
      style={{ colorScheme: "light" }}
      suppressHydrationWarning
    >
      <body className={`${roboto.className} antialiased min-h-screen flex flex-col`}>

        <ThemeProvider>

          {/* HEADER */}
          <header className="sticky top-0 z-90 border-b bg-background/80 backdrop-blur-xl">
            <div className="container mx-auto flex h-16 items-center justify-between px-4">

              {/* Logo */}
              <Link
                href="/"
                className={`${logoFont.className} text-xl tracking-wide`}
              >
                Putra Manik
              </Link>

              {/* ================= Desktop Navigation ================= */}
              <NavigationMenu className="hidden md:flex z-90">
                <NavigationMenuList className="gap-6">

                  <NavigationMenuItem>
                    <Link href="/" className="flex items-center gap-2">
                      <Home size={18} />
                      Home
                    </Link>
                  </NavigationMenuItem>

                  <NavigationMenuItem>
                    <Link href="/profile" className="flex items-center gap-2">
                      <Landmark size={18} />
                      Profil
                    </Link>
                  </NavigationMenuItem>

                  <NavigationMenuItem>
                    <Link href="/pengurus" className="flex items-center gap-2">
                      <Shield size={18} />
                      Pengurus
                    </Link>
                  </NavigationMenuItem>

                  <NavigationMenuItem>
                    <Link href="/blog" className="flex items-center gap-2">
                      <Newspaper size={18} />
                      Blog
                    </Link>
                  </NavigationMenuItem>

                </NavigationMenuList>
              </NavigationMenu>

              {/* Desktop Right */}
              <div className="hidden items-center gap-2 md:flex z-50">
                

                <Link href="/contact">
                  <Button className="text-white bg-amber-600">
                    <Phone className="mr-2 h-4 w-4" />
                    Contact
                  </Button>
                </Link>
              </div>

              {/* ================= Mobile Menu ================= */}
              <div className="flex items-center gap-2 md:hidden">

                <Sheet>
                  <SheetTrigger asChild>
                    <Button variant="ghost" size="icon">
                      <Menu className="h-6 w-6" />
                    </Button>
                  </SheetTrigger>

                  <SheetContent side="right" className="w-[280px]">

                    <SheetHeader>
                      <SheetTitle>Menu Navigasi</SheetTitle>
                    </SheetHeader>

                    <div className="mt-8 flex flex-col gap-2">

                      <Link
                        href="/"
                        className="flex items-center gap-3 rounded-lg px-3 py-3 hover:bg-muted"
                      >
                        <Home size={18} />
                        Home
                      </Link>

                      <Link
                        href="/profile"
                        className="flex items-center gap-3 rounded-lg px-3 py-3 hover:bg-muted"
                      >
                        <Landmark size={18} />
                        Profil
                      </Link>

                      <Link
                        href="/divisi/pengurus"
                        className="flex items-center gap-3 rounded-lg px-3 py-3 hover:bg-muted"
                      >
                        <Shield size={18} />
                        Pengurus
                      </Link>

                      <Link
                        href="/blog"
                        className="flex items-center gap-3 rounded-lg px-3 py-3 hover:bg-muted"
                      >
                        <Newspaper size={18} />
                        Blog
                      </Link>

                      <div className="mt-6 px-3">
                        <Link href="/contact">
                          <Button className="w-full text-white">
                            <Phone className="mr-2 h-4 w-4" />
                            Contact
                          </Button>
                        </Link>
                      </div>

                    </div>

                  </SheetContent>
                </Sheet>

              </div>

            </div>
          </header>

          <div className="relative min-h-screen overflow-hidden">

            {/* BACKGROUND GARIS */}
            <div
              className="absolute inset-0 -z-10
  bg-[linear-gradient(to_right,rgba(75,85,99,0.22)_1px,transparent_1px)]
  bg-[size:80px_100%]"
            ></div>


            {/* BACKGROUND GRADIENT */}
            <div
              className="fixed inset-0 -z-10
  bg-[linear-gradient(to_bottom,rgba(99,102,241,0.15),transparent,rgba(236,72,153,0.15))]"
            ></div>


            {/* CONTENT */}
            <main className="flex-1 relative">
              {children}
            </main>

          </div>


          {/* FOOTER */}
          <Footer />

        </ThemeProvider>
      </body>
    </html >
  );
}