"use client";

import { dict } from "@/i18n/dictionary";
import { useI18n } from "@/components/i18nProvider";
import {
  Briefcase,
  Building,
  Calendar,
  MapPin,
  Clock,
  GraduationCap,
  Code,
  Cpu,
  Network,
  CheckCircle,
} from "lucide-react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

// Mapeamento de ícones
const companyIcons = {
  WEG: Building,
  V2COM: Cpu,
  "NAXI Fibra": Network,
  default: Briefcase,
};

export default function Experience() {
  const { lang } = useI18n();
  const t = dict[lang];

  const accordionDefaultValue = `item-0`;

  return (
    <section
      id="experience"
      className="min-h-screen bg-gradient-to-b from-[#0b1220] to-[#1a1f2e] py-24"
    >
      <div className="max-w-6xl mx-auto px-6">
        {/* Cabeçalho */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-6xl font-bold bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent mb-4">
            {t.experience.title}
          </h2>
          <p className="text-white/70 text-lg md:text-xl max-w-3xl mx-auto">
            {t.experience.subtitle}
          </p>
        </div>

        {/* Accordion de Experiências usando Shadcn */}
        <Accordion
          type="single"
          collapsible
          className="space-y-6"
          defaultValue={accordionDefaultValue}
        >
          {t.experience.items.map((exp, index) => {
            const CompanyIcon =
              companyIcons[exp.company as keyof typeof companyIcons] ||
              companyIcons.default;

            return (
              <div key={index} className="group">
                <AccordionItem
                  value={`item-${index}`}
                  className="relative bg-gradient-to-b from-white/5 to-white/[0.02] border border-white/10 backdrop-blur-sm rounded-2xl overflow-hidden data-[state=open]:border-purple-500/30 transition-all duration-300"
                >
                  {/* Header do Accordion */}
                  <AccordionTrigger className="hover:no-underline hover:bg-white/5 px-6 md:px-8 py-6 md:py-8">
                    <div className="flex flex-col md:flex-row md:items-center justify-between w-full text-left gap-4">
                      <div className="flex items-start md:items-center gap-4 md:gap-6">
                        {/* Ícone da Empresa */}
                        <div className="p-3 rounded-xl bg-gradient-to-br from-purple-500/20 to-pink-500/20">
                          <CompanyIcon className="w-6 h-6 md:w-8 md:h-8 text-purple-300" />
                        </div>

                        <div>
                          <div className="flex flex-col md:flex-row md:items-center gap-2 md:gap-4 mb-2">
                            <h3 className="text-xl md:text-2xl font-bold text-white">
                              {exp.company}
                            </h3>
                            <Badge
                              variant="outline"
                              className="bg-purple-500/20 text-purple-300 border-purple-500/30 hover:bg-purple-500/30"
                            >
                              {exp.role}
                            </Badge>
                          </div>

                          <div className="flex flex-wrap items-center gap-4 text-white/60 text-sm">
                            <div className="flex items-center gap-2">
                              <Calendar className="w-4 h-4" />
                              <span>{exp.period}</span>
                            </div>
                            <div className="flex items-center gap-2">
                              <Clock className="w-4 h-4" />
                              <span>{exp.duration}</span>
                            </div>
                            <div className="flex items-center gap-2">
                              <MapPin className="w-4 h-4" />
                              <span>{exp.location}</span>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </AccordionTrigger>

                  {/* Conteúdo do Accordion */}
                  <AccordionContent className="px-6 md:px-8 pb-6 md:pb-8">
                    <div className="pt-4 border-t border-white/10">
                      {/* Descrição */}
                      <p className="text-white/80 text-lg mb-8 leading-relaxed">
                        {exp.description}
                      </p>

                      {/* Principais Responsabilidades */}
                      <div className="mb-8">
                        <h4 className="text-white font-semibold mb-4 flex items-center gap-2">
                          <Code className="w-5 h-5" />
                          {t.resp}
                        </h4>
                        <ul className="space-y-3">
                          {exp.responsibilities.map((resp, respIndex) => (
                            <li
                              key={respIndex}
                              className="flex items-start gap-3"
                            >
                              <CheckCircle className="w-5 h-5 text-purple-400 mt-0.5 flex-shrink-0" />
                              <span className="text-white/70">{resp}</span>
                            </li>
                          ))}
                        </ul>
                      </div>

                      <div>
                        <h4 className="text-white font-semibold mb-4">
                          {t.technologiesUsed}
                        </h4>
                        <div className="flex flex-wrap gap-2">
                          {exp.technologies.map((tech, techIndex) => (
                            <Badge
                              key={techIndex}
                              variant="secondary"
                              className="bg-gradient-to-r from-purple-500/10 to-pink-500/10 text-white/80 border-purple-500/20 hover:bg-purple-500/20 hover:scale-105 transition-transform duration-300"
                            >
                              {tech}
                            </Badge>
                          ))}
                        </div>
                      </div>
                    </div>
                  </AccordionContent>
                </AccordionItem>
              </div>
            );
          })}
        </Accordion>

        <div className="mt-24">
          <div className="text-center mb-12">
            <h3 className="text-3xl md:text-5xl font-bold bg-gradient-to-r from-cyan-400 to-blue-400 bg-clip-text text-transparent mb-4">
              {t.education.title}
            </h3>
          </div>

          <div className="grid md:grid-cols-2 gap-6">
            {t.education.items.map((edu, index) => (
              <div key={index} className="group">
                <Card className="relative bg-gradient-to-b from-white/5 to-white/[0.02] border border-white/10 backdrop-blur-sm h-full">
                  <CardHeader>
                    <div className="flex items-start gap-4">
                      <div className="p-3 rounded-xl bg-gradient-to-br from-cyan-500/20 to-blue-500/20">
                        <GraduationCap className="w-6 h-6 text-cyan-300" />
                      </div>
                      <div>
                        <CardTitle className="text-white mb-1">
                          {edu.institution}
                        </CardTitle>
                        <p className="text-cyan-300 font-medium">
                          {edu.degree}
                        </p>
                      </div>
                    </div>
                  </CardHeader>

                  <CardContent className="space-y-4">
                    <div className="flex items-center gap-2 text-white/60 text-sm">
                      <Calendar className="w-4 h-4" />
                      <span>{edu.period}</span>
                    </div>

                    <p className="text-white/70 h-10">{edu.description}</p>

                    <div className="pt-4 border-t border-white/10">
                      <Badge
                        variant="outline"
                        className={`${"bg-green-500/10 text-green-300 border-green-500/30"}`}
                      >
                        <div
                          className={`w-2 h-2 rounded-full mr-2 ${"bg-green-400"}`}
                        ></div>
                        {"Concluído"}
                      </Badge>
                    </div>
                  </CardContent>
                </Card>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
