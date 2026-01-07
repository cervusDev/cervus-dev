import { useState } from "react";
import { useNavigate } from "react-router";

interface Section {
  id: string;
  title: string;
}

interface Item {
  id: string;
  title: string;
}

interface SidebarProps {
  basePath: string;
  sections: Section[];
  relatedItems: Item[];
}

export default function Sidebar({
  sections,
  relatedItems,
  basePath,
}: SidebarProps) {
  const navigate = useNavigate();
  const [activeSection, setActiveSection] = useState<string>("");

  return (
    <div className="w-64 flex-shrink-0 space-y-8">
      <div>
        <h2 className="text-xl font-semibold text-white mb-4">Sumário</h2>
        <ul className="space-y-2">
          {sections.map((section) => (
            <li key={section.id}>
              <a
                href={`#${section.id}`}
                className={`cursor-pointer block hover:text-orange-500 ${
                  activeSection === section.id
                    ? "text-orange-500"
                    : "text-white"
                }`}
                onClick={() => setActiveSection(section.id)}
              >
                {section.title}
              </a>
            </li>
          ))}
        </ul>
      </div>
      <div className="mt-50">
        <h2 className="text-xl font-semibold text-white mb-4">Outros</h2>
        <ul className="space-y-2">
          {relatedItems.map((item) => (
            <li key={item.id}>
              <button
                onClick={() => navigate(`${basePath}/${item.id}`)}
                className="text-white hover:text-orange-500 text-left w-full cursor-pointer"
              >
                {item.title}
              </button>
            </li>
          ))}
        </ul>
        <button
          className="mt-8 px-4 py-2 bg-orange-500 text-white rounded hover:bg-orange-400 mb-12"
          onClick={() => navigate(basePath)}
        >
          Voltar
        </button>
      </div>
    </div>
  );
}
