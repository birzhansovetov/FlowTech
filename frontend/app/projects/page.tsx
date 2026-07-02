import type { Metadata } from "next";
import { dictionaries, defaultLocale, type Dictionary, type Locale } from "@/lib/i18n";
import { Footer } from "@/components/Footer";
import { Header } from "@/components/Header";
import { PageHero } from "@/components/PageHero";

const dict: Dictionary = dictionaries[defaultLocale];
const locale: Locale = defaultLocale;

export const metadata: Metadata = {
  title: dict.pages.projects.title,
  description: dict.pages.projects.description
};

export default function ProjectsPage() {
  return (
    <main>
      <Header locale={locale} dict={dict} currentPath="/projects" />
      <PageHero
        eyebrow={dict.sections.projects.eyebrow}
        title="Кейсы, которые продают экспертизу"
        text="Страница готова для реальных кейсов: проблема клиента, решение, результат, технологии и роль команды."
      />

      <section className="px-5 py-20 lg:px-8">
        <div className="mx-auto grid max-w-7xl gap-5 lg:grid-cols-3">
          {dict.projects.map((project) => (
            <article key={project.slug} className="glass-card rounded-[2rem] p-7">
              <p className="text-sm font-semibold uppercase tracking-[0.18em] text-accent">
                {project.category}
              </p>
              <h2 className="mt-4 text-2xl font-semibold">{project.title}</h2>
              <p className="mt-4 leading-7 text-slate-300">{project.text}</p>
              <div className="mt-6 rounded-2xl bg-emerald-400/10 p-4 text-sm leading-6 text-emerald-200">
                {project.result}
              </div>

              <div className="mt-6 flex flex-wrap gap-2">
                {project.stack.map((item) => (
                  <span key={item} className="rounded-full bg-white/10 px-3 py-1.5 text-xs text-slate-300">
                    {item}
                  </span>
                ))}
              </div>
            </article>
          ))}
        </div>
      </section>

      <Footer locale={locale} dict={dict} />
    </main>
  );
}
