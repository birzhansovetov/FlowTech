"use client";

import Link from "next/link";
import { useParams } from "next/navigation";
import { getDictionary, getLocalizedPath, isLocale, defaultLocale } from "@/lib/i18n";

export default function LangNotFound() {
  const params = useParams();
  const rawLang = params?.lang;
  const lang = Array.isArray(rawLang) ? rawLang[0] : rawLang;
  const locale = isLocale(lang) ? lang : defaultLocale;
  const dict = getDictionary(locale);
  const homePath = getLocalizedPath(locale, "/");

  return (
    <main className="min-h-screen bg-ink px-5 py-32 text-white">
      <div className="mx-auto max-w-2xl text-center">
        <p className="text-sm font-semibold uppercase tracking-[0.22em] text-accent">404</p>
        <h1 className="mt-4 text-5xl font-semibold tracking-[-0.04em]">
          {dict.notFound.title}
        </h1>
        <p className="mt-5 text-slate-300">{dict.notFound.text}</p>
        <Link href={homePath} className="mt-8 inline-flex rounded-full bg-white px-7 py-4 font-semibold text-ink">
          {dict.notFound.button}
        </Link>
      </div>
    </main>
  );
}
