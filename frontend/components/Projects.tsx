import Link from "next/link";
import { getLocalizedPath, type Locale, type Dictionary } from "@/lib/i18n";
import { SectionHeading } from "./SectionHeading";

export function Projects({ locale, dict }: { locale: Locale; dict: Dictionary }) {
  return (
    <section id="projects" className="px-5 py-28 lg:px-8">
      <div className="mx-auto max-w-7xl">
        <SectionHeading
          eyebrow={dict.sections.projects.eyebrow}
          title={dict.sections.projects.title}
          text={dict.sections.projects.text}
        />

        <div className="grid gap-5 lg:grid-cols-3">
          {dict.projects.map((project, index) => (
            <article key={project.slug} className="glass-card overflow-hidden rounded-[2rem]">
              <div className="h-48 bg-gradient-to-br from-accent/20 via-violet/20 to-white/5 p-5">
                <div className="flex h-full items-end justify-between">
                  <span className="rounded-full bg-black/25 px-4 py-2 text-sm text-white/85">
                    {project.category}
                  </span>
                  <span className="text-5xl font-semibold text-white/20">0{index + 1}</span>
                </div>
              </div>

              <div className="p-7">
                <h3 className="text-2xl font-semibold">{project.title}</h3>
                <p className="mt-4 leading-7 text-slate-300">{project.text}</p>
                <p className="mt-4 text-sm text-emerald-300">{project.result}</p>

                <div className="mt-6 flex flex-wrap gap-2">
                  {project.stack.map((item) => (
                    <span key={item} className="rounded-full bg-white/10 px-3 py-1.5 text-xs text-slate-300">
                      {item}
                    </span>
                  ))}
                </div>
              </div>
            </article>
          ))}
        </div>

        <div className="mt-10 text-center">
          <Link
            href={getLocalizedPath(locale, "/projects")}
            className="rounded-full border border-white/15 px-7 py-4 font-semibold hover:bg-white/10"
          >
            {dict.sections.projects.allProjects}
          </Link>
        </div>
      </div>
    </section>
  );
}
