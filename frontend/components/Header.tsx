import Image from "next/image";
import Link from "next/link";
import { LanguageSwitcher } from "@/components/LanguageSwitcher";
import { ThemeToggle } from "@/components/ThemeToggle";
import { getLocalizedPath, type Locale } from "@/lib/i18n";
import { Dictionary } from "@/lib/i18n";

const navItems = [
  { href: "/#services", key: "scanner" },
  { href: "/projects", key: "projects" },
  { href: "/#process", key: "process" },
  { href: "/#contact", key: "contact" }
];

const navLabels = {
  ru: {
    scanner: "Scanner",
    projects: "Cases",
    process: "Process",
    contact: "Roadmap",
    cta: "Получить roadmap"
  },
  kk: {
    scanner: "Scanner",
    projects: "Cases",
    process: "Process",
    contact: "Roadmap",
    cta: "Roadmap алу"
  },
  en: {
    scanner: "Scanner",
    projects: "Cases",
    process: "Process",
    contact: "Roadmap",
    cta: "Get roadmap"
  }
} as const;

export function Header({ locale, dict, currentPath }: { locale: Locale; dict: Dictionary; currentPath: string }) {
  const labels = navLabels[locale];

  return (
    <header className="theme-header fixed left-0 right-0 top-0 z-50 border-b border-white/10 backdrop-blur-xl">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-5 py-3 lg:px-8">
        <Link href={getLocalizedPath(locale, "/")} className="flex items-center gap-3">
          <Image
            src="/logo-white.png"
            alt={dict.site.name}
            width={800}
            height={312}
            priority
            className="theme-logo-dark h-11 w-auto"
          />
          <Image
            src="/logo-blue.png"
            alt={dict.site.name}
            width={800}
            height={312}
            priority
            className="theme-logo-light h-11 w-auto"
          />
        </Link>

        <nav className="hidden items-center rounded-full border border-white/10 bg-white/[0.04] p-1 text-sm text-slate-300 lg:flex">
          {navItems.map((item) => (
            <Link
              key={item.key}
              href={getLocalizedPath(locale, item.href)}
              className="rounded-full px-4 py-2 transition hover:bg-white/10 hover:text-white"
            >
              {labels[item.key as keyof typeof labels]}
            </Link>
          ))}
        </nav>

        <div className="flex items-center gap-3">
          <ThemeToggle />
          <LanguageSwitcher locale={locale} />
          <Link
            href={getLocalizedPath(locale, "/#contact")}
            className="hidden rounded-full border border-white/15 bg-white px-5 py-2.5 text-sm font-semibold text-ink transition hover:bg-slate-200 sm:inline-flex"
          >
            {labels.cta}
          </Link>
        </div>
      </div>
    </header>
  );
}
