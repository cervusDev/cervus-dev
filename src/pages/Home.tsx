import { NavLink } from "react-router";
import { AvatarContent } from "@/components/Avatar";

export default function Home() {
  return (
    <section className="py-20">
      <div className="flex w-full items-center justify-center mb-16">
        <AvatarContent />
      </div>
      <div className="max-w-3xl mx-auto text-center">
        <h2 className="text-4xl md:text-5xl font-bold text-white mb-12">
          Olá, eu sou Gustavo!
        </h2>
        <NavLink
          to="/projetos"
          className="bg-orange-500 hover:bg-orange-600 text-white font-semibold px-6 py-3 rounded-2xl shadow-lg transition"
        >
          Projetos
        </NavLink>
      </div>
    </section>
  );
}
