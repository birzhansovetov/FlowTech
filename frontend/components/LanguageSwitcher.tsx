"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { getSwitchPath, locales, type Locale } from "@/lib/i18n";

const languageLabels: Record<Locale, string> = {
  kk: "KZ",
  ru: "RU",
  en: "EN"
};

export function LanguageSwitcher({ locale }: { locale: Locale }) {
  const pathname = usePathname() || "/";

  return (
    <div className="flex items-center rounded-full border border-slate-200 bg-white p-1 text-xs font-semibold text-slate-900 dark:border-slate-700 dark:bg-slate-950 dark:text-slate-100">
      {locales.map((item) => {
        const isActive = item === locale;

        return isActive ? (
          <span
            key={item}
            className="rounded-full bg-slate-900 px-2.5 py-1 text-white dark:bg-white dark:text-slate-950"
          >
            {languageLabels[item]}
          </span>
        ) : (
          <Link
            key={item}
            href={getSwitchPath(item, pathname)}
            className="rounded-full px-2.5 py-1 text-slate-500 transition hover:text-slate-950 dark:text-slate-400 dark:hover:text-white"
          >
            {languageLabels[item]}
          </Link>
        );
      })}
    </div>
  );
}
