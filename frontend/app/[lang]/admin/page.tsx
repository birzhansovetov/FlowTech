import { notFound } from "next/navigation";
import { dictionaries, getDictionary, isLocale, locales, type Locale } from "@/lib/i18n";
import { Footer } from "@/components/Footer";
import { Header } from "@/components/Header";
import AdminPanel from "@/components/AdminPanel";

type Lead = {
  id: number;
  name: string;
  contact: string;
  project_type: string;
  budget?: string | null;
  message: string;
  status: string;
  created_at: string;
};

type Params = {
  params: {
    lang: string;
  };
};

export function generateStaticParams() {
  return locales.map((lang) => ({ lang }));
}

export default function LocalizedAdminPage({ params }: Params) {
  if (!isLocale(params.lang)) {
    notFound();
  }

  const locale: Locale = params.lang;
  const dict = getDictionary(locale);
  const apiUrl = process.env.NEXT_PUBLIC_API_URL || "http://localhost:8000";

  return (
    <main className="min-h-screen bg-ink px-5 py-12 text-white lg:px-8">
      <Header locale={locale} dict={dict} currentPath={`/${locale}/admin`} />
      <div className="mx-auto max-w-6xl">
        <h1 className="text-4xl font-semibold tracking-[-0.03em]">{dict.admin.title}</h1>
        <p className="mt-3 text-slate-300">{dict.admin.description}</p>

        <AdminPanel dict={dict} apiUrl={apiUrl} />
      </div>
      <Footer locale={locale} dict={dict} />
    </main>
  );
}
