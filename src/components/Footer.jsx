export default function Footer() {
  return (
    <footer className="relative border-t border-miyabi-frost/10 py-10 px-6">
      <div className="max-w-7xl mx-auto grid md:grid-cols-3 gap-6 items-center">
        <div className="flex items-center gap-3">
          <img
            src="/section6_crest.webp"
            alt="Section 6 crest logo"
            className="w-9 h-9 rounded-md"
          />
          <div>
            <p className="font-serif text-gradient-ice">MIYABI · 星見 雅</p>
            <p className="text-[10px] tracking-[0.3em] text-white/40">SECTION 6 ARCHIVE</p>
          </div>
        </div>

        <p className="text-center text-xs text-white/40 tracking-widest">
          ◆ FAN-MADE PROJECT · NOT AFFILIATED WITH HOYOVERSE ◆
        </p>

        <p className="md:text-right text-xs text-white/40">
          Built with React · Vite · Tailwind CSS · {new Date().getFullYear()}
        </p>
      </div>
    </footer>
  )
}
