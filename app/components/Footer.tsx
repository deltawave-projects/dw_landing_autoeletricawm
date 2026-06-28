import { site } from "@/lib/site-config";

export default function Footer() {
  const ano = new Date().getFullYear();

  return (
    <footer className="border-t border-black/10 bg-white py-8">
      <div className="mx-auto flex max-w-6xl flex-col items-center gap-2 px-6 text-center text-sm text-muted sm:flex-row sm:justify-between sm:text-left">
        <p>
          © {ano} {site.nome} — {site.cidade}
        </p>
        <p>
          Site desenvolvido por{" "}
          {site.empresaUrl ? (
            <a
              href={site.empresaUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="font-semibold text-ink hover:text-brand-red"
            >
              {site.empresa}
            </a>
          ) : (
            <span className="font-semibold text-ink">{site.empresa}</span>
          )}
        </p>
      </div>
    </footer>
  );
}
