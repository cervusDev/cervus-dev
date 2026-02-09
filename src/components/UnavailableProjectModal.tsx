import { AnimatePresence, motion } from "framer-motion";

interface IUnavailableProject {
  onClose: () => void;
  message: string;
}

export function UnavailableProjectModal({
  onClose,
  message,
}: IUnavailableProject) {
  return (
    <AnimatePresence>
      {/* Overlay */}
      <motion.div
        className="
          fixed inset-0 z-50
          flex items-center justify-center
          bg-black/60
          backdrop-blur-sm
        "
        role="dialog"
        aria-modal="true"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        transition={{ duration: 0.25, ease: "easeOut" }}
        onClick={onClose}
      >
        {/* Modal */}
        <motion.div
          onClick={(e) => e.stopPropagation()}
          initial={{ scale: 0.92, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          exit={{ scale: 0.95, opacity: 0 }}
          transition={{ duration: 0.25, ease: "easeOut" }}
          className="
            relative
            w-full max-w-md
            p-6
            rounded-2xl

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
              rounded-2xl
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
              rounded-2xl
              shadow-inner
              shadow-white/10
            "
          />

          {/* Conteúdo */}
          <div className="relative z-10">
            <h2 className="text-lg font-semibold mb-3">Projeto indisponível</h2>

            <p className="text-sm text-gray-300 mb-6">{message}</p>

            <div className="flex justify-end">
              <button
                onClick={onClose}
                className="
                  px-4 py-2
                  rounded-md
                  bg-orange-500/90
                  hover:bg-orange-600
                  transition
                "
              >
                Entendi
              </button>
            </div>
          </div>
        </motion.div>
      </motion.div>
    </AnimatePresence>
  );
}
