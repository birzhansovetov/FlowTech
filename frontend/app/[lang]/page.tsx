import { notFound } from "next/navigation";
import { dictionaries, getDictionary, isLocale, locales, type Locale } from "@/lib/i18n";
import { Contact } from "@/components/Contact";
import { CTA } from "@/components/CTA";
import { FAQ } from "@/components/FAQ";
import { Footer } from "@/components/Footer";
import { Header } from "@/components/Header";
import { Hero } from "@/components/Hero";
import { Industries } from "@/components/Industries";
import { Process } from "@/components/Process";
import { Projects } from "@/components/Projects";
import { Services } from "@/components/Services";
import { Technology } from "@/components/Technology";

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
    title: dict.site.name,
    description: dict.site.description
  };
}

export default function LocalizedHome({ params }: Params) {
  if (!isLocale(params.lang)) {
    notFound();
  }

  const locale: Locale = params.lang;
  const dict = getDictionary(locale);

  return (
    <main>
      <Header locale={locale} dict={dict} currentPath={`/${locale}`} />
      <Hero locale={locale} dict={dict} />
      <Services locale={locale} dict={dict} />
      <Industries dict={dict} />
      <Technology dict={dict} />
      <Projects locale={locale} dict={dict} />
      <Process dict={dict} />
      <CTA locale={locale} dict={dict} />
      <FAQ dict={dict} />
      <Contact dict={dict} />
      <Footer locale={locale} dict={dict} />
    </main>
  );
}
