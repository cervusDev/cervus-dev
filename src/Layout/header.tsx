import { useState } from "react";
import { Menu, X } from "lucide-react";
import { NavLink } from "react-router";
import { motion, AnimatePresence } from "framer-motion";

function Header() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="text-white relative z-50">
      {/* Top bar */}
      <div className="max-w-7xl mx-auto px-4 py-4 flex items-center justify-between">
        <div className="text-orange-500 text-2xl font-bold ml-[16px] neon-text-purple">
          <NavLink to="/">Cervera</NavLink>
        </div>

        {/* Desktop nav */}
        <nav className="hidden md:flex space-x-8">
          <NavLink
            to="/portifolio"
            className="hover:text-orange-500 transition-colors"
          >
            Portifólio
          </NavLink>
          <NavLink
            to="/aplicativos"
            className="hover:text-orange-500 transition-colors"
          >
            Aplicativos
          </NavLink>
          <NavLink
            to="/contato"
            className="hover:text-orange-500 transition-colors"
          >
            Contato
          </NavLink>
        </nav>

        {/* Mobile trigger */}
        <button
          className="md:hidden text-white focus:outline-none"
          onClick={() => setIsOpen((prev) => !prev)}
          aria-label="Abrir menu"
        >
          {isOpen ? <X size={26} /> : <Menu size={26} />}
        </button>
      </div>

      {/* Mobile navigation (dropdown) */}
      <AnimatePresence>
        {isOpen && (
          <motion.nav
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.25, ease: "easeOut" }}
            className="
  md:hidden
  overflow-hidden

  bg-white/10
  backdrop-blur-xl

  border-t border-white/20
  shadow-[0_8px_30px_rgba(0,0,0,0.25)]

  relative
  z-[1001]
"
          >
            <div className="max-w-7xl mx-auto px-6 py-4 flex flex-col gap-4">
              <NavLink
                to="/portifolio"
                onClick={() => setIsOpen(false)}
                className="
  w-full
  px-4 py-3
  rounded-xl

  text-sm font-semibold
  text-white/90

  bg-white/10
  backdrop-blur-md

  border border-white/20
  shadow-[inset_0_1px_0_rgba(255,255,255,0.25)]

  hover:bg-white/20
  hover:border-white/30
  hover:text-orange-400

  active:scale-[0.97]

  transition-all duration-200
"
              >
                Portifólio
              </NavLink>

              <NavLink
                to="/aplicativos"
                className="
  w-full
  px-4 py-3
  rounded-xl

  text-sm font-semibold
  text-white/90

  bg-white/10
  backdrop-blur-md

  border border-white/20
  shadow-[inset_0_1px_0_rgba(255,255,255,0.25)]

  hover:bg-white/20
  hover:border-white/30
  hover:text-orange-400

  active:scale-[0.97]

  transition-all duration-200
"
                onClick={() => setIsOpen(false)}
              >
                Aplicativos
              </NavLink>

              <NavLink
                to="/contato"
                className="
  w-full
  px-4 py-3
  rounded-xl

  text-sm font-semibold
  text-white/90

  bg-white/10
  backdrop-blur-md

  border border-white/20
  shadow-[inset_0_1px_0_rgba(255,255,255,0.25)]

  hover:bg-white/20
  hover:border-white/30
  hover:text-orange-400

  active:scale-[0.97]

  transition-all duration-200
"
                onClick={() => setIsOpen(false)}
              >
                Contato
              </NavLink>
            </div>
          </motion.nav>
        )}
      </AnimatePresence>
    </header>
  );
}

export default Header;
