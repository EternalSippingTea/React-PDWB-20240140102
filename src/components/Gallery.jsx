import { gallery } from '../data/miyabi'
import { SectionHeader } from './Profile'

export default function Gallery() {
  return (
    <section id="gallery" className="relative py-28 px-6 bg-gradient-to-b from-miyabi-night via-miyabi-deep/30 to-miyabi-night">
      <div className="max-w-7xl mx-auto">
        <SectionHeader kanji="絵" tag="ARCHIVE" title="Gallery" />

        <div className="mt-14 grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {gallery.map((g, i) => (
            <div
              key={g.title}
              className="group relative aspect-[4/5] rounded-md overflow-hidden cursor-pointer"
            >
              <div className={`absolute inset-0 bg-gradient-to-br ${g.grad}`} />
              <img
                src={g.img}
                alt={`${g.title} — ${g.sub}`}
                className="absolute inset-0 w-full h-full object-cover object-top opacity-50 group-hover:opacity-80 group-hover:scale-105 transition duration-500"
              />
              <div className="absolute inset-0 grid-pattern opacity-30 group-hover:opacity-50 transition" />

              <div className="absolute inset-0 flex items-center justify-center">
                <span className="font-jp text-[10rem] text-white/15 group-hover:scale-110 group-hover:text-white/25 transition-all duration-500">
                  {g.glyph}
                </span>
              </div>

              <div className="absolute inset-0 bg-gradient-to-t from-miyabi-night via-miyabi-night/40 to-transparent opacity-90" />

              <div className="absolute bottom-0 inset-x-0 p-5">
                <p className="text-[10px] tracking-[0.3em] text-miyabi-crimson mb-1">
                  ◆ 00{i + 1}
                </p>
                <p className="font-serif text-xl text-white">{g.title}</p>
                <p className="text-xs text-miyabi-ice/70 mt-1">{g.sub}</p>
              </div>

              <div className="absolute top-0 left-0 w-12 h-12 border-t border-l border-miyabi-frost/60 opacity-0 group-hover:opacity-100 transition" />
              <div className="absolute bottom-0 right-0 w-12 h-12 border-b border-r border-miyabi-frost/60 opacity-0 group-hover:opacity-100 transition" />
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
