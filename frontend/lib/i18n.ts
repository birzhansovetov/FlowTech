// Icons are referenced by string id here to avoid passing functions
// (React components) from server -> client. Components will map ids
// to actual icon components where they are rendered.

export const locales = ["kk", "ru", "en"] as const;
export type Locale = (typeof locales)[number];
export const defaultLocale: Locale = "ru";

export function isLocale(value: string | undefined): value is Locale {
  return locales.includes(value as Locale);
}

export function getLocalizedPath(locale: Locale, path: string) {
  if (locale === defaultLocale) {
    return path;
  }

  if (path === "/") {
    return `/${locale}`;
  }

  return `/${locale}${path}`;
}

export function getSwitchPath(locale: Locale, path: string) {
  const localePattern = new RegExp(`^/(${locales.join("|")})(?=/|$)`);
  const pathWithoutLocale = path.replace(localePattern, "") || "/";

  if (locale === defaultLocale) {
    return pathWithoutLocale;
  }

  return pathWithoutLocale === "/" ? `/${locale}` : `/${locale}${pathWithoutLocale}`;
}

const baseDictionaries = {
  ru: {
    site: {
      name: "FlowTech",
      shortName: "FlowTech",
      description: "AI, Web & Mobile Development"
    },
    nav: {
      services: "Услуги",
      projects: "Проекты",
      aiConsultant: "AI-консультант",
      process: "Процесс",
      contacts: "Контакты",
      discussProject: "Обсудить проект"
    },
    hero: {
      badge: "AI • Web • Mobile • Automation",
      title: "Бизнесу нужен не просто сайт. Ему нужна интеллектуальная система",
      text:
        "FlowTech находит узкие места в процессах и собирает AI-powered решения: от первого касания клиента до CRM, уведомлений и dashboard.",
      consultButton: "Получить консультацию",
      projectsButton: "Смотреть проекты",
      features: ["MVP", "AI-интеграции", "Поддержка"],
      dashboard: {
        title: "AI Product Dashboard",
        subtitle: "Automation Overview",
        status: "Live",
        stats: [
          ["Заявки", "+38%"],
          ["Время ответа", "-72%"],
          ["AI-чаты", "1 248"],
          ["Интеграции", "12"]
        ],
        progressLabel: "MVP progress",
        progressValue: "84%"
      }
    },
    sections: {
      services: {
        eyebrow: "Услуги",
        title: "Полный цикл разработки цифровых продуктов",
        text: "От идеи и дизайна до backend, AI-интеграций, запуска и поддержки проекта."
      },
      industries: {
        eyebrow: "Для кого",
        title: "Решения для бизнеса, где важны скорость и сервис",
        text: "Сайт должен сразу показывать клиенту, что вы понимаете его сферу и можете закрыть конкретную бизнес-задачу."
      },
      technology: {
        eyebrow: "Технологии",
        title: "Стек под быстрый запуск и масштабирование",
        text: "Подходит для MVP, корпоративных систем, AI-продуктов и дальнейшего роста."
      },
      projects: {
        eyebrow: "Кейсы",
        title: "Проекты, которые показывают пользу для бизнеса",
        text: "Карточки можно заменить на реальные кейсы: проблема, решение, результат и технологии.",
        allProjects: "Все проекты"
      },
      process: {
        eyebrow: "Процесс",
        title: "Прозрачный путь от идеи до запуска",
        text: "Клиент понимает, что будет происходить на каждом этапе и за что он платит."
      },
      cta: {
        eyebrow: "AI Demo",
        title: "Добавьте AI-консультанта, который помогает клиенту выбрать решение",
        text: "Пользователь описывает задачу, а AI предлагает подходящий формат: сайт, мобильное приложение, CRM, AI-бот или автоматизация процессов.",
        button: "Попробовать AI-консультанта"
      },
      faq: {
        eyebrow: "FAQ",
        title: "Частые вопросы",
        text: "Короткие ответы повышают доверие и снимают базовые возражения клиента."
      },
      contact: {
        eyebrow: "Заявка",
        title: "Расскажите о проекте — подберем решение",
        text: "После отправки заявки backend сохранит данные в базе и отправит уведомление в Telegram, если включены токены.",
        infoTitle: "Что уже готово:",
        infoList: [
          "API для заявок",
          "PostgreSQL-ready backend",
          "Telegram-уведомления",
          "Админ-страница для лидов"
        ]
      }
    },
    forms: {
      name: "Имя",
      contact: "Контакт",
      projectType: "Тип проекта",
      budget: "Бюджет",
      message: "Задача",
      projectTypes: [
        "AI-ассистент",
        "Веб-сайт / платформа",
        "Мобильное приложение",
        "CRM / автоматизация",
        "Нужна консультация"
      ],
      budgets: [
        "Пока не определен",
        "до 500 000 ₸",
        "500 000 – 1 500 000 ₸",
        "1 500 000 ₸+"
      ],
      placeholders: {
        name: "Ваше имя",
        contact: "Телефон / Telegram / Email",
        message: "Кратко опишите, что нужно разработать"
      },
      submit: "Отправить заявку",
      submitLoading: "Отправляем...",
      success: "Заявка отправлена. Мы скоро свяжемся с вами.",
      error: "Не удалось отправить заявку. Проверьте NEXT_PUBLIC_API_URL и backend.",
      errors: {
        name: "Введите имя",
        contact: "Введите телефон, Telegram или email",
        projectType: "Выберите тип проекта",
        message: "Опишите задачу минимум в 10 символов"
      }
    },
    admin: {
      title: "Admin — заявки",
      description: "Введите ADMIN_API_KEY из backend env, чтобы посмотреть заявки.",
      apiKeyPlaceholder: "ADMIN_API_KEY",
      loadButton: "Загрузить",
      loadError: "Не удалось загрузить заявки. Проверьте ADMIN_API_KEY.",
      table: {
        date: "Дата",
        name: "Имя",
        contact: "Контакт",
        project: "Проект",
        budget: "Бюджет",
        message: "Сообщение",
        status: "Статус"
      }
    },
    pages: {
      projects: {
        title: "Проекты",
        description: "Кейсы и примеры цифровых решений: AI-ассистенты, CRM, мобильные MVP и автоматизация."
      },
      aiConsultant: {
        title: "AI-консультант",
        description: "Демо AI-консультанта для подбора digital-решения под бизнес-задачу."
      },
      services: {
        title: "Услуга"
      }
    },
    notFound: {
      code: "404",
      title: "Страница не найдена",
      text: "Похоже, такой страницы нет или она была перемещена.",
      button: "Вернуться на главную"
    },
    servicePage: {
      eyebrow: "Услуга",
      moreTitle: "Что входит",
      moreText: "Эту страницу можно использовать для SEO и рекламы по конкретной услуге.",
      discussProject: "Обсудить проект"
    },
    aiChat: {
      prompt:
        "Здравствуйте! Опишите вашу бизнес-задачу, и я подскажу, какое digital-решение подойдет: сайт, приложение, CRM, AI-бот или автоматизация.",
      inputPlaceholder: "Например: у меня салон, много заявок в WhatsApp...",
      sendButton: "Отправить",
      connectError:
        "Не удалось подключиться к AI API. Проверьте backend и NEXT_PUBLIC_API_URL.",
      responseError: "Не удалось получить ответ от AI."
    },
    contactErrors: {
      requestFailed: "Не удалось отправить заявку. Проверьте NEXT_PUBLIC_API_URL и backend."
    },
    services: [
      {
        slug: "ai-assistants",
        icon: "bot",
        title: "AI-ассистенты",
        short: "AI-боты для продаж, поддержки и консультаций.",
        text: "Проектируем и внедряем AI-ассистентов, которые отвечают клиентам, собирают заявки, помогают выбирать услуги и передают диалог менеджеру.",
        bullets: ["AI-чат на сайте", "Telegram/WhatsApp сценарии", "Интеграция с CRM", "FAQ и база знаний"]
      },
      {
        slug: "web-platforms",
        icon: "code2",
        title: "Веб-платформы",
        short: "Лендинги, SaaS, кабинеты и корпоративные порталы.",
        text: "Разрабатываем быстрые сайты, платформы, личные кабинеты, внутренние системы и админ-панели с сильным UI/UX.",
        bullets: ["Next.js frontend", "SEO и скорость", "Админ-панель", "Адаптив под mobile-first"]
      },
      {
        slug: "mobile-apps",
        icon: "smartphone",
        title: "Мобильные приложения",
        short: "MVP и приложения для iOS/Android.",
        text: "Создаем мобильные MVP и приложения с авторизацией, профилем пользователя, картой, платежами, уведомлениями и аналитикой.",
        bullets: ["React Native / Flutter", "iOS и Android", "Push-уведомления", "API-интеграции"]
      },
      {
        slug: "business-automation",
        icon: "workflow",
        title: "Автоматизация бизнеса",
        short: "Снижаем ручную работу и ускоряем процессы.",
        text: "Автоматизируем заявки, статусы, уведомления, отчеты, внутренние процессы и связку сервисов между собой.",
        bullets: ["Telegram уведомления", "CRM процессы", "Отчеты", "Интеграции сервисов"]
      },
      {
        slug: "backend-cloud",
        icon: "cloud",
        title: "Backend & Cloud",
        short: "API, базы данных, серверы и масштабирование.",
        text: "Проектируем backend-архитектуру, базы данных, API, деплой, мониторинг и инфраструктуру для стабильной работы продукта.",
        bullets: ["FastAPI / Node.js", "PostgreSQL", "Docker", "Cloud deploy"]
      },
      {
        slug: "security",
        icon: "lockkeyhole",
        title: "Security-first разработка",
        short: "Безопасная архитектура и контроль доступа.",
        text: "Закладываем роли пользователей, защиту API, валидацию данных, безопасное хранение ключей и контроль доступа к системе.",
        bullets: ["RBAC", "API protection", "Rate limit", "Secure env"]
      }
    ],
    technologies: [
      "Next.js",
      "React",
      "TypeScript",
      "Tailwind CSS",
      "Python",
      "FastAPI",
      "PostgreSQL",
      "Supabase",
      "Docker",
      "OpenAI API",
      "Telegram Bot API",
      "Vercel",
      "Render",
      "Railway",
      "Figma"
    ],
    projects: [
      {
        slug: "ai-service-assistant",
        title: "AI-ассистент для сервиса",
        category: "AI Automation",
        text: "Ассистент консультирует клиентов, отвечает на частые вопросы, собирает заявку и передает ее менеджеру.",
        result: "Сокращение времени ответа и меньше ручной работы для команды.",
        stack: ["FastAPI", "OpenAI", "Telegram", "PostgreSQL"]
      },
      {
        slug: "lead-crm",
        title: "CRM для заявок",
        category: "Business System",
        text: "Внутренняя система для обработки лидов, статусов, комментариев, источников заявок и аналитики.",
        result: "Прозрачная воронка продаж и контроль каждого обращения.",
        stack: ["Next.js", "PostgreSQL", "Supabase", "Docker"]
      },
      {
        slug: "mobile-mvp",
        title: "Мобильное MVP",
        category: "Mobile App",
        text: "Прототип мобильного приложения с авторизацией, профилем пользователя, картой, заявками и уведомлениями.",
        result: "Быстрый запуск первой версии для проверки идеи на рынке.",
        stack: ["React Native", "FastAPI", "Supabase", "API"]
      }
    ],
    processSteps: [
      {
        icon: "message-square-text",
        title: "01. Анализ",
        text: "Разбираем задачу, аудиторию, процессы, ограничения и бизнес-цель проекта."
      },
      {
        icon: "braces",
        title: "02. Проектирование",
        text: "Готовим структуру, UX-сценарии, архитектуру API, базу данных и roadmap MVP."
      },
      {
        icon: "rocket",
        title: "03. Разработка",
        text: "Создаем frontend, backend, интеграции, AI-модули и админ-панель."
      },
      {
        icon: "database",
        title: "04. Запуск",
        text: "Тестируем, деплоим, подключаем аналитику, уведомления и поддержку после релиза."
      }
    ],
    industries: [
      { icon: "building2", title: "Сервисные компании" },
      { icon: "heartpulse", title: "Медицина и wellness" },
      { icon: "graduationcap", title: "Образование" },
      { icon: "shoppingbag", title: "E-commerce" },
      { icon: "sparkles", title: "Beauty & lifestyle" },
      { icon: "workflow", title: "B2B процессы" }
    ],
    faq: [
      {
        question: "Сколько времени занимает запуск MVP?",
        answer: "Зависит от сложности. Обычно лендинг можно запустить быстрее, а MVP с backend, админкой и AI-интеграцией требует поэтапной разработки."
      },
      {
        question: "Можно ли подключить заявки в Telegram?",
        answer: "Да. Backend уже содержит готовую логику для Telegram-уведомлений через переменные TELEGRAM_BOT_TOKEN и TELEGRAM_CHAT_ID."
      },
      {
        question: "Можно ли использовать Supabase?",
        answer: "Да. Supabase PostgreSQL можно использовать как production database, указав connection string в DATABASE_URL."
      },
      {
        question: "Можно ли добавить мультиязычность?",
        answer: "Да. Архитектура Next.js позволяет добавить RU/KZ/EN через отдельные маршруты или библиотеку i18n."
      }
    ]
  },
  en: {
    site: {
      name: "FlowTech",
      shortName: "FlowTech",
      description: "AI, Web & Mobile Development"
    },
    nav: {
      services: "Services",
      projects: "Projects",
      aiConsultant: "AI Consultant",
      process: "Process",
      contacts: "Contact",
      discussProject: "Discuss a project"
    },
    hero: {
      badge: "AI • Web • Mobile • Automation",
      title: "Your business does not need another website. It needs an intelligent system",
      text:
        "FlowTech finds bottlenecks in your process and builds AI-powered solutions: from first client touch to CRM, notifications and dashboard.",
      consultButton: "Get consultation",
      projectsButton: "View projects",
      features: ["MVP", "AI integrations", "Support"],
      dashboard: {
        title: "AI Product Dashboard",
        subtitle: "Automation Overview",
        status: "Live",
        stats: [
          ["Leads", "+38%"],
          ["Response time", "-72%"],
          ["AI chats", "1 248"],
          ["Integrations", "12"]
        ],
        progressLabel: "MVP progress",
        progressValue: "84%"
      }
    },
    sections: {
      services: {
        eyebrow: "Services",
        title: "Full-cycle development of digital products",
        text: "From idea and design to backend, AI integrations, launch and support."
      },
      industries: {
        eyebrow: "For whom",
        title: "Solutions for businesses that value speed and service",
        text: "The website should immediately show the client that you understand their niche and can solve a specific business problem."
      },
      technology: {
        eyebrow: "Technology",
        title: "Stack for fast launch and scaling",
        text: "Suitable for MVPs, corporate systems, AI products and further growth."
      },
      projects: {
        eyebrow: "Cases",
        title: "Projects that demonstrate business value",
        text: "Cards can be replaced with real cases: problem, solution, result and technologies.",
        allProjects: "All projects"
      },
      process: {
        eyebrow: "Process",
        title: "A transparent path from idea to launch",
        text: "The client understands what will happen at each stage and what they pay for."
      },
      cta: {
        eyebrow: "AI Demo",
        title: "Add an AI consultant that helps clients choose a solution",
        text: "The user describes the task and AI suggests the right format: website, mobile app, CRM, AI bot or process automation.",
        button: "Try AI consultant"
      },
      faq: {
        eyebrow: "FAQ",
        title: "Frequently asked questions",
        text: "Short answers build trust and remove basic objections from the client."
      },
      contact: {
        eyebrow: "Request",
        title: "Tell us about the project — we will select a solution",
        text: "After submitting the request, the backend saves data to the database and sends a Telegram notification if tokens are enabled.",
        infoTitle: "What's already ready:",
        infoList: [
          "API for requests",
          "PostgreSQL-ready backend",
          "Telegram notifications",
          "Admin page for leads"
        ]
      }
    },
    forms: {
      name: "Name",
      contact: "Contact",
      projectType: "Project type",
      budget: "Budget",
      message: "Task",
      projectTypes: [
        "AI assistant",
        "Website / platform",
        "Mobile app",
        "CRM / automation",
        "Need consultation"
      ],
      budgets: [
        "Not defined yet",
        "up to 500,000 ₸",
        "500,000 – 1,500,000 ₸",
        "1,500,000 ₸+"
      ],
      placeholders: {
        name: "Your name",
        contact: "Phone / Telegram / Email",
        message: "Briefly describe what needs to be developed"
      },
      submit: "Send request",
      submitLoading: "Sending...",
      success: "Request sent. We will contact you soon.",
      error: "Failed to send the request. Check NEXT_PUBLIC_API_URL and backend.",
      errors: {
        name: "Enter your name",
        contact: "Enter phone, Telegram or email",
        projectType: "Select a project type",
        message: "Describe the task in at least 10 characters"
      }
    },
    admin: {
      title: "Admin — leads",
      description: "Enter the ADMIN_API_KEY from backend env to view requests.",
      apiKeyPlaceholder: "ADMIN_API_KEY",
      loadButton: "Load",
      loadError: "Failed to load leads. Check ADMIN_API_KEY.",
      table: {
        date: "Date",
        name: "Name",
        contact: "Contact",
        project: "Project",
        budget: "Budget",
        message: "Message",
        status: "Status"
      }
    },
    pages: {
      projects: {
        title: "Projects",
        description: "Cases and examples of digital solutions: AI assistants, CRM, mobile MVPs and automation."
      },
      aiConsultant: {
        title: "AI Consultant",
        description: "A demo AI consultant for selecting a digital solution for a business task."
      },
      services: {
        title: "Service"
      }
    },
    notFound: {
      code: "404",
      title: "Page not found",
      text: "It looks like this page does not exist or has been moved.",
      button: "Return home"
    },
    servicePage: {
      eyebrow: "Service",
      moreTitle: "What’s included",
      moreText: "This page can be used for SEO and ads for a specific service.",
      discussProject: "Discuss a project"
    },
    aiChat: {
      prompt:
        "Hello! Describe your business task, and I will suggest which digital solution fits: website, app, CRM, AI bot, or automation.",
      inputPlaceholder: "For example: I have a salon and many requests in WhatsApp...",
      sendButton: "Send",
      connectError:
        "Unable to connect to the AI API. Check backend and NEXT_PUBLIC_API_URL.",
      responseError: "Failed to receive a response from the AI."
    },
    contactErrors: {
      requestFailed: "Failed to send the request. Check NEXT_PUBLIC_API_URL and backend."
    },
    services: [
      {
        slug: "ai-assistants",
        icon: "bot",
        title: "AI Assistants",
        short: "AI bots for sales, support and consultations.",
        text: "We design and implement AI assistants that answer clients, collect requests, help choose services, and hand off the dialogue to a manager.",
        bullets: ["Website AI chat", "Telegram/WhatsApp scenarios", "CRM integration", "FAQ and knowledge base"]
      },
      {
        slug: "web-platforms",
        icon: "code2",
        title: "Web Platforms",
        short: "Landing pages, SaaS, dashboards and corporate portals.",
        text: "We develop fast websites, platforms, personal accounts, internal systems and admin panels with strong UI/UX.",
        bullets: ["Next.js frontend", "SEO and speed", "Admin panel", "Mobile-first responsive design"]
      },
      {
        slug: "mobile-apps",
        icon: "smartphone",
        title: "Mobile Apps",
        short: "MVP and iOS/Android applications.",
        text: "We create mobile MVPs and apps with authentication, user profiles, maps, payments, notifications and analytics.",
        bullets: ["React Native / Flutter", "iOS and Android", "Push notifications", "API integrations"]
      },
      {
        slug: "business-automation",
        icon: "workflow",
        title: "Business Automation",
        short: "We reduce manual work and speed up processes.",
        text: "We automate requests, statuses, notifications, reports, internal processes and service connections.",
        bullets: ["Telegram notifications", "CRM workflows", "Reports", "Service integrations"]
      },
      {
        slug: "backend-cloud",
        icon: "cloud",
        title: "Backend & Cloud",
        short: "API, databases, servers and scaling.",
        text: "We design backend architecture, databases, APIs, deployment, monitoring and infrastructure for product stability.",
        bullets: ["FastAPI / Node.js", "PostgreSQL", "Docker", "Cloud deploy"]
      },
      {
        slug: "security",
        icon: "lockkeyhole",
        title: "Security-first development",
        short: "Secure architecture and access control.",
        text: "We implement user roles, API protection, data validation, secure key storage and access control.",
        bullets: ["RBAC", "API protection", "Rate limit", "Secure env"]
      }
    ],
    technologies: [
      "Next.js",
      "React",
      "TypeScript",
      "Tailwind CSS",
      "Python",
      "FastAPI",
      "PostgreSQL",
      "Supabase",
      "Docker",
      "OpenAI API",
      "Telegram Bot API",
      "Vercel",
      "Render",
      "Railway",
      "Figma"
    ],
    projects: [
      {
        slug: "ai-service-assistant",
        title: "AI Service Assistant",
        category: "AI Automation",
        text: "The assistant consults clients, answers frequent questions, collects a request and forwards it to the manager.",
        result: "Reduced response time and less manual work for the team.",
        stack: ["FastAPI", "OpenAI", "Telegram", "PostgreSQL"]
      },
      {
        slug: "lead-crm",
        title: "Lead CRM",
        category: "Business System",
        text: "An internal system for processing leads, statuses, comments, request sources and analytics.",
        result: "A transparent sales funnel and control of every inquiry.",
        stack: ["Next.js", "PostgreSQL", "Supabase", "Docker"]
      },
      {
        slug: "mobile-mvp",
        title: "Mobile MVP",
        category: "Mobile App",
        text: "A mobile prototype with authentication, user profile, map, requests and notifications.",
        result: "A fast launch of the first version to validate the idea on the market.",
        stack: ["React Native", "FastAPI", "Supabase", "API"]
      }
    ],
    processSteps: [
      {
        icon: "message-square-text",
        title: "01. Analysis",
        text: "We review the task, audience, processes, constraints and business goal of the project."
      },
      {
        icon: "braces",
        title: "02. Planning",
        text: "We prepare structure, UX flows, API architecture, database and MVP roadmap."
      },
      {
        icon: "rocket",
        title: "03. Development",
        text: "We build frontend, backend, integrations, AI modules and admin panel."
      },
      {
        icon: "database",
        title: "04. Launch",
        text: "We test, deploy, connect analytics, notifications and post-release support."
      }
    ],
    industries: [
      { icon: "building2", title: "Service companies" },
      { icon: "heartpulse", title: "Healthcare & wellness" },
      { icon: "graduationcap", title: "Education" },
      { icon: "shoppingbag", title: "E-commerce" },
      { icon: "sparkles", title: "Beauty & lifestyle" },
      { icon: "workflow", title: "B2B processes" }
    ],
    faq: [
      {
        question: "How long does it take to launch an MVP?",
        answer: "It depends on complexity. A landing page can be launched faster, while an MVP with backend, admin panel and AI integration requires phased development."
      },
      {
        question: "Can Telegram requests be connected?",
        answer: "Yes. The backend already contains logic for Telegram notifications using TELEGRAM_BOT_TOKEN and TELEGRAM_CHAT_ID."
      },
      {
        question: "Can I use Supabase?",
        answer: "Yes. Supabase PostgreSQL can be used as a production database by specifying the connection string in DATABASE_URL."
      },
      {
        question: "Can multilingual support be added?",
        answer: "Yes. The Next.js architecture allows adding RU/KZ/EN through separate routes or an i18n library."
      }
    ]
  }
} as const;

