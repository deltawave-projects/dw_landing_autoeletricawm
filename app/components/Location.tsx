import { site, whatsappUrl } from "@/lib/site-config";
import SectionHeading from "./SectionHeading";
import { WhatsAppIcon, PhoneIcon, MapPinIcon, ClockIcon } from "./icons";

export default function Location() {
  const telHref = `tel:+${site.whatsapp}`;

  return (
    <section id="localizacao" className="bg-ink py-16 text-white sm:py-24">
      <div className="mx-auto max-w-6xl px-6">
        <SectionHeading
          eyebrow="Localização e contato"
          title="Venha nos visitar"
          subtitle="Estamos prontos para atender você. Fale pelo WhatsApp ou passe na oficina."
          variant="dark"
        />

        <div className="grid grid-cols-1 gap-8 lg:grid-cols-2">
          {/* Mapa */}
          <div className="overflow-hidden rounded-2xl border border-white/10">
            <iframe
              src={site.mapsEmbedUrl}
              title={`Mapa — ${site.nome}`}
              width="100%"
              height="100%"
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              className="h-72 w-full lg:h-full"
              style={{ border: 0 }}
              allowFullScreen
            />
          </div>

          {/* Informações */}
          <div className="flex flex-col gap-6">
            <InfoRow icon={<MapPinIcon className="h-5 w-5" />} title="Endereço">
              <p className="text-white/80">{site.endereco}</p>
              <a
                href={site.mapsLinkUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-1 inline-block text-sm font-semibold text-brand-red hover:underline"
              >
                Abrir no Google Maps →
              </a>
            </InfoRow>

            <InfoRow icon={<PhoneIcon className="h-5 w-5" />} title="Telefone">
              <a href={telHref} className="text-white/80 hover:text-white">
                {site.telefone}
              </a>
            </InfoRow>

            <InfoRow icon={<ClockIcon className="h-5 w-5" />} title="Horário de funcionamento">
              <ul className="space-y-1 text-white/80">
                {site.horarios.map((h) => (
                  <li key={h.dia} className="flex justify-between gap-4">
                    <span>{h.dia}</span>
                    <span className="font-medium">{h.hora}</span>
                  </li>
                ))}
              </ul>
            </InfoRow>

            <a
              href={whatsappUrl()}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-2 flex items-center justify-center gap-2 rounded-full bg-[#25D366] px-7 py-3.5 text-base font-semibold text-white shadow-lg shadow-black/30 transition-transform hover:scale-[1.02] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white"
            >
              <WhatsAppIcon className="h-6 w-6" />
              Chamar no WhatsApp
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}

function InfoRow({
  icon,
  title,
  children,
}: {
  icon: React.ReactNode;
  title: string;
  children: React.ReactNode;
}) {
  return (
    <div className="flex gap-4">
      <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-brand-red/15 text-brand-red">
        {icon}
      </div>
      <div className="min-w-0 flex-1">
        <h3 className="font-display font-semibold text-white">{title}</h3>
        <div className="mt-1">{children}</div>
      </div>
    </div>
  );
}
