import { notFound } from "next/navigation";
import { dictionaries, getDictionary, isLocale, locales, type Locale } from "@/lib/i18n";
import { AIChat } from "@/components/AIChat";
import { Footer } from "@/components/Footer";
import { Header } from "@/components/Header";
import { PageHero } from "@/components/PageHero";

type Params = {
  params: {
    lang: string;
  };
};

export function generateStaticParams() {
  return locales.map((lang) => ({ lang }));
}

export function generateMetadata({ params }: Params) {
  const locale = isLocale(params.lang) ? params.lang : "ru";
  const dict = getDictionary(locale);

  return {
    title: dict.pages.aiConsultant.title,
    description: dict.pages.aiConsultant.description
  };
}

export default function LocalizedAIConsultantPage({ params }: Params) {
  if (!isLocale(params.lang)) {
    notFound();
  }

  const locale: Locale = params.lang;
  const dict = getDictionary(locale);

  return (
    <main>
      <Header locale={locale} dict={dict} currentPath={`/${locale}/ai-consultant`} />
      <PageHero
        eyebrow={dict.pages.aiConsultant.title}
        title={dict.pages.aiConsultant.title}
        text={dict.pages.aiConsultant.description}
      />

      <section className="px-5 py-16 lg:px-8">
        <AIChat dict={dict} />
      </section>

      <Footer locale={locale} dict={dict} />
    </main>
  );
}
