type SectionHeadingProps = {
  eyebrow: string;
  title: string;
  text?: string;
  align?: "center" | "left";
};

export function SectionHeading({ eyebrow, title, text, align = "center" }: SectionHeadingProps) {
  return (
    <div className={`${align === "center" ? "mx-auto text-center" : ""} mb-12 max-w-3xl`}>
      <p className="mb-3 text-sm font-semibold uppercase tracking-[0.22em] text-accent">
        {eyebrow}
      </p>
      <h2 className="text-3xl font-semibold tracking-[-0.03em] text-white md:text-5xl">
        {title}
      </h2>
      {text ? <p className="mt-5 text-lg leading-8 text-slate-300">{text}</p> : null}
    </div>
  );
}
