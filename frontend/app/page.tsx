import { dictionaries, defaultLocale, type Dictionary, type Locale } from "@/lib/i18n";
import { Contact } from "@/components/Contact";
import { CTA } from "@/components/CTA";
import { ClientJourneyFlow } from "@/components/ClientJourneyFlow";
import { FAQ } from "@/components/FAQ";
import { Footer } from "@/components/Footer";
import { Header } from "@/components/Header";
import { Hero } from "@/components/Hero";
import { Industries } from "@/components/Industries";
import { InteractiveSystems } from "@/components/InteractiveSystems";
import { Process } from "@/components/Process";
import { Projects } from "@/components/Projects";
import { Services } from "@/components/Services";
import { StickyMobileCTA } from "@/components/StickyMobileCTA";
import { Technology } from "@/components/Technology";

const dict: Dictionary = dictionaries[defaultLocale];
const locale: Locale = defaultLocale;

export default function Home() {
  return (
    <main>
      <Header locale={locale} dict={dict} currentPath="/" />
      <Hero locale={locale} dict={dict} />
      <InteractiveSystems locale={locale} />
      <ClientJourneyFlow locale={locale} />
      <Services locale={locale} dict={dict} />
      <Industries dict={dict} />
      <Technology dict={dict} />
      <Projects locale={locale} dict={dict} />
      <Process dict={dict} />
      <CTA locale={locale} dict={dict} />
      <FAQ dict={dict} />
      <Contact dict={dict} />
      <Footer locale={locale} dict={dict} />
      <StickyMobileCTA locale={locale} />
    </main>
  );
}
