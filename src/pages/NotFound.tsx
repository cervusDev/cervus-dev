import { NavLink } from "react-router"; // ou next/link se estiver usando Next.js

export default function NotFoundPage() {
  return (
    <div className="flex items-center justify-center px-4">
      <div className="bg-white/10 backdrop-blur-lg border border-white/20 rounded-2xl p-10 text-center shadow-lg max-w-md">
        <h1 className="text-6xl font-bold text-white mb-4">404</h1>
        <h2 className="text-2xl md:text-3xl font-semibold text-white mb-6">
          Página não encontrada
        </h2>
        <p className="text-white/80 mb-6">
          Ops! A página que você está tentando acessar não existe ou foi
          removida.
        </p>
        <NavLink
          to="/"
          className="bg-orange-500 hover:bg-orange-600 text-white font-semibold px-6 py-3 rounded-2xl shadow-lg transition"
        >
          Voltar para o início
        </NavLink>
      </div>
    </div>
  );
}
