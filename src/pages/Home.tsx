import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";

export default function Home() {
  return (
    <main>
      <section className="container mx-auto px-6 pt-24 pb-32 grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="space-y-6"
        >
          <span className="inline-block rounded-full bg-emerald-500/10 text-orange-400 px-4 py-1 text-sm">
            Desenvolvedor Full Stack / Mobile
          </span>

          <h1 className="text-4xl md:text-6xl font-bold leading-tight">
            Olá, eu sou <span className="text-orange-400">Gustavo Henrique</span>
          </h1>

          <p className="text-zinc-400 text-lg max-w-xl">
            Desenvolvedor especializado em desenvolvimento web. Crio aplicações escaláveis, performáticas e com foco
            em experiência do usuário.
          </p>

          <div className="flex flex-wrap gap-4">
            <a
              href="/projetos"
              className="inline-flex items-center gap-2 rounded-xl bg-orange-500 px-6 py-3 font-medium text-white hover:bg-orange-400 transition"
            >
              Ver projetos <ArrowRight size={18} />
            </a>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="relative"
        >
          <div className="rounded-3xl bg-zinc-900/70 border border-zinc-800 p-10 shadow-2xl">
            <h3 className="text-xl font-semibold mb-6">Resumo rápido</h3>
            <ul className="space-y-4 text-zinc-400">
              <li>🚀 +5 anos de experiência com desenvolvimento web</li>
              <li>⚛️ Next.js, Node.js, React Native e Expo</li>
              <li>📱 Plataformas web, banco de dados e app mobile</li>
              <li>🧠 Código limpo, arquitetura e performance</li>
            </ul>
          </div>
        </motion.div>
      </section>
    </main>
  );
}
