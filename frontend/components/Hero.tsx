import Link from "next/link";
import { ArrowRight, CheckCircle2 } from "lucide-react";
import { Dictionary, type Locale, getLocalizedPath } from "@/lib/i18n";

export function Hero({ locale, dict }: { locale: Locale; dict: Dictionary }) {
  return (
    <section className="relative overflow-hidden px-5 pt-36 lg:px-8 lg:pt-44">
      <div className="absolute inset-0 bg-grid" />
      <div className="absolute left-1/2 top-20 h-[420px] w-[420px] -translate-x-1/2 rounded-full bg-accent/20 blur-[130px]" />
      <div className="absolute right-0 top-24 h-[360px] w-[360px] rounded-full bg-violet/20 blur-[120px]" />

      <div className="relative mx-auto grid max-w-7xl items-center gap-12 lg:grid-cols-[1.05fr_.95fr]">
        <div>
          <div className="mb-6 inline-flex rounded-full border border-white/10 bg-white/5 px-4 py-2 text-sm text-slate-300">
            {dict.hero.badge}
          </div>

          <h1 className="max-w-4xl text-5xl font-semibold leading-tight tracking-[-0.04em] md:text-7xl">
            {dict.hero.title.split(" ").map((word, index) => {
              if (word.includes("AI") || word.includes("AI-")) {
                return (
                  <span key={index} className="gradient-text">
                    {word}
                    {index < dict.hero.title.split(" ").length - 1 ? " " : ""}
                  </span>
                );
              }

              return word + (index < dict.hero.title.split(" ").length - 1 ? " " : "");
            })}
          </h1>

          <p className="mt-6 max-w-2xl text-lg leading-8 text-slate-300">
            {dict.hero.text}
          </p>

          <div className="mt-9 flex flex-col gap-4 sm:flex-row">
            <Link
              href={getLocalizedPath(locale, "/#contact")}
              className="inline-flex items-center justify-center gap-2 rounded-full bg-white px-7 py-4 font-semibold text-ink transition hover:bg-slate-200"
            >
              {dict.hero.consultButton} <ArrowRight size={18} />
            </Link>
            <Link
              href={getLocalizedPath(locale, "/projects")}
              className="rounded-full border border-white/15 px-7 py-4 text-center font-semibold text-white transition hover:bg-white/10"
            >
              {dict.hero.projectsButton}
            </Link>
          </div>

          <div className="mt-8 grid max-w-xl gap-3 text-sm text-slate-300 sm:grid-cols-3">
            {dict.hero.features.map((item) => (
              <span key={item} className="inline-flex items-center gap-2">
                <CheckCircle2 size={17} className="text-accent" /> {item}
              </span>
            ))}
          </div>
        </div>

        <div className="glass-card relative rounded-[2rem] p-4">
          <div className="rounded-[1.5rem] border border-white/10 bg-[#08111f] p-5">
            <div className="mb-5 flex items-center justify-between border-b border-white/10 pb-4">
              <div>
                <p className="text-sm text-slate-400">{dict.hero.dashboard.title}</p>
                <h3 className="mt-1 text-xl font-semibold">{dict.hero.dashboard.subtitle}</h3>
              </div>
              <span className="rounded-full bg-emerald-400/15 px-3 py-1 text-xs font-medium text-emerald-300">
                {dict.hero.dashboard.status}
              </span>
            </div>

            <div className="grid gap-4 sm:grid-cols-2">
              {dict.hero.dashboard.stats.map(([label, value]) => (
                <div key={label} className="rounded-3xl border border-white/10 bg-white/[0.04] p-5">
                  <p className="text-sm text-slate-400">{label}</p>
                  <p className="mt-3 text-3xl font-semibold">{value}</p>
                </div>
              ))}
            </div>

            <div className="mt-4 rounded-3xl border border-white/10 bg-white/[0.04] p-5">
              <div className="mb-4 flex items-center justify-between text-sm">
                <span className="text-slate-400">{dict.hero.dashboard.progressLabel}</span>
                <span>{dict.hero.dashboard.progressValue}</span>
              </div>
              <div className="h-3 rounded-full bg-white/10">
                <div className="h-3 w-[84%] rounded-full bg-gradient-to-r from-accent to-violet" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
