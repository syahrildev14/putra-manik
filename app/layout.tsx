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
  Users,
  Phone,
  Shield,
  Megaphone,
  Camera,
  Newspaper,
  Landmark,
} from "lucide-react";
import { ThemeProvider } from "@/components/theme-provider";
import { ThemeToggle } from "@/components/ui/theme-toggle";


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
          <header className="border-b sticky top-0 bg-background/20 backdrop-blur-2xl z-90">
            <div className="container mx-auto flex items-center justify-between h-16 px-4">

              {/* Logo */}
              <Link href="/" className={`${logoFont.className} text-xl tracking-wide`}>
                Kartar Manik
              </Link>

              {/* Navigation */}
              <NavigationMenu>
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

                  {/* Dropdown Divisi */}
                  <NavigationMenuItem>
                    <NavigationMenuTrigger className="flex items-center gap-2 bg-transparent">
                      <Users size={18} />
                      Divisi
                    </NavigationMenuTrigger>

                    <NavigationMenuContent>
                      <ul className="grid w-[300px] gap-3 p-4">

                        <li>
                          <NavigationMenuLink asChild>
                            <Link
                              href="/divisi/pengurus-inti"
                              className="flex items-center gap-2"
                            >
                              <Shield size={16} />
                              Pengurus Inti
                            </Link>
                          </NavigationMenuLink>
                        </li>

                        <li>
                          <NavigationMenuLink asChild>
                            <Link
                              href="/divisi/humasy"
                              className="flex items-center gap-2"
                            >
                              <Megaphone size={16} />
                              Humasy
                            </Link>
                          </NavigationMenuLink>
                        </li>

                        <li>
                          <NavigationMenuLink asChild>
                            <Link
                              href="/divisi/media"
                              className="flex items-center gap-2"
                            >
                              <Camera size={16} />
                              Media
                            </Link>
                          </NavigationMenuLink>
                        </li>

                      </ul>
                    </NavigationMenuContent>
                  </NavigationMenuItem>

                  <NavigationMenuItem>
                    <Link href="/blog" className="flex items-center gap-2">
                      <Newspaper size={18} />
                      Blog
                    </Link>
                  </NavigationMenuItem>


                </NavigationMenuList>
              </NavigationMenu>

              {/* CTA */}
              <div className="flex gap-2">
                <ThemeToggle />
                <Link href="/contact">
                  <Button className="dark:text-white"><Phone /> Contact</Button>
                </Link>
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