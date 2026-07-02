import Link from "next/link";

export default function NotFound() {
  return (
    <main className="min-h-screen bg-ink px-5 py-32 text-white">
      <div className="mx-auto max-w-2xl text-center">
        <p className="text-sm font-semibold uppercase tracking-[0.22em] text-accent">404</p>
        <h1 className="mt-4 text-5xl font-semibold tracking-[-0.04em]">
          Страница не найдена
        </h1>
        <p className="mt-5 text-slate-300">
          Похоже, такой страницы нет или она была перемещена.
        </p>
        <Link href="/" className="mt-8 inline-flex rounded-full bg-white px-7 py-4 font-semibold text-ink">
          Вернуться на главную
        </Link>
      </div>
    </main>
  );
}
