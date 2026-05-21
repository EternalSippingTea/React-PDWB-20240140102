import { profile } from '../data/miyabi'

export default function Hero() {
  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center overflow-hidden ice-bg"
    >
      <div className="absolute inset-0 grid-pattern opacity-50" />
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-miyabi-night" />

      {/* Decorative floating glyphs */}
      <div className="absolute top-1/4 left-10 font-jp text-[18rem] text-miyabi-frost/5 select-none pointer-events-none animate-float">
        雅
      </div>
      <div className="absolute bottom-10 right-10 font-jp text-[10rem] text-miyabi-crimson/10 select-none pointer-events-none">
        刀
      </div>

      <div className="relative max-w-7xl mx-auto px-6 grid lg:grid-cols-2 gap-12 items-center pt-32 pb-20">
        {/* Left: Text */}
        <div className="space-y-8 animate-slide-up">
          <div className="inline-flex items-center gap-3 px-4 py-1.5 rounded-full glass">
            <span className="w-2 h-2 rounded-full bg-miyabi-crimson animate-pulse" />
            <span className="text-xs tracking-[0.3em] text-miyabi-ice/80">
              S-RANK · ANOMALY · ICE
            </span>
          </div>

          <h1 className="font-serif text-6xl md:text-7xl lg:text-8xl leading-none">
            <span className="block text-white/90">Hoshimi</span>
            <span className="block text-gradient-ice italic">Miyabi</span>
            <span className="block font-jp text-3xl md:text-4xl text-miyabi-ice/70 mt-3">
              {profile.nameJp}
            </span>
          </h1>

          <p className="text-white/70 max-w-xl leading-relaxed">
            Captain of {profile.faction}. Heir of the Hoshimi exorcist line.
            A blade so quiet the Hollow never hears it draw.
          </p>

          <blockquote className="border-l-2 border-miyabi-crimson pl-4 text-miyabi-ice/90 italic font-serif text-lg max-w-md">
            {profile.quote}
          </blockquote>

          <div className="flex flex-wrap gap-4 pt-2">
            <a
              href="#profile"
              className="group relative px-7 py-3 rounded-sm bg-gradient-to-r from-miyabi-frost to-miyabi-ice text-miyabi-night font-medium tracking-wider text-sm hover:shadow-lg hover:shadow-miyabi-frost/40 transition"
            >
              ENTER DOSSIER →
            </a>
            <a
              href="#skills"
              className="px-7 py-3 rounded-sm border border-miyabi-ice/30 text-miyabi-ice tracking-wider text-sm hover:bg-miyabi-frost/10 transition"
            >
              VIEW KIT
            </a>
          </div>

          <div className="flex gap-8 pt-6">
            {[
              ['Rank', profile.rank],
              ['Element', profile.attribute],
              ['Spec.', profile.specialty],
            ].map(([k, v]) => (
              <div key={k}>
                <p className="text-[10px] tracking-[0.3em] text-white/40">{k}</p>
                <p className="font-serif text-2xl text-gradient-ice">{v}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Right: Visual card */}
        <div className="relative flex justify-center animate-fade-in">
          <div className="relative w-[320px] sm:w-[400px] aspect-[3/4] rounded-md overflow-hidden shimmer-border glass">
            <div className="absolute inset-0 bg-gradient-to-br from-miyabi-deep via-miyabi-frost/20 to-miyabi-crimson/30" />
            <div className="absolute inset-0 grid-pattern opacity-30" />

            {/* Character portrait image */}
            <img
              src="/miyabi_card.webp"
              alt="Hoshimi Miyabi portrait — Section 6 ice agent"
              className="absolute inset-0 w-full h-full object-cover object-top opacity-95"
            />

            {/* Top label */}
            <div className="absolute top-4 left-4 right-4 flex justify-between items-start">
              <div>
                <p className="text-[10px] tracking-[0.4em] text-miyabi-ice/80">AGENT FILE</p>
                <p className="font-serif text-xl text-white">№ 006</p>
              </div>
              <div className="w-10 h-10 rounded-full border border-miyabi-frost/60 flex items-center justify-center font-jp text-miyabi-ice">
                六
              </div>
            </div>

            {/* Bottom info */}
            <div className="absolute bottom-0 inset-x-0 p-5 bg-gradient-to-t from-miyabi-night via-miyabi-night/70 to-transparent">
              <p className="font-serif text-2xl text-gradient-blade">
                {profile.title}
              </p>
              <p className="text-xs text-miyabi-ice/60 mt-1 tracking-widest">
                {profile.weapon}
              </p>
              <div className="flex gap-1 mt-3">
                {Array.from({ length: 6 }).map((_, i) => (
                  <span
                    key={i}
                    className="h-0.5 flex-1 bg-gradient-to-r from-miyabi-frost to-miyabi-ice opacity-60"
                    style={{ animationDelay: `${i * 0.1}s` }}
                  />
                ))}
              </div>
            </div>
          </div>

          {/* Floating accent */}
          <div className="absolute -top-6 -right-2 sm:right-10 w-20 h-20 rounded-full border border-miyabi-crimson/40 flex items-center justify-center font-jp text-miyabi-crimson animate-float">
            霜月
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-6 left-1/2 -translate-x-1/2 text-miyabi-ice/50 text-xs tracking-[0.4em] animate-pulse">
        ↓ SCROLL
      </div>
    </section>
  )
}
