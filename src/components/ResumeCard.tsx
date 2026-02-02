import { Mail, Linkedin, Github } from "lucide-react";

export function ResumeCard() {
  return (
    <div className="rounded-3xl bg-zinc-900/70 border border-zinc-800 p-10 shadow-2xl">
      <div className="flex justify-end">
        <div className="flex gap-6">
          <div className="relative group">
            <a
              href="https://www.linkedin.com/in/gustavo-carvera/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-zinc-500 hover:text-orange-400 transition-colors"
              aria-label="LinkedIn"
            >
              <Linkedin size={18} />
            </a>
            <span className="absolute -top-8 left-1/2 -translate-x-1/2 text-xs bg-zinc-800 text-zinc-200 px-2 py-1 rounded opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap pointer-events-none">
              LinkedIn
            </span>
          </div>

          <div className="relative group">
            <a
              href="mailto:gustavo.cervus@gmail.com"
              className="text-zinc-500 hover:text-orange-400 transition-colors"
              aria-label="Email"
            >
              <Mail size={18} />
            </a>
            <span className="absolute -top-8 left-1/2 -translate-x-1/2 text-xs bg-zinc-800 text-zinc-200 px-2 py-1 rounded opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap pointer-events-none">
              Email
            </span>
          </div>

          <div className="relative group">
            <a
              href="https://github.com/cervusDev"
              target="_blank"
              rel="noopener noreferrer"
              className="text-zinc-500 hover:text-orange-400 transition-colors"
              aria-label="GitHub"
            >
              <Github size={18} />
            </a>
            <span className="absolute -top-8 left-1/2 -translate-x-1/2 text-xs bg-zinc-800 text-zinc-200 px-2 py-1 rounded opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap pointer-events-none">
              GitHub
            </span>
          </div>
        </div>
      </div>
      {/* Card de resumo */}
      <div>
        <h3 className="text-xl font-semibold mb-6">Resumo rápido</h3>
        <ul className="space-y-4 text-zinc-300">
          <li>🚀 +5 anos de experiência com desenvolvimento web</li>
          <li>⚛️ Next.js, Node.js, React Native e Expo</li>
          <li>📱 Plataformas web, banco de dados e app mobile</li>
          <li>🧠 Código limpo, arquitetura e performance</li>
        </ul>
      </div>

      {/* Sessão de contatos (texto em foco) */}
    </div>
  );
}
