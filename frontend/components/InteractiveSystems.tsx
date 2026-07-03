"use client";

import {
  Activity,
  Bot,
  CheckCircle2,
  Gauge,
  Layers3,
  MessageSquareText,
  Route,
  Workflow
} from "lucide-react";
import { useMemo, useState } from "react";
import type { Locale } from "@/lib/i18n";

type Module = {
  id: string;
  label: string;
  value: number;
};

const content = {
  ru: {
    eyebrow: "Interactive sales tool",
    title: "Не просто сайт. Система, которая показывает бизнесу следующий шаг",
    text:
      "Клиент проходит мини-диагностику, видит узкие места, собирает решение и понимает, какой roadmap нужен для внедрения.",
    scanner: {
      title: "AI Business Scanner",
      text: "Выберите сферу и главную проблему, чтобы получить рекомендуемую систему.",
      industryLabel: "Сфера",
      painLabel: "Где теряется время",
      industries: ["Beauty / wellness", "Education", "E-commerce", "B2B service"],
      pains: ["WhatsApp хаос", "Нет CRM", "Медленный ответ", "Нет аналитики"],
      recommended: "Recommended system",
      roadmap: "Отправить этот roadmap нам",
      copy: "Скопировать roadmap"
    },
    builder: {
      title: "Build Your System",
      text: "Соберите модули, которые нужны бизнесу прямо сейчас.",
      solution: "Ваше решение",
      complexity: "Сложность",
      timeline: "Срок",
      receive: "Что получите",
      modules: [
        { id: "ai", label: "AI Assistant", value: 22 },
        { id: "crm", label: "CRM", value: 18 },
        { id: "admin", label: "Admin Panel", value: 14 },
        { id: "mobile", label: "Mobile App", value: 24 },
        { id: "telegram", label: "Telegram Bot", value: 10 },
        { id: "analytics", label: "Analytics Dashboard", value: 12 },
        { id: "payments", label: "Payment Integration", value: 14 }
      ]
    },
    beforeAfter: {
      title: "Before FlowTech / After FlowTech",
      before: "До",
      after: "После",
      beforeItems: ["WhatsApp хаос", "Excel таблицы", "ручные ответы", "потерянные заявки", "нет аналитики"],
      afterItems: ["AI отвечает", "CRM сохраняет", "менеджер получает уведомление", "владелец видит dashboard", "follow-up не теряется"]
    },
    score: {
      title: "AI Readiness Score",
      text: "Оценка готовности к AI по выбранным модулям и проблемам.",
      readyFor: "Готово к внедрению",
      notYet: "Пока рано",
      readyItems: ["AI first-line support", "CRM automation", "analytics dashboard"],
      notYetItems: ["full custom mobile app без проверки спроса"]
    },
    impact: {
      title: "Problem → System → Impact",
      problem: "Problem",
      system: "System",
      impact: "Impact",
      text: "Заявки сохраняются в одном месте, менеджер быстрее реагирует, владелец видит статусы и аналитику."
    },
    roadmap: {
      title: "Implementation Roadmap",
      items: [
        "Week 1 — диагностика процесса",
        "Week 2 — UX/UI и архитектура",
        "Week 3 — AI Assistant + CRM",
        "Week 4 — Telegram alerts + Dashboard",
        "Week 5 — Testing & Launch"
      ]
    },
    plan: {
      title: "Ваш персональный план",
      modules: "Что внедряем",
      copied: "Roadmap скопирован",
      saved: "Roadmap добавлен в форму ниже"
    },
    live: {
      title: "Live Automation Preview",
      text: "Как система работает после внедрения: от первого сообщения до CRM и follow-up.",
      events: [
        "10:24 — New lead from WhatsApp",
        "10:24 — AI classified: Hot lead",
        "10:25 — CRM status: New",
        "10:25 — Manager notified in Telegram",
        "10:26 — Follow-up scheduled"
      ]
    },
    os: {
      title: "FlowTech OS",
      text: "Методология, которая превращает отдельные инструменты в связанную AI-powered систему.",
      modules: [
        ["Lead OS", "заявки, CRM, уведомления"],
        ["AI OS", "ассистенты, FAQ, классификация"],
        ["Ops OS", "автоматизация ручных процессов"],
        ["Data OS", "аналитика, dashboard, отчеты"],
        ["MVP OS", "запуск новых продуктов"]
      ]
    }
  },
  kk: {
    eyebrow: "Interactive sales tool",
    title: "Жай сайт емес. Бизнеске келесі қадамды көрсететін жүйе",
    text:
      "Клиент қысқа диагностикадан өтеді, тар орындарды көреді, шешімді жинайды және енгізуге қандай roadmap керек екенін түсінеді.",
    scanner: {
      title: "AI Business Scanner",
      text: "Ұсынылатын жүйені көру үшін сала мен басты мәселені таңдаңыз.",
      industryLabel: "Сала",
      painLabel: "Уақыт қайда жоғалады",
      industries: ["Beauty / wellness", "Education", "E-commerce", "B2B service"],
      pains: ["WhatsApp хаосы", "CRM жоқ", "Жауап баяу", "Аналитика жоқ"],
      recommended: "Ұсынылатын жүйе",
      roadmap: "Осы roadmap-ты жіберу",
      copy: "Roadmap көшіру"
    },
    builder: {
      title: "Build Your System",
      text: "Бизнеске қазір қажет модульдерді таңдаңыз.",
      solution: "Сіздің шешіміңіз",
      complexity: "Күрделілік",
      timeline: "Мерзім",
      receive: "Нәтиже",
      modules: [
        { id: "ai", label: "AI Assistant", value: 22 },
        { id: "crm", label: "CRM", value: 18 },
        { id: "admin", label: "Admin Panel", value: 14 },
        { id: "mobile", label: "Mobile App", value: 24 },
        { id: "telegram", label: "Telegram Bot", value: 10 },
        { id: "analytics", label: "Analytics Dashboard", value: 12 },
        { id: "payments", label: "Payment Integration", value: 14 }
      ]
    },
    beforeAfter: {
      title: "Before FlowTech / After FlowTech",
      before: "Дейін",
      after: "Кейін",
      beforeItems: ["WhatsApp хаосы", "Excel кестелері", "қолмен жауап беру", "жоғалған өтінімдер", "аналитика жоқ"],
      afterItems: ["AI жауап береді", "CRM сақтайды", "менеджер хабарлама алады", "иесі dashboard көреді", "follow-up жоғалмайды"]
    },
    score: {
      title: "AI Readiness Score",
      text: "Таңдалған модульдер мен мәселелер бойынша AI-ға дайындық бағасы.",
      readyFor: "Енгізуге дайын",
      notYet: "Әзірге ерте",
      readyItems: ["AI first-line support", "CRM automation", "analytics dashboard"],
      notYetItems: ["сұранысты тексермей full custom mobile app жасау"]
    },
    impact: {
      title: "Problem → System → Impact",
      problem: "Мәселе",
      system: "Жүйе",
      impact: "Әсер",
      text: "Өтінімдер бір жерде сақталады, менеджер тезірек жауап береді, иесі статустар мен аналитиканы көреді."
    },
    roadmap: {
      title: "Implementation Roadmap",
      items: [
        "Week 1 — процесті диагностикалау",
        "Week 2 — UX/UI және архитектура",
        "Week 3 — AI Assistant + CRM",
        "Week 4 — Telegram alerts + Dashboard",
        "Week 5 — Testing & Launch"
      ]
    },
    plan: {
      title: "Сіздің жеке жоспарыңыз",
      modules: "Не енгіземіз",
      copied: "Roadmap көшірілді",
      saved: "Roadmap төмендегі формаға қосылды"
    },
    live: {
      title: "Live Automation Preview",
      text: "Жүйе енгізілгеннен кейін қалай жұмыс істейді: алғашқы хабарламадан CRM және follow-up-қа дейін.",
      events: [
        "10:24 — New lead from WhatsApp",
        "10:24 — AI classified: Hot lead",
        "10:25 — CRM status: New",
        "10:25 — Manager notified in Telegram",
        "10:26 — Follow-up scheduled"
      ]
    },
    os: {
      title: "FlowTech OS",
      text: "Жеке құралдарды байланысқан AI-powered жүйеге айналдыратын әдістеме.",
      modules: [
        ["Lead OS", "өтінімдер, CRM, хабарламалар"],
        ["AI OS", "ассистенттер, FAQ, классификация"],
        ["Ops OS", "қол процестерін автоматтандыру"],
        ["Data OS", "аналитика, dashboard, есептер"],
        ["MVP OS", "жаңа өнімдерді іске қосу"]
      ]
    }
  },
  en: {
    eyebrow: "Interactive sales tool",
    title: "Not just a website. A system that shows the next business step",
    text:
      "A client runs a mini-diagnostic, sees bottlenecks, builds a solution and understands the roadmap needed for implementation.",
    scanner: {
      title: "AI Business Scanner",
      text: "Choose your industry and main bottleneck to get a recommended system.",
      industryLabel: "Industry",
      painLabel: "Where time is lost",
      industries: ["Beauty / wellness", "Education", "E-commerce", "B2B service"],
      pains: ["WhatsApp chaos", "No CRM", "Slow response", "No analytics"],
      recommended: "Recommended system",
      roadmap: "Send this roadmap to us",
      copy: "Copy roadmap"
    },
    builder: {
      title: "Build Your System",
      text: "Pick the modules your business needs right now.",
      solution: "Your solution",
      complexity: "Complexity",
      timeline: "Timeline",
      receive: "What you get",
      modules: [
        { id: "ai", label: "AI Assistant", value: 22 },
        { id: "crm", label: "CRM", value: 18 },
        { id: "admin", label: "Admin Panel", value: 14 },
        { id: "mobile", label: "Mobile App", value: 24 },
        { id: "telegram", label: "Telegram Bot", value: 10 },
        { id: "analytics", label: "Analytics Dashboard", value: 12 },
        { id: "payments", label: "Payment Integration", value: 14 }
      ]
    },
    beforeAfter: {
      title: "Before FlowTech / After FlowTech",
      before: "Before",
      after: "After",
      beforeItems: ["WhatsApp chaos", "Excel sheets", "manual replies", "lost leads", "no analytics"],
      afterItems: ["AI replies", "CRM saves leads", "manager gets notified", "owner sees a dashboard", "follow-up is scheduled"]
    },
    score: {
      title: "AI Readiness Score",
      text: "A readiness estimate based on selected modules and bottlenecks.",
      readyFor: "Ready for",
      notYet: "Not yet",
      readyItems: ["AI first-line support", "CRM automation", "analytics dashboard"],
      notYetItems: ["full custom mobile app before demand validation"]
    },
    impact: {
      title: "Problem → System → Impact",
      problem: "Problem",
      system: "System",
      impact: "Impact",
      text: "Leads are saved in one place, managers respond faster, and owners see statuses and analytics."
    },
    roadmap: {
      title: "Implementation Roadmap",
      items: [
        "Week 1 — process diagnostic",
        "Week 2 — UX/UI and architecture",
        "Week 3 — AI Assistant + CRM",
        "Week 4 — Telegram alerts + Dashboard",
        "Week 5 — Testing & Launch"
      ]
    },
    plan: {
      title: "Your personal plan",
      modules: "What we implement",
      copied: "Roadmap copied",
      saved: "Roadmap added to the form below"
    },
    live: {
      title: "Live Automation Preview",
      text: "How the system works after launch: from first message to CRM and follow-up.",
      events: [
        "10:24 — New lead from WhatsApp",
        "10:24 — AI classified: Hot lead",
        "10:25 — CRM status: New",
        "10:25 — Manager notified in Telegram",
        "10:26 — Follow-up scheduled"
      ]
    },
    os: {
      title: "FlowTech OS",
      text: "A branded method that turns separate tools into one connected AI-powered system.",
      modules: [
        ["Lead OS", "leads, CRM, notifications"],
        ["AI OS", "assistants, FAQ, classification"],
        ["Ops OS", "manual process automation"],
        ["Data OS", "analytics, dashboard, reports"],
        ["MVP OS", "new product launches"]
      ]
    }
  }
} as const;

