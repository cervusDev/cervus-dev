import { useState } from "react";
import { Menu, X } from "lucide-react";
import { NavLink } from "react-router";

function Header() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="text-white relative z-50">
      <div className="max-w-7xl mx-auto px-4 py-4 flex items-center justify-between">
        <div className="text-orange-500 text-2xl font-bold ml-[16px] neon-text-purple">
          <NavLink to="/">Cervera</NavLink>
        </div>

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

        <button
          className="md:hidden text-white focus:outline-none"
          onClick={() => setIsOpen(true)}
        >
          <Menu size={28} />
        </button>
      </div>

      {isOpen && (
        <div className="fixed inset-0 bg-white/10 backdrop-blur-md flex justify-end">
          <nav className="bg-black/60 backdrop-blur-lg w-100 h-full p-6 flex flex-col space-y-6 shadow-lg border-l border-white/20 relative">
            <button
              className="absolute top-4 right-4 text-white"
              onClick={() => setIsOpen(false)}
            >
              <X size={28} />
            </button>

            <div className="mt-12 flex flex-col space-y-6">
              <NavLink
                to="/portifolio"
                className="hover:text-orange-500 transition-colors"
                onClick={() => setIsOpen(false)}
              >
                Portifólio
              </NavLink>
              <NavLink
                to="/aplicativos"
                className="hover:text-orange-500 transition-colors"
                onClick={() => setIsOpen(false)}
              >
                Aplicativoss
              </NavLink>
              <NavLink
                to="/contato"
                className="hover:text-orange-500 transition-colors"
                onClick={() => setIsOpen(false)}
              >
                Contato
              </NavLink>
            </div>
          </nav>
        </div>
      )}
    </header>
  );
}

export default Header;
