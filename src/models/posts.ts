interface PostProps {
  id: string;
  title: string;
  description: string;
}

export const postsData: PostProps[] = [
  {
    id: "1",
    title: "Boas práticas em React",
    description:
      "Dicas práticas que aplico no dia a dia para manter código limpo, performático e escalável.",
  },
  {
    id: "2",
    title: "TypeScript no backend",
    description:
      "Como o uso do TypeScript no Node.js trouxe mais segurança e produtividade nos projetos.",
  },
  {
    id: "3",
    title: "Automatizando com CI/CD",
    description:
      "Um guia rápido de como configurei pipelines para automatizar testes e deploys.",
  },
  {
    id: "4",
    title: "Performance em aplicações web",
    description:
      "Técnicas que utilizei para reduzir o tempo de carregamento e melhorar a experiência do usuário.",
  },
  {
    id: "5",
    title: "Acessibilidade na web",
    description:
      "Pequenas práticas que fazem grande diferença para tornar aplicativos mais inclusivos.",
  },
];