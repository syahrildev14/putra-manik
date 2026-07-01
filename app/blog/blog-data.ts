import { StaticImageData } from "next/image"

import blog1 from "@/app/images/blog/bareng.webp"
import blog2 from "@/app/images/blog/bareng.webp"
import blog3 from "@/app/images/blog/bareng.webp"
import blog4 from "@/app/images/blog/bareng.webp"
import blog5 from "@/app/images/blog/bareng.webp"
import blog6 from "@/app/images/blog/bareng.webp"

export interface BlogPost {
  slug: string
  title: string
  excerpt: string
  content: string[]
  category: string
  date: string
  author: string
  readTime: string
  image: StaticImageData
  featured?: boolean
}

export const categories = [
  "Semua",
  "Kegiatan Sosial",
  "Pelatihan",
  "Lingkungan",
] as const

export const posts: BlogPost[] = [
  {
    slug: "bakti-sosial-idul-fitri",
    title: "Bakti Sosial Idul Fitri: Berbagi Kebahagiaan untuk Sesama",
    excerpt:
      "Karang Taruna Putra Manik menggelar bakti sosial menjelang Idul Fitri, membagikan paket sembako kepada warga kurang mampu di lima dusun.",
    content: [
      "Menjelang hari raya Idul Fitri, Karang Taruna Putra Manik kembali menggelar kegiatan bakti sosial tahunan. Kegiatan ini melibatkan seluruh pengurus dan anggota, mulai dari pengumpulan donasi hingga pembagian paket sembako langsung ke rumah-rumah warga.",
      "Sebanyak 120 paket sembako berhasil dikumpulkan dan didistribusikan ke lima dusun, dengan prioritas kepada lansia, warga difabel, dan keluarga kurang mampu. Proses pendataan penerima dilakukan bekerja sama dengan perangkat dusun setempat agar bantuan tepat sasaran.",
      "Ketua Karang Taruna menyampaikan bahwa kegiatan ini akan terus dilanjutkan setiap tahun sebagai bentuk kepedulian pemuda terhadap sesama, sekaligus mempererat hubungan antara organisasi dan masyarakat.",
    ],
    category: "Kegiatan Sosial",
    date: "12 April 2026",
    author: "Tim Humas",
    readTime: "4 menit",
    image: blog1,
    featured: true,
  },
  {
    slug: "pelatihan-kewirausahaan-pemuda",
    title: "Pelatihan Kewirausahaan: Membekali Pemuda dengan Skill Bisnis",
    excerpt:
      "Sesi pelatihan kewirausahaan digelar untuk membekali anggota dengan kemampuan dasar merintis usaha kecil dan mengelola keuangan sederhana.",
    content: [
      "Divisi pengembangan sumber daya Karang Taruna mengadakan pelatihan kewirausahaan yang diikuti oleh puluhan anggota dari berbagai dusun. Pelatihan ini menghadirkan pelaku UMKM lokal sebagai narasumber untuk berbagi pengalaman.",
      "Materi yang disampaikan mencakup dasar-dasar perencanaan usaha, pengelolaan modal, hingga strategi pemasaran melalui media sosial. Peserta juga diajak untuk menyusun rencana usaha sederhana secara langsung.",
      "Diharapkan pelatihan ini dapat mendorong lahirnya usaha-usaha kecil baru yang dikelola oleh pemuda desa, sekaligus mengurangi tingkat pengangguran di kalangan anak muda.",
    ],
    category: "Pelatihan",
    date: "28 Maret 2026",
    author: "Divisi Humas",
    readTime: "5 menit",
    image: blog2,
  },
  {
    slug: "gotong-royong-bersih-lingkungan",
    title: "Gotong Royong Bersih Lingkungan Setiap Minggu",
    excerpt:
      "Kegiatan gotong royong rutin setiap akhir pekan terus dijalankan untuk menjaga kebersihan dan kerapian lingkungan dusun.",
    content: [
      "Sebagai bagian dari program kerja rutin, Karang Taruna Putra Manik mengadakan gotong royong bersih lingkungan setiap hari Minggu pagi. Kegiatan ini melibatkan warga dari berbagai kalangan usia.",
      "Fokus kegiatan meliputi pembersihan saluran air, pemangkasan tanaman liar di area publik, serta penataan tempat pembuangan sampah sementara agar lebih tertata.",
      "Kegiatan ini juga menjadi ajang silaturahmi antarwarga sekaligus menumbuhkan rasa memiliki terhadap lingkungan tempat tinggal bersama.",
    ],
    category: "Lingkungan",
    date: "16 Maret 2026",
    author: "Divisi Media",
    readTime: "3 menit",
    image: blog3,
  },
  {
    slug: "peringatan-hari-kemerdekaan",
    title: "Semarak Peringatan Hari Kemerdekaan di Dusun Gambang",
    excerpt:
      "Rangkaian lomba dan pentas seni digelar untuk memeriahkan peringatan Hari Kemerdekaan, diikuti antusias oleh warga dari segala usia.",
    content: [
      "Karang Taruna Putra Manik menyelenggarakan rangkaian acara peringatan Hari Kemerdekaan yang berlangsung selama tiga hari. Berbagai lomba tradisional turut dihadirkan untuk mengenang semangat perjuangan.",
      "Malam puncak diisi dengan pentas seni dari anak-anak dan remaja setempat, serta pembagian hadiah bagi para pemenang lomba. Acara ini menjadi momen kebersamaan yang dinanti setiap tahunnya.",
      "Melalui kegiatan ini, Karang Taruna berharap dapat terus menumbuhkan rasa cinta tanah air sekaligus mempererat kebersamaan warga.",
    ],
    category: "Kegiatan Sosial",
    date: "18 Agustus 2025",
    author: "Tim Humas",
    readTime: "4 menit",
    image: blog4,
  },
  {
    slug: "pelatihan-desain-media-sosial",
    title: "Pelatihan Desain dan Media Sosial untuk Divisi Media",
    excerpt:
      "Anggota Divisi Media mengikuti pelatihan dasar desain grafis dan pengelolaan konten media sosial organisasi.",
    content: [
      "Untuk meningkatkan kualitas konten publikasi, Divisi Media Karang Taruna mengadakan pelatihan internal seputar desain grafis dan strategi media sosial.",
      "Peserta belajar menggunakan aplikasi desain sederhana, menyusun jadwal konten, hingga teknik dasar fotografi untuk dokumentasi kegiatan.",
      "Hasil pelatihan ini langsung diterapkan pada pengelolaan akun media sosial resmi organisasi agar tampil lebih menarik dan informatif.",
    ],
    category: "Pelatihan",
    date: "02 Maret 2026",
    author: "Divisi Media",
    readTime: "3 menit",
    image: blog5,
  },
  {
    slug: "penanaman-pohon-desa",
    title: "Aksi Penanaman 100 Pohon di Area Desa",
    excerpt:
      "Sebanyak 100 bibit pohon ditanam di area resapan air desa sebagai bagian dari program pelestarian lingkungan jangka panjang.",
    content: [
      "Program penghijauan menjadi salah satu fokus utama Karang Taruna dalam menjaga kelestarian lingkungan desa. Sebanyak 100 bibit pohon produktif ditanam di area resapan air dan lahan kosong milik desa.",
      "Kegiatan ini melibatkan kerja sama dengan dinas lingkungan hidup setempat yang turut menyediakan sebagian bibit tanaman serta pendampingan teknis penanaman.",
      "Pohon-pohon yang ditanam diharapkan dapat membantu mencegah erosi, menjaga ketersediaan air tanah, serta memberikan manfaat ekonomi jangka panjang bagi warga sekitar.",
    ],
    category: "Lingkungan",
    date: "14 Februari 2026",
    author: "Divisi Humas",
    readTime: "4 menit",
    image: blog6,
  },
]

export function getPostBySlug(slug: string) {
  return posts.find((p) => p.slug === slug)
}

export function getRelatedPosts(slug: string, limit = 3) {
  const current = getPostBySlug(slug)
  if (!current) return posts.slice(0, limit)
  return posts
    .filter((p) => p.slug !== slug && p.category === current.category)
    .concat(posts.filter((p) => p.slug !== slug && p.category !== current.category))
    .slice(0, limit)
}
