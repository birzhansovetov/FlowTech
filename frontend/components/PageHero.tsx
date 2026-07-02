export function PageHero({
  eyebrow,
  title,
  text
}: {
  eyebrow: string;
  title: string;
  text?: string;
}) {
  return (
    <section className="relative overflow-hidden px-5 pt-36 lg:px-8 lg:pt-44">
      <div className="absolute inset-0 bg-grid" />
      <div className="absolute left-1/3 top-20 h-[360px] w-[360px] rounded-full bg-accent/20 blur-[130px]" />

      <div className="relative mx-auto max-w-5xl text-center">
        <p className="mb-4 text-sm font-semibold uppercase tracking-[0.22em] text-accent">
          {eyebrow}
        </p>
        <h1 className="text-5xl font-semibold tracking-[-0.04em] md:text-7xl">
          {title}
        </h1>
        {text ? <p className="mx-auto mt-6 max-w-3xl text-lg leading-8 text-slate-300">{text}</p> : null}
      </div>
    </section>
  );
}
