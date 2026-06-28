import type { Metadata } from "next";
import { Inter, Montserrat } from "next/font/google";
import "./globals.css";
import { site } from "@/lib/site-config";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-sans",
  display: "swap",
});

const montserrat = Montserrat({
  subsets: ["latin"],
  variable: "--font-display",
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL(site.url),
  title: {
    default: `${site.nome} — ${site.tagline} em ${site.cidade}`,
    template: `%s | ${site.nome}`,
  },
  description: site.descricao,
  keywords: [
    "auto elétrica",
    "elétrica automotiva",
    "auto elétrica Horizontina",
    "oficina elétrica Horizontina RS",
    "bateria automotiva Horizontina",
    site.nome,
  ],
  alternates: {
    canonical: "/",
  },
  openGraph: {
    type: "website",
    locale: "pt_BR",
    url: site.url,
    siteName: site.nome,
    title: `${site.nome} — ${site.tagline} em ${site.cidade}`,
    description: site.descricao,
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="pt-BR"
      className={`${inter.variable} ${montserrat.variable} h-full antialiased`}
    >
      <body className="min-h-full bg-background font-sans text-foreground">
        {children}
      </body>
    </html>
  );
}
