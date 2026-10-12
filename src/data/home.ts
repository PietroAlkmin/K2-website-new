export type FAQItem = {
  question: string;
  answer: string[];
};

const credibilityText =
  "Entregamos inteligência operacional. Nossa equipe de engenheiros e especialistas em negócios entende que cada empresa possui um ecossistema único.";

const faqParagraph =
  "Entregamos inteligência operacional. Nossa equipe de engenheiros e especialistas em negócios entende que cada empresa possui um ecossistema único. Entregamos inteligência operacional. Nossa equipe de engenheiros e especialistas em negócios entende que cada empresa possui um ecossistema único. Entregamos inteligência operacional. Nossa equipe de engenheiros e especialistas em negócios entende que cada empresa possui um ecossistema único.";

const caseMetrics = [
  { value: "+30%", label: "de aumento no faturamento" },
  { value: "+45%", label: "de agilidade na separação e entrega" },
  { value: "-23%", label: "nos custos de produção" },
];

export const navItems = [
  { label: "Soluções", href: "#solucoes", hasMenu: true },
  { label: "Segmentos", href: "#", hasMenu: true },
  { label: "Cases de sucesso", href: "#cases", hasMenu: false },
  { label: "Sobre a K2", href: "#", hasMenu: true },
  { label: "Conteúdos", href: "#", hasMenu: false },
] as const;

export const heroSlides = [
  {
    kind: "content",
    src: "/images/hero/slide-1.png",
    alt: "Notebook sobre uma mesa de madeira exibindo o painel do ERP K2 Software",
  },
  {
    kind: "content",
    src: "/images/hero/slide-4.png",
    alt: "Empresária usando o ERP K2 Software em um tablet",
  },
  {
    kind: "content",
    src: "/images/hero/slide-2.png",
    alt: "Profissional acompanhando a gestão da empresa pelo celular",
  },
  {
    kind: "banner",
    src: "/images/hero/slide-3.png",
    alt: "K2 Software Connection 2027: último lote de ingressos para 10 de setembro, às 18h, no Distrito Anhembi, em São Paulo",
    href: "#",
    linkLabel: "Comprar ingressos para o K2 Software Connection 2027",
  },
] as const;

export const clientLogos = [
  { name: "Yex", src: "/assets/logo-yex.svg", width: 64, height: 38 },
  { name: "Barbaresco", src: "/assets/logo-barbaresco.svg", width: 100, height: 35 },
  { name: "Lipex", src: "/assets/logo-lipex.png", width: 74, height: 31 },
  { name: "Papaya", src: "/assets/logo-papaya.svg", width: 81, height: 27 },
  { name: "Casa do Óleo", src: "/assets/logo-casa-do-oleo.png", width: 44, height: 44 },
  { name: "Plast Roma", src: "/assets/logo-plast-roma.svg", width: 82, height: 29 },
  { name: "Incofral", src: "/assets/logo-incofral.png", width: 87, height: 19 },
] as const;

export const credibilityCards = [
  {
    title: "Engenharia de ponta",
    text: credibilityText,
    image: "/images/credibility/card-1.png",
    imageAlt: "Profissional usando um tablet em uma mesa de trabalho",
  },
  {
    title: "Suporte dedicado",
    text: credibilityText,
    image: "/images/credibility/card-2.png",
    imageAlt: "Equipe analisando informações em um tablet durante uma reunião",
  },
  {
    title: "Engenharia de Ponta",
    text: credibilityText,
    image: "/images/credibility/card-3.png",
    imageAlt: "Duas profissionais conversando em uma reunião de trabalho",
  },
  {
    title: "Evolução contínua",
    text: credibilityText,
    image: "/images/credibility/card-4.png",
    imageAlt: "Profissionais saindo de um edifício corporativo",
  },
] as const;

export const cases = [
  {
    company: "Papaya",
    logo: "/images/cases/papaya-logo.svg",
    logoWidth: 166,
    logoHeight: 55,
    image: "/images/cases/papaya.png",
    imageAlt: "Interior da Padaria e Confeitaria Papaya",
    text: "A Padaria e Confeitaria Papaya é referência no uso das soluções K2 para alavancar seus resultados. Alguns números que comprovam a parceria:",
    metrics: caseMetrics,
  },
  {
    company: "Barbaresco Express",
    logo: "/images/cases/barbaresco-logo.svg",
    logoWidth: 177,
    logoHeight: 62,
    image: "/images/cases/barbaresco.png",
    imageAlt: "Salão da Barbaresco Express ao anoitecer",
    text: "A Barbaresco Express é referência no uso das soluções K2 para alavancar seus resultados. Alguns números que comprovam a parceria:",
    metrics: caseMetrics,
  },
  {
    company: "Cliente K2",
    logo: "/images/cases/cliente-3-logo.svg",
    logoWidth: 104,
    logoHeight: 61,
    image: "/images/cases/cliente-3.png",
    imageAlt: "Salão de um restaurante parceiro da K2 Software",
    text: "A Barbaresco Express é referência no uso das soluções K2 para alavancar seus resultados. Alguns números que comprovam a parceria:",
    metrics: caseMetrics,
  },
] as const;

