"use client";

import { dict } from "@/i18n/dictionary";
import { useI18n } from "@/components/i18nProvider";
import { ChevronDown, Sparkles, Zap, Code, Cpu, Terminal } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import Image from "next/image";

export default function HeroSection() {
  const { lang } = useI18n();
  const t = dict[lang];
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  // Dados para o carrossel "As featured in"
  const featuredLogos = [
    { name: "GitHub", logo: "/github-logo.svg", url: "https://github.com" },
    {
      name: "Stack Overflow",
      logo: "/stackoverflow-logo.svg",
      url: "https://stackoverflow.com",
    },
    { name: "DEV Community", logo: "/dev-logo.svg", url: "https://dev.to" },
    {
      name: "Hashnode",
      logo: "/hashnode-logo.svg",
      url: "https://hashnode.com",
    },
    { name: "Medium", logo: "/medium-logo.svg", url: "https://medium.com" },
    {
      name: "FreeCodeCamp",
      logo: "/freecodecamp-logo.svg",
      url: "https://freecodecamp.org",
    },
  ];

  // Efeito de digitação para o nome
  const name = "Carlos Wendorff";
  const role = t.role;

  if (!mounted) {
    return <HeroSkeleton />;
  }

  return (
    <section
      id="hero"
      className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-b from-[#0b1220] via-[#0d1525] to-[#0b1220]"
    >
      {/* Elementos decorativos de fundo */}
      <div className="absolute inset-0 overflow-hidden">
        {/* Grid de pontos */}
        <div className="absolute inset-0 opacity-10">
          <div
            className="absolute inset-0"
            style={{
              backgroundImage: `radial-gradient(circle at 1px 1px, rgba(255,255,255,0.2) 1px, transparent 0)`,
              backgroundSize: "40px 40px",
            }}
          ></div>
        </div>

        {/* Bolhas animadas */}
        <div className="absolute top-20 left-10 w-64 h-64 bg-cyan-500/5 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-purple-500/5 rounded-full blur-3xl animate-pulse delay-1000"></div>

        {/* Linhas ciano animadas */}
        <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-cyan-500/30 to-transparent animate-pulse"></div>
        <div className="absolute bottom-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-purple-500/30 to-transparent animate-pulse"></div>
      </div>

      {/* Elemento decorativo flutuante (substitui o círculo amarelo) */}
      <FloatingTechIcons />

      <div className="container relative z-10 mx-auto px-6 py-24">
        <div className="max-w-7xl mx-auto">
          {/* Espaçador superior */}
          <div className="h-20 md:h-32"></div>

          {/* Nome com efeito de entrada */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="text-center mb-1"
          >
            <div className="relative inline-block">
              {/* Glow effect */}
              <div className="absolute -inset-4 bg-gradient-to-r from-cyan-500/20 to-purple-500/20 rounded-full blur-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>

              <h1 className="relative text-5xl md:text-7xl lg:text-8xl font-bold tracking-tight">
                <span className="bg-gradient-to-r from-cyan-400 via-cyan-300 to-purple-400 bg-clip-text text-transparent animate-gradient-x">
                  Carlos
                </span>
                <span className="text-white ml-4">Wendorff</span>
              </h1>

              {/* Subtitle com efeito de digitação */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.5, duration: 0.6 }}
                className="mt-6"
              >
                <div className="flex flex-wrap items-center justify-center gap-3 text-lg md:text-xl text-white/70">
                  <Code className="w-5 h-5 text-cyan-400" />
                  <span>{t.role}</span>
                  <span className="text-white/30">•</span>
                  <Cpu className="w-5 h-5 text-purple-400" />
                  <span>{t.roleJob}</span>
                  <span className="text-white/30">•</span>
                  <Terminal className="w-5 h-5 text-cyan-400" />
                  <span>{t.roleLang}</span>
                </div>
              </motion.div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.8, duration: 0.6 }}
            className="max-w-3xl mx-auto mt-12"
          >
            <p className="text-lg md:text-xl text-white/60 text-center leading-relaxed">
              {t.desc}
            </p>
          </motion.div>

          {/* Botões CTA */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1, duration: 0.6 }}
            className="flex flex-wrap justify-center gap-4 mt-12"
          >
            <Button
              size="lg"
              className="bg-gradient-to-r from-cyan-500 to-blue-500 text-white hover:from-cyan-600 hover:to-blue-600 hover:scale-105 transition-all duration-300 group"
              onClick={() =>
                document
                  .getElementById("work")
                  ?.scrollIntoView({ behavior: "smooth" })
              }
            >
              <Zap className="w-5 h-5 mr-2 group-hover:rotate-12 transition-transform" />
              {t.projects}
            </Button>

            <Button
              size="lg"
              variant="outline"
              className="border-white/20 text-white hover:bg-white/5 hover:border-white/40 hover:scale-105 transition-all duration-300 group"
              onClick={() =>
                document
                  .getElementById("contact")
                  ?.scrollIntoView({ behavior: "smooth" })
              }
            >
              <Sparkles className="w-5 h-5 mr-2 group-hover:rotate-180 transition-transform duration-500" />
              {t.contact.email}
            </Button>
          </motion.div>

          {/* <FeaturedCarousel logos={featuredLogos} /> */}

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1.5, duration: 0.6 }}
            className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
          >
            <button
              onClick={() =>
                document
                  .getElementById("expertise")
                  ?.scrollIntoView({ behavior: "smooth" })
              }
              className="flex flex-col items-center gap-2 text-white/40 hover:text-white/60 transition-colors group "
              aria-label="Scroll to next section"
            >
              <span className="text-sm tracking-wider">{t.explore}</span>
              <motion.div
                animate={{ y: [0, 10, 0] }}
                transition={{ repeat: Infinity, duration: 2 }}
              >
                <ChevronDown className="w-6 h-6 group-hover:scale-110 transition-transform" />
              </motion.div>
            </button>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

