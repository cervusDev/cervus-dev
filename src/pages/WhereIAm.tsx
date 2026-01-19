import { Library, Mail, Activity } from "lucide-react";
import TooltipIconWrapper from "../components/TooltipIcon";
import { NavLink } from "react-router";
import { motion } from "framer-motion";

function WhereIam() {
  return (
    <section className="py-16">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="space-y-6"
      >
        <div className="max-w-7xl mx-auto px-4">
          <h2 className="text-3xl font-bold mb-8 text-white">Onde estou?</h2>

          <h3 className="text-2xl">Empresa - Local</h3>

          <div className="w-[80%] mt-8">
            <p className="text-white text-lg">
              Atualmente estou trabalhando na{" "}
              <NavLink
                to="https://www.instagram.com/racsistemas/"
                target="_blank"
                className="text-orange-500 cursor-pointer"
              >
                @racsistemas
              </NavLink>{" "}
              como desenvolvedor. Confira mais sobre a empresa em{" "}
              <NavLink
                to="https://www.racsys.com.br/"
                target="_blank"
                className="text-orange-500 cursor-pointer"
              >
                https://www.racsys.com.br/
              </NavLink>
              .
            </p>
          </div>

          <section className="py-4">
            <h2 className="text-2xl font-bold mb-4">📍 Localização</h2>

            <div className="w-full h-[450px] rounded-2xl overflow-hidden shadow-lg border border-gray-200">
              <iframe
                title="Localização da Empresa"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d7364.048154739216!2d-49.36687235!3d-20.799792149999998!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x94bdad4d25e51ff5%3A0x7db84c7a4cc68760!2sR.%20Tupi%2C%201945%20-%20Jardim%20Francisco%20Fernandes%2C%20S%C3%A3o%20Jos%C3%A9%20do%20Rio%20Preto%20-%20SP%2C%2015090-255!5e0!3m2!1spt-BR!2sbr!4v1729001907053!5m2!1spt-BR!2sbr"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              ></iframe>
            </div>

            <p className="mt-4 text-sm">
              Rua Tupi, 1945 — Jardim Francisco Fernandes, São José do Rio Preto
              - SP
            </p>
          </section>

          <div className="flex items-center space-x-6 mt-20 justify-center">
            <TooltipIconWrapper
              content={
                <a
                  href="https://www.linkedin.com/in/seu-perfil"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-orange-500 hover:text-orange-400 transition-colors"
                >
                  <Library size={28} />
                </a>
              }
              message="Acesse meu LinkedIn"
            />
            <TooltipIconWrapper
              content={
                <a
                  href="mailto:seuemail@exemplo.com"
                  className="text-orange-500 hover:text-orange-400 transition-colors"
                >
                  <Mail size={28} />
                </a>
              }
              message="Me envie um email"
            />
            <TooltipIconWrapper
              content={
                <a
                  href="mailto:seuemail@exemplo.com"
                  className="text-orange-500 hover:text-orange-400 transition-colors"
                >
                  <Activity size={28} />
                </a>
              }
              message="Acesse meu github"
            />
          </div>
        </div>
      </motion.div>
    </section>
  );
}

export default WhereIam;
