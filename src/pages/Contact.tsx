// src/components/ContactSection.tsx
import { AirVent, Mail, Activity } from "lucide-react";

function Contact() {
  return (
    <section className="py-16">
      <div className="text-center">
        <h2 className="text-3xl font-bold text-white mb-4">Entre em Contato</h2>
        <p className="text-gray-300 text-lg mb-12">
          Ficarei feliz em conversar sobre projetos, oportunidades ou apenas
          trocar ideias. Escolha uma das opções abaixo para entrar em contato
          comigo:
        </p>

        <div className="flex justify-center gap-10">
          <div className="relative group">
            <a
              href="https://www.linkedin.com/in/seu-perfil"
              target="_blank"
              rel="noopener noreferrer"
              className="text-orange-500 hover:text-orange-400 transition-colors"
            >
              <AirVent size={40} />
            </a>
            <span className="absolute -top-10 left-1/2 -translate-x-1/2 bg-gray-800 text-white text-sm px-2 py-1 rounded opacity-0 group-hover:opacity-100 transition-all whitespace-nowrap">
              Acesse meu LinkedIn
            </span>
          </div>

          <div className="relative group">
            <a
              href="mailto:seuemail@exemplo.com"
              className="text-orange-500 hover:text-orange-400 transition-colors"
            >
              <Mail size={40} />
            </a>
            <span className="absolute -top-10 left-1/2 -translate-x-1/2 bg-gray-800 text-white text-sm px-2 py-1 rounded opacity-0 group-hover:opacity-100 transition-all whitespace-nowrap">
              Me envie um email
            </span>
          </div>

          <div className="relative group">
            <a
              href="https://github.com/seuusuario"
              target="_blank"
              rel="noopener noreferrer"
              className="text-orange-500 hover:text-orange-400 transition-colors"
            >
              <Activity size={40} />
            </a>
            <span className="absolute -top-10 left-1/2 -translate-x-1/2 bg-gray-800 text-white text-sm px-2 py-1 rounded opacity-0 group-hover:opacity-100 transition-all whitespace-nowrap">
              Veja meus repositórios
            </span>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Contact;
