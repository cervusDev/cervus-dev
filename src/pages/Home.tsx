import { motion } from "framer-motion";
import { ResumeCard } from "@/components/ResumeCard";
import { GiftEmailModal } from "@/components/SendGift";

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
            Desenvolvedor Full Stack / AWS
          </span>

          <h1 className="text-4xl md:text-6xl font-bold leading-tight">
            Olá, eu sou{" "}
            <span className="text-orange-400">Gustavo Henrique</span>
          </h1>

          <p className="text-zinc-400 text-lg max-w-xl">
            Desenvolvedor especializado em desenvolvimento de aplicações
            escaláveis e performáticas.
          </p>
          <GiftEmailModal />
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="relative"
        >
          <ResumeCard />
        </motion.div>
      </section>
      <section className="w-screen absolute left-1/2 bottom-0 right-1/2 -ml-[50vw] -mr-[50vw] overflow-hidden"></section>
    </main>
  );
}
