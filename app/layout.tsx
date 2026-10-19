import type { Metadata } from "next";
import { GoogleAnalytics } from "@next/third-parties/google";
import "./globals.css";

import Link from "next/link";

import { Button } from "@/components/ui/button";
import {
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuList,
} from "@/components/ui/navigation-menu";

import Footer from "@/components/ui/Footer";

// font
import { Righteous, Roboto } from "next/font/google";

// icons
import {
  Home,
  MessagesSquare,
  Shield,
  Newspaper,
  Landmark,
  Menu,
  Sparkles,
  Instagram,
  MapPin,
} from "lucide-react";
import { ThemeProvider } from "@/components/theme-provider";
import {
  Sheet,
  SheetContent,
  SheetTrigger,
  SheetHeader,
  SheetTitle,
  SheetClose,
} from "@/components/ui/sheet";
import ScrollToTop from "@/components/ScrolltoTop";
import ScrollProgressBar from "@/components/ScrollProgressBar";

const roboto = Roboto({
  subsets: ["latin"],
  weight: ["300", "400", "500", "700"],
  display: "swap",
});

const logoFont = Righteous({
  weight: "400",
  subsets: ["latin"],
});

const siteUrl = "https://kartarputramanik.my.id";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: "Karang Taruna Putra Manik - Organisasi Pemuda Desa Plumbon Gambang",
    template: "%s | Karang Taruna Putra Manik",
  },
  description:
    "Karang Taruna Putra Manik adalah organisasi kepemudaan Desa Plumbon Gambang, Kec. Gudo, Kabupaten Jombang, Jawa Timur. Bergerak dalam kegiatan sosial, pelatihan, dan pemberdayaan generasi muda desa.",

  icons: {
    icon: [
      { url: "/icon.png" },
      { url: "/icon.png", type: "image/png", sizes: "32x32" },
      { url: "/icon-192.png", type: "image/png", sizes: "192x192" },
    ],
    shortcut: "/icon.png",
    apple: "/apple-icon.png",
  },

  keywords: [
    "Karang Taruna Putra Manik",
    "Karang Taruna Plumbon Gambang",
    "Karang Taruna Gudo Jombang",
    "organisasi pemuda desa",
    "kegiatan sosial pemuda Jombang",
  ],
  authors: [{ name: "Karang Taruna Putra Manik" }],
  alternates: {
    canonical: "/",
  },
  openGraph: {
    type: "website",
    locale: "id_ID",
    url: siteUrl,
    siteName: "Karang Taruna Putra Manik",
    title: "Karang Taruna Putra Manik - Organisasi Pemuda Desa Plumbon Gambang",
    description:
      "Organisasi kepemudaan Desa Plumbon Gambang, Kec. Gudo, Kabupaten Jombang yang bergerak dalam kegiatan sosial, pelatihan, dan pemberdayaan generasi muda desa.",
    images: [
      {
        url: "/og-image.png",
        width: 512,
        height: 512,
        alt: "Logo Karang Taruna Putra Manik",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Karang Taruna Putra Manik - Organisasi Pemuda Desa Plumbon Gambang",
    description:
      "Organisasi kepemudaan Desa Plumbon Gambang, Kec. Gudo, Kabupaten Jombang yang bergerak dalam kegiatan sosial, pelatihan, dan pemberdayaan generasi muda desa.",
    images: ["/og-image.png"],
  },
  robots: {
    index: true,
    follow: true,
  },
};

const organizationJsonLd = {
  "@context": "https://schema.org",
  "@type": "Organization",
  name: "Karang Taruna Putra Manik",
  url: siteUrl,
  logo: `${siteUrl}/og-image.png`,
  description:
    "Organisasi kepemudaan Desa Plumbon Gambang, Kec. Gudo, Kabupaten Jombang, Jawa Timur yang bergerak dalam kegiatan sosial, pelatihan, dan pemberdayaan generasi muda desa.",
  email: "kartarmanik17@gmail.com",
  telephone: "+6287864005772",
  address: {
    "@type": "PostalAddress",
    addressLocality: "Desa Plumbon Gambang, Kec. Gudo",
    addressRegion: "Jawa Timur",
    addressCountry: "ID",
  },
  sameAs: [
    "https://instagram.com/kartarmanik",
    "https://tiktok.com/@kartarmanik",
  ],
};

const navItems = [
  { label: "Home", href: "/", icon: Home },
  { label: "Profil", href: "/profile", icon: Landmark },
  { label: "Pengurus", href: "/pengurus", icon: Shield },
  { label: "Blog", href: "/blog", icon: Newspaper },
];

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="id"
      className="light"
      style={{ colorScheme: "light" }}
      suppressHydrationWarning
    >
      <body
        className={`${roboto.className} antialiased min-h-screen flex flex-col`}
        suppressHydrationWarning
      >
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationJsonLd) }}
        />
        <ScrollProgressBar />
        <ThemeProvider>

          {/* HEADER */}
          <header className="sticky top-0 z-50 bg-background/80 backdrop-blur-xl border-b border-border/40">
            <div className="container mx-auto flex h-16 items-center justify-between px-4">

              {/* Logo Interaktif */}
              <Link href="/" className="group flex items-center gap-2.5 py-1">
                <div className="relative flex h-9 w-9 items-center justify-center rounded-xl bg-gradient-to-br from-primary/20 via-primary/10 to-amber-500/10 border border-primary/30 shadow-inner transition-all duration-500 group-hover:scale-110 group-hover:border-primary/60 group-hover:shadow-[0_0_15px_rgba(var(--primary-rgb),0.3)]">
                  <Sparkles className="h-4 w-4 text-primary transition-transform duration-700 ease-out group-hover:rotate-180 group-hover:scale-110" />
                  <span className="absolute -inset-0.5 -z-10 rounded-xl bg-primary/20 opacity-0 blur-sm transition-opacity duration-500 group-hover:opacity-100" />
                </div>

                <div className="flex items-center gap-1">
                  <span
                    className={`${logoFont.className} text-xl tracking-wide bg-gradient-to-r from-foreground via-foreground/90 to-primary bg-clip-text text-transparent inline-block transition-all duration-300 group-hover:translate-x-0.5 group-hover:brightness-125`}
                  >
                    Putra Manik
                  </span>
                  <span className="h-1.5 w-1.5 rounded-full bg-amber-500 transition-all duration-300 group-hover:scale-150 group-hover:bg-primary group-hover:shadow-[0_0_8px_rgba(var(--primary-rgb),0.8)]" />
                </div>
              </Link>

              {/* ================= Desktop Navigation ================= */}
              <NavigationMenu className="hidden md:flex z-50">
                <NavigationMenuList className="gap-6">
                  {navItems.map((item) => {
                    const Icon = item.icon;
                    return (
                      <NavigationMenuItem key={item.href}>
                        <Link
                          href={item.href}
                          className="flex items-center gap-2 text-sm font-medium transition-colors hover:text-primary"
                        >
                          <Icon size={18} />
                          {item.label}
                        </Link>
                      </NavigationMenuItem>
                    );
                  })}
                </NavigationMenuList>
              </NavigationMenu>

              {/* Desktop Right */}
              <div className="hidden items-center gap-2 md:flex z-50">
                <Link
                  href="https://wa.me/6287864005772"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Button className="text-white bg-amber-600 hover:bg-amber-700 shadow-md transition-all hover:shadow-amber-600/30">
                    <MessagesSquare className="mr-2 h-4 w-4" />
                    Contact
                  </Button>
                </Link>
              </div>

              {/* ================= Mobile Menu ================= */}
              <div className="flex items-center gap-2 md:hidden">
                <Sheet>
                  <SheetTrigger asChild>
                    <Button
                      variant="outline"
                      size="icon"
                      className="relative rounded-xl border-primary/20 bg-background/50 backdrop-blur-md transition-all duration-300 hover:border-primary/50 hover:bg-primary/10 active:scale-95"
                      aria-label="Buka Menu"
                    >
                      <Menu className="h-5 w-5 text-foreground transition-transform duration-300 group-hover:scale-110" />
                    </Button>
                  </SheetTrigger>

                  <SheetContent
                    side="right"
                    className="flex flex-col justify-between w-[300px] border-l border-border/40 bg-background/95 p-6 backdrop-blur-2xl sm:w-[350px]"
                  >
                    <div>
                      {/* Header Drawer Mobile */}
                      <SheetHeader className="pb-6 border-b border-border/40 text-left">
                        <div className="flex items-center gap-2.5">
                          <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-primary/10 border border-primary/20 text-primary">
                            <Sparkles className="h-4 w-4" />
                          </div>
                          <div>
                            <SheetTitle className={`${logoFont.className} text-lg font-bold text-foreground`}>
                              Putra Manik
                            </SheetTitle>
                            <p className="text-xs text-muted-foreground">
                              Karang Taruna Plumbon Gambang
                            </p>
                          </div>
                        </div>
                      </SheetHeader>

                      {/* Menu Navigasi Items */}
                      <div className="mt-6 flex flex-col gap-2">
                        {navItems.map((item) => {
                          const Icon = item.icon;
                          return (
                            <SheetClose asChild key={item.href}>
                              <Link
                                href={item.href}
                                className="group flex items-center justify-between rounded-xl px-3.5 py-3 text-sm font-medium text-muted-foreground transition-all duration-200 hover:bg-primary/10 hover:text-primary active:scale-[0.98]"
                              >
                                <div className="flex items-center gap-3">
                                  <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-muted text-muted-foreground transition-colors group-hover:bg-primary group-hover:text-primary-foreground">
                                    <Icon size={18} />
                                  </div>
                                  <span>{item.label}</span>
                                </div>
                                <span className="h-1.5 w-1.5 rounded-full bg-transparent transition-all group-hover:bg-primary" />
                              </Link>
                            </SheetClose>
                          );
                        })}
                      </div>
                    </div>

                    {/* Bottom Action & Footer Info */}
                    <div className="space-y-5 pt-6 border-t border-border/40">
                      {/* Call To Action WhatsApp */}
                      <SheetClose asChild>
                        <Link
                          href="https://wa.me/6287864005772"
                          target="_blank"
                          rel="noopener noreferrer"
                          className="block"
                        >
                          <Button className="w-full h-11 text-white bg-gradient-to-r from-amber-600 to-amber-700 hover:from-amber-700 hover:to-amber-800 shadow-lg shadow-amber-600/20 font-medium rounded-xl gap-2 transition-all active:scale-[0.98]">
                            <MessagesSquare className="h-4 w-4" />
                            Hubungi via WhatsApp
                          </Button>
                        </Link>
                      </SheetClose>

                      {/* Info Lokasi & Media Sosial */}
                      <div className="space-y-3 px-1 text-xs text-muted-foreground">
                        <div className="flex items-center gap-2">
                          <MapPin size={14} className="text-primary shrink-0" />
                          <span>Desa Plumbon Gambang, Gudo, Jombang</span>
                        </div>

                        <div className="flex items-center justify-between pt-2">
                          <span className="text-[11px] font-semibold tracking-wider uppercase opacity-70">
                            Ikuti Kami
                          </span>
                          <div className="flex items-center gap-3">
                            <Link
                              href="https://instagram.com/kartarmanik"
                              target="_blank"
                              rel="noopener noreferrer"
                              className="text-muted-foreground hover:text-primary transition-colors"
                            >
                              <Instagram size={16} />
                            </Link>
                            <Link
                              href="https://tiktok.com/@kartarmanik"
                              target="_blank"
                              rel="noopener noreferrer"
                              className="text-muted-foreground hover:text-primary transition-colors font-bold text-[11px]"
                            >
                              TikTok
                            </Link>
                          </div>
                        </div>
                      </div>
                    </div>
                  </SheetContent>
                </Sheet>
              </div>

            </div>
          </header>

          <div className="relative min-h-screen overflow-hidden flex-1 flex flex-col">
            {/* BACKGROUND GARIS */}
            <div
              className="absolute inset-0 -z-10 bg-[linear-gradient(to_right,rgba(75,85,99,0.15)_1px,transparent_1px)] bg-[size:80px_100%]"
            />

            {/* BACKGROUND GRADIENT */}
            <div
              className="fixed inset-0 -z-10 bg-[linear-gradient(to_bottom,rgba(99,102,241,0.08),transparent,rgba(236,72,153,0.08))]"
            />

            {/* CONTENT */}
            <main className="flex-1 relative">
              {children}
            </main>
          </div>

          {/* FOOTER */}
          <Footer />

          <ScrollToTop />

        </ThemeProvider>
        <GoogleAnalytics gaId={process.env.NEXT_PUBLIC_GA_ID!} />
      </body>
    </html>
  );
}