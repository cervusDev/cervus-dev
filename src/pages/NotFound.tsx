import { NavLink } from "react-router";
import { useRef } from "react";

export default function NotFoundPage() {
  const cardRef = useRef<HTMLDivElement>(null);

  function handleMouseMove(e: React.MouseEvent<HTMLDivElement>) {
    const card = cardRef.current;
    if (!card) return;

    const rect = card.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;

    const centerX = rect.width / 2;
    const centerY = rect.height / 2;

    const moveX = (x - centerX) / 20;
    const moveY = (y - centerY) / 20;

    card.style.transform = `
      translate(${moveX}px, ${moveY}px)
      rotateX(${-moveY}deg)
      rotateY(${moveX}deg)
    `;
  }

  function handleMouseLeave() {
    const card = cardRef.current;
    if (!card) return;

    card.style.transform = `
      translate(0px, 0px)
      rotateX(0deg)
      rotateY(0deg)
    `;
  }

  return (
    <div className="flex items-center mt-12 justify-center py-12">
      <div
        ref={cardRef}
        onMouseMove={handleMouseMove}
        onMouseLeave={handleMouseLeave}
        className="
          relative
          w-full max-w-md
          rounded-3xl
          p-10
          text-center

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
          <h1 className="text-6xl font-bold mb-4">404</h1>

          <h2 className="text-2xl md:text-3xl font-semibold mb-6">
            Página não encontrada
          </h2>

          <p className="text-white/80 mb-8 leading-relaxed">
            Ops! A página que você está tentando acessar não existe ou foi
            removida.
          </p>

          <NavLink
            to="/"
            className="
              inline-block
              rounded-2xl
              bg-orange-500
              px-6 py-3
              font-semibold
              text-white

              shadow-[0_10px_30px_rgba(249,115,22,0.35)]
              transition-all
              hover:-translate-y-0.5
              hover:bg-orange-600
              hover:shadow-[0_15px_40px_rgba(249,115,22,0.45)]
            "
          >
            Voltar para o início
          </NavLink>
        </div>
      </div>
    </div>
  );
}
