export interface FeaturedProjectsProps {
  projects: {
    id?: string | number;
    title: string;
    description: string;
    navigation?: {
      url?: string;
    };
  }[];
}

export const featuredProjects = [
  {
    title: "Carroção",
    description: `ERP de resort pedagógico é um sistema integrado de gestão desenvolvido para organizar, automatizar e centralizar as operações administrativas, educacionais e operacionais`,
    id: "1",
    navigation: {
      url: "https://carrocao.com/",
    },
  },
  {
    title: "Interplan.Rio",
    description: `O INTERPLAN é uma plataforma que reúne os planos
                  municipais vigentes`,
    id: "2",
    navigation: {
      url: "https://web-interplan.apps.rio.gov.br/",
    },
  },
  {
    title: "Gestor Ponto",
    description: `O Gestor Ponto proporciona controle total da jornada de
                  trabalho, otimizando processos ao integrar todas as etapas`,
    id: "3",
    navigation: {
      url: "https://www.prosissoftwaregestao.com.br/produtos/gestor-p",
    },
  },
];
