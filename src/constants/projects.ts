export interface TimelineCard {
  id: string;
  icon: string;
  iconColor: string;
  title: string;
  footer: string;
  navigation?: {
    url?: string;
    message?: string;
  }
  items: {
    label: string;
    value: string;
  }[];
}

export interface TimelineDay {
  id: string;
  dateLabel: string;
  cards: TimelineCard[];
}

export interface TimelineMonth {
  id: string;
  label: string;
  promotion?: string;
  days: TimelineDay[];
}

const projects: TimelineMonth[] = [
  {
    id: "0",
    label: "2026",
    promotion: "🚀 Pleno II",
    days: [
      {
        id: "0",
        dateLabel: "Janeiro - Atualmente",
        cards: [
          {
            id: "1",
            icon: "fa-asterisk",
            iconColor: "text-green-500",
            title: "ERP - interno",
            navigation: {
              url: '',
            },
            footer: "- Rac",
            items: [
              {
                label: "Tecnologias",
                value:
                  "Next.js, Node.js, RabbitMQ, WebSocket, Fastify, TypeORM, Payment Gateway, RabbitMQ",
              },
              {
                label: "Descrição",
                value: `sistema integrado de gestão empresarial que centraliza e organiza as informações e processos da empresa.`,
              },
            ],
          },
          {
            id: "1",
            icon: "fa-asterisk",
            iconColor: "text-green-500",
            title: "Mentor",
            footer: "- Rac",
            items: [
              {
                label: "Tecnologias",
                value: "React Native, Expo",
              },
              {
                label: "Descrição",
                value: `plataforma inteligente de análise de vendas que centraliza os principais indicadores comerciais e dados do fluxo de compras da empresa`,
              },
            ],
          },
          {
            id: "1",
            icon: "fa-asterisk",
            iconColor: "text-green-500",
            title: "Smart Stock",
            footer: "- Rac",
            items: [
              {
                label: "Tecnologias",
                value: "React Native, Expo",
              },
              {
                label: "Descrição",
                value: `O aplicativo de gestão de estoque é uma solução digital projetada para controlar, organizar e otimizar o fluxo de produtos da empresa de forma simples e eficiente.`,
              },
            ],
          },
          {
            id: "1",
            icon: "fa-asterisk",
            iconColor: "text-green-500",
            title: "Hub de cobranças",
            footer: "- Rac",
            items: [
              {
                label: "Tecnologias",
                value: "Next.js, Node.js, Fastify, RabbitMQ, Payment Gateway",
              },
              {
                label: "Descrição",
                value: `aplicativo de gestão e geração de cobranças por boleto é uma solução centralizada que unifica todos os meios de pagamento utilizados pela empresa em uma única plataforma.`,
              },
            ],
          },
        ],
      },
    ],
  },
  {
    id: "jul-2025",
    label: "2025",
    promotion: "🚀 Pleno I",
    days: [
      {
        id: "1",
        dateLabel: "Outubro - Dezembro",
        cards: [
          {
            id: "1",
            icon: "fa-asterisk",
            iconColor: "text-green-500",
            title: "ERP - interno",
            footer: "- Rac",
            items: [
              {
                label: "Tecnologias",
                value:
                  "Next.js, Node.js, RabbitMQ, WebSocket, Fastify, TypeORM, Payment Gateway, RabbitMQ",
              },
              {
                label: "Descrição",
                value: `sistema integrado de gestão empresarial que centraliza e organiza as informações e processos da empresa.`,
              },
            ],
          },
          {
            id: "1",
            icon: "fa-asterisk",
            iconColor: "text-green-500",
            title: "Mentor",
            footer: "- Rac",
            items: [
              {
                label: "Tecnologias",
                value: "React Native, Expo",
              },
              {
                label: "Descrição",
                value: `plataforma inteligente de análise de vendas que centraliza os principais indicadores comerciais e dados do fluxo de compras da empresa`,
              },
            ],
          },
          {
            id: "1",
            icon: "fa-asterisk",
            iconColor: "text-green-500",
            title: "Smart Stock",
            footer: "- Rac",
            items: [
              {
                label: "Tecnologias",
                value: "React Native, Expo",
              },
              {
                label: "Descrição",
                value: `O aplicativo de gestão de estoque é uma solução digital projetada para controlar, organizar e otimizar o fluxo de produtos da empresa de forma simples e eficiente.`,
              },
            ],
          },
          {
            id: "1",
            icon: "fa-asterisk",
            iconColor: "text-green-500",
            title: "Hub de cobranças",
            footer: "- Rac",
            items: [
              {
                label: "Tecnologias",
                value: "Next.js, Node.js, Fastify, RabbitMQ, Payment Gateway",
              },
              {
                label: "Descrição",
                value: `aplicativo de gestão e geração de cobranças por boleto é uma solução centralizada que unifica todos os meios de pagamento utilizados pela empresa em uma única plataforma.`,
              },
            ],
          },
        ],
      },
      {
        id: "1",
        dateLabel: "Julho - Outubro",
        cards: [
          {
            id: "1",
            icon: "fa-asterisk",
            iconColor: "text-green-500",
            title: "Carroção",
            footer: "- Rac",
            items: [
              {
                label: "Tecnologias",
                value:
                  "Next.js, Tailwind CSS, Git/Github, gRPC, RabbitMQ, Fastify, MySql, Drizzle.",
              },
              {
                label: "Descrição",
                value: `O primeiro resort pedagógico do Brasil! Localizado em Tatuí (SP).`,
              },
            ],
          },
        ],
      },
      {
        id: "1",
        dateLabel: "Janeiro - Julho",
        cards: [
          {
            id: "1",
            icon: "fa-asterisk",
            iconColor: "text-green-500",
            title: "Interplan.RIO",
            footer: "- Macroplan",
            items: [
              {
                label: "Tecnologias",
                value: "Next.js, Styled Components",
              },
              {
                label: "Descrição",
                value: `O INTERPLAN é uma plataforma que reúne os planos
municipais vigente`,
              },
            ],
          },
          {
            id: "1",
            icon: "fa-asterisk",
            iconColor: "text-green-500",
            title: "MS Ativo",
            footer: "- Macroplan",
            items: [
              {
                label: "Tecnologias",
                value: "Vite.js, Material, Styled Components",
              },
              {
                label: "Descrição",
                value: `MS Ativo, desenvolvido pelo governo de Mato
Grosso do Sul,`,
              },
            ],
          },
        ],
      },
    ],
  },
  {
    id: "aug-2018",
    label: "2024",
    promotion: "🚀 Pleno I",
    days: [
      {
        id: "21",
        dateLabel: "Janeiro - Novembro",
        cards: [
          {
            id: "1",
            icon: "fa-asterisk",
            iconColor: "text-green-500",
            title: "Interplan.RIO",
            footer: "- Macroplan",
            items: [
              {
                label: "Tecnologias",
                value: "Next.js, Styled Components",
              },
              {
                label: "Descrição",
                value: `O INTERPLAN é uma plataforma que reúne os planos
municipais vigente`,
              },
            ],
          },
          {
            id: "1",
            icon: "fa-asterisk",
            iconColor: "text-green-500",
            title: "MS Ativo",
            footer: "- Macroplan",
            items: [
              {
                label: "Tecnologias",
                value: "Vite.js, Material, Styled Components",
              },
              {
                label: "Descrição",
                value: `MS Ativo, desenvolvido pelo governo de Mato
Grosso do Sul,`,
              },
            ],
          },
        ],
      },
    ],
  },
  {
    id: "aug-2018",
    label: "2023",
    promotion: "🚀 Junior III ",
    days: [
      {
        id: "21",
        dateLabel: "Janeiro - Dezembro",
        cards: [
          {
            id: "1",
            icon: "fa-asterisk",
            iconColor: "text-green-500",
            title: "ABCR +",
            footer: "- Macroplan",
            items: [
              {
                label: "Tecnologias",
                value: "Vite.js, React Query, Styled Components",
              },
              {
                label: "Descrição",
                value: `Uma plataforma onde você acompanha os principais
indicadores de desempenho das Melhores Rodovias do Brasil`,
              },
            ],
          },
          {
            id: "1",
            icon: "fa-asterisk",
            iconColor: "text-green-500",
            title: "Amazonia Legal",
            footer: "- Macroplan",
            items: [
              {
                label: "Tecnologias",
                value: "Laravel, Javascript",
              },
              {
                label: "Descrição",
                value: `O software é uma plataforma de análise e visualização de dados
focada na região da Amazônia Legal.`,
              },
            ],
          },
          {
            id: "1",
            icon: "fa-asterisk",
            iconColor: "text-green-500",
            title: "DGM",
            footer: "- Macroplan",
            items: [
              {
                label: "Tecnologias",
                value: "Vite.js, Styled Components",
              },
              {
                label: "Descrição",
                value: `Desafios da Gestão Municipal (DGM 2024), que apresenta um
panorama de 2010 a 2023 das 100 maiores cidades.`,
              },
            ],
          },
        ],
      },
    ],
  },
  {
    id: "aug-2018",
    label: "2022",
    promotion: "🚀 Junior II",
    days: [
      {
        id: "21",
        dateLabel: "Julho - Dezembro",
        cards: [
          {
            id: "1",
            icon: "fa-asterisk",
            iconColor: "text-green-500",
            title: "Cidade SUSP",
            footer: "- Macroplan",
            items: [
              {
                label: "Tecnologias",
                value: "React.js, Typescript, Styled Components",
              },
              {
                label: "Descrição",
                value: `O Programa Nacional de Fortalecimento da Gestão Municipal de
Segurança Pública (CidadeSusp).`,
              },
            ],
          },
        ],
      },
      {
        id: "21",
        dateLabel: "Janeiro - Julho",
        cards: [
          {
            id: "1",
            icon: "fa-asterisk",
            iconColor: "text-green-500",
            title: "Gestor Ponto",
            footer: "- Prosis",
            items: [
              {
                label: "Tecnologias",
                value:
                  "Vite.js, React Query, Node.js, TYpescript, RabbitMQ, WebSocket, Nest.js",
              },
              {
                label: "Descrição",
                value: `O Gestor Ponto proporciona controle total da jornada de
trabalho, otimizando processos ao integrar todas as etapas.u`,
              },
            ],
          },
        ],
      },
    ],
  },
  {
    id: "aug-2018",
    label: "2021",
    promotion: "🚀 Junior I",
    days: [
      {
        id: "21",
        dateLabel: "Outubro - Dezembro",
        cards: [
          {
            id: "1",
            icon: "fa-asterisk",
            iconColor: "text-green-500",
            title: "Gestor Ponto",
            footer: "- Prosis",
            items: [
              {
                label: "Tecnologias",
                value:
                  "Vite.js, React Query, Node.js, TYpescript, RabbitMQ, WebSocket, Nest.js",
              },
              {
                label: "Descrição",
                value: `O Gestor Ponto proporciona controle total da jornada de
trabalho, otimizando processos ao integrar todas as etapas.`,
              },
            ],
          },
        ],
      },
    ],
  },
];

export default projects;