const kkDictionary = {
  ...baseDictionaries.ru,
  site: {
    name: "FlowTech",
    shortName: "FlowTech",
    description: "AI, Web және Mobile Development"
  },
  nav: {
    services: "Қызметтер",
    projects: "Жобалар",
    aiConsultant: "AI-кеңесші",
    process: "Процесс",
    contacts: "Байланыс",
    discussProject: "Жобаны талқылау"
  },
  hero: {
    ...baseDictionaries.ru.hero,
    title: "Бизнеске жай сайт емес. Интеллектуалды жүйе керек",
    text:
      "FlowTech процестегі тар орындарды тауып, алғашқы клиент байланысынан CRM, хабарламалар және dashboard-қа дейін AI-powered шешімдер құрады.",
    consultButton: "Кеңес алу",
    projectsButton: "Жобаларды көру",
    features: ["MVP", "AI-интеграциялар", "Қолдау"],
    dashboard: {
      ...baseDictionaries.ru.hero.dashboard,
      stats: [
        ["Өтінімдер", "+38%"],
        ["Жауап уақыты", "-72%"],
        ["AI-чаттар", "1 248"],
        ["Интеграциялар", "12"]
      ]
    }
  },
  sections: {
    services: {
      eyebrow: "Қызметтер",
      title: "Цифрлық өнімдерді толық циклмен әзірлеу",
      text: "Идея мен дизайннан бастап backend, AI-интеграциялар, іске қосу және қолдауға дейін."
    },
    industries: {
      eyebrow: "Кім үшін",
      title: "Жылдамдық пен сервисті бағалайтын бизнеске арналған шешімдер",
      text: "Сайт клиентке сіз оның саласын түсінетініңізді және нақты бизнес міндетін жаба алатыныңызды бірден көрсетуі керек."
    },
    technology: {
      eyebrow: "Технологиялар",
      title: "Жылдам іске қосу және масштабтауға арналған стек",
      text: "MVP, корпоративтік жүйелер, AI-өнімдер және әрі қарай өсу үшін қолайлы."
    },
    projects: {
      eyebrow: "Кейстер",
      title: "Бизнеске пайдасын көрсететін жобалар",
      text: "Карточкаларды нақты кейстермен ауыстыруға болады: мәселе, шешім, нәтиже және технологиялар.",
      allProjects: "Барлық жобалар"
    },
    process: {
      eyebrow: "Процесс",
      title: "Идеядан іске қосуға дейінгі ашық жол",
      text: "Клиент әр кезеңде не болатынын және не үшін төлейтінін түсінеді."
    },
    cta: {
      eyebrow: "AI Demo",
      title: "Клиентке шешім таңдауға көмектесетін AI-кеңесшіні қосыңыз",
      text: "Пайдаланушы міндетін сипаттайды, ал AI сәйкес форматты ұсынады: сайт, мобильді қосымша, CRM, AI-бот немесе процестерді автоматтандыру.",
      button: "AI-кеңесшіні сынау"
    },
    faq: {
      eyebrow: "FAQ",
      title: "Жиі қойылатын сұрақтар",
      text: "Қысқа жауаптар сенімді арттырып, клиенттің негізгі күмәндерін азайтады."
    },
    contact: {
      eyebrow: "Өтінім",
      title: "Жобаңыз туралы айтыңыз, біз шешім ұсынамыз",
      text: "Өтінім жіберілгеннен кейін backend деректерді базаға сақтайды және токендер қосылған болса Telegram-ға хабарлама жібереді.",
      infoTitle: "Дайын тұрғандары:",
      infoList: [
        "Өтінімдерге арналған API",
        "PostgreSQL-ready backend",
        "Telegram-хабарламалар",
        "Лидтерге арналған админ-бет"
      ]
    }
  },
  forms: {
    ...baseDictionaries.ru.forms,
    name: "Аты",
    contact: "Байланыс",
    projectType: "Жоба түрі",
    budget: "Бюджет",
    message: "Міндет",
    projectTypes: [
      "AI-ассистент",
      "Веб-сайт / платформа",
      "Мобильді қосымша",
      "CRM / автоматтандыру",
      "Кеңес қажет"
    ],
    budgets: [
      "Әзірге анықталмаған",
      "500 000 ₸ дейін",
      "500 000 – 1 500 000 ₸",
      "1 500 000 ₸+"
    ],
    placeholders: {
      name: "Атыңыз",
      contact: "Телефон / Telegram / Email",
      message: "Не әзірлеу керек екенін қысқаша сипаттаңыз"
    },
    submit: "Өтінім жіберу",
    submitLoading: "Жіберілуде...",
    success: "Өтінім жіберілді. Жақында хабарласамыз.",
    errors: {
      name: "Атыңызды енгізіңіз",
      contact: "Телефон, Telegram немесе email енгізіңіз",
      projectType: "Жоба түрін таңдаңыз",
      message: "Міндетті кемінде 10 таңбамен сипаттаңыз"
    }
  },
  admin: {
    ...baseDictionaries.ru.admin,
    title: "Admin — өтінімдер",
    description: "Өтінімдерді көру үшін backend env ішіндегі ADMIN_API_KEY енгізіңіз.",
    loadButton: "Жүктеу",
    loadError: "Өтінімдерді жүктеу мүмкін болмады. ADMIN_API_KEY тексеріңіз.",
    table: {
      date: "Күні",
      name: "Аты",
      contact: "Байланыс",
      project: "Жоба",
      budget: "Бюджет",
      message: "Хабарлама",
      status: "Статус"
    }
  },
  pages: {
    projects: {
      title: "Жобалар",
      description: "Цифрлық шешімдердің кейстері мен мысалдары: AI-ассистенттер, CRM, мобильді MVP және автоматтандыру."
    },
    aiConsultant: {
      title: "AI-кеңесші",
      description: "Бизнес міндетіне сай digital-шешімді таңдауға арналған AI-кеңесші демосы."
    },
    services: {
      title: "Қызмет"
    }
  },
  notFound: {
    code: "404",
    title: "Бет табылмады",
    text: "Мұндай бет жоқ немесе ол басқа жерге ауыстырылған сияқты.",
    button: "Басты бетке оралу"
  },
  servicePage: {
    eyebrow: "Қызмет",
    moreTitle: "Не кіреді",
    moreText: "Бұл бетті нақты қызмет бойынша SEO және жарнама үшін қолдануға болады.",
    discussProject: "Жобаны талқылау"
  },
  aiChat: {
    prompt:
      "Сәлеметсіз бе! Бизнес міндетіңізді сипаттаңыз, мен қандай digital-шешім сәйкес келетінін ұсынамын: сайт, қосымша, CRM, AI-бот немесе автоматтандыру.",
    inputPlaceholder: "Мысалы: менде салон бар, WhatsApp-та өтінім көп...",
    sendButton: "Жіберу",
    connectError:
      "AI API-ға қосылу мүмкін болмады. Backend және NEXT_PUBLIC_API_URL тексеріңіз.",
    responseError: "AI-дан жауап алу мүмкін болмады."
  },
  contactErrors: {
    requestFailed: "Өтінімді жіберу мүмкін болмады. NEXT_PUBLIC_API_URL және backend тексеріңіз."
  },
  services: baseDictionaries.ru.services.map((service) => {
    const translations = {
      "ai-assistants": {
        title: "AI-ассистенттер",
        short: "Сату, қолдау және кеңес беруге арналған AI-боттар.",
        text: "Клиенттерге жауап беретін, өтінім жинайтын, қызмет таңдауға көмектесетін және диалогты менеджерге беретін AI-ассистенттерді жобалап, енгіземіз.",
        bullets: ["Сайттағы AI-чат", "Telegram/WhatsApp сценарийлері", "CRM интеграциясы", "FAQ және білім базасы"]
      },
      "web-platforms": {
        title: "Веб-платформалар",
        short: "Лендингтер, SaaS, кабинеттер және корпоративтік порталдар.",
        text: "Күшті UI/UX-пен жылдам сайттар, платформалар, жеке кабинеттер, ішкі жүйелер және админ-панельдер әзірлейміз.",
        bullets: ["Next.js frontend", "SEO және жылдамдық", "Админ-панель", "Mobile-first адаптив"]
      },
      "mobile-apps": {
        title: "Мобильді қосымшалар",
        short: "iOS/Android үшін MVP және қосымшалар.",
        text: "Авторизация, пайдаланушы профилі, карта, төлемдер, хабарламалар және аналитикасы бар мобильді MVP мен қосымшалар жасаймыз.",
        bullets: ["React Native / Flutter", "iOS және Android", "Push-хабарламалар", "API-интеграциялар"]
      },
      "business-automation": {
        title: "Бизнесті автоматтандыру",
        short: "Қол жұмысын азайтып, процестерді жылдамдатамыз.",
        text: "Өтінімдерді, статустарды, хабарламаларды, есептерді, ішкі процестерді және сервистер байланысын автоматтандырамыз.",
        bullets: ["Telegram хабарламалары", "CRM процестері", "Есептер", "Сервис интеграциялары"]
      },
      "backend-cloud": {
        title: "Backend & Cloud",
        short: "API, деректер базасы, серверлер және масштабтау.",
        text: "Өнім тұрақты жұмыс істеуі үшін backend-архитектура, деректер базасы, API, деплой, мониторинг және инфрақұрылым жобалаймыз.",
        bullets: ["FastAPI / Node.js", "PostgreSQL", "Docker", "Cloud deploy"]
      },
      security: {
        title: "Security-first әзірлеу",
        short: "Қауіпсіз архитектура және қолжетімділікті бақылау.",
        text: "Пайдаланушы рөлдерін, API қорғауын, деректер валидациясын, кілттерді қауіпсіз сақтауды және жүйеге қолжетімділікті бақылауды енгіземіз.",
        bullets: ["RBAC", "API protection", "Rate limit", "Secure env"]
      }
    } as const;

    return {
      ...service,
      ...translations[service.slug as keyof typeof translations]
    };
  }),
  projects: [
    {
      slug: "ai-service-assistant",
      title: "Сервиске арналған AI-ассистент",
      category: "AI Automation",
      text: "Ассистент клиенттерге кеңес береді, жиі сұрақтарға жауап береді, өтінім жинайды және оны менеджерге жібереді.",
      result: "Жауап беру уақыты қысқарады және командадағы қол жұмысы азаяды.",
      stack: ["FastAPI", "OpenAI", "Telegram", "PostgreSQL"]
    },
    {
      slug: "lead-crm",
      title: "Өтінімдерге арналған CRM",
      category: "Business System",
      text: "Лидтерді, статустарды, пікірлерді, өтінім көздерін және аналитиканы өңдеуге арналған ішкі жүйе.",
      result: "Сату воронкасы айқын болып, әр өтініш бақылауда болады.",
      stack: ["Next.js", "PostgreSQL", "Supabase", "Docker"]
    },
    {
      slug: "mobile-mvp",
      title: "Мобильді MVP",
      category: "Mobile App",
      text: "Авторизация, пайдаланушы профилі, карта, өтінімдер және хабарламалары бар мобильді қосымша прототипі.",
      result: "Идеяны нарықта тексеруге арналған алғашқы нұсқаны жылдам іске қосу.",
      stack: ["React Native", "FastAPI", "Supabase", "API"]
    }
  ],
  processSteps: [
    {
      icon: "message-square-text",
      title: "01. Талдау",
      text: "Жобаның міндетін, аудиториясын, процестерін, шектеулерін және бизнес мақсатын талдаймыз."
    },
    {
      icon: "braces",
      title: "02. Жобалау",
      text: "Құрылым, UX-сценарийлер, API архитектурасы, деректер базасы және MVP roadmap дайындаймыз."
    },
    {
      icon: "rocket",
      title: "03. Әзірлеу",
      text: "Frontend, backend, интеграциялар, AI-модульдер және админ-панель жасаймыз."
    },
    {
      icon: "database",
      title: "04. Іске қосу",
      text: "Тестілеу, деплой, аналитика, хабарламалар және релизден кейінгі қолдауды қосамыз."
    }
  ],
  industries: [
    { icon: "building2", title: "Сервистік компаниялар" },
    { icon: "heartpulse", title: "Медицина және wellness" },
    { icon: "graduationcap", title: "Білім беру" },
    { icon: "shoppingbag", title: "E-commerce" },
    { icon: "sparkles", title: "Beauty & lifestyle" },
    { icon: "workflow", title: "B2B процестер" }
  ],
  faq: [
    {
      question: "MVP іске қосу қанша уақыт алады?",
      answer: "Күрделілігіне байланысты. Лендингті тезірек іске қосуға болады, ал backend, админка және AI-интеграциясы бар MVP кезең-кезеңімен әзірленеді."
    },
    {
      question: "Өтінімдерді Telegram-ға қосуға бола ма?",
      answer: "Иә. Backend ішінде TELEGRAM_BOT_TOKEN және TELEGRAM_CHAT_ID арқылы Telegram-хабарламаларға дайын логика бар."
    },
    {
      question: "Supabase қолдануға бола ма?",
      answer: "Иә. DATABASE_URL ішінде connection string көрсетіп, Supabase PostgreSQL-ді production database ретінде қолдануға болады."
    },
    {
      question: "Көптілділікті қосуға бола ма?",
      answer: "Иә. Next.js архитектурасы RU/KZ/EN тілдерін бөлек маршруттар немесе i18n кітапханасы арқылы қосуға мүмкіндік береді."
    }
  ]
} as const;

export const dictionaries = {
  kk: kkDictionary,
  ...baseDictionaries
} as const;

export type Dictionary = (typeof dictionaries)[Locale];

export function getDictionary(locale: string | undefined): Dictionary {
  return isLocale(locale) ? dictionaries[locale] : dictionaries[defaultLocale];
}
