import { Dictionary } from "@/lib/i18n";
import { SectionHeading } from "./SectionHeading";
import { Building2, HeartPulse, GraduationCap, ShoppingBag, Sparkles, Workflow } from "lucide-react";

const ICONS: Record<string, any> = {
  building2: Building2,
  heartpulse: HeartPulse,
  graduationcap: GraduationCap,
  shoppingbag: ShoppingBag,
  sparkles: Sparkles,
  workflow: Workflow
};

export function Industries({ dict }: { dict: Dictionary }) {
  return (
    <section className="px-5 py-20 lg:px-8">
      <div className="mx-auto max-w-7xl">
        <SectionHeading
          eyebrow={dict.sections.industries.eyebrow}
          title={dict.sections.industries.title}
          text={dict.sections.industries.text}
        />

        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {dict.industries.map((item) => {
            const Icon = ICONS[item.icon as string] ?? (() => null);

            return (
              <div key={item.title} className="rounded-[1.75rem] border border-white/10 bg-white/[0.04] p-6">
                <Icon className="mb-5 text-accent" size={28} />
                <h3 className="text-lg font-semibold">{item.title}</h3>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
