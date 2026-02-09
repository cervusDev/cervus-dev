interface PostProps {
  id: string;
  title: string;
  description: string;
  sections: { id: string; title: string; content: string }[];
}

export const postsData: PostProps[] = [
  {
    id: "1",
    title: "Boas práticas em React",
    description:
      "Dicas práticas que aplico no dia a dia para manter código limpo, performático e escalável.",
    sections: [
      {
        id: "intro",
        title: "Introdução",
        content: "Visão geral sobre boas práticas em React...",
      },
      {
        id: "componentes",
        title: "Componentes",
        content: "Como criar componentes limpos e reutilizáveis...",
      },
      {
        id: "estado",
        title: "Gerenciamento de Estado",
        content: "Estratégias para gerenciar estado com eficiência...",
      },
      {
        id: "hooks",
        title: "Hooks",
        content: "Boas práticas para uso de hooks no React...",
      },
      {
        id: "conclusao",
        title: "Conclusão",
        content: "Resumo das melhores práticas e recomendações...",
      },
    ],
  },
  {
    id: "2",
    title: "TypeScript no backend",
    description:
      "Como o uso do TypeScript no Node.js trouxe mais segurança e produtividade nos projetos.",
    sections: [
      {
        id: "intro",
        title: "Introdução",
        content: "Por que usar TypeScript no backend...",
      },
      {
        id: "tipagem",
        title: "Tipagem Estática",
        content: "Benefícios da tipagem estática para segurança...",
      },
      {
        id: "erros",
        title: "Tratamento de Erros",
        content: "Como TypeScript ajuda a evitar erros comuns...",
      },
      {
        id: "conclusao",
        title: "Conclusão",
        content: "Resumo dos ganhos e recomendações...",
      },
    ],
  },
  {
    id: "3",
    title: "Automatizando com CI/CD",
    description:
      "Um guia rápido de como configurei pipelines para automatizar testes e deploys.",
    sections: [
      {
        id: "intro",
        title: "Introdução",
        content: "O que é CI/CD e por que é importante...",
      },
      {
        id: "setup",
        title: "Configuração de Pipelines",
        content: "Passo a passo da configuração das pipelines...",
      },
      {
        id: "testes",
        title: "Testes Automatizados",
        content: "Como integrar testes automatizados no fluxo...",
      },
      {
        id: "deploy",
        title: "Deploy Automatizado",
        content: "Processo de deploy contínuo com segurança...",
      },
      {
        id: "conclusao",
        title: "Conclusão",
        content: "Resumo das práticas e resultados obtidos...",
      },
    ],
  },
  {
    id: "4",
    title: "Performance em aplicações web",
    description:
      "Técnicas que utilizei para reduzir o tempo de carregamento e melhorar a experiência do usuário.",
    sections: [
      {
        id: "intro",
        title: "Introdução",
        content: "Importância da performance em aplicações web...",
      },
      {
        id: "otimizacao",
        title: "Otimização de Recursos",
        content: "Redução de tamanho de assets, lazy loading...",
      },
      {
        id: "cache",
        title: "Caching",
        content: "Uso de cache para acelerar respostas do servidor...",
      },
      {
        id: "medicao",
        title: "Medição de Performance",
        content: "Ferramentas e métricas para monitorar performance...",
      },
      {
        id: "conclusao",
        title: "Conclusão",
        content: "Resumo das técnicas aplicadas e resultados...",
      },
    ],
  },
  {
    id: "5",
    title: "Acessibilidade na web",
    description:
      "Pequenas práticas que fazem grande diferença para tornar aplicativos mais inclusivos.",
    sections: [
      {
        id: "intro",
        title: "Introdução",
        content: "O que é acessibilidade e sua importância...",
      },
      {
        id: "semantica",
        title: "HTML Semântico",
        content: "Uso de tags corretas para navegação e leitores de tela...",
      },
      {
        id: "cores",
        title: "Contraste e Cores",
        content: "Escolha de cores e contraste para melhor legibilidade...",
      },
      {
        id: "interacao",
        title: "Interação e Navegação",
        content: "Acessibilidade em formulários, botões e links...",
      },
      {
        id: "conclusao",
        title: "Conclusão",
        content: "Resumo das práticas e recomendações finais...",
      },
    ],
  },
];