import { NavLink } from 'react-router';

interface PostProps {
  id: string;
  title: string;
  description: string;
}

const postsData: PostProps[] = [
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

function Posts() {
  return (
    <section className="py-12">
      <div className="max-w-7xl mx-auto px-4">
        <h2 className="text-3xl font-bold mb-8 text-white">Reflexões</h2>

        <div className="w-[80%] mb-12">
          <p className="text-white text-lg mt-4">
            Nesta sessão compartilho{" "}
            <span className="text-orange-500">textos e reflexões</span> sobre
            minha experiência ao longo da carreira.
            <br />
            São conteúdos que abordam{" "}
            <span className="text-orange-500">
              boas práticas, tecnologias e aprendizados
            </span>{" "}
            adquiridos em mais de 5 anos atuando como desenvolvedor.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {postsData.map((post) => (
            <NavLink key={post.id} to={`/textos/${post.id}`}>
              <div
                className="glass-card">
                <h3 className="text-xl font-semibold mb-2 text-white truncate">
                  {post.title}
                </h3>
                <p className="text-white/80 overflow-hidden text-ellipsis line-clamp-4">
                  {post.description}
                </p>
              </div>
            </NavLink>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Posts;
