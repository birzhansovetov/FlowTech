import Link from "next/link";
import { getLocalizedPath, type Locale, type Dictionary } from "@/lib/i18n";

export function CTA({ locale, dict }: { locale: Locale; dict: Dictionary }) {
  return (
    <section className="px-5 py-20 lg:px-8">
      <div className="mx-auto max-w-7xl overflow-hidden rounded-[2.5rem] border border-white/10 bg-gradient-to-br from-accent/20 via-violet/20 to-white/[0.04] p-8 md:p-12">
        <div className="max-w-3xl">
          <p className="mb-4 text-sm font-semibold uppercase tracking-[0.22em] text-accent">
            {dict.sections.cta.eyebrow}
          </p>
          <h2 className="text-3xl font-semibold tracking-[-0.03em] md:text-5xl">
            {dict.sections.cta.title}
          </h2>
          <p className="mt-5 text-lg leading-8 text-slate-300">
            {dict.sections.cta.text}
          </p>

          <Link
            href={getLocalizedPath(locale, "/ai-consultant")}
            className="mt-8 inline-flex rounded-full bg-white px-7 py-4 font-semibold text-ink transition hover:bg-slate-200"
          >
            {dict.sections.cta.button}
          </Link>
        </div>
      </div>
    </section>
  );
}
