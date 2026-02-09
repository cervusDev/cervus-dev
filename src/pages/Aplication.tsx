import { UnavailableProjectModal } from "@/components/UnavailableProjectModal";
import { applications } from "@/models/application";
import { motion } from "framer-motion";
import { useState } from "react";

function Applications() {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const navigate = (url: string) => {
    if (!url) {
      setIsModalOpen(true);
      return;
    }
    window.open(url, "_blank", "noopener,noreferrer");
  };

  return (
    <section className="py-12">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="space-y-6"
      >
        <div className="max-w-7xl mx-auto px-4">
          <h2 className="text-3xl font-bold mb-8 text-white">Aplicativos</h2>

          <div className="w-[80%] mb-12">
            <p className="text-white text-lg mt-4">
              Nesta sessão apresento{" "}
              <span className="text-orange-500">
                experiências de desenvolvimento
              </span>
              .
              <br />
              São aplicações que abordam{" "}
              <span className="text-orange-500">
                boas práticas, tecnologias e aprendizados
              </span>
              .
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {applications.map((post, index) => (
              <motion.div
                key={post.id}
                initial={{ opacity: 0, y: 12 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, delay: index * 0.1 }}
                onClick={() => navigate(post.url)}
                className="
                  group
                  relative overflow-hidden flex flex-col h-full

                  rounded-[15px]
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
                <span
                  className="
                    pointer-events-none
                    absolute inset-0
                    rounded-[15px]
                    bg-gradient-to-br
                    from-white/20
                    via-white/5
                    to-transparent
                    opacity-40
                  "
                />

                <span
                  className="
                    pointer-events-none
                    absolute inset-0
                    rounded-[15px]
                    shadow-inner
                    shadow-white/10
                  "
                />

                <div
                  className="
                    relative z-10
                    px-[15px] py-[8px]
                    text-white font-bold
                  "
                >
                  {post.title}
                </div>

                {/* Body */}
                <div
                  className="
                    relative z-10
                    px-[15px] py-[10px]
                    text-sm flex-1
                    text-gray-300
                  "
                >
                  {post.description}
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
                  <button
                    onClick={(e) => {
                      e.stopPropagation();
                      navigate(post.url);
                    }}
                    className="
                      text-sm text-orange-500
                      hover:underline underline-offset-4
                      cursor-pointer
                    "
                  >
                    Ver projeto →
                  </button>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </motion.div>
      {isModalOpen && (
        <UnavailableProjectModal
          onClose={() => setIsModalOpen(false)}
          message="Este projeto ainda está em desenvolvimento."
        />
      )}
    </section>
  );
}

export default Applications;
