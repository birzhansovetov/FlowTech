import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin", "cyrillic"], variable: "--font-sans" });

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || "http://localhost:3000";

const themeInitScript = `
(() => {
  try {
    const storedTheme = localStorage.getItem("theme");
    const theme = storedTheme === "dark" || storedTheme === "light"
      ? storedTheme
      : (window.matchMedia("(prefers-color-scheme: light)").matches ? "light" : "dark");
    document.documentElement.dataset.theme = theme;
  } catch {
    document.documentElement.dataset.theme = "dark";
  }
})();
`;

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: "FlowTech — AI, Web & Mobile Development",
    template: "%s | FlowTech"
  },
  description:
    "Разработка AI-ассистентов, веб-платформ, мобильных приложений, CRM и автоматизации бизнеса.",
  keywords: [
    "AI разработка Казахстан",
    "разработка сайтов",
    "мобильные приложения",
    "автоматизация бизнеса",
    "CRM разработка",
    "AI ассистент"
  ],
  openGraph: {
    title: "FlowTech — AI, Web & Mobile Development",
    description:
      "Создаем цифровые продукты для роста бизнеса: AI, Web, Mobile, CRM и автоматизация.",
    type: "website",
    url: siteUrl,
    siteName: "FlowTech"
  },
  twitter: {
    card: "summary_large_image",
    title: "FlowTech — AI, Web & Mobile Development",
    description: "AI, Web, Mobile и автоматизация бизнеса."
  },
  robots: {
    index: true,
    follow: true
  }
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="ru" className={inter.variable} data-theme="dark" suppressHydrationWarning>
      <body className="noise font-sans antialiased">
        <script dangerouslySetInnerHTML={{ __html: themeInitScript }} />
        <div className="system-rail system-rail-left" aria-hidden="true">
          <span>FlowTech OS</span>
        </div>
        <div className="system-rail system-rail-right" aria-hidden="true">
          <span>AI Command</span>
        </div>
        {children}
      </body>
    </html>
  );
}