const resultByPain = {
  ru: {
    "WhatsApp хаос": "AI Assistant + CRM + Telegram alerts",
    "Нет CRM": "CRM Pipeline + Admin Panel + Dashboard",
    "Медленный ответ": "AI First-line Support + Telegram Bot",
    "Нет аналитики": "Analytics Dashboard + CRM reporting"
  },
  kk: {
    "WhatsApp хаосы": "AI Assistant + CRM + Telegram alerts",
    "CRM жоқ": "CRM Pipeline + Admin Panel + Dashboard",
    "Жауап баяу": "AI First-line Support + Telegram Bot",
    "Аналитика жоқ": "Analytics Dashboard + CRM reporting"
  },
  en: {
    "WhatsApp chaos": "AI Assistant + CRM + Telegram alerts",
    "No CRM": "CRM Pipeline + Admin Panel + Dashboard",
    "Slow response": "AI First-line Support + Telegram Bot",
    "No analytics": "Analytics Dashboard + CRM reporting"
  }
} as const;

function getComplexity(score: number) {
  if (score < 36) return "Low";
  if (score < 72) return "Medium";
  return "High";
}

function getTimeline(score: number) {
  if (score < 36) return "2-3 weeks";
  if (score < 72) return "3-5 weeks";
  return "6-8 weeks";
}

