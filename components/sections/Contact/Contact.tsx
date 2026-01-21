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
  User,
  MessageSquare,
  CheckCircle,
  Loader2,
} from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { useEffect, useState } from "react";
import emailjs from "@emailjs/browser";

// Dados de contato
const contactData = {
  email: "carlosmwendorff@gmail.com",
  linkedin: "https://www.linkedin.com/in/carlos-manoel-wendorff-66b875228",
  github: "https://github.com/carlosManoelWendorff1",
};

const EMAILJS_CONFIG = {
  serviceId: process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID as string,
  templateId: process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID as string,
  publicKey: process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY as string,
};
// Partículas pré-definidas
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
  const [currentYear, setCurrentYear] = useState(2024);
  const [isVisible, setIsVisible] = useState(false);
  const [mounted, setMounted] = useState(false);

  // Estados do formulário
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  const [error, setError] = useState("");

  useEffect(() => {
    setMounted(true);
    setCurrentYear(new Date().getFullYear());
    setIsVisible(true);

    // Inicializar EmailJS
    emailjs.init(EMAILJS_CONFIG.publicKey);
  }, []);

  const handleSocialClick = (url: string) => {
    window.open(url, "_blank", "noopener,noreferrer");
  };

  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
    setError("");
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Submitting form with data:", formData);
    console.log(EMAILJS_CONFIG);
    // Validação simples
    if (!formData.name || !formData.email || !formData.message) {
      setError("Por favor, preencha todos os campos obrigatórios.");
      return;
    }

    setIsSubmitting(true);
    setError("");

    try {
      const templateParams = {
        from_name: formData.name,
        from_email: formData.email,
        subject: formData.subject || `Mensagem de ${formData.name} - Portfólio`,
        message: formData.message,
        reply_to: formData.email,

        date: new Date().toLocaleDateString("pt-BR"),
        time: new Date().toLocaleTimeString("pt-BR"),
      };

      await emailjs.send(
        EMAILJS_CONFIG.serviceId,
        EMAILJS_CONFIG.templateId,
        templateParams,
        { publicKey: EMAILJS_CONFIG.publicKey },
      );

      setIsSuccess(true);
      setFormData({ name: "", email: "", subject: "", message: "" });

      setTimeout(() => setIsSuccess(false), 5000);
    } catch (err) {
      setError(
        "Erro ao enviar mensagem. Tente novamente ou use o email diretamente.",
      );
      console.error("EmailJS error:", err);
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleDirectEmail = () => {
    window.location.href = `mailto:${contactData.email}?subject=${encodeURIComponent(formData.subject || "Contato do Portfólio")}&body=${encodeURIComponent(`Nome: ${formData.name}\nEmail: ${formData.email}\n\n${formData.message}`)}`;
  };

  if (!mounted) {
    return (
      <footer
        id="contact"
        className="relative bg-gradient-to-b from-[#1a1f2e] to-[#0b1220] pt-24 pb-12 overflow-hidden"
        style={{ height: "800px" }}
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
      {/* Elementos decorativos */}
      <div className="absolute inset-0 overflow-hidden">
        {/* ... partículas permanecem iguais ... */}
      </div>

      <div className="max-w-6xl mx-auto px-6 relative z-10">
        {/* Cabeçalho */}
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

        <div className="grid md:grid-cols-2 gap-8 mb-16">
          {/* Formulário */}
          <div className="group">
            <Card className="relative bg-gradient-to-b from-white/5 to-white/[0.02] border border-white/10 backdrop-blur-sm">
              <CardHeader>
                <div className="flex items-center gap-4 mb-2">
                  <div className="p-3 rounded-xl bg-gradient-to-br from-purple-500/20 to-cyan-500/20">
                    <Mail className="w-6 h-6 text-cyan-300" />
                  </div>
                  <CardTitle className="text-white">
                    {t.contact.form.title}
                  </CardTitle>
                </div>
                <p className="text-white/60 text-sm">
                  {t.contact.form.description}
                </p>
              </CardHeader>

              <CardContent>
                {isSuccess ? (
                  <div className="text-center py-8">
                    <div className="inline-flex p-4 rounded-full bg-green-500/10 mb-4">
                      <CheckCircle className="w-12 h-12 text-green-400" />
                    </div>
                    <h3 className="text-xl font-bold text-white mb-2">
                      {t.contact.form.successTitle}
                    </h3>
                    <p className="text-white/60">
                      {t.contact.form.successMessage}
                    </p>
                  </div>
                ) : (
                  <form onSubmit={handleSubmit} className="space-y-4">
                    {error && (
                      <div className="p-3 bg-red-500/10 border border-red-500/20 rounded-lg text-red-300 text-sm">
                        {error}
                      </div>
                    )}

                    <div className="space-y-2">
                      <Label htmlFor="name" className="text-white/80">
                        <User className="w-4 h-4 inline mr-2" />
                        {t.contact.form.name} {t.contact.form.required}
                      </Label>
                      <Input
                        id="name"
                        name="name"
                        value={formData.name}
                        onChange={handleInputChange}
                        placeholder={t.contact.form.placeholder.name}
                        className="bg-white/5 border-white/10 text-white placeholder:text-white/30 focus:border-cyan-500/50"
                        required
                      />
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="email" className="text-white/80">
                        <Mail className="w-4 h-4 inline mr-2" />
                        {t.contact.form.email} {t.contact.form.required}
                      </Label>
                      <Input
                        id="email"
                        name="email"
                        type="email"
                        value={formData.email}
                        onChange={handleInputChange}
                        placeholder={t.contact.form.placeholder.email}
                        className="bg-white/5 border-white/10 text-white placeholder:text-white/30 focus:border-cyan-500/50"
                        required
                      />
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="subject" className="text-white/80">
                        {t.contact.form.subject} {t.contact.form.optional}
                      </Label>
                      <Input
                        id="subject"
                        name="subject"
                        value={formData.subject}
                        onChange={handleInputChange}
                        placeholder={t.contact.form.placeholder.subject}
                        className="bg-white/5 border-white/10 text-white placeholder:text-white/30 focus:border-cyan-500/50"
                      />
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="message" className="text-white/80">
                        <MessageSquare className="w-4 h-4 inline mr-2" />
                        {t.contact.form.message} {t.contact.form.required}
                      </Label>
                      <Textarea
                        id="message"
                        name="message"
                        value={formData.message}
                        onChange={handleInputChange}
                        placeholder={t.contact.form.placeholder.message}
                        rows={4}
                        className="bg-white/5 border-white/10 text-white placeholder:text-white/30 focus:border-cyan-500/50 resize-none"
                        required
                      />
                    </div>

                    <div className="flex flex-wrap gap-3 pt-2">
                      <Button
                        type="submit"
                        disabled={isSubmitting}
                        className="flex-1 bg-gradient-to-r from-cyan-500 to-blue-500 text-white hover:from-cyan-600 hover:to-blue-600 disabled:opacity-50 disabled:cursor-not-allowed"
                      >
                        {isSubmitting ? (
                          <>
                            <Loader2 className="w-4 h-4 mr-2 animate-spin" />
                            {t.contact.form.sending}
                          </>
                        ) : (
                          <>
                            <Send className="w-4 h-4 mr-2" />
                            {t.contact.form.sendButton}
                          </>
                        )}
                      </Button>

                      <Button
                        type="button"
                        variant="outline"
                        onClick={handleDirectEmail}
                        className="border-white/20 text-white hover:bg-white/5"
                      >
                        {t.contact.form.directEmailButton}
                      </Button>
                    </div>
                  </form>
                )}
              </CardContent>
            </Card>
          </div>

          {/* Cards Laterais */}
          <div className="space-y-6">
            {/* LinkedIn Card */}
            <div className="group">
              <Card className="relative bg-gradient-to-b from-white/5 to-white/[0.02] border border-white/10 backdrop-blur-sm hover:border-blue-600/30 transition-all duration-300 hover:scale-[1.02]">
                <CardHeader>
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-4">
                      <div className="p-3 rounded-xl bg-gradient-to-br from-blue-600/20 to-blue-400/20">
                        <Linkedin className="w-6 h-6 text-blue-300" />
                      </div>
                      <CardTitle className="text-white">
                        {t.contact.cards.linkedin.title}
                      </CardTitle>
                    </div>
                    <ArrowUpRight className="w-5 h-5 text-white/40 group-hover:text-blue-500 transition-colors" />
                  </div>
                </CardHeader>

                <CardContent>
                  <p className="text-white/60 text-sm mb-4">
                    {t.contact.cards.linkedin.description}
                  </p>
                  <Button
                    onClick={() => handleSocialClick(contactData.linkedin)}
                    className="w-full bg-gradient-to-r from-blue-600/10 to-blue-400/10 text-white hover:from-blue-600/20 hover:to-blue-400/20 border border-blue-600/20 hover:border-blue-500/40"
                  >
                    {lang === "pt"
                      ? "Ver Perfil Completo"
                      : "View Full Profile"}
                  </Button>
                </CardContent>
              </Card>
            </div>

            {/* GitHub Card */}
            <div className="group">
              <Card className="relative bg-gradient-to-b from-white/5 to-white/[0.02] border border-white/10 backdrop-blur-sm hover:border-gray-600/30 transition-all duration-300 hover:scale-[1.02]">
                <CardHeader>
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-4">
                      <div className="p-3 rounded-xl bg-gradient-to-br from-gray-700/20 to-gray-900/20">
                        <Github className="w-6 h-6 text-gray-300" />
                      </div>
                      <CardTitle className="text-white">
                        {t.contact.cards.github.title}
                      </CardTitle>
                    </div>
                    <ArrowUpRight className="w-5 h-5 text-white/40 group-hover:text-gray-400 transition-colors" />
                  </div>
                </CardHeader>

                <CardContent>
                  <p className="text-white/60 text-sm mb-4">
                    {t.contact.cards.github.description}
                  </p>
                  <Button
                    onClick={() => handleSocialClick(contactData.github)}
                    className="w-full bg-gradient-to-r from-gray-700/10 to-gray-900/10 text-white hover:from-gray-700/20 hover:to-gray-900/20 border border-gray-700/20 hover:border-gray-600/40"
                  >
                    {lang === "pt" ? "Ver Repositórios" : "View Repositories"}
                  </Button>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>

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
                onClick={() =>
                  (window.location.href = `mailto:${contactData.email}`)
                }
                className="text-white/60 hover:text-white transition-colors flex items-center gap-2 group"
              >
                <Mail className="w-4 h-4" />
                <span className="group-hover:underline">
                  {t.contact.footer.email}
                </span>
              </button>

              <button
                onClick={() => handleSocialClick(contactData.linkedin)}
                className="text-white/60 hover:text-blue-400 transition-colors flex items-center gap-2 group"
              >
                <Linkedin className="w-4 h-4" />
                <span className="group-hover:underline">
                  {t.contact.footer.linkedin}
                </span>
              </button>

              <button
                onClick={() => handleSocialClick(contactData.github)}
                className="text-white/60 hover:text-gray-300 transition-colors flex items-center gap-2 group"
              >
                <Github className="w-4 h-4" />
                <span className="group-hover:underline">
                  {t.contact.footer.github}
                </span>
              </button>
            </div>
          </div>

          {/* Mensagem final */}
          <div className="flex items-center justify-center gap-2 text-white/40 text-sm">
            <span>{t.contact.footer.madeWith}</span>
            <Heart className="w-4 h-4 text-pink-400 fill-pink-400 animate-pulse" />
            <span>{t.contact.footer.using}</span>
          </div>
        </div>
      </div>

      {/* Botão de voltar ao topo */}
      <ScrollToTopButton />

      {/* ... style permanece igual ... */}
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
      <ArrowBigUpDashIcon className="w-5 h-5" />
    </button>
  );
}
