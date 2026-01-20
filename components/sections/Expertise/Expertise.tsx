"use client";

import { dict } from "@/i18n/dictionary";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { useI18n } from "@/components/i18nProvider";
import {
  Layout,
  Server,
  Cloud,
  Code2,
  Cpu,
  Database,
  Zap,
  Globe,
  Shield,
} from "lucide-react";

// Mapeamento de ícones
const iconMap = {
  Layout: Layout,
  Server: Server,
  Cloud: Cloud,
  Code2: Code2,
  Cpu: Cpu,
  Database: Database,
  Zap: Zap,
  Globe: Globe,
  Shield: Shield,
};

export default function ExpertiseV1() {
  const { lang } = useI18n();
  const t = dict[lang];

  return (
    <section
      id="expertise"
      className=" bg-gradient-to-b from-[#0b1220] to-[#1a1f2e] py-24"
    >
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-6xl font-bold bg-gradient-to-r from-blue-400 to-cyan-300 bg-clip-text text-transparent mb-4">
            {t.expertise.title}
          </h2>
          <p className="text-white/70 text-lg md:text-xl max-w-3xl mx-auto">
            {t.expertise.subtitle}
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {t.expertise.items.map((item, i) => {
            const IconComponent =
              iconMap[item.icon as keyof typeof iconMap] || Code2;

            return (
              <div key={i} className="group relative">
                <div className="absolute -inset-0.5 bg-gradient-to-r from-blue-500 to-cyan-400 rounded-2xl blur opacity-0 group-hover:opacity-30 transition duration-500"></div>

                <Card className="relative bg-gradient-to-b from-white/5 to-white/[0.02] border-white/10 backdrop-blur-sm">
                  <CardHeader className="pb-4">
                    <div className="flex items-center gap-4">
                      <div
                        className={`p-3 rounded-xl bg-linear-to-br ${item.color}`}
                      >
                        <IconComponent className="w-6 h-6 text-white" />
                      </div>
                      <CardTitle className="text-xl md:text-2xl font-bold text-white">
                        {item.title}
                      </CardTitle>
                    </div>
                  </CardHeader>

                  <CardContent>
                    <p className="text-white/70 leading-relaxed">{item.desc}</p>

                    <div className="mt-6 pt-6 border-t border-white/10">
                      <div className="flex flex-wrap gap-2">
                        {item.desc.split(", ").map((tech, idx) => (
                          <span
                            key={idx}
                            className="px-3 py-1 bg-white/5 rounded-full text-sm text-white/80"
                          >
                            {tech}
                          </span>
                        ))}
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
