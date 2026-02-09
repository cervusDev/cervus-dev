import type { FeaturedProjectsProps } from "@/models/featureProjects";
import { motion } from "framer-motion";

export function FeaturedProjects({ projects }: FeaturedProjectsProps) {
  return (
    <div className="mb-16">
      <h3 className="text-xl font-semibold text-white mb-6">
        Projetos em destaque
      </h3>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {projects.map((project, index) => (
          <motion.div
            onClick={(e) => {
              e.stopPropagation();
              window.open(
                project.navigation?.url,
                "_blank",
                "noopener,noreferrer",
              );
            }}
            key={project.id ?? index}
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4, delay: index * 0.1 }}
            className="
              group
              relative overflow-hidden
              flex flex-col h-full

              rounded-[15px]
              rounded-tl-none rounded-br-none

              bg-white/2
              backdrop-blur-xl
              border border-white/20

              transition-all duration-200 ease-out
              hover:scale-[1.02]
              hover:shadow-[0_0_40px_rgba(249,115,22,0.15)]
              hover:border-orange-500/40
              cursor-pointer
            "
          >
            {/* Reflexo de vidro */}
            <span
              className="
                pointer-events-none
                absolute inset-0
                rounded-[15px]
                rounded-tl-none rounded-br-none
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
                rounded-[15px]
                rounded-tl-none rounded-br-none
                shadow-inner
                shadow-white/10
              "
            />

            {/* Header */}
            <div
              className="
                relative z-10
                px-[15px] py-[8px]
                border-b border-white/10
                text-white font-medium
              "
            >
              {project.title}
            </div>

            {/* Body */}
            <div
              className="
                relative z-10
                px-[15px] py-[10px]
                text-sm flex-1
                bg-black/30
                text-gray-300
              "
            >
              {project.description}
            </div>

            {/* Footer */}
            <div
              className="
                relative z-10
                px-[15px] py-[8px]
                h-[40px]
                flex items-center justify-end
                border-t border-white/10
                text-right italic

                transition-colors duration-200
                group-hover:text-orange-400
              "
            >
              {project.navigation?.url ? (
                <button
                  onClick={(e) => {
                    e.stopPropagation();
                    window.open(
                      project.navigation?.url,
                      "_blank",
                      "noopener,noreferrer",
                    );
                  }}
                  className="
                    text-sm text-orange-500
                    hover:underline underline-offset-4
                    cursor-pointer
                  "
                >
                  Ver projeto →
                </button>
              ) : (
                <span className="text-xs text-gray-400">Projeto interno</span>
              )}
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
}
