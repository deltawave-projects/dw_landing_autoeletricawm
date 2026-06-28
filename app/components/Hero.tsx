import Image from "next/image";
import { site, whatsappUrl } from "@/lib/site-config";
import { WhatsAppIcon, MapPinIcon } from "./icons";

export default function Hero() {
  return (
    <section className="relative isolate overflow-hidden bg-ink text-white h-screen">
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 -z-10 opacity-60"
        style={{
          background:
            "radial-gradient(60% 50% at 50% 0%, rgba(209,32,39,0.28) 0%, rgba(10,10,10,0) 70%)",
        }}
      />

      <div className="mx-auto flex max-w-3xl flex-col items-center px-6 py-16 text-center sm:py-24">
        <Image
          src="/logo_transparente.svg"
          alt={`${site.nome} — logotipo`}
          width={680}
          height={220}
          priority
          className="h-auto w-80 sm:w-[40rem]"
        />

        <p className="mt-2 text-sm font-semibold uppercase tracking-[0.2em] text-brand-red">
          {site.cidade}
        </p>

        <h1 className="mt-3 font-display text-3xl font-bold leading-tight tracking-tight sm:text-5xl">
          {site.frase}
        </h1>

        <p className="mt-5 max-w-xl text-base text-white/70 sm:text-lg">
          {site.descricao}
        </p>

        <div className="mt-8 flex w-full flex-col items-center gap-3 sm:flex-row sm:justify-center">
          <a
            href={whatsappUrl()}
            target="_blank"
            rel="noopener noreferrer"
            className="flex w-full items-center justify-center gap-2 rounded-full bg-[#25D366] px-7 py-3.5 text-base font-semibold text-white shadow-lg shadow-black/30 transition-transform hover:scale-[1.03] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white sm:w-auto"
          >
            <WhatsAppIcon className="h-6 w-6" />
            Chamar no WhatsApp
          </a>
          <a
            href="#localizacao"
            className="flex w-full items-center justify-center gap-2 rounded-full border border-white/25 px-7 py-3.5 text-base font-semibold text-white transition-colors hover:bg-white/10 sm:w-auto"
          >
            <MapPinIcon className="h-5 w-5" />
            Como chegar
          </a>
        </div>

        <p className="mt-6 text-sm text-white/60">{site.seloConfianca}</p>
      </div>
    </section>
  );
}
