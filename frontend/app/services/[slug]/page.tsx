import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Link from "next/link";
import { CheckCircle2, Bot, Code2, Smartphone, Workflow, Cloud, LockKeyhole, MessageSquareText, Braces, Rocket, Database, Building2, HeartPulse, GraduationCap, ShoppingBag, Sparkles } from "lucide-react";
import { dictionaries, defaultLocale, getLocalizedPath, type Dictionary, type Locale } from "@/lib/i18n";

const ICONS: Record<string, any> = {
  bot: Bot,
  code2: Code2,
  smartphone: Smartphone,
  workflow: Workflow,
  cloud: Cloud,
  lockkeyhole: LockKeyhole,
  "message-square-text": MessageSquareText,
  braces: Braces,
  rocket: Rocket,
  database: Database,
  building2: Building2,
  heartpulse: HeartPulse,
  graduationcap: GraduationCap,
  shoppingbag: ShoppingBag,
  sparkles: Sparkles
};
import { Footer } from "@/components/Footer";
import { Header } from "@/components/Header";
import { PageHero } from "@/components/PageHero";

const dict: Dictionary = dictionaries[defaultLocale];
const locale: Locale = defaultLocale;

type Params = {
  params: {
    slug: string;
  };
};

export function generateStaticParams() {
  return dict.services.map((service) => ({ slug: service.slug }));
}

export function generateMetadata({ params }: Params): Metadata {
  const service = dict.services.find((item) => item.slug === params.slug);

  if (!service) {
    return { title: "Service" };
  }

  return {
    title: service.title,
    description: service.short
  };
}

export default function ServicePage({ params }: Params) {
  const service = dict.services.find((item) => item.slug === params.slug);

  if (!service) {
    notFound();
  }

  const Icon = ICONS[service.icon as string] ?? (() => null);

  return (
    <main>
      <Header locale={locale} dict={dict} currentPath={`/services/${params.slug}`} />
      <PageHero eyebrow={dict.servicePage.eyebrow} title={service.title} text={service.text} />

      <section className="px-5 py-20 lg:px-8">
        <div className="mx-auto grid max-w-6xl gap-8 lg:grid-cols-[.8fr_1.2fr]">
          <div className="glass-card rounded-[2rem] p-8">
            <Icon size={42} className="text-accent" />
            <h2 className="mt-6 text-2xl font-semibold">{dict.servicePage.moreTitle}</h2>
            <p className="mt-4 leading-7 text-slate-300">
              {dict.servicePage.moreText}
            </p>
          </div>

          <div className="rounded-[2rem] border border-white/10 bg-white/[0.04] p-8">
            <div className="grid gap-4 sm:grid-cols-2">
              {service.bullets.map((bullet) => (
                <div key={bullet} className="flex gap-3 rounded-2xl bg-white/[0.05] p-5">
                  <CheckCircle2 className="mt-1 shrink-0 text-accent" size={20} />
                  <span>{bullet}</span>
                </div>
              ))}
            </div>

            <Link
              href={getLocalizedPath(locale, "/#contact")}
              className="mt-8 inline-flex rounded-full bg-white px-7 py-4 font-semibold text-ink"
            >
              {dict.servicePage.discussProject}
            </Link>
          </div>
        </div>
      </section>

      <Footer locale={locale} dict={dict} />
    </main>
  );
}
