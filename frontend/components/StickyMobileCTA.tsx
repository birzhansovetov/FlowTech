import Link from "next/link";
import { getLocalizedPath, type Locale } from "@/lib/i18n";

const labels: Record<Locale, string> = {
  ru: "Получить roadmap",
  kk: "Roadmap алу",
  en: "Get roadmap"
};

export function StickyMobileCTA({ locale }: { locale: Locale }) {
  return (
    <div className="fixed inset-x-0 bottom-0 z-50 border-t border-white/10 bg-[#070b14]/90 p-4 backdrop-blur-xl md:hidden">
      <Link
        href={getLocalizedPath(locale, "/#contact")}
        className="flex w-full items-center justify-center rounded-full bg-white px-6 py-4 text-sm font-semibold text-ink shadow-card"
      >
        {labels[locale]}
      </Link>
    </div>
  );
}
