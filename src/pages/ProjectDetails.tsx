import { useState } from "react";
import { useParams, useNavigate } from "react-router";
import projects from "../constants/project";
import { CarouselSection } from "@/components/Carousel";
import ScrollProgress from "@/components/ScrollProgress";

export default function ProjectDetail() {
  const { id } = useParams();
  const navigate = useNavigate();
  const [activeSection, setActiveSection] = useState<string | null>(null);

  const project = projects.find((p) => p.id === id);

  if (!project) {
    return (
      <div className="text-center py-32">
        <h1 className="text-4xl font-bold text-white">
          Projeto não encontrado
        </h1>
        <button
          className="mt-4 px-4 py-2 bg-orange-500 text-white rounded hover:bg-orange-400"
          onClick={() => navigate("/projetos")}
        >
          Voltar
        </button>
      </div>
    );
  }

  const relatedProjects = projects.filter((p) => p.id !== project.id);

  return (
    <section className="py-16">
      <div className="max-w-7xl mx-auto px-4">
        <ScrollProgress />
        <div className="flex gap-8">
          <article className="flex-1 text-white text-lg leading-relaxed space-y-8">
            <h1 className="text-3xl font-bold mb-4">{project.title}</h1>
            <p className="text-orange-500 mb-6">{project.description}</p>
            {project.sections.map((section) => (
              <div key={section.id} id={section.id} className="scroll-mt-24">
                <h2
                  className={`text-2xl font-semibold mb-2 cursor-pointer ${
                    activeSection === section.id
                      ? "text-orange-500"
                      : "text-white"
                  }`}
                  onClick={() => setActiveSection(section.id)}
                >
                  {section.title}
                </h2>
                <p>{section.content}</p>
                <CarouselSection pictures={section.pictures || []} />
              </div>
            ))}
          </article>
          <div className="w-px bg-white/30"></div>
          <div className="w-80 text-white space-y-6">
            <h3 className="text-2xl font-bold mb-4">Competências</h3>
            <ul className="list-disc list-inside space-y-2">
              {project.competencies?.map((item, idx) => (
                <li key={idx}>{item}</li>
              ))}
            </ul>

            {relatedProjects.length > 0 && (
              <div className="mt-8">
                <h3 className="text-xl font-semibold mb-2">
                  Projetos Relacionados
                </h3>
                <ul className="list-disc list-inside space-y-1">
                  {relatedProjects.map((rp) => (
                    <li
                      key={rp.id}
                      className="cursor-pointer text-orange-500 hover:underline"
                      onClick={() => navigate(`/projetos/${rp.id}`)}
                    >
                      {rp.title}
                    </li>
                  ))}
                </ul>
              </div>
            )}
            <button
              className="mt-8 px-4 py-2 bg-orange-500 text-white rounded hover:bg-orange-400 mb-12"
              onClick={() => navigate("/projetos")}
            >
              Voltar
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