export function InteractiveSystems({ locale }: { locale: Locale }) {
  const t = content[locale];
  const [industry, setIndustry] = useState<string>(t.scanner.industries[0]);
  const [pain, setPain] = useState<string>(t.scanner.pains[0]);
  const [selectedModules, setSelectedModules] = useState<string[]>(["ai", "crm", "telegram"]);
  const [actionStatus, setActionStatus] = useState("");

  const modules = t.builder.modules as readonly Module[];
  const pains = [...t.scanner.pains] as readonly string[];
  const selected = modules.filter((module) => selectedModules.includes(module.id));
  const score = Math.min(
    96,
    42 + selected.reduce((total, module) => total + module.value, 0) + pains.indexOf(pain) * 4
  );
  const recommended = (resultByPain[locale] as Record<string, string>)[pain] || "AI Assistant + CRM + Dashboard";

  const receiveText = useMemo(() => {
    const labels = selected.map((module) => module.label);
    return labels.length ? labels.join(" + ") : "Diagnostic roadmap";
  }, [selected]);

  const roadmapText = useMemo(
    () =>
      [
        t.plan.title,
        "",
        `${t.scanner.industryLabel}: ${industry}`,
        `${t.impact.problem}: ${pain}`,
        `${t.impact.system}: ${recommended}`,
        `${t.impact.impact}: ${t.impact.text}`,
        "",
        `${t.plan.modules}:`,
        ...selected.map((module, index) => `${index + 1}. ${module.label}`),
        "",
        `${t.roadmap.title}:`,
        ...t.roadmap.items
      ].join("\n"),
    [industry, pain, recommended, selected, t]
  );

  function toggleModule(id: string) {
    setSelectedModules((current) =>
      current.includes(id) ? current.filter((item) => item !== id) : [...current, id]
    );
  }

  function sendRoadmapToForm() {
    const roadmap = {
      locale,
      industry,
      pain,
      recommended,
      modules: selected.map((module) => module.label),
      roadmap: t.roadmap.items,
      message: roadmapText
    };

    window.localStorage.setItem("flowtech-roadmap", JSON.stringify(roadmap));
    window.dispatchEvent(new CustomEvent("flowtech-roadmap", { detail: roadmap }));
    setActionStatus(t.plan.saved);
    document.getElementById("contact")?.scrollIntoView({ behavior: "smooth", block: "start" });
  }

  async function copyRoadmap() {
    await navigator.clipboard.writeText(roadmapText);
    setActionStatus(t.plan.copied);
  }

  return (
    <section className="px-5 py-24 lg:px-8">
      <div className="mx-auto max-w-7xl">
        <div className="mb-10 flex flex-col gap-6 lg:flex-row lg:items-end lg:justify-between">
          <div className="max-w-4xl">
          <p className="mb-3 text-sm font-semibold uppercase tracking-[0.22em] text-accent">{t.eyebrow}</p>
          <h2 className="text-3xl font-semibold tracking-[-0.03em] text-white md:text-5xl">{t.title}</h2>
          <p className="mt-5 text-lg leading-8 text-slate-300">{t.text}</p>
          </div>
          <div className="command-strip flex w-full gap-1 p-1 text-xs font-semibold text-slate-300 sm:w-auto">
            {["Scanner", "Builder", "Roadmap", "Score"].map((item, index) => (
              <span
                key={item}
                className={`rounded-full px-3 py-2 ${index === 0 ? "bg-white text-ink" : ""}`}
              >
                {item}
              </span>
            ))}
          </div>
        </div>

        <div className="grid gap-6 lg:grid-cols-[1.05fr_.95fr]">
          <div className="command-panel p-6">
            <div className="mb-6 flex items-start gap-4">
              <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl bg-white/10 text-accent">
                <Bot size={24} />
              </div>
              <div>
                <h3 className="text-2xl font-semibold">{t.scanner.title}</h3>
                <p className="mt-2 leading-7 text-slate-300">{t.scanner.text}</p>
              </div>
            </div>

            <div className="grid gap-5 md:grid-cols-2">
              <div>
                <p className="mb-3 text-sm font-semibold text-slate-300">{t.scanner.industryLabel}</p>
                <div className="grid gap-2">
                  {t.scanner.industries.map((item) => (
                    <button
                      key={item}
                      type="button"
                      onClick={() => setIndustry(item)}
                      className={`rounded-2xl border px-4 py-3 text-left text-sm transition ${
                        industry === item
                          ? "border-accent bg-accent/15 text-white"
                          : "border-white/10 bg-white/[0.04] text-slate-300 hover:bg-white/10"
                      }`}
                    >
                      {item}
                    </button>
                  ))}
                </div>
              </div>

              <div>
                <p className="mb-3 text-sm font-semibold text-slate-300">{t.scanner.painLabel}</p>
                <div className="grid gap-2">
                  {t.scanner.pains.map((item) => (
                    <button
                      key={item}
                      type="button"
                      onClick={() => setPain(item)}
                      className={`rounded-2xl border px-4 py-3 text-left text-sm transition ${
                        pain === item
                          ? "border-accent bg-accent/15 text-white"
                          : "border-white/10 bg-white/[0.04] text-slate-300 hover:bg-white/10"
                      }`}
                    >
                      {item}
                    </button>
                  ))}
                </div>
              </div>
            </div>

            <div className="mt-6 rounded-xl border border-white/10 bg-[#08111f] p-5">
              <p className="text-sm font-semibold uppercase tracking-[0.18em] text-accent">
                {t.scanner.recommended}
              </p>
              <h4 className="mt-3 text-2xl font-semibold">{recommended}</h4>
              <p className="mt-3 text-sm text-slate-400">{industry} / {pain}</p>
              <div className="mt-5 flex flex-col gap-3 sm:flex-row">
                <button
                  type="button"
                  onClick={sendRoadmapToForm}
                  className="rounded-full bg-white px-5 py-3 text-sm font-semibold text-ink transition hover:bg-slate-200"
                >
                  {t.scanner.roadmap}
                </button>
                <button
                  type="button"
                  onClick={copyRoadmap}
                  className="rounded-full border border-white/15 px-5 py-3 text-sm font-semibold text-white transition hover:bg-white/10"
                >
                  {t.scanner.copy}
                </button>
              </div>
              {actionStatus ? <p className="mt-3 text-sm text-emerald-300">{actionStatus}</p> : null}
            </div>

            <div className="mt-4 grid gap-4 xl:grid-cols-2">
              <div className="rounded-xl border border-white/10 bg-white/[0.04] p-5">
                <div className="mb-4 flex items-center gap-3">
                  <Route className="text-accent" size={22} />
                  <h4 className="text-lg font-semibold">{t.roadmap.title}</h4>
                </div>
                <div className="grid gap-3">
                  {t.roadmap.items.map((item) => (
                    <div key={item} className="flex gap-3 text-sm leading-6 text-slate-300">
                      <span className="mt-2 h-2 w-2 shrink-0 rounded-full bg-accent" />
                      <span>{item}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div className="rounded-xl border border-white/10 bg-white/[0.04] p-5">
                <p className="mb-2 text-sm font-semibold uppercase tracking-[0.18em] text-accent">
                  {t.plan.title}
                </p>
                <h4 className="text-lg font-semibold">{t.impact.title}</h4>
                <ImpactLine label={t.impact.problem} value={pain} />
                <ImpactLine label={t.impact.system} value={recommended} />
                <ImpactLine label={t.impact.impact} value={t.impact.text} />
                <ImpactLine label={t.plan.modules} value={receiveText} />
              </div>
            </div>
          </div>

          <div className="command-panel p-6">
            <div className="mb-6 flex items-start gap-4">
              <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl bg-white/10 text-accent">
                <Workflow size={24} />
              </div>
              <div>
                <h3 className="text-2xl font-semibold">{t.builder.title}</h3>
                <p className="mt-2 leading-7 text-slate-300">{t.builder.text}</p>
              </div>
            </div>

            <div className="flex flex-wrap gap-2">
              {modules.map((module) => {
                const active = selectedModules.includes(module.id);
                return (
                  <button
                    key={module.id}
                    type="button"
                    onClick={() => toggleModule(module.id)}
                    className={`rounded-full border px-4 py-2 text-sm font-medium transition ${
                      active
                        ? "border-accent bg-accent text-ink"
                        : "border-white/10 bg-white/[0.04] text-slate-300 hover:bg-white/10"
                    }`}
                  >
                    {module.label}
                  </button>
                );
              })}
            </div>

            <div className="mt-6 rounded-xl border border-white/10 bg-white/[0.04] p-5">
              <p className="text-sm text-slate-400">{t.builder.solution}</p>
              <h4 className="mt-2 text-2xl font-semibold">AI Lead System</h4>
              <div className="mt-5 grid gap-3 text-sm sm:grid-cols-2">
                <InfoLine label={t.builder.complexity} value={getComplexity(score)} />
                <InfoLine label={t.builder.timeline} value={getTimeline(score)} />
              </div>
              <div className="mt-4 rounded-2xl bg-white/[0.05] p-4">
                <p className="text-sm text-slate-400">{t.builder.receive}</p>
                <p className="mt-2 text-sm font-medium text-slate-200">{receiveText}</p>
              </div>
            </div>
          </div>
        </div>

        <div className="mt-6 grid gap-6 lg:grid-cols-[.95fr_1.05fr]">
          <div className="command-panel p-6">
            <div className="mb-6 flex items-center gap-4">
              <MessageSquareText className="text-accent" size={28} />
              <h3 className="text-2xl font-semibold">{t.beforeAfter.title}</h3>
            </div>
            <div className="grid gap-4 md:grid-cols-2">
              <ListPanel title={t.beforeAfter.before} items={t.beforeAfter.beforeItems} tone="bad" />
              <ListPanel title={t.beforeAfter.after} items={t.beforeAfter.afterItems} tone="good" />
            </div>
          </div>

          <div className="command-panel p-6">
            <div className="mb-6 flex items-start gap-4">
              <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl bg-white/10 text-accent">
                <Gauge size={24} />
              </div>
              <div>
                <h3 className="text-2xl font-semibold">{t.score.title}</h3>
                <p className="mt-2 leading-7 text-slate-300">{t.score.text}</p>
              </div>
            </div>

            <div className="grid gap-6 md:grid-cols-[180px_1fr]">
              <div className="flex aspect-square items-center justify-center rounded-full border border-accent/30 bg-accent/10">
                <div className="text-center">
                  <p className="text-5xl font-semibold">{score}</p>
                  <p className="mt-1 text-sm text-slate-400">/100</p>
                </div>
              </div>
              <div className="grid gap-4">
                <ListPanel title={t.score.readyFor} items={t.score.readyItems} tone="good" compact />
                <ListPanel title={t.score.notYet} items={t.score.notYetItems} tone="bad" compact />
              </div>
            </div>
          </div>
        </div>

        <div className="mt-6 grid gap-6 lg:grid-cols-[1.05fr_.95fr]">
          <div className="command-panel overflow-hidden p-6">
            <div className="mb-6 flex items-start gap-4">
              <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl bg-white/10 text-accent">
                <Activity size={24} />
              </div>
              <div>
                <h3 className="text-2xl font-semibold">{t.live.title}</h3>
                <p className="mt-2 leading-7 text-slate-300">{t.live.text}</p>
              </div>
            </div>

            <div className="rounded-xl border border-white/10 bg-[#08111f] p-5 font-mono text-sm">
              {t.live.events.map((event, index) => (
                <div
                  key={event}
                  className="flex items-start gap-3 border-b border-white/10 py-3 last:border-b-0"
                >
                  <span className={`mt-1 h-2 w-2 shrink-0 rounded-full ${index < 2 ? "bg-accent" : "bg-emerald-300"}`} />
                  <span className="text-slate-300">{event}</span>
                </div>
              ))}
            </div>
          </div>

          <div className="command-panel p-6">
            <div className="mb-6 flex items-start gap-4">
              <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl bg-white/10 text-accent">
                <Layers3 size={24} />
              </div>
              <div>
                <h3 className="text-2xl font-semibold">{t.os.title}</h3>
                <p className="mt-2 leading-7 text-slate-300">{t.os.text}</p>
              </div>
            </div>

            <div className="grid gap-3">
              {t.os.modules.map(([name, description]) => (
                <div key={name} className="rounded-2xl border border-white/10 bg-white/[0.04] p-4">
                  <p className="font-semibold text-white">{name}</p>
                  <p className="mt-1 text-sm leading-6 text-slate-300">{description}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function InfoLine({ label, value }: { label: string; value: string }) {
  return (
    <div className="rounded-2xl border border-white/10 bg-white/[0.04] p-4">
      <p className="text-slate-400">{label}</p>
      <p className="mt-1 font-semibold">{value}</p>
    </div>
  );
}

function ImpactLine({ label, value }: { label: string; value: string }) {
  return (
    <div className="mt-4 rounded-2xl bg-white/[0.05] p-4">
      <p className="text-xs font-semibold uppercase tracking-[0.18em] text-accent">{label}</p>
      <p className="mt-2 text-sm leading-6 text-slate-300">{value}</p>
    </div>
  );
}

function ListPanel({
  title,
  items,
  tone,
  compact = false
}: {
  title: string;
  items: readonly string[];
  tone: "good" | "bad";
  compact?: boolean;
}) {
  return (
    <div className={`rounded-[1.5rem] border border-white/10 bg-white/[0.04] ${compact ? "p-4" : "p-5"}`}>
      <p className={`font-semibold ${tone === "good" ? "text-emerald-300" : "text-red-300"}`}>{title}</p>
      <div className="mt-4 grid gap-3">
        {items.map((item) => (
          <div key={item} className="flex items-start gap-3 text-sm leading-6 text-slate-300">
            <CheckCircle2
              className={tone === "good" ? "mt-0.5 shrink-0 text-emerald-300" : "mt-0.5 shrink-0 text-red-300"}
              size={16}
            />
            <span>{item}</span>
          </div>
        ))}
      </div>
    </div>
  );
}