// Componente para ícones flutuantes
function FloatingTechIcons() {
  const icons = [
    { icon: "React", color: "text-cyan-400", x: "10%", y: "20%", delay: 0 },
    { icon: "Java", color: "text-red-400", x: "85%", y: "30%", delay: 0.3 },
    { icon: "TS", color: "text-blue-400", x: "15%", y: "70%", delay: 0.6 },
    { icon: "K8s", color: "text-blue-300", x: "80%", y: "75%", delay: 0.9 },
    { icon: "AWS", color: "text-orange-400", x: "40%", y: "15%", delay: 1.2 },
    { icon: "Docker", color: "text-blue-200", x: "60%", y: "85%", delay: 1.5 },
  ];

  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
      {icons.map((item, index) => (
        <motion.div
          key={index}
          className={`absolute text-2xl font-bold ${item.color} opacity-10`}
          style={{ left: item.x, top: item.y }}
          initial={{ opacity: 0, scale: 0 }}
          animate={{
            opacity: [0.05, 0.1, 0.05],
            scale: [1, 1.1, 1],
            y: [0, -20, 0],
          }}
          transition={{
            duration: 4,
            delay: item.delay,
            repeat: Infinity,
            repeatType: "reverse",
          }}
        >
          {item.icon}
        </motion.div>
      ))}
    </div>
  );
}

function HeroSkeleton() {
  return (
    <section className="min-h-screen flex items-center justify-center bg-gradient-to-b from-[#0b1220] to-[#0d1525]">
      <div className="container mx-auto px-6 py-24">
        <div className="max-w-7xl mx-auto">
          <div className="h-32"></div>

          <div className="text-center mb-8">
            <div className="h-20 bg-white/5 rounded-lg mb-4 max-w-2xl mx-auto animate-pulse"></div>
            <div className="h-6 bg-white/5 rounded-lg max-w-lg mx-auto animate-pulse"></div>
          </div>

          <div className="max-w-3xl mx-auto mt-12">
            <div className="h-24 bg-white/5 rounded-lg animate-pulse"></div>
          </div>

          <div className="flex justify-center gap-4 mt-12">
            <div className="w-40 h-12 bg-white/5 rounded-lg animate-pulse"></div>
            <div className="w-40 h-12 bg-white/5 rounded-lg animate-pulse"></div>
          </div>
        </div>
      </div>
    </section>
  );
}
