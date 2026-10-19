import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Blog & Artikel",
  description:
    "Dokumentasi, cerita, dan perkembangan kegiatan Karang Taruna Putra Manik dalam membangun desa dan generasi muda di Plumbon Gambang, Kec. Gudo, Kabupaten Jombang.",
  alternates: {
    canonical: "/blog",
  },
  openGraph: {
    title: "Blog & Artikel Karang Taruna Putra Manik",
    description:
      "Dokumentasi dan cerita kegiatan Karang Taruna Putra Manik di Desa Plumbon Gambang.",
    url: "/blog",
  },
};

export default function BlogLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
