import { Mail, Linkedin, Github } from "lucide-react";

export function ResumeCard() {
  return (
    <div
      className="
        relative
        rounded-3xl
        p-10

        bg-white/5
        backdrop-blur-xl
        border border-white/20

        text-white
        shadow-[0_20px_50px_rgba(0,0,0,0.45)]
      "
    >
      {/* Reflexo de vidro */}
      <span
        className="
          pointer-events-none
          absolute inset-0
          rounded-3xl
          bg-gradient-to-br
          from-white/20
          via-white/5
          to-transparent
          opacity-40
        "
      />

      {/* Glow interno */}
      <span
        className="
          pointer-events-none
          absolute inset-0
          rounded-3xl
          shadow-inner
          shadow-white/10
        "
      />

      {/* Conteúdo */}
      <div className="relative z-10">
        {/* Ícones */}
        <div className="flex justify-end mb-6">
          <div className="flex gap-6">
            {/* LinkedIn */}
            <div className="relative group">
              <a
                href="https://www.linkedin.com/in/gustavo-carvera/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-zinc-400 hover:text-orange-400 transition-colors"
                aria-label="LinkedIn"
              >
                <Linkedin size={18} />
              </a>
              <span className="
                absolute -top-8 left-1/2 -translate-x-1/2
                text-xs
                bg-black/70
                backdrop-blur-md
                text-zinc-200
                px-2 py-1 rounded
                opacity-0 group-hover:opacity-100
                transition-opacity
                whitespace-nowrap
                pointer-events-none
              ">
                LinkedIn
              </span>
            </div>

            {/* Email */}
            <div className="relative group">
              <a
                href="mailto:gustavo.cervus@gmail.com"
                className="text-zinc-400 hover:text-orange-400 transition-colors"
                aria-label="Email"
              >
                <Mail size={18} />
              </a>
              <span className="
                absolute -top-8 left-1/2 -translate-x-1/2
                text-xs
                bg-black/70
                backdrop-blur-md
                text-zinc-200
                px-2 py-1 rounded
                opacity-0 group-hover:opacity-100
                transition-opacity
                whitespace-nowrap
                pointer-events-none
              ">
                Email
              </span>
            </div>

            {/* GitHub */}
            <div className="relative group">
              <a
                href="https://github.com/cervusDev"
                target="_blank"
                rel="noopener noreferrer"
                className="text-zinc-400 hover:text-orange-400 transition-colors"
                aria-label="GitHub"
              >
                <Github size={18} />
              </a>
              <span className="
                absolute -top-8 left-1/2 -translate-x-1/2
                text-xs
                bg-black/70
                backdrop-blur-md
                text-zinc-200
                px-2 py-1 rounded
                opacity-0 group-hover:opacity-100
                transition-opacity
                whitespace-nowrap
                pointer-events-none
              ">
                GitHub
              </span>
            </div>
          </div>
        </div>

        {/* Resumo */}
        <div>
          <h3 className="text-xl font-semibold mb-6">
            Resumo rápido
          </h3>

          <ul className="space-y-4 text-zinc-300">
            <li>🚀 +5 anos de experiência com desenvolvimento web</li>
            <li>⚛️ Next.js, Node.js, React Native e Expo</li>
            <li>📱 Plataformas web, banco de dados e app mobile</li>
            <li>🧠 Código limpo, arquitetura e performance</li>
          </ul>
        </div>
      </div>
    </div>
  );
}
