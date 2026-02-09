export interface IApplications {
  id: string;
  url: string;
  title: string;
  description: string;
}

export const applications: IApplications[] = [
  {
    id: "1",
    title: "Serene",
    url: "https://serene.cervusdev.com.br",
    description:
      "Agende consultas de forma rápida e eficiente enquanto acompanha tudo pelo nosso dashboard inteligente.",
  },
  {
    id: "2",
    title: "Dignidade Trans",
    url: "",
    description:
      "Uma plataforma institucional e educativa dedicada a dar visibilidade à luta do movimento trans, promovendo conscientização, respeito e inclusão social.",
  },
  {
    id: "3",
    title: "Poke Amigos",
    url: "",
    description: "Uma plataforma para jogar pokemon TCG entre amigos.",
  },
];
