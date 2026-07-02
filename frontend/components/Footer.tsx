import Image from "next/image";
import Link from "next/link";
import { getLocalizedPath, type Locale } from "@/lib/i18n";
import { Dictionary } from "@/lib/i18n";

export function Footer({ locale, dict }: { locale: Locale; dict: Dictionary }) {
  return (
    <footer className="border-t border-white/10 px-5 py-10 lg:px-8">
      <div className="mx-auto flex max-w-7xl flex-col gap-4 text-sm text-slate-400 md:flex-row md:items-center md:justify-between">
        <div className="flex flex-col gap-3">
          <Image
            src="/logo-white.png"
            alt={dict.site.name}
            width={800}
            height={312}
            className="theme-logo-dark h-10 w-auto"
          />
          <Image
            src="/logo-blue.png"
            alt={dict.site.name}
            width={800}
            height={312}
            className="theme-logo-light h-10 w-auto"
          />
          <p>
            © {new Date().getFullYear()} {dict.site.name}. {dict.site.description}.
          </p>
        </div>

        <div className="flex flex-wrap gap-5">
          <Link className="hover:text-white" href={getLocalizedPath(locale, "/#services")}>
            {dict.nav.services}
          </Link>
          <Link className="hover:text-white" href={getLocalizedPath(locale, "/projects")}>
            {dict.nav.projects}
          </Link>
          <Link className="hover:text-white" href={getLocalizedPath(locale, "/ai-consultant")}>
            {dict.nav.aiConsultant}
          </Link>
          <Link className="hover:text-white" href={getLocalizedPath(locale, "/#contact")}>
            {dict.nav.contacts}
          </Link>
        </div>
      </div>
    </footer>
  );
}
