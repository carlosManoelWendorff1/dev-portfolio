export default function HeroContent({ t }: any) {
  return (
    <div className="space-y-6">
      <span className="text-cyan-400 tracking-widest text-sm">{t.hello}</span>

      <h1 className="text-4xl md:text-6xl font-bold text-white">
        Carlos Wendorff
        <span className="ml-2 bg-linear-to-r from-cyan-400 via-blue-500 to-purple-500 bg-clip-text text-transparent">
          ._
        </span>
      </h1>

      <h2 className="text-xl text-white/70">{t.role}</h2>

      <p className="text-white/50 max-w-xl">{t.desc}</p>

      <div className="flex gap-4 pt-4">
        <a
          href="#work"
          className="px-6 py-3 rounded-xl bg-cyan-500 text-black font-semibold"
        >
          {t.projects}
        </a>

        <a
          href="#contact"
          className="px-6 py-3 rounded-xl border border-white/20 text-white"
        >
          {t.contact}
        </a>
      </div>
    </div>
  );
}
