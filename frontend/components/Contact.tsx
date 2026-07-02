import { ContactForm } from "./ContactForm";
import { SectionHeading } from "./SectionHeading";
import { Dictionary } from "@/lib/i18n";

export function Contact({ dict }: { dict: Dictionary }) {
  return (
    <section id="contact" className="px-5 py-28 lg:px-8">
      <div className="mx-auto grid max-w-7xl gap-10 lg:grid-cols-[.85fr_1.15fr] lg:items-start">
        <div className="lg:sticky lg:top-28">
          <SectionHeading
            eyebrow={dict.sections.contact.eyebrow}
            title={dict.sections.contact.title}
            text={dict.sections.contact.text}
            align="left"
          />

          <div className="rounded-[2rem] border border-white/10 bg-white/[0.04] p-6 text-slate-300">
            <p className="font-semibold text-white">{dict.sections.contact.infoTitle}</p>
            <ul className="mt-4 space-y-3 leading-7">
              {dict.sections.contact.infoList.map((item) => (
                <li key={item}>• {item}</li>
              ))}
            </ul>
          </div>
        </div>

        <ContactForm dict={dict} />
      </div>
    </section>
  );
}
