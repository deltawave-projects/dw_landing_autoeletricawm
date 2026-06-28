import Image from "next/image";
import { site } from "@/lib/site-config";

export default function About() {
  return (
    <section id="sobre" className="bg-white py-16 sm:py-24">
      <div className="mx-auto grid max-w-6xl grid-cols-1 items-center gap-10 px-6 lg:grid-cols-2 lg:gap-16">
        <div className="relative order-2 aspect-[4/5] w-full max-w-sm overflow-hidden rounded-2xl bg-surface lg:order-1">
          <Image
            src={site.sobre.foto.src}
            alt={site.sobre.foto.alt}
            fill
            sizes="(max-width: 1024px) 90vw, 40vw"
            className="object-cover"
            loading="lazy"
          />
        </div>

        <div className="order-1 lg:order-2">
          <p className="mb-2 text-sm font-semibold uppercase tracking-wider text-brand-red">
            Sobre nós
          </p>
          <h2 className="font-display text-3xl font-bold tracking-tight text-ink sm:text-4xl">
            {site.sobre.titulo}
          </h2>
          <div className="mt-5 space-y-4 text-base leading-relaxed text-muted">
            {site.sobre.paragrafos.map((p, i) => (
              <p key={i}>{p}</p>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
