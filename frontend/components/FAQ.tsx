import { SectionHeading } from "./SectionHeading";
import { Dictionary } from "@/lib/i18n";

export function FAQ({ dict }: { dict: Dictionary }) {
  return (
    <section className="px-5 py-24 lg:px-8">
      <div className="mx-auto max-w-4xl">
        <SectionHeading
          eyebrow={dict.sections.faq.eyebrow}
          title={dict.sections.faq.title}
          text={dict.sections.faq.text}
        />

        <div className="space-y-4">
          {dict.faq.map((item) => (
            <details key={item.question} className="group rounded-[1.5rem] border border-white/10 bg-white/[0.04] p-6">
              <summary className="cursor-pointer list-none text-lg font-semibold">
                {item.question}
              </summary>
              <p className="mt-4 leading-7 text-slate-300">{item.answer}</p>
            </details>
          ))}
        </div>
      </div>
    </section>
  );
}
