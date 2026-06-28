import { site } from "@/lib/site-config";
import Hero from "./components/Hero";
import Services from "./components/Services";
import Gallery from "./components/Gallery";
import About from "./components/About";
import Location from "./components/Location";
import Footer from "./components/Footer";
import WhatsAppFloat from "./components/WhatsAppFloat";

// JSON-LD para SEO local (Google Maps / busca local)
const jsonLd = {
  "@context": "https://schema.org",
  "@type": "AutoRepair",
  name: site.nome,
  description: site.descricao,
  url: site.url,
  telephone: site.telefone,
  image: `${site.url}/logo_transparente.svg`,
  address: {
    "@type": "PostalAddress",
    streetAddress: site.endereco,
    addressLocality: "Horizontina",
    addressRegion: "RS",
    addressCountry: "BR",
  },
  openingHoursSpecification: site.horarios
    .filter((h) => h.hora.toLowerCase() !== "fechado")
    .map((h) => ({
      "@type": "OpeningHoursSpecification",
      dayOfWeek: h.dia,
      description: h.hora,
    })),
};

export default function Home() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <main>
        <Hero />
        <Services />
        <Gallery />
        <About />
        <Location />
      </main>
      <Footer />
      <WhatsAppFloat />
    </>
  );
}
