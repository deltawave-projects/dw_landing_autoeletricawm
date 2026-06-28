import { site } from "@/lib/site-config";
import { ServiceIcons } from "./icons";
import SectionHeading from "./SectionHeading";

export default function Services() {
  return (
    <section id="servicos" className="bg-white py-16 sm:py-24">
      <div className="mx-auto max-w-6xl px-6">
        <SectionHeading
          eyebrow="Serviços"
          title="O que fazemos na oficina"
          subtitle="Atendimento completo em elétrica automotiva, com diagnóstico honesto e preço justo."
        />

        <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {site.servicos.map((servico) => {
            const Icon = ServiceIcons[servico.icone];
            return (
              <div
                key={servico.nome}
                className="group flex flex-col rounded-2xl border border-black/5 bg-surface p-6 transition-shadow hover:shadow-md"
              >
                <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-xl bg-brand-red/10 text-brand-red">
                  {Icon ? <Icon className="h-6 w-6" /> : null}
                </div>
                <h3 className="font-display text-lg font-bold text-ink">
                  {servico.nome}
                </h3>
                <p className="mt-2 flex-1 text-sm text-muted">
                  {servico.descricao}
                </p>
              </div>
            );
          })}
        </div>

        <p className="mt-8 text-center text-sm text-muted">
          Não encontrou o que precisa? Fale com a gente — atendemos diversos tipos
          de serviço elétrico automotivo.
        </p>
      </div>
    </section>
  );
}
