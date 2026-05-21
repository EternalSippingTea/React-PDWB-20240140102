import { teammates } from '../data/miyabi'
import { SectionHeader } from './Profile'

export default function Section6() {
  return (
    <section id="section6" className="relative py-28 px-6">
      <div className="max-w-6xl mx-auto">
        <SectionHeader kanji="六" tag="DIVISION" title="Section 6 · Squad" />

        <p className="mt-6 max-w-2xl text-white/65 leading-relaxed">
          Hollow Special Operations Section 6 — a hand-picked unit specializing in
          Anomaly containment and high-risk Hollow exorcism. Commanded by Miyabi.
        </p>

        <div className="mt-14 grid md:grid-cols-3 gap-5">
          {teammates.map((t, i) => (
            <div
              key={t.name}
              className="group glass rounded-md p-6 hover:bg-miyabi-frost/5 transition relative overflow-hidden"
              style={{ animationDelay: `${i * 120}ms` }}
            >
              <div className="absolute -top-6 -right-6 font-jp text-[8rem] text-miyabi-frost/10 group-hover:text-miyabi-frost/20 transition select-none">
                {t.glyph}
              </div>
              <div className="relative">
                <div className="w-14 h-14 rounded-full bg-gradient-to-br from-miyabi-deep to-miyabi-frost/40 flex items-center justify-center font-jp text-2xl text-white mb-4">
                  {t.glyph}
                </div>
                <p className="font-serif text-xl text-white">{t.name}</p>
                <p className="text-xs text-miyabi-ice/60 mt-1 tracking-widest">{t.role}</p>
                <div className="mt-4 h-px bg-gradient-to-r from-miyabi-frost/60 to-transparent" />
                <p className="text-[10px] tracking-[0.3em] text-miyabi-crimson mt-4">
                  AGENT · ACTIVE
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* CTA */}
        <div className="mt-16 glass rounded-md p-10 text-center relative overflow-hidden shimmer-border">
          <div className="absolute inset-0 bg-gradient-to-r from-miyabi-frost/5 via-transparent to-miyabi-crimson/5" />
          <div className="relative space-y-4">
            <p className="text-[10px] tracking-[0.4em] text-miyabi-crimson">
              ◆ JOIN THE OPERATION
            </p>
            <h3 className="font-serif text-3xl md:text-4xl text-gradient-ice">
              Pull on the Frostmoon Banner
            </h3>
            <p className="text-white/60 max-w-xl mx-auto text-sm">
              Miyabi is available in the limited Exclusive Channel signal search.
              Recommended for Ice / Anomaly mainline teams.
            </p>
            <button className="mt-4 px-8 py-3 bg-gradient-to-r from-miyabi-frost to-miyabi-ice text-miyabi-night font-medium tracking-widest text-sm rounded-sm hover:shadow-lg hover:shadow-miyabi-frost/40 transition">
              SIGNAL SEARCH →
            </button>
          </div>
        </div>
      </div>
    </section>
  )
}
