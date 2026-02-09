import { postsData } from "@/models/posts";
import { motion } from "framer-motion";
import { NavLink } from "react-router";

function Posts() {
  return (
    <section className="py-12">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="space-y-6"
      >
        <div className="max-w-7xl mx-auto px-4">
          <h2 className="text-3xl font-bold mb-8 text-white">Reflexões</h2>

          <div className="w-[80%] mb-12">
            <p className="text-white text-lg mt-4">
              Nesta sessão compartilho{" "}
              <span className="text-orange-500">textos e reflexões</span> sobre
              minha experiência ao longo da carreira.
              <br />
              São conteúdos que abordam{" "}
              <span className="text-orange-500">
                boas práticas, tecnologias e aprendizados
              </span>{" "}
              adquiridos em mais de 5 anos atuando como desenvolvedor.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {postsData.map((post) => (
              <NavLink key={post.id} to={`/textos/${post.id}`}>
                <div className="glass-card">
                  <h3 className="text-xl font-semibold mb-2 text-white truncate">
                    {post.title}
                  </h3>
                  <p className="text-white/80 overflow-hidden text-ellipsis line-clamp-4">
                    {post.description}
                  </p>
                </div>
              </NavLink>
            ))}
          </div>
        </div>
      </motion.div>
    </section>
  );
}

export default Posts;
