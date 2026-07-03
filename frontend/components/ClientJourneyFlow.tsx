import { BarChart3, Bell, Bot, Database, MessageCircle } from "lucide-react";
import type { Locale } from "@/lib/i18n";

const content = {
  ru: {
    eyebrow: "Client Journey Flow",
    title: "Как заявка проходит через систему",
    text: "Один понятный путь: клиент пишет, AI понимает запрос, CRM сохраняет данные, менеджер получает уведомление, владелец видит аналитику.",
    steps: [
      "Клиент пишет в WhatsApp",
      "AI определяет намерение",
      "Заявка попадает в CRM",
      "Менеджер получает уведомление",
      "Владелец видит аналитику"
    ]
  },
  kk: {
    eyebrow: "Client Journey Flow",
    title: "Өтінім жүйе арқылы қалай өтеді",
    text: "Бір түсінікті жол: клиент жазады, AI сұранысты түсінеді, CRM деректерді сақтайды, менеджер хабарлама алады, иесі аналитиканы көреді.",
    steps: [
      "Клиент WhatsApp-қа жазады",
      "AI ниетті анықтайды",
      "Өтінім CRM-ға түседі",
      "Менеджер хабарлама алады",
      "Иесі аналитиканы көреді"
    ]
  },
  en: {
    eyebrow: "Client Journey Flow",
    title: "How a lead moves through the system",
    text: "One clear path: the client writes, AI understands the request, CRM stores the data, the manager gets notified, the owner sees analytics.",
    steps: [
      "Client writes in WhatsApp",
      "AI detects intent",
      "Lead enters CRM",
      "Manager gets notified",
      "Owner sees analytics"
    ]
  }
} as const;

const icons = [MessageCircle, Bot, Database, Bell, BarChart3];

export function ClientJourneyFlow({ locale }: { locale: Locale }) {
  const t = content[locale];

  return (
    <section className="px-5 py-20 lg:px-8">
      <div className="mx-auto max-w-7xl">
        <div className="mb-12 max-w-3xl">
          <p className="mb-3 text-sm font-semibold uppercase tracking-[0.22em] text-accent">{t.eyebrow}</p>
          <h2 className="text-3xl font-semibold tracking-[-0.03em] text-white md:text-5xl">{t.title}</h2>
          <p className="mt-5 text-lg leading-8 text-slate-300">{t.text}</p>
        </div>

        <div className="command-panel grid gap-4 p-5 lg:grid-cols-5">
          {t.steps.map((step, index) => {
            const Icon = icons[index];

            return (
              <div key={step} className="relative rounded-xl border border-white/10 bg-white/[0.04] p-5">
                <div className="mb-5 flex h-12 w-12 items-center justify-center rounded-2xl bg-white/10 text-accent">
                  <Icon size={24} />
                </div>
                <p className="text-sm font-semibold text-slate-200">{step}</p>
                <p className="mt-4 text-3xl font-semibold text-white/20">0{index + 1}</p>
                {index < t.steps.length - 1 ? (
                  <span className="absolute -right-3 top-1/2 hidden h-px w-6 bg-accent/50 lg:block" />
                ) : null}
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
