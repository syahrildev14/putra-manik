import Link from "next/link"
import { MapPin, Mail, Phone, Instagram, Youtube } from "lucide-react"

const menu = [
  { label: "Beranda", href: "/" },
  { label: "Struktur Organisasi", href: "/#pengurus" },
  { label: "Program Kerja", href: "/#divisi" },
  { label: "Galeri", href: "/#galeri" },
  { label: "Blog", href: "/blog" },
]

const socials = [
  { label: "Instagram", href: "https://instagram.com/kartarmanik", icon: Instagram },
  { label: "YouTube", href: "https://youtube.com/@kartarmanik", icon: Youtube },
]

const Footer = () => {
  return (
    <footer className="relative text-primary text-white overflow-hidden">
      {/* accent line */}
      <div className="absolute top-0 left-0 w-24 h-px bg-amber-500" />

      <div className="max-w-6xl mx-auto px-4 md:px-6 pt-16 pb-10">
        <div className="grid grid-cols-1 md:grid-cols-[1.3fr_1fr_1fr] gap-10 md:gap-8">
          {/* Brand */}
          <div className="space-y-4">
            <div>
              <span className="font-mono text-[11px] uppercase tracking-[0.3em] text-amber-600 text-amber-400">
                Kartar
              </span>
              <h2 className="font-serif text-2xl font-medium tracking-tight">
                Putra Manik
              </h2>
            </div>
            <p className="text-sm leading-relaxed text-primary/60 text-white/50 max-w-xs">
              Organisasi kepemudaan yang bergerak dalam kegiatan sosial,
              pelatihan, dan pelestarian lingkungan untuk membangun desa
              bersama generasi muda.
            </p>

            <div className="flex items-center gap-3 pt-2">
              {socials.map((s) => (
                <a
                  key={s.label}
                  href={s.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={s.label}
                  className="flex items-center justify-center w-9 h-9 rounded-full border border-white/60 text-white/60 hover:bg-white/20 hover:text-white hover:border-white transition-colors"
                >
                  <s.icon size={16} />
                </a>
              ))}
            </div>
          </div>

          {/* Navigation */}
          <div>
            <h3 className="font-mono text-[11px] uppercase tracking-[0.25em] text-white/40 mb-4">
              Menu
            </h3>
            <ul className="space-y-3 text-sm">
              {menu.map((item) => (
                <li key={item.href}>
                  <Link
                    href={item.href}
                    className="text-white/50 hover:text-white transition-colors"
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="font-mono text-[11px] uppercase tracking-[0.25em] text-primary/40 text-white/40 mb-4">
              Kontak
            </h3>
            <ul className="space-y-3 text-sm text-primary/70 text-white/60">
              <li className="flex items-start gap-2.5">
                <MapPin size={15} className="mt-0.5 shrink-0 text-amber-600 text-amber-400" />
                <span>Dusun Gambang, RW 02 / RT 06</span>
              </li>
              <li className="flex items-center gap-2.5">
                <Mail size={15} className="shrink-0 text-amber-600 text-amber-400" />
                <span>kartarmanik@gmail.com</span>
              </li>
              <li className="flex items-center gap-2.5">
                <Phone size={15} className="shrink-0 text-amber-600 text-amber-400" />
                <span>+62 812 xxxx xxxx</span>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom */}
        <div className="border-t border-primary/10 border-white/10 mt-12 pt-6 flex flex-col md:flex-row items-center justify-between gap-3 text-xs text-primary/40 text-white/40">
          <p>&copy; {new Date().getFullYear()} Karang Taruna Putra Manik. Seluruh hak cipta dilindungi.</p>
          <p className="font-mono tracking-wide">Dibangun dengan dedikasi untuk desa</p>
        </div>
      </div>
    </footer>
  )
}

export default Footer
