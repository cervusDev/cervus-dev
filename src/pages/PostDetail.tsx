import { useState } from "react";
import { useParams, useNavigate } from "react-router";
import Sidebar from "../components/SideBarContent";
import ScrollProgress from "@/components/ScrollProgress";
import { postsData } from "@/constants/posts";

export default function PostDetail() {
  const { id } = useParams();
  const navigate = useNavigate();

  const [activeSection, setActiveSection] = useState<string | null>(null);

  const post = postsData.find((p) => p.id === id);

  if (!post) {
    return (
      <div className="text-center py-32">
        <h1 className="text-4xl font-bold text-white">Texto não encontrado</h1>
        <button
          className="mt-4 px-4 py-2 bg-orange-500 text-white rounded hover:bg-orange-400"
          onClick={() => navigate("/textos")}
        >
          Voltar para Textos
        </button>
      </div>
    );
  }

  const relatedPosts = postsData.filter((p) => p.id !== post.id);

  return (
    <section className="py-12">
      <div className="max-w-7xl mx-auto px-4">
        <ScrollProgress />
        <div className="flex gap-8">
          <article className="flex-1 text-white text-lg leading-relaxed space-y-8">
            <h1 className="text-3xl font-bold mb-4">{post.title}</h1>
            <p className="text-orange-500 mb-6">{post.description}</p>
            {post.sections.map((section) => (
              <div
                key={section.id}
                id={section.id}
                className="scroll-mt-24"
                onClick={() => setActiveSection(section.id)}
              >
                <h2
                  className={`text-2xl font-semibold mb-2 cursor-pointer ${
                    activeSection === section.id
                      ? "text-orange-500"
                      : "text-white"
                  }`}
                >
                  {section.title}
                </h2>
                <p>{section.content}</p>
              </div>
            ))}
          </article>
          <div className="w-px bg-white/30"></div>
          <Sidebar
            sections={post.sections}
            relatedItems={relatedPosts}
            basePath="/textos"
          />
        </div>
      </div>
    </section>
  );
}
