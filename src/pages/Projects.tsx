import { NavLink } from "react-router";
import projects from "../constants/project";

function Projects() {
  return (
    <section className="py-12">
      <div className="max-w-7xl mx-auto px-4">
        <h2 className="text-3xl font-bold mb-8 text-white">Projetos</h2>

        <div className="w-[80%] mb-12">
          <p className="text-white text-lg mt-4">
            Ao longo de mais de{" "}
            <span className="text-orange-500">5 anos de experiência</span>,
            trabalhei em diversos projetos que me permitiram adquirir
            conhecimento sólido e prático.
            <br />
            Nesta sessão, apresento alguns dos{" "}
            <span className="text-orange-500">projetos em que participei</span>,
            destacando desafios e soluções implementadas.
            <br />
            Para conhecer todos os detalhes, você pode baixar o PDF completo dos
            projetos clicando{" "}
            <span
              className="text-orange-500 cursor-pointer"
              onClick={() => window.open("/projetos.pdf", "_blank")}
            >
              aqui
            </span>{" "}
            ou em um dos cartões abaixo.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((project) => (
            <NavLink key={project.id} to={`/projetos/${project.id}`}>
              <div className="glass-card">
                <h3 className="text-xl font-semibold mb-2 text-white truncate">
                  {project.title}
                </h3>
                <p className="text-white/80 overflow-hidden text-ellipsis line-clamp-4">
                  {project.description}
                </p>
              </div>
            </NavLink>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Projects;
