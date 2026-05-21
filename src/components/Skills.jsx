import { useState } from 'react'
import { skills } from '../data/miyabi'
import { SectionHeader } from './Profile'

export default function Skills() {
  const [active, setActive] = useState(0)
  const current = skills[active]

  return (
    <section id="skills" className="relative py-28 px-6">
      <div className="max-w-6xl mx-auto">
        <SectionHeader kanji="技" tag="COMBAT KIT" title="Skills & Techniques" />

        <div className="mt-14 grid lg:grid-cols-12 gap-8">
          {/* Tabs */}
          <div className="lg:col-span-5 space-y-3">
            {skills.map((s, i) => (
              <button
                key={s.name}
                onClick={() => setActive(i)}
                className={`w-full text-left p-4 rounded-sm border transition group relative overflow-hidden ${
                  active === i
                    ? 'border-miyabi-frost bg-miyabi-frost/10'
                    : 'border-white/10 hover:border-miyabi-frost/40 glass'
                }`}
              >
                <div className="flex items-center gap-4">
                  <div
                    className={`w-12 h-12 shrink-0 rounded-sm flex items-center justify-center font-jp text-2xl transition ${
                      active === i
                        ? 'bg-gradient-to-br from-miyabi-frost to-miyabi-ice text-miyabi-night'
                        : 'bg-white/5 text-miyabi-ice'
                    }`}
                  >
                    {s.icon}
                  </div>
                  <div className="flex-1">
                    <p className="text-[10px] tracking-[0.3em] text-miyabi-crimson">
                      {s.type.toUpperCase()}
                    </p>
                    <p className="font-serif text-white">{s.name}</p>
                  </div>
                  <span className="text-miyabi-ice/40 group-hover:translate-x-1 transition">
                    →
                  </span>
                </div>
              </button>
            ))}
          </div>

          {/* Detail panel */}
          <div className="lg:col-span-7">
            <div key={active} className="glass rounded-md p-8 shimmer-border animate-fade-in h-full relative overflow-hidden">
              <div className="absolute top-4 right-6 font-jp text-[10rem] text-miyabi-frost/5 leading-none select-none">
                {current.icon}
              </div>

              <div className="relative space-y-6">
                <div>
                  <p className="text-[10px] tracking-[0.3em] text-miyabi-crimson mb-2">
                    {current.type.toUpperCase()} · TECHNIQUE
                  </p>
                  <h3 className="font-serif text-3xl text-gradient-blade">
                    {current.name}
                  </h3>
                </div>

                <div className="h-px bg-gradient-to-r from-miyabi-frost/60 via-miyabi-frost/20 to-transparent" />

                <p className="text-white/75 leading-relaxed">{current.desc}</p>

                <div className="grid grid-cols-3 gap-3 pt-4">
                  {[
                    ['DMG TYPE', 'Ice'],
                    ['ANOMALY', 'Freeze'],
                    ['ENERGY', current.type === 'Ultimate' ? '3000' : '—'],
                  ].map(([k, v]) => (
                    <div key={k} className="border border-white/10 rounded-sm p-3">
                      <p className="text-[9px] tracking-[0.3em] text-white/40">{k}</p>
                      <p className="font-serif text-miyabi-ice mt-1">{v}</p>
                    </div>
                  ))}
                </div>

                <div className="pt-2 flex items-center gap-2 text-xs text-white/40">
                  <span className="w-1.5 h-1.5 rounded-full bg-miyabi-frost animate-pulse" />
                  Lv. 12 / 12 · Mastered
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