export const solutions = [
  {
    title: "Gestão financeira e fiscal",
    description:
      "Controle absoluto de fluxo de caixa, DRE gerencial e conformidade com a legislação fiscal brasileira",
  },
  {
    title: "Controle de suprimentos e estoque",
    description:
      "Acompanhe compras, recebimento e saldo de estoque em tempo real, do pedido ao inventário.",
  },
  {
    title: "Contas a pagar e a receber",
    description:
      "Organize vencimentos, baixas e conciliação para manter o caixa previsível.",
  },
  {
    title: "Recursos humanos e DP",
    description:
      "Centralize admissões, folha e rotinas do departamento pessoal no mesmo ERP.",
  },
  {
    title: "BI e analytics",
    description:
      "Transforme os dados da operação em indicadores para decidir com mais clareza.",
  },
] as const;

export const solutionImage = {
  src: "/images/solutions/painel.png",
  alt: "Painel do ERP K2 Software com indicadores de volume, perfil e histórico",
  width: 672,
  height: 462,
};

export const benefits = [
  "ERP integrado",
  "Conciliação bancária",
  "Notas fiscais organizadas",
] as const;

export const benefitsBackground = {
  src: "/images/benefits/fundo.png",
  alt: "",
};

export const faq: FAQItem[] = [
  {
    question:
      "Entenda os campos Tipo de Ente Governamental e Estado Civil no cadastro de Parceiros",
    answer: [
      faqParagraph,
      "Entregamos inteligência operacional. Nossa equipe de engenheiros e especialistas em negócios entende que cada empresa possui um ecossistema único. Entregamos inteligência operacional. Nossa equipe de engenheiros e especialistas em negócios entende que cada empresa possui um ecossistema único.",
    ],
  },
  {
    question: "Valor total do pedido não atualiza após faturamento parcial",
    answer: [faqParagraph],
  },
  {
    question: "Como Considerar Apenas o Kit na Rentabilidade?",
    answer: [faqParagraph],
  },
  {
    question:
      "Como fazer o faturamento de pedido de venda parcial quando se utiliza desconto promocional por quantidade?",
    answer: [faqParagraph],
  },
  {
    question: "Como retirar/trocar o vínculo de um parceiro no cadastro de vendedor?",
    answer: [faqParagraph],
  },
];

export const footerColumns = [
  {
    title: "Começar",
    links: ["Cadastre-se gratuitamente", "Planos e preços", "Solicite uma demonstração"],
  },
  {
    title: "Recursos",
    links: [
      "Captura de Notas (DF-e)",
      "Gestão Financeira",
      "Emissão Fiscal",
      "Contábil & Fiscal",
      "Gestão de Vendas & CRM",
      "Open Finance & Banking",
      "Business Intelligence",
      "API & Integrações",
      "AI Agentkapty",
    ],
  },
  {
    title: "Soluções",
    links: [
      "Para Comércio & Varejo",
      "Para Serviços & Clínicas",
      "Para Indústria & Distribuição",
      "Para Contadores",
      "Para Tecnologia",
      "Para Agronegócio",
    ],
  },
  {
    title: "Explorar",
    links: [
      "Sobre nós",
      "Central de ajuda",
      "Fale com especialista",
      "Seja um parceiro K2",
      "Carreiras",
      "Insights",
    ],
  },
  {
    title: "Segurança",
    links: ["Política de privacidade", "Política de Cookies", "Termos de uso"],
  },
] as const;

export const socialLinks = [
  { name: "YouTube", src: "/assets/icon-youtube.svg", width: 24, height: 17 },
  { name: "Instagram", src: "/assets/icon-instagram.svg", width: 22, height: 22 },
  { name: "Facebook", src: "/assets/icon-facebook.svg", width: 14, height: 24 },
  { name: "LinkedIn", src: "/assets/icon-linkedin.svg", width: 23, height: 23 },
  { name: "TikTok", src: "/assets/icon-tiktok.svg", width: 20, height: 23 },
  { name: "X", src: "/assets/icon-twitter.svg", width: 24, height: 20 },
  { name: "Spotify", src: "/assets/icon-spotify.svg", width: 23, height: 23 },
] as const;
