"use client";

import { dict } from "@/i18n/dictionary";
import { useI18n } from "@/components/i18nProvider";
import {
  Mail,
  Linkedin,
  Github,
  MapPin,
  ArrowUpRight,
  Send,
  Sparkles,
  Heart,
  ArrowBigUpDashIcon,
} from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { useEffect, useState } from "react";

// Dados de contato
const contactData = {
  email: "carlosmwendorffDev@gmail.com",
  linkedin: "https://www.linkedin.com/in/carlos-manoel-wendorff-66b875228",
  github: "https://github.com/carlosManoelWendorff1",
};

// Partículas pré-definidas (sem Math.random no render inicial)
const particles = [
  { left: "10%", top: "20%", delay: "0s", duration: "3.5s" },
  { left: "25%", top: "60%", delay: "0.5s", duration: "4s" },
  { left: "40%", top: "30%", delay: "1s", duration: "3s" },
  { left: "60%", top: "50%", delay: "1.5s", duration: "4.5s" },
  { left: "75%", top: "25%", delay: "0.2s", duration: "3.8s" },
  { left: "85%", top: "70%", delay: "0.8s", duration: "4.2s" },
  { left: "15%", top: "80%", delay: "0.3s", duration: "3.2s" },
  { left: "35%", top: "85%", delay: "1.2s", duration: "3.7s" },
  { left: "55%", top: "15%", delay: "0.7s", duration: "4.1s" },
  { left: "90%", top: "40%", delay: "0.4s", duration: "3.9s" },
  { left: "5%", top: "45%", delay: "1.1s", duration: "3.3s" },
  { left: "65%", top: "75%", delay: "0.6s", duration: "4.3s" },
  { left: "45%", top: "65%", delay: "1.3s", duration: "3.6s" },
  { left: "20%", top: "35%", delay: "0.9s", duration: "4.4s" },
  { left: "80%", top: "55%", delay: "0.1s", duration: "3.4s" },
];

