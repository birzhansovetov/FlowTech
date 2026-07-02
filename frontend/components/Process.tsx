import { Dictionary } from "@/lib/i18n";
import { SectionHeading } from "./SectionHeading";
import { MessageSquareText, Braces, Rocket, Database } from "lucide-react";

const ICONS: Record<string, any> = {
  "message-square-text": MessageSquareText,
  braces: Braces,
  rocket: Rocket,
  database: Database
};

export function Process({ dict }: { dict: Dictionary }) {
  return (
    <section id="process" className="px-5 py-24 lg:px-8">
      <div className="mx-auto max-w-7xl">
        <SectionHeading
          eyebrow={dict.sections.process.eyebrow}
          title={dict.sections.process.title}
          text={dict.sections.process.text}
        />

        <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-4">
          {dict.processSteps.map((step) => {
            const Icon = ICONS[step.icon as string] ?? (() => null);

            return (
              <div key={step.title} className="rounded-[2rem] border border-white/10 bg-white/[0.04] p-6">
                <Icon className="mb-6 text-accent" size={30} />
                <h3 className="text-lg font-semibold">{step.title}</h3>
                <p className="mt-4 leading-7 text-slate-300">{step.text}</p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
