"use client";

import { dict } from "@/i18n/dictionary";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { useI18n } from "@/components/i18nProvider";

export default function Work() {
  const { lang } = useI18n();
  const t = dict[lang];

  return (
    <section id="work" className="min-h-screen bg-[#0b1220] py-24">
      <div className="max-w-7xl mx-auto px-6">
        <h2 className="text-3xl md:text-5xl font-bold text-white mb-12">
          {t.work.title}
        </h2>

        <div className="grid md:grid-cols-3 gap-6">
          {t.work.projects.map((project, i) => (
            <Card key={i} className="bg-white/5 border-white/10 text-white">
              <CardHeader>
                <CardTitle>{project.title}</CardTitle>
              </CardHeader>

              <CardContent>
                <p className="text-white/60">{project.desc}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
