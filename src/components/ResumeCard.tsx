import { Mail, Linkedin, Github } from "lucide-react";
import { useRef } from "react";

export function ResumeCard() {
  const cardRef = useRef<HTMLDivElement>(null);

  function handleMouseMove(e: React.MouseEvent<HTMLDivElement>) {
    const card = cardRef.current;
    if (!card) return;

    const rect = card.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;

    const centerX = rect.width / 2;
    const centerY = rect.height / 2;

    const rotateX = ((y - centerY) / centerY) * -6; // intensidade
    const rotateY = ((x - centerX) / centerX) * 6;

    card.style.transform = `
      perspective(1000px)
      rotateX(${rotateX}deg)
      rotateY(${rotateY}deg)
      translateZ(8px)
    `;
  }

  function handleMouseLeave() {
    const card = cardRef.current;
    if (!card) return;

    card.style.transform = `
      perspective(1000px)
      rotateX(0deg)
      rotateY(0deg)
      translateZ(0)
    `;
  }

  return (
    <div
      ref={cardRef}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      className="
        relative
        rounded-3xl
        p-10

        bg-white/5
        backdrop-blur-xl
        border border-white/20

        text-white
        shadow-[0_20px_50px_rgba(0,0,0,0.45)]

        transition-transform
        duration-200
        ease-out
        will-change-transform
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
            <Icon
              href="https://www.linkedin.com/in/gustavo-carvera/"
              label="LinkedIn"
            >
              <Linkedin size={18} />
            </Icon>

            <Icon href="mailto:gustavo.cervus@gmail.com" label="Email">
              <Mail size={18} />
            </Icon>

            <Icon
              href="https://github.com/cervusDev"
              label="GitHub"
            >
              <Github size={18} />
            </Icon>
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

/* Componente auxiliar */
function Icon({
  href,
  label,
  children,
}: {
  href: string;
  label: string;
  children: React.ReactNode;
}) {
  return (
    <div className="relative group">
      <a
        href={href}
        target="_blank"
        rel="noopener noreferrer"
        className="text-zinc-400 hover:text-orange-400 transition-colors"
        aria-label={label}
      >
        {children}
      </a>
      <span
        className="
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
        "
      >
        {label}
      </span>
    </div>
  );
}
