/**
 * Fonte ÚNICA de conteúdo do site WM Auto Elétrica.
 *
 * Para atualizar o site, edite SOMENTE este arquivo.
 * Tudo marcado com [PREENCHER] precisa ser substituído pelos dados reais.
 */

export const site = {
  // --- Identidade ---
  nome: "WM Auto Elétrica",
  cidade: "Horizontina/RS",
  tagline: "Elétrica automotiva de confiança",
  frase: "Tradição em elétrica automotiva — a confiança que vem de família.",
  descricao:
    "Oficina de elétrica automotiva em Horizontina/RS. Diagnóstico, reparo e instalação com atendimento honesto e tradição familiar.",

  // --- Selo de confiança (Hero) ---
  // Ex.: "Há mais de 30 anos" — ajuste para o valor real.
  seloConfianca: "Há quase 30 anos atendendo Horizontina e região com confiança",

  // --- Contato --- ([PREENCHER])
  // WhatsApp: somente dígitos, com DDI 55. Ex.: "5555999999999"
  whatsapp: "5555999043100",
  telefone: "(55) 3537-3100",
  email: "autoeletricawm@autoeletricawm.com.br", // opcional; deixe "" para ocultar

  // --- Endereço --- ([PREENCHER])
  endereco: "Rua General Osório, nº 100 — Centro",
  // Link "abrir no Google Maps" (URL completa do perfil/maps)
  mapsLinkUrl: "https://www.google.com/maps/search/?api=1&query=WM+Auto+El%C3%A9trica+Horizontina+RS",
  // URL do iframe de embed do Google Maps (Compartilhar > Incorporar um mapa > src)
  mapsEmbedUrl:
    "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3535.1791074494436!2d-54.3130246!3d-27.618969000000003!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x94f943815f8f7463%3A0xed78a759346e035b!2sAuto%20El%C3%A9trica%20WM!5e0!3m2!1spt-BR!2sbr!4v1782609620828!5m2!1spt-BR!2sbr",

  // --- Horário de funcionamento ---
  horarios: [
    { dia: "Segunda a Sexta", hora: "08:00 – 18:00" },
    { dia: "Sábado", hora: "Fechado" },
    { dia: "Domingo", hora: "Fechado" },
  ],

  // --- Serviços --- (icone deve ser uma das chaves em ServiceIcons)
  servicos: [
    {
      icone: "battery",
      nome: "Baterias e sistema de carga",
      descricao: "Teste, troca e diagnóstico de bateria, alternador e regulador.",
      preco: "a partir de R$ 00",
    },
    {
      icone: "diagnostics",
      nome: "Diagnóstico eletrônico",
      descricao: "Leitura de injeção e módulos com scanner automotivo.",
      preco: "a partir de R$ 00",
    },
    {
      icone: "lightbulb",
      nome: "Iluminação e faróis",
      descricao: "Faróis, lanternas, setas e regulagem de luz.",
      preco: "a partir de R$ 00",
    },
    {
      icone: "starter",
      nome: "Motor de partida",
      descricao: "Reparo e troca do motor de arranque.",
      preco: "a partir de R$ 00",
    },
    {
      icone: "wiring",
      nome: "Chicotes e fiação",
      descricao: "Reparo de curto, mau contato e instalação elétrica.",
      preco: "a partir de R$ 00",
    },
    {
      icone: "accessories",
      nome: "Acessórios e instalações",
      descricao: "Som, alarme, trava elétrica, vidro elétrico e mais.",
      preco: "a partir de R$ 00",
    },
  ],

  // --- Galeria --- (imagens em public/gallery/)
  // Substitua os placeholders por fotos reais da oficina e dos serviços.
  galeria: [
    { src: "/gallery/placeholder-1.svg", alt: "Foto da oficina WM Auto Elétrica" },
    { src: "/gallery/placeholder-2.svg", alt: "Serviço de elétrica automotiva" },
    { src: "/gallery/placeholder-3.svg", alt: "Diagnóstico eletrônico" },
    { src: "/gallery/placeholder-4.svg", alt: "Reparo de bateria" },
    { src: "/gallery/placeholder-5.svg", alt: "Detalhe do atendimento" },
    { src: "/gallery/placeholder-6.svg", alt: "Equipe da WM Auto Elétrica" },
  ],

  // --- Sobre / História --- ([PREENCHER com a história real])
  sobre: {
    titulo: "Uma história de família e confiança",
    paragrafos: [
      "A WM Auto Elétrica nasceu do trabalho e da dedicação de uma família apaixonada por carros. Ao longo dos anos, construímos nossa reputação em Horizontina no jeito mais antigo e verdadeiro: pela indicação de cliente para cliente.",
      "Atendemos cada veículo com a atenção que daríamos ao nosso próprio. Diagnóstico honesto, serviço bem feito e preço justo — é assim que tratamos quem confia na gente.",
    ],
    foto: { src: "/gallery/placeholder-dono.svg", alt: "Proprietário da WM Auto Elétrica" },
  },

  // --- Rodapé ---
  empresa: "DeltaWave",
  empresaUrl: "", // opcional

  // --- SEO ---
  // Domínio final do site (usado em metadados e sitemap). [PREENCHER no deploy]
  url: "https://wmautoeletrica.com.br",
} as const;

/**
 * Monta o link do WhatsApp (wa.me) com mensagem pré-preenchida.
 */
export function whatsappUrl(msg?: string): string {
  const texto =
    msg ?? `Olá! Vim pelo site da ${site.nome} e gostaria de mais informações.`;
  return `https://wa.me/${site.whatsapp}?text=${encodeURIComponent(texto)}`;
}

export type Servico = (typeof site.servicos)[number];
