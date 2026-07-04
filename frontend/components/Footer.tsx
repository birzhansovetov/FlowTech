import Image from "next/image";
import Link from "next/link";
import { getLocalizedPath, type Locale } from "@/lib/i18n";
import { Dictionary } from "@/lib/i18n";

export function Footer({ locale, dict }: { locale: Locale; dict: Dictionary }) {
  return (
    <footer className="px-5 pb-10 pt-16 lg:px-8">
      <div className="mx-auto max-w-7xl">
        <div className="command-panel grid gap-8 p-6 md:grid-cols-[1fr_auto] md:items-center">
          <div className="flex flex-col gap-4">
            <div className="inline-flex w-fit rounded-xl border border-white/10 bg-white/[0.04] p-3">
              <Image
                src="/logo-white.png"
                alt={dict.site.name}
                width={800}
                height={312}
                className="theme-logo-dark h-auto w-[152px] object-contain"
              />
              <Image
                src="/logo-blue.png"
                alt={dict.site.name}
                width={800}
                height={312}
                className="theme-logo-light h-auto w-[152px] object-contain"
              />
            </div>
            <p className="text-sm leading-6 text-slate-400">
              © {new Date().getFullYear()} {dict.site.name}. {dict.site.description}.
            </p>
          </div>

          <div className="flex flex-wrap gap-2 text-sm font-medium text-slate-400 md:justify-end">
            <Link
              className="rounded-full border border-white/10 px-4 py-2 hover:bg-white/10 hover:text-white"
              href={getLocalizedPath(locale, "/#services")}
            >
              {dict.nav.services}
            </Link>
            <Link
              className="rounded-full border border-white/10 px-4 py-2 hover:bg-white/10 hover:text-white"
              href={getLocalizedPath(locale, "/projects")}
            >
              {dict.nav.projects}
            </Link>
            <Link
              className="rounded-full border border-white/10 px-4 py-2 hover:bg-white/10 hover:text-white"
              href={getLocalizedPath(locale, "/ai-consultant")}
            >
              {dict.nav.aiConsultant}
            </Link>
            <Link
              className="rounded-full border border-white/10 px-4 py-2 hover:bg-white/10 hover:text-white"
              href={getLocalizedPath(locale, "/#contact")}
            >
              {dict.nav.contacts}
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
