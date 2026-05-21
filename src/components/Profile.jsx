import { profile } from '../data/miyabi'

const info = [
  ['Name', profile.name],
  ['Faction', profile.faction],
  ['Weapon', profile.weapon],
  ['Birthday', profile.birthday],
  ['Height', profile.height],
  ['Attribute', `${profile.attribute} · ${profile.specialty}`],
]

export default function Profile() {
  return (
    <section id="profile" className="relative py-28 px-6">
      <div className="max-w-6xl mx-auto">
        <SectionHeader kanji="档" tag="DOSSIER" title="Profile" />

        <div className="mt-14 grid lg:grid-cols-5 gap-10">
          <div className="lg:col-span-2">
            <div className="relative glass rounded-md p-1 shimmer-border">
              <div className="aspect-square rounded-md bg-gradient-to-br from-miyabi-deep via-miyabi-frost/20 to-miyabi-night flex items-center justify-center relative overflow-hidden">
                <div className="absolute inset-0 grid-pattern opacity-40" />
                <img
                  src="/miyabi_card.webp"
                  alt="Hoshimi Miyabi character art"
                  className="absolute inset-0 w-full h-full object-cover object-top"
                />
                <div className="absolute bottom-3 left-3 right-3 text-[10px] tracking-[0.3em] text-miyabi-ice/60 flex justify-between">
                  <span>ID · 0006</span>
                  <span>CLEARANCE · ALPHA</span>
                </div>
              </div>
            </div>
          </div>

          <div className="lg:col-span-3 space-y-8">
            <p className="text-white/75 leading-relaxed text-lg font-light">
              {profile.bio}
            </p>

            <div className="grid sm:grid-cols-2 gap-4">
              {info.map(([k, v]) => (
                <div
                  key={k}
                  className="glass rounded-sm p-4 border-l-2 border-miyabi-frost/60 hover:border-miyabi-crimson transition"
                >
                  <p className="text-[10px] tracking-[0.3em] text-miyabi-ice/50 mb-1">
                    {k.toUpperCase()}
                  </p>
                  <p className="font-serif text-white">{v}</p>
                </div>
              ))}
            </div>

            <div className="glass rounded-sm p-5 flex items-start gap-4">
              <div className="w-12 h-12 shrink-0 rounded-full bg-miyabi-crimson/20 border border-miyabi-crimson/60 flex items-center justify-center font-jp text-miyabi-crimson">
                警
              </div>
              <div>
                <p className="text-xs tracking-[0.25em] text-miyabi-crimson mb-1">
                  COMBAT ADVISORY
                </p>
                <p className="text-sm text-white/70 leading-relaxed">
                  Subject exhibits extreme efficiency against Ether-Anomaly hybrids.
                  Recommended deployment: corruption containment and high-priority Hollow purges.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export function SectionHeader({ kanji, tag, title }) {
  return (
    <div className="flex items-end justify-between flex-wrap gap-4">
      <div>
        <p className="text-[10px] tracking-[0.4em] text-miyabi-crimson/80 mb-2">
          ◆ {tag}
        </p>
        <h2 className="font-serif text-4xl md:text-5xl text-gradient-ice">{title}</h2>
      </div>
      <div className="font-jp text-7xl text-miyabi-frost/10 leading-none select-none">
        {kanji}
      </div>
    </div>
  )
}
