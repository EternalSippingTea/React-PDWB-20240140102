import { useEffect, useRef, useState } from 'react'
import { stats } from '../data/miyabi'
import { SectionHeader } from './Profile'

export default function Stats() {
  const [visible, setVisible] = useState(false)
  const ref = useRef(null)

  useEffect(() => {
    const obs = new IntersectionObserver(
      ([entry]) => entry.isIntersecting && setVisible(true),
      { threshold: 0.25 }
    )
    if (ref.current) obs.observe(ref.current)
    return () => obs.disconnect()
  }, [])

  return (
    <section id="stats" ref={ref} className="relative py-28 px-6 bg-gradient-to-b from-miyabi-night via-miyabi-deep/40 to-miyabi-night">
      <div className="max-w-6xl mx-auto">
        <SectionHeader kanji="力" tag="COMBAT METRICS" title="Base Stats · Lv 60" />

        <div className="mt-14 grid md:grid-cols-2 gap-x-12 gap-y-8">
          {stats.map((s, i) => {
            const pct = (s.value / s.max) * 100
            return (
              <div key={s.label} className="space-y-2">
                <div className="flex justify-between items-baseline">
                  <span className="text-sm tracking-[0.2em] text-white/70">
                    {s.label.toUpperCase()}
                  </span>
                  <span className="font-serif text-2xl text-gradient-ice">
                    {s.value.toLocaleString()}
                    {s.suffix || ''}
                  </span>
                </div>
                <div className="relative h-1.5 bg-white/5 rounded-full overflow-hidden">
                  <div
                    className={`absolute inset-y-0 left-0 rounded-full bg-gradient-to-r ${s.color} transition-all duration-[1400ms] ease-out`}
                    style={{
                      width: visible ? `${pct}%` : '0%',
                      transitionDelay: `${i * 120}ms`,
                    }}
                  />
                </div>
              </div>
            )
          })}
        </div>

        <div className="mt-16 grid sm:grid-cols-3 gap-4">
          {[
            ['CORE PASSIVE', 'Frost Resonance', 'Anomaly buildup converts 15% into Disorder triggers.'],
            ['ENGINE', 'Hailstorm Honor', 'Signature W-Engine — boosts Ice DMG & Anomaly Mastery.'],
            ['FACTION BONUS', 'Section 6', 'Ice & Electric squad members gain +12% Ether DMG.'],
          ].map(([tag, title, desc]) => (
            <div key={tag} className="glass rounded-sm p-5 hover:border-miyabi-frost/40 transition">
              <p className="text-[10px] tracking-[0.3em] text-miyabi-crimson mb-2">{tag}</p>
              <p className="font-serif text-lg text-white mb-1">{title}</p>
              <p className="text-xs text-white/55 leading-relaxed">{desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
