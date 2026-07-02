import Image from "next/image";
import Link from "next/link";
import { LanguageSwitcher } from "@/components/LanguageSwitcher";
import { ThemeToggle } from "@/components/ThemeToggle";
import { getLocalizedPath, type Locale } from "@/lib/i18n";
import { Dictionary } from "@/lib/i18n";

const navItems = [
  { href: "/#services", key: "services" },
  { href: "/projects", key: "projects" },
  { href: "/ai-consultant", key: "aiConsultant" },
  { href: "/#process", key: "process" },
  { href: "/#contact", key: "contacts" }
];

export function Header({ locale, dict, currentPath }: { locale: Locale; dict: Dictionary; currentPath: string }) {
  return (
    <header className="theme-header fixed left-0 right-0 top-0 z-50 border-b border-white/10 bg-[#070b14]/72 backdrop-blur-xl">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-5 py-4 lg:px-8">
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

        <nav className="hidden items-center gap-7 text-sm text-slate-300 lg:flex">
          {navItems.map((item) => (
            <Link
              key={item.key}
              href={getLocalizedPath(locale, item.href)}
              className="transition hover:text-white"
            >
              {dict.nav[item.key as keyof typeof dict.nav]}
            </Link>
          ))}
        </nav>

        <div className="flex items-center gap-4">
          <ThemeToggle />
          <LanguageSwitcher locale={locale} />
          <Link
            href={getLocalizedPath(locale, "/#contact")}
            className="rounded-full border border-white/15 bg-white px-5 py-2.5 text-sm font-semibold text-ink transition hover:bg-slate-200"
          >
            {dict.nav.discussProject}
          </Link>
        </div>
      </div>
    </header>
  );
}
