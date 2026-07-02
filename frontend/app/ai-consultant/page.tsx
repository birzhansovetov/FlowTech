import type { Metadata } from "next";
import { dictionaries, defaultLocale, type Dictionary, type Locale } from "@/lib/i18n";
import { AIChat } from "@/components/AIChat";
import { Footer } from "@/components/Footer";
import { Header } from "@/components/Header";
import { PageHero } from "@/components/PageHero";

const dict: Dictionary = dictionaries[defaultLocale];
const locale: Locale = defaultLocale;

export const metadata: Metadata = {
  title: dict.pages.aiConsultant.title,
  description: dict.pages.aiConsultant.description
};

export default function AIConsultantPage() {
  return (
    <main>
      <Header locale={locale} dict={dict} currentPath="/ai-consultant" />
      <PageHero
        eyebrow={dict.pages.aiConsultant.title}
        title="Опишите задачу — AI предложит решение"
        text={dict.pages.aiConsultant.description}
      />

      <section className="px-5 py-16 lg:px-8">
        <AIChat dict={dict} />
      </section>

      <Footer locale={locale} dict={dict} />
    </main>
  );
}
