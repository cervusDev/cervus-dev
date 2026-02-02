import { motion } from "framer-motion";
import projects from '@/constants/projects';
import { Timeline } from "@/components/Timeline";

function Projects() {
  return (
    <section className="py-12">
       <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="space-y-6"
      > 
      <div className="max-w-7xl mx-auto px-4">
        <h2 className="text-3xl font-bold mb-8 text-white">Projetos</h2>

        <div className="w-[80%] mb-12">
          <p className="text-white text-lg mt-4">
            Ao longo de mais de{" "}
            <span className="text-orange-500">5 anos de experiência</span>,
            trabalhei em diversos projetos que me permitiram adquirir
            conhecimento sólido e prático.
            <br />
            Nesta sessão, apresento alguns dos{" "}
            <span className="text-orange-500">projetos em que participei</span>.
          </p>
        </div>
        <Timeline
          data={projects}
        />
      </div>
      </motion.div>
    </section>
  );
}

export default Projects;
