import { useState, useEffect } from 'react'

const links = [
  { href: '#home', label: 'Home' },
  { href: '#profile', label: 'Profile' },
  { href: '#stats', label: 'Stats' },
  { href: '#skills', label: 'Skills' },
  { href: '#gallery', label: 'Gallery' },
  { href: '#section6', label: 'Section 6' },
]

export default function Navbar() {
  const [open, setOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 30)
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <nav
      className={`fixed top-0 inset-x-0 z-50 transition-all duration-300 ${
        scrolled ? 'glass py-3' : 'py-5 bg-transparent'
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 flex items-center justify-between">
        <a href="#home" className="flex items-center gap-3 group">
          <img
            src="/section6_crest.webp"
            alt="Section 6 crest logo"
            className="w-9 h-9 rounded-md shadow-lg shadow-miyabi-frost/30 group-hover:scale-105 transition"
          />
          <div className="leading-tight">
            <p className="font-serif text-lg tracking-wider text-gradient-ice">MIYABI</p>
            <p className="text-[10px] tracking-[0.3em] text-miyabi-ice/60">SECTION · 06</p>
          </div>
        </a>

        <ul className="hidden md:flex items-center gap-8">
          {links.map((l) => (
            <li key={l.href}>
              <a
                href={l.href}
                className="text-sm text-white/70 hover:text-miyabi-ice transition relative group"
              >
                {l.label}
                <span className="absolute -bottom-1 left-0 w-0 h-px bg-miyabi-frost transition-all group-hover:w-full" />
              </a>
            </li>
          ))}
        </ul>

        <a
          href="#section6"
          className="hidden md:inline-block px-5 py-2 text-xs tracking-widest font-medium border border-miyabi-frost/50 rounded-sm text-miyabi-ice hover:bg-miyabi-frost/10 transition"
        >
          RECRUIT
        </a>

        <button
          className="md:hidden text-miyabi-ice text-2xl"
          onClick={() => setOpen(!open)}
          aria-label="menu"
        >
          {open ? '✕' : '☰'}
        </button>
      </div>

      {open && (
        <div className="md:hidden glass mt-3 mx-6 rounded-md p-4">
          <ul className="flex flex-col gap-3">
            {links.map((l) => (
              <li key={l.href}>
                <a
                  href={l.href}
                  onClick={() => setOpen(false)}
                  className="block text-sm text-white/80 hover:text-miyabi-ice"
                >
                  {l.label}
                </a>
              </li>
            ))}
          </ul>
        </div>
      )}
    </nav>
  )
}
