import { StaticImageData } from "next/image"

import karnaval from "@/app/blog/assets/karnaval-17agustus.jpeg"
import sosialisasi from "@/app/blog/assets/sosialisasi-pemuda-desa-mandiri.jpeg"
import fadMiagan from "@/app/blog/assets/event-fad-miagan.jpeg"
import nextGenYouth from "@/app/blog/assets/next-gen-youth.jpeg"
import healingBareng from "@/app/blog/assets/healing-bareng.jpeg"
import bukaBersama from "@/app/blog/assets/buka-bersama.jpeg"
import bukberExpression from "@/app/blog/assets/bukber-expression.jpeg"
import pelatihanDesain from "@/app/blog/assets/pelatihan-desain-grafis.jpeg"
import pelatihanSosmed from "@/app/blog/assets/pelatihan-sosial-media.jpeg"
import makrab from "@/app/blog/assets/makrab2025.jpeg"

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
  "Organisasi",
  "Pelatihan",
] as const

export const posts: BlogPost[] = [
  {
    slug: "karnaval-kemerdekaan-17-agustus",
    title: "Karnaval Kemerdekaan: Semarak 17 Agustus di Desa Plumbon Gambang",
    excerpt:
      "Karang Taruna Putra Manik menjadi motor penggerak karnaval kemerdekaan, menghadirkan panggung rakyat yang dihadiri aparat desa, TNI, Polri, hingga warga dari segala usia.",
    content: [
      "Peringatan Hari Kemerdekaan Republik Indonesia tahun ini terasa lebih meriah berkat karnaval kemerdekaan yang digagas dan dieksekusi langsung oleh Karang Taruna Putra Manik. Seluruh pengurus turun tangan sejak persiapan panggung, dekorasi, hingga pengaturan jalannya acara di lapangan desa.",
      "Acara dihadiri oleh kepala desa, perwakilan TNI dan Polri, tokoh masyarakat, serta ratusan warga yang antusias menyaksikan arak-arakan kostum dan pawai budaya. Kehadiran unsur Forkopimda setempat menjadi bukti bahwa sinergi antara pemuda dan pemerintah desa terus terjalin erat.",
      "Di atas panggung utama bertuliskan 'Karnaval Kemerdekaan', pengurus Karang Taruna tampil kompak mengenakan seragam organisasi, memandu rangkaian acara dari awal hingga penutupan. Momen ini sekaligus menjadi pengingat bahwa semangat gotong royong pemuda desa tetap hidup di setiap perayaan kemerdekaan bangsa.",
    ],
    category: "Kegiatan Sosial",
    date: "17 Agustus 2026",
    author: "Tim Humas",
    readTime: "4 menit",
    image: karnaval,
    featured: true,
  },
  {
    slug: "sosialisasi-pemuda-desa-mandiri",
    title: "Sosialisasi Pemuda Desa Mandiri: Menyiapkan Generasi Muda yang Berdaya",
    excerpt:
      "Karang Taruna Desa Plumbon Gambang menggelar sosialisasi program Pemuda Desa Mandiri, mengajak anggota untuk lebih aktif dan produktif dalam membangun desa.",
    content: [
      "Bertempat di aula desa, Karang Taruna Putra Manik menyelenggarakan sosialisasi bertajuk 'Pemuda Desa Mandiri' yang diikuti puluhan anggota dari berbagai dusun. Kegiatan ini turut melibatkan unsur Tagana sebagai bagian dari kolaborasi lintas komunitas pemuda.",
      "Dalam sesi yang berlangsung lesehan dan santai ini, narasumber memaparkan pentingnya kemandirian ekonomi dan sosial bagi generasi muda desa, mulai dari potensi usaha lokal hingga peran aktif pemuda dalam pembangunan desa.",
      "Melalui sosialisasi ini, Karang Taruna berharap semakin banyak pemuda yang tergerak untuk berkontribusi nyata, tidak hanya sebagai peserta kegiatan tetapi juga sebagai penggerak perubahan di lingkungannya masing-masing.",
    ],
    category: "Organisasi",
    date: "25 Juli 2026",
    author: "Divisi Humas",
    readTime: "4 menit",
    image: sosialisasi,
  },
  {
    slug: "fad-miagan-ceria-bersama-anak-desa",
    title: "FAD Miagan: Hari Ceria Bersama Anak-Anak Desa",
    excerpt:
      "Forum Anak Desa (FAD) Miagan mengajak puluhan anak-anak dari Desa Plumbon Gambang berkegiatan bersama, dipandu langsung oleh pengurus dan anggota Karang Taruna.",
    content: [
      "Karang Taruna Putra Manik turut mendampingi kegiatan Forum Anak Desa (FAD) Miagan, sebuah agenda yang mempertemukan puluhan anak-anak dari berbagai dusun untuk belajar dan bermain bersama di ruang terbuka.",
      "Dengan dukungan penuh dari pengurus, anak-anak diajak mengikuti rangkaian permainan edukatif dan sesi foto bersama di area lapangan, menciptakan suasana ceria yang jarang mereka rasakan di keseharian.",
      "Kegiatan ini menjadi bentuk nyata kepedulian Karang Taruna terhadap tumbuh kembang anak-anak desa, sekaligus menanamkan nilai kebersamaan sejak usia dini melalui pendampingan yang hangat dan menyenangkan.",
    ],
    category: "Kegiatan Sosial",
    date: "14 Juni 2026",
    author: "Tim Humas",
    readTime: "3 menit",
    image: fadMiagan,
  },
  {
    slug: "next-gen-youth-regenerasi-pemuda",
    title: "Next Gen Youth: Menyiapkan Regenerasi Pemimpin Muda",
    excerpt:
      "Program Next Gen Youth digelar untuk membekali anggota baru dengan wawasan organisasi dan semangat kepemimpinan sebagai bagian dari proses regenerasi Karang Taruna.",
    content: [
      "Bertempat di ruang pertemuan desa, Karang Taruna Putra Manik mengadakan program 'Next Gen Youth' yang dihadiri puluhan remaja dan anak muda dari berbagai dusun. Acara ini dirancang khusus untuk mempersiapkan calon kader penerus organisasi.",
      "Melalui sesi presentasi dan diskusi interaktif, peserta diajak mengenal lebih dekat struktur organisasi, nilai-nilai kepemudaan, serta pentingnya peran generasi muda dalam menjaga keberlanjutan program kerja Karang Taruna.",
      "Dengan antusiasme tinggi dari peserta yang hadir, kegiatan ini diharapkan menjadi langkah awal lahirnya kader-kader muda yang siap melanjutkan estafet kepemimpinan organisasi di masa mendatang.",
    ],
    category: "Pelatihan",
    date: "18 Mei 2026",
    author: "Divisi Humas",
    readTime: "4 menit",
    image: nextGenYouth,
  },
  {
    slug: "healing-bareng-karang-taruna",
    title: "Healing Bareng: Melepas Penat di Tepi Pantai",
    excerpt:
      "Setelah rangkaian program kerja yang padat, pengurus Karang Taruna Putra Manik menyempatkan diri healing bersama ke pantai untuk mempererat kekompakan tim.",
    content: [
      "Di sela kesibukan menjalankan program kerja, pengurus Karang Taruna Putra Manik mengadakan acara 'Healing Bareng' sebagai momen refreshing sekaligus apresiasi atas kerja keras seluruh anggota selama ini.",
      "Mengambil lokasi di tepi pantai, kegiatan ini diisi dengan kebersamaan santai, foto-foto seru, dan obrolan ringan yang jauh dari suasana rapat maupun agenda formal organisasi.",
      "Momen seperti ini dinilai penting untuk menjaga kekompakan dan kedekatan emosional antarpengurus, sehingga semangat kolaborasi tetap terjaga setiap kali kembali menjalankan program kerja di desa.",
    ],
    category: "Organisasi",
    date: "12 April 2026",
    author: "Divisi Media",
    readTime: "3 menit",
    image: healingBareng,
  },
  {
    slug: "keseruan-buka-bersama-kartar",
    title: "Potret Keseruan di Balik Acara Buka Bersama",
    excerpt:
      "Di balik kekhidmatan acara buka puasa bersama, ada banyak momen keceriaan dan kekompakan anggota Karang Taruna yang terekam sepanjang acara berlangsung.",
    content: [
      "Selain menjadi ajang silaturahmi, acara buka bersama Karang Taruna Putra Manik juga diwarnai dengan berbagai momen spontan dan ekspresi keceriaan dari para anggota yang hadir.",
      "Dari candaan ringan sebelum azan Maghrib hingga sesi foto bersama usai berbuka, suasana hangat dan penuh tawa begitu terasa sepanjang acara, mencerminkan kedekatan yang terjalin antaranggota.",
      "Momen-momen kecil seperti inilah yang membuat setiap kegiatan Karang Taruna terasa istimewa, bukan hanya soal agenda organisasi, tetapi juga tentang kebersamaan yang tulus antarsesama anggota.",
    ],
    category: "Kegiatan Sosial",
    date: "08 Maret 2026",
    author: "Divisi Media",
    readTime: "3 menit",
    image: bukberExpression,
  },
  {
    slug: "buka-bersama-ramadan",
    title: "Buka Bersama: Mempererat Silaturahmi di Bulan Ramadan",
    excerpt:
      "Karang Taruna Putra Manik menggelar acara buka puasa bersama sebagai ajang mempererat silaturahmi antaranggota dan pengurus di bulan penuh berkah.",
    content: [
      "Menyambut bulan suci Ramadan, Karang Taruna Putra Manik mengadakan acara buka puasa bersama yang diikuti oleh seluruh pengurus dan anggota aktif. Kegiatan ini menjadi agenda rutin yang selalu dinantikan setiap tahunnya.",
      "Acara diawali dengan kultum singkat dan doa bersama, dilanjutkan dengan santap berbuka yang disiapkan secara gotong royong oleh anggota. Suasana kekeluargaan sangat terasa di sepanjang acara.",
      "Selain mempererat tali silaturahmi, momen ini juga dimanfaatkan untuk saling bertukar kabar dan mempererat koordinasi antarpengurus menjelang program kerja berikutnya setelah Ramadan usai.",
    ],
    category: "Kegiatan Sosial",
    date: "02 Maret 2026",
    author: "Tim Humas",
    readTime: "3 menit",
    image: bukaBersama,
  },
  {
    slug: "pelatihan-desain-grafis-divisi-media",
    title: "Pelatihan Desain Grafis untuk Divisi Media",
    excerpt:
      "Divisi Media Karang Taruna mengikuti pelatihan dasar desain grafis guna meningkatkan kualitas konten visual publikasi organisasi.",
    content: [
      "Untuk mendukung kebutuhan publikasi yang semakin aktif, Karang Taruna Putra Manik mengadakan pelatihan desain grafis yang dikhususkan bagi anggota Divisi Media. Pelatihan ini bertujuan meningkatkan kemampuan teknis dalam membuat konten visual.",
      "Peserta diajarkan dasar-dasar penggunaan aplikasi desain, prinsip tata letak, pemilihan warna dan tipografi, hingga cara membuat poster dan materi publikasi yang menarik untuk dibagikan di media sosial maupun dokumentasi kegiatan.",
      "Dengan bekal keterampilan baru ini, diharapkan setiap materi publikasi yang dihasilkan Karang Taruna dapat tampil lebih profesional dan mampu menarik perhatian lebih banyak warga, khususnya generasi muda.",
    ],
    category: "Pelatihan",
    date: "15 Februari 2026",
    author: "Divisi Media",
    readTime: "4 menit",
    image: pelatihanDesain,
  },
  {
    slug: "pelatihan-pengelolaan-media-sosial",
    title: "Pelatihan Pengelolaan Media Sosial Organisasi",
    excerpt:
      "Anggota Divisi Media mendapatkan pembekalan strategi pengelolaan media sosial agar publikasi kegiatan Karang Taruna lebih konsisten dan menjangkau lebih banyak warga.",
    content: [
      "Karang Taruna Putra Manik mengadakan pelatihan pengelolaan media sosial sebagai upaya meningkatkan kualitas publikasi digital organisasi. Pelatihan ini diikuti oleh anggota Divisi Media yang bertanggung jawab atas akun resmi organisasi.",
      "Materi yang dibahas meliputi perencanaan konten, teknik penulisan caption yang menarik, waktu unggah yang efektif, hingga cara berinteraksi dengan warganet agar engagement akun semakin meningkat.",
      "Dengan strategi media sosial yang lebih terarah, Karang Taruna berharap setiap kegiatan dan program kerja dapat terdokumentasi dengan baik serta tersampaikan secara luas kepada masyarakat, khususnya generasi muda desa.",
    ],
    category: "Pelatihan",
    date: "20 Januari 2026",
    author: "Divisi Media",
    readTime: "3 menit",
    image: pelatihanSosmed,
  },
  {
    slug: "makrab-2025-malam-keakraban",
    title: "Makrab 2025: Malam Keakraban Pengurus Karang Taruna",
    excerpt:
      "Menutup tahun 2025, Karang Taruna Putra Manik mengadakan malam keakraban (Makrab) untuk mempererat kekompakan pengurus sekaligus menyusun semangat baru di tahun berikutnya.",
    content: [
      "Sebagai penutup rangkaian kegiatan tahun 2025, Karang Taruna Putra Manik mengadakan Malam Keakraban atau Makrab yang diikuti oleh pengurus dan anggota aktif. Acara ini berlangsung di sebuah vila dengan suasana santai jauh dari rutinitas organisasi.",
      "Selain diisi dengan kegiatan kebersamaan, Makrab 2025 juga menjadi ruang evaluasi informal atas program kerja yang telah dijalankan sepanjang tahun, sekaligus ajang mempererat hubungan antaranggota dari berbagai divisi.",
      "Momen kebersamaan ini menjadi bekal semangat baru bagi seluruh pengurus untuk menyongsong tahun berikutnya dengan program kerja yang lebih solid dan kekompakan tim yang semakin erat.",
    ],
    category: "Organisasi",
    date: "20 Desember 2025",
    author: "Tim Humas",
    readTime: "4 menit",
    image: makrab,
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
