import { Dictionary } from "@/lib/i18n";
import { SectionHeading } from "./SectionHeading";

export function Technology({ dict }: { dict: Dictionary }) {
  return (
    <section className="px-5 py-20 lg:px-8">
      <div className="mx-auto max-w-7xl rounded-[2.5rem] border border-white/10 bg-white/[0.035] p-8 md:p-12">
        <SectionHeading
          eyebrow={dict.sections.technology.eyebrow}
          title={dict.sections.technology.title}
          text={dict.sections.technology.text}
        />

        <div className="flex flex-wrap justify-center gap-3">
          {dict.technologies.map((tech) => (
            <span key={tech} className="rounded-full border border-white/10 bg-white/[0.06] px-5 py-3 text-sm font-medium text-slate-200">
              {tech}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}
