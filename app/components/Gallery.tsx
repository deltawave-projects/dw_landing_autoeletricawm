import Image from "next/image";
import { site } from "@/lib/site-config";
import SectionHeading from "./SectionHeading";

export default function Gallery() {
  return (
    <section id="galeria" className="bg-surface py-16 sm:py-24">
      <div className="mx-auto max-w-6xl px-6">
        <SectionHeading
          eyebrow="Galeria"
          title="Conheça a nossa oficina"
          subtitle="Um pouco do nosso dia a dia e dos serviços que realizamos."
        />

        <div className="grid grid-cols-2 gap-3 sm:grid-cols-3 sm:gap-4">
          {site.galeria.map((foto, i) => (
            <div
              key={foto.src}
              className="relative aspect-[4/3] overflow-hidden rounded-xl bg-black/5"
            >
              <Image
                src={foto.src}
                alt={foto.alt}
                fill
                sizes="(max-width: 640px) 50vw, 33vw"
                className="object-cover transition-transform duration-300 hover:scale-105"
                loading={i < 3 ? "eager" : "lazy"}
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
