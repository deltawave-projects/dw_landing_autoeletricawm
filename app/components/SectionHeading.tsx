type Props = {
  eyebrow?: string;
  title: string;
  subtitle?: string;
  align?: "center" | "left";
  variant?: "light" | "dark";
};

export default function SectionHeading({
  eyebrow,
  title,
  subtitle,
  align = "center",
  variant = "light",
}: Props) {
  const isDark = variant === "dark";
  return (
    <div
      className={`mb-10 max-w-2xl ${
        align === "center" ? "mx-auto text-center" : "text-left"
      }`}
    >
      {eyebrow && (
        <p className="mb-2 text-sm font-semibold uppercase tracking-wider text-brand-red">
          {eyebrow}
        </p>
      )}
      <h2
        className={`font-display text-3xl font-bold tracking-tight sm:text-4xl ${
          isDark ? "text-white" : "text-ink"
        }`}
      >
        {title}
      </h2>
      {subtitle && (
        <p
          className={`mt-3 text-base sm:text-lg ${
            isDark ? "text-white/70" : "text-muted"
          }`}
        >
          {subtitle}
        </p>
      )}
    </div>
  );
}