export default function Contact() {
  const { lang } = useI18n();
  const t = dict[lang];
  const [currentYear, setCurrentYear] = useState(2024); // Valor fixo inicial
  const [isVisible, setIsVisible] = useState(false);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
    setCurrentYear(new Date().getFullYear());
    setIsVisible(true);
  }, []);

  const handleEmailClick = () => {
    window.location.href = `mailto:${contactData.email}`;
  };

  const handleSocialClick = (url: string) => {
    window.open(url, "_blank", "noopener,noreferrer");
  };

  if (!mounted) {
    return (
      <footer
        id="contact"
        className="relative bg-gradient-to-b from-[#1a1f2e] to-[#0b1220] pt-24 pb-12 overflow-hidden"
        style={{ height: "800px" }} // Altura aproximada para evitar layout shift
      >
        <div className="max-w-6xl mx-auto px-6">
          <div className="text-center">
            <div className="h-12 bg-white/5 rounded-lg mb-6 animate-pulse max-w-md mx-auto"></div>
            <div className="h-8 bg-white/5 rounded-lg mb-4 animate-pulse max-w-2xl mx-auto"></div>
          </div>
        </div>
      </footer>
    );
  }

  return (
    <footer
      id="contact"
      className="relative bg-gradient-to-b from-[#1a1f2e] to-[#0b1220] pt-24 pb-12 overflow-hidden"
    >
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-1/4 left-1/4 w-72 h-72 bg-purple-500/10 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-cyan-500/10 rounded-full blur-3xl animate-pulse delay-1000"></div>

        {particles.map((particle, i) => (
          <div
            key={i}
            className="absolute w-1 h-1 bg-white/20 rounded-full"
            style={{
              left: particle.left,
              top: particle.top,
              animation: `float ${particle.duration} infinite ease-in-out`,
              animationDelay: particle.delay,
            }}
          ></div>
        ))}
      </div>

      <div className="max-w-6xl mx-auto px-6 relative z-10">
        <div
          className={`text-center mb-16 transition-all duration-1000 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
          }`}
        >
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-purple-500/10 to-cyan-500/10 border border-white/10 rounded-full mb-6">
            <Sparkles className="w-4 h-4 text-purple-300" />
            <span className="text-white/80 text-sm">
              {t.contact.availability}
            </span>
          </div>

          <h2 className="text-4xl md:text-6xl font-bold bg-gradient-to-r from-purple-400 to-cyan-400 bg-clip-text text-transparent mb-6">
            {t.contact.title}
          </h2>

          <p className="text-white/70 text-lg md:text-xl max-w-2xl mx-auto mb-8">
            {t.contact.subtitle}
          </p>

          <div className="flex items-center justify-center gap-2 text-white/60 mb-12">
            <MapPin className="w-5 h-5" />
            <span>{t.contact.location}</span>
          </div>
        </div>

        <div
          className={`grid md:grid-cols-3 gap-6 mb-16 transition-all duration-1000 delay-200 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
          }`}
        >
          <div className="group">
            <Card className="relative bg-gradient-to-b from-white/5 to-white/[0.02] border border-white/10 backdrop-blur-sm hover:border-blue-500/30 transition-all duration-300 hover:scale-[1.02]">
              <CardHeader>
                <div className="flex items-center justify-between mb-4">
                  <div className="p-3 rounded-xl bg-gradient-to-br from-blue-500/20 to-cyan-500/20">
                    <Mail className="w-6 h-6 text-blue-300" />
                  </div>
                  <ArrowUpRight className="w-5 h-5 text-white/40 group-hover:text-blue-400 transition-colors" />
                </div>
                <CardTitle className="text-white">{t.contact.email}</CardTitle>
              </CardHeader>

              <CardContent>
                <p className="text-white/60 text-sm mb-6">
                  Clique para enviar um e-mail diretamente
                </p>
                <Button
                  onClick={handleEmailClick}
                  className="w-full bg-gradient-to-r from-blue-500/20 to-cyan-500/20 text-white hover:from-blue-500/30 hover:to-cyan-500/30 border border-blue-500/30 hover:border-blue-400/50"
                >
                  <Send className="w-4 h-4 mr-2" />
                  Enviar E-mail
                </Button>
              </CardContent>
            </Card>
          </div>

          <div className="group">
            <Card className="relative bg-gradient-to-b from-white/5 to-white/[0.02] border border-white/10 backdrop-blur-sm hover:border-blue-600/30 transition-all duration-300 hover:scale-[1.02]">
              <CardHeader>
                <div className="flex items-center justify-between mb-4">
                  <div className="p-3 rounded-xl bg-gradient-to-br from-blue-600/20 to-blue-400/20">
                    <Linkedin className="w-6 h-6 text-blue-300" />
                  </div>
                  <ArrowUpRight className="w-5 h-5 text-white/40 group-hover:text-blue-500 transition-colors" />
                </div>
                <CardTitle className="text-white">
                  {t.contact.linkedin}
                </CardTitle>
              </CardHeader>

              <CardContent>
                <p className="text-white/60 text-sm mb-6">
                  Conecte-se comigo profissionalmente
                </p>
                <Button
                  onClick={() => handleSocialClick(contactData.linkedin)}
                  className="w-full bg-gradient-to-r from-blue-600/20 to-blue-400/20 text-white hover:from-blue-600/30 hover:to-blue-400/30 border border-blue-600/30 hover:border-blue-500/50"
                >
                  Ver Perfil
                </Button>
              </CardContent>
            </Card>
          </div>

          <div className="group">
            <Card className="relative bg-gradient-to-b from-white/5 to-white/[0.02] border border-white/10 backdrop-blur-sm hover:border-blue-200/30 transition-all duration-300 hover:scale-[1.02]">
              <CardHeader>
                <div className="flex items-center justify-between mb-4">
                  <div className="p-3 rounded-xl bg-gradient-to-br from-gray-700/20 to-gray-900/20">
                    <Github className="w-6 h-6 text-gray-300" />
                  </div>
                  <ArrowUpRight className="w-5 h-5 text-white/40 group-hover:text-gray-400 transition-colors" />
                </div>
                <CardTitle className="text-white">{t.contact.github}</CardTitle>
              </CardHeader>

              <CardContent>
                <p className="text-white/60 text-sm mb-6">
                  Veja meus projetos e contribuições
                </p>
                <Button
                  onClick={() => handleSocialClick(contactData.github)}
                  className="w-full bg-gradient-to-r from-gray-700/20 to-gray-900/20 text-white hover:from-gray-700/30 hover:to-gray-900/30 border border-gray-700/30 hover:border-gray-600/50"
                >
                  Ver Repositórios
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>

        {/* Footer Final */}
        <div
          className={`text-center pt-8 border-t border-white/10 transition-all duration-1000 delay-600 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
          }`}
        >
          <div className="flex flex-col md:flex-row justify-between items-center gap-4 mb-8">
            <div className="text-white/60 text-sm">
              {t.contact.copyright.replace("{year}", currentYear.toString())}
            </div>

            <div className="flex items-center gap-6">
              <button
                onClick={handleEmailClick}
                className="text-white/60 hover:text-white transition-colors flex items-center gap-2 group"
              >
                <Mail className="w-4 h-4" />
                <span className="group-hover:underline">E-mail</span>
              </button>

              <button
                onClick={() => handleSocialClick(contactData.linkedin)}
                className="text-white/60 hover:text-blue-400 transition-colors flex items-center gap-2 group"
              >
                <Linkedin className="w-4 h-4" />
                <span className="group-hover:underline">LinkedIn</span>
              </button>

              <button
                onClick={() => handleSocialClick(contactData.github)}
                className="text-white/60 hover:text-gray-300 transition-colors flex items-center gap-2 group"
              >
                <Github className="w-4 h-4" />
                <span className="group-hover:underline">GitHub</span>
              </button>
            </div>
          </div>

          {/* Mensagem final */}
          <div className="flex items-center justify-center gap-2 text-white/40 text-sm">
            <span>{t.madeWithLove}</span>
            <Heart className="w-4 h-4 text-pink-400 fill-pink-400 animate-pulse" />
            <span>{t.used}</span>
          </div>
        </div>
      </div>

      {/* Botão de voltar ao topo - apenas se estiver scrollado */}
      <ScrollToTopButton />

      <style jsx>{`
        @keyframes float {
          0%,
          100% {
            transform: translateY(0) rotate(0deg);
          }
          50% {
            transform: translateY(-20px) rotate(180deg);
          }
        }

        @keyframes pulse-glow {
          0%,
          100% {
            opacity: 0.1;
          }
          50% {
            opacity: 0.3;
          }
        }
      `}</style>
    </footer>
  );
}

// Componente separado para o botão de scroll
function ScrollToTopButton() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const toggleVisibility = () => {
      if (window.pageYOffset > 300) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    window.addEventListener("scroll", toggleVisibility);
    return () => window.removeEventListener("scroll", toggleVisibility);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  if (!isVisible) return null;

  return (
    <button
      onClick={scrollToTop}
      className="fixed bottom-8 right-8 p-3 rounded-full bg-gradient-to-r from-purple-500/20 to-cyan-500/20 border border-white/10 backdrop-blur-sm text-white hover:scale-110 transition-all duration-300 hover:border-white/30 z-50"
      aria-label="Voltar ao topo"
    >
      <ArrowBigUpDashIcon className="w-5 h-5 " />
    </button>
  );
}
