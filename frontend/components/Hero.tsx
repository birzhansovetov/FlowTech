import Link from "next/link";
import { ArrowRight, CheckCircle2, Database, MessageSquareText, Radar } from "lucide-react";
import { Dictionary, type Locale, getLocalizedPath } from "@/lib/i18n";

const ctaLabels: Record<Locale, { primary: string; secondary: string }> = {
  ru: { primary: "Получить roadmap", secondary: "Собрать мою систему" },
  kk: { primary: "Roadmap алу", secondary: "Жүйемді жинау" },
  en: { primary: "Get roadmap", secondary: "Build my system" }
};

export function Hero({ locale, dict }: { locale: Locale; dict: Dictionary }) {
  const labels = ctaLabels[locale];

  return (
    <section className="relative min-h-screen overflow-hidden px-5 pt-32 lg:px-8 lg:pt-36">
      <div className="absolute inset-0 bg-grid" />

      <div className="relative mx-auto grid max-w-7xl items-center gap-10 lg:grid-cols-[.95fr_1.05fr]">
        <div>
          <div className="command-strip mb-6 inline-flex items-center gap-3 px-4 py-2 text-sm text-slate-300">
            <span className="status-dot" />
            {dict.hero.badge}
          </div>

          <h1 className="max-w-5xl text-5xl font-semibold leading-[0.98] tracking-[-0.04em] md:text-7xl">
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
              {labels.primary} <ArrowRight size={18} />
            </Link>
            <Link
              href={getLocalizedPath(locale, "/#services")}
              className="rounded-full border border-white/15 px-7 py-4 text-center font-semibold text-white transition hover:bg-white/10"
            >
              {labels.secondary}
            </Link>
          </div>

          <div className="mt-8 grid max-w-xl gap-3 text-sm text-slate-300 sm:grid-cols-3">
            {dict.hero.features.map((item) => (
              <span key={item} className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/[0.04] px-3 py-2">
                <CheckCircle2 size={17} className="text-accent" /> {item}
              </span>
            ))}
          </div>
        </div>

        <div className="command-panel relative overflow-hidden p-4">
          <div className="mb-4 flex items-center justify-between border-b border-white/10 px-2 pb-4">
            <div className="flex items-center gap-2">
              <span className="h-3 w-3 rounded-full bg-red-300/80" />
              <span className="h-3 w-3 rounded-full bg-yellow-300/80" />
              <span className="h-3 w-3 rounded-full bg-emerald-300/80" />
            </div>
            <span className="text-xs font-semibold uppercase tracking-[0.18em] text-slate-400">
              FlowTech Command Center
            </span>
          </div>

          <div className="grid gap-4 lg:grid-cols-[1fr_.78fr]">
            <div className="rounded-xl border border-white/10 bg-[#08111f] p-5">
              <div className="mb-5 flex items-center justify-between border-b border-white/10 pb-4">
                <div>
                  <p className="text-sm text-slate-400">{dict.hero.dashboard.title}</p>
                  <h3 className="mt-1 text-xl font-semibold">{dict.hero.dashboard.subtitle}</h3>
                </div>
                <span className="inline-flex items-center gap-2 rounded-full bg-emerald-400/15 px-3 py-1 text-xs font-medium text-emerald-300">
                  <span className="h-2 w-2 rounded-full bg-emerald-300" />
                  {dict.hero.dashboard.status}
                </span>
              </div>

              <div className="grid gap-3 sm:grid-cols-2">
                {dict.hero.dashboard.stats.map(([label, value]) => (
                  <div key={label} className="rounded-xl border border-white/10 bg-white/[0.04] p-4">
                    <p className="text-xs uppercase tracking-[0.16em] text-slate-500">{label}</p>
                    <p className="mt-3 text-3xl font-semibold">{value}</p>
                  </div>
                ))}
              </div>

              <div className="mt-4 rounded-xl border border-white/10 bg-white/[0.04] p-5">
                <div className="mb-4 flex items-center justify-between text-sm">
                  <span className="text-slate-400">{dict.hero.dashboard.progressLabel}</span>
                  <span>{dict.hero.dashboard.progressValue}</span>
                </div>
                <div className="h-2 rounded-full bg-white/10">
                  <div className="h-2 w-[84%] rounded-full bg-gradient-to-r from-accent to-emerald-300" />
                </div>
              </div>
            </div>

            <div className="grid gap-4">
              <StatusCard icon={Radar} label="Scanner" title="Bottleneck detected" text="Lead response delay" />
              <StatusCard icon={MessageSquareText} label="AI" title="Classified request" text="High intent lead" />
              <StatusCard icon={Database} label="CRM" title="Status updated" text="Manager notified" />
            </div>
          </div>

          <div className="mt-4 grid gap-3 sm:grid-cols-4">
            {[
              ["01", "Diagnose"],
              ["02", "Design"],
              ["03", "Automate"],
              ["04", "Track"]
            ].map(([number, label]) => (
              <div key={label} className="rounded-xl border border-white/10 bg-white/[0.04] p-4">
                <p className="text-xs text-accent">{number}</p>
                <p className="mt-2 text-sm font-semibold">{label}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

function StatusCard({
  icon: Icon,
  label,
  title,
  text
}: {
  icon: typeof Radar;
  label: string;
  title: string;
  text: string;
}) {
  return (
    <div className="rounded-xl border border-white/10 bg-white/[0.04] p-4">
      <div className="mb-4 flex items-center justify-between">
        <Icon className="text-accent" size={22} />
        <span className="text-xs text-slate-500">{label}</span>
      </div>
      <p className="text-sm text-slate-300">{title}</p>
      <p className="mt-2 text-lg font-semibold">{text}</p>
    </div>
  );
}
