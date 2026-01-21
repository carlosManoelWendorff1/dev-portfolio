"use client";

import { dict } from "@/i18n/dictionary";
import { useI18n } from "@/components/i18nProvider";
import { ExternalLink, ArrowRight, Eye } from "lucide-react";
import { Button } from "@/components/ui/button";
import { motion, Variants } from "framer-motion";
import { useEffect, useState } from "react";

export default function Work() {
  const { lang } = useI18n();
  const t = dict[lang];
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  // Animação de entrada dos cards - CORRIGIDO OS TIPOS
  const containerVariants: Variants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.2,
      },
    },
  };

  const itemVariants: Variants = {
    hidden: {
      y: 20,
      opacity: 0,
    },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.5,
        ease: "easeOut" as const, // Adicionando 'as const' para o tipo correto
      },
    },
  };

  // Variantes para o cabeçalho (sem usar itemVariants)
  const headerVariants: Variants = {
    hidden: {
      opacity: 0,
      y: -20,
    },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: "easeOut",
      },
    },
  };

  if (!mounted) {
    return (
      <section
        id="projects"
        className="min-h-screen bg-gradient-to-b from-[#0b1220] to-[#0d1525] py-24"
      >
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <div className="h-12 bg-white/5 rounded-lg mb-4 max-w-md mx-auto animate-pulse"></div>
            <div className="h-6 bg-white/5 rounded-lg max-w-xl mx-auto animate-pulse"></div>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            {[...Array(6)].map((_, i) => (
              <div
                key={i}
                className="h-64 bg-white/5 rounded-xl animate-pulse"
              ></div>
            ))}
          </div>
        </div>
      </section>
    );
  }

  return (
    <section
      id="work"
      className="min-h-screen bg-gradient-to-b from-[#0b1220] to-[#0d1525] py-24"
    >
      <div className="max-w-7xl mx-auto px-6">
        {/* Cabeçalho - USANDO headerVariants */}
        <motion.div
          initial="hidden"
          animate="visible"
          variants={headerVariants}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-6xl font-bold bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent mb-4">
            {t.work.title}
          </h2>
          <p className="text-white/70 text-lg md:text-xl max-w-2xl mx-auto">
            {t.work.subtitle}
          </p>
        </motion.div>

        {/* Grid de Projetos */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.1 }}
          className="grid md:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          {t.work.items.map((project) => (
            <motion.div
              key={project.id}
              variants={itemVariants}
              className="group relative"
            >
              {/* Efeito de brilho no hover */}
              <div className="absolute -inset-0.5 bg-gradient-to-r from-cyan-500/20 to-purple-500/20 rounded-2xl blur opacity-0 group-hover:opacity-100 transition duration-500"></div>

              {/* Card */}
              <div className="relative bg-gradient-to-b from-white/5 to-white/[0.02] border border-white/10 backdrop-blur-sm rounded-xl overflow-hidden h-64">
                {/* Container da Imagem */}
                <div className="relative h-full overflow-hidden">
                  {/* Placeholder/Imagem */}
                  <div className="absolute inset-0 bg-gradient-to-br from-cyan-500/10 to-purple-500/10 flex items-center justify-center group-hover:scale-110 transition-transform duration-500">
                    <div className="text-4xl font-bold text-white/20">
                      {project.title.charAt(0)}
                    </div>
                  </div>

                  {/* Overlay com conteúdo */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent p-6 flex flex-col justify-end transition-all duration-300 group-hover:backdrop-blur-sm">
                    {/* Conteúdo normal (some no hover) */}
                    <div className="transition-all duration-300 group-hover:opacity-0 group-hover:translate-y-4">
                      <h3 className="text-xl font-bold text-white mb-1">
                        {project.title}
                      </h3>
                      <p className="text-white/60 text-sm">{project.type}</p>
                    </div>

                    {/* Botão de ver projeto (aparece no hover) */}
                    <div className="absolute inset-0 flex items-center justify-center transition-all duration-300 group-hover:opacity-100 group-hover:translate-y-0 opacity-0 translate-y-4">
                      <Button
                        onClick={() =>
                          window.open(
                            project.link,
                            "_blank",
                            "noopener,noreferrer",
                          )
                        }
                        className="bg-gradient-to-r from-cyan-500 to-purple-500 text-white hover:from-cyan-600 hover:to-purple-600 hover:scale-105 transition-all duration-300 group/btn"
                      >
                        <Eye className="w-4 h-4 mr-2 group-hover/btn:rotate-12 transition-transform" />
                        {t.work.viewProject}
                        <ArrowRight className="w-4 h-4 ml-2 group-hover/btn:translate-x-1 transition-transform" />
                      </Button>
                    </div>
                  </div>

                  {/* Badge de demo */}
                  {project.demo && (
                    <div className="absolute top-4 right-4">
                      <div className="px-3 py-1 bg-green-500/20 text-green-300 text-xs font-medium rounded-full border border-green-500/30 backdrop-blur-sm">
                        Live Demo
                      </div>
                    </div>
                  )}
                </div>
              </div>

              {/* Indicador de link externo (sutil) */}
              <div className="absolute bottom-4 left-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <ExternalLink className="w-4 h-4 text-white/40" />
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Call to Action no final */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 0.5, duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mt-16"
        >
          <p className="text-white/60 mb-6">
            {lang === "pt"
              ? "Interessado em ver mais projetos ou colaborar?"
              : "Interested in seeing more projects or collaborating?"}
          </p>
          <Button
            onClick={() =>
              window.open(
                "https://github.com/carlosManoelWendorff1",
                "_blank",
                "noopener,noreferrer",
              )
            }
            variant="outline"
            className="border-white/20 text-white hover:bg-white/5 hover:border-white/40"
          >
            <svg
              className="w-5 h-5 mr-2"
              fill="currentColor"
              viewBox="0 0 24 24"
              aria-hidden="true"
            >
              <path
                fillRule="evenodd"
                d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z"
              />
            </svg>
            {lang === "pt" ? "Ver mais no GitHub" : "View more on GitHub"}
          </Button>
        </motion.div>
      </div>
    </section>
  );
}
