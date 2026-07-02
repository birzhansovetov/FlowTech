import Link from "next/link";
import { getLocalizedPath, type Locale, type Dictionary } from "@/lib/i18n";
import { SectionHeading } from "./SectionHeading";
import { Bot, Code2, Smartphone, Workflow, Cloud, LockKeyhole } from "lucide-react";

const ICONS: Record<string, any> = {
  bot: Bot,
  code2: Code2,
  smartphone: Smartphone,
  workflow: Workflow,
  cloud: Cloud,
  lockkeyhole: LockKeyhole
};

export function Services({ locale, dict }: { locale: Locale; dict: Dictionary }) {
  return (
    <section id="services" className="px-5 py-28 lg:px-8">
      <div className="mx-auto max-w-7xl">
        <SectionHeading
          eyebrow={dict.sections.services.eyebrow}
          title={dict.sections.services.title}
          text={dict.sections.services.text}
        />

        <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-3">
          {dict.services.map((service) => {
            const Icon = ICONS[service.icon as string] ?? (() => null);

            return (
              <Link
                key={service.slug}
                href={getLocalizedPath(locale, `/services/${service.slug}`)}
                className="glass-card group rounded-[2rem] p-7 transition hover:-translate-y-1 hover:border-accent/30"
              >
                <div className="mb-7 flex h-14 w-14 items-center justify-center rounded-2xl bg-white/10 text-accent transition group-hover:bg-accent group-hover:text-ink">
                  <Icon size={26} />
                </div>

                <h3 className="text-xl font-semibold">{service.title}</h3>
                <p className="mt-4 leading-7 text-slate-300">{service.text}</p>
                <p className="mt-5 text-sm font-semibold text-accent">{dict.nav.discussProject} →</p>
              </Link>
            );
          })}
        </div>
      </div>
    </section>
  );
}
