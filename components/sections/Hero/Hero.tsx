"use client";
import { dict } from "@/i18n/dictionary";
import { useI18n } from "../../i18nProvider";
import HeroContent from "./HeroContent";
import Hero3D from "./HeroPhoto";

export default function Hero() {
  const { lang } = useI18n();
  const t = dict[lang];

  return (
    <section id="hero" className="h-[70vh] bg-[#0b1220] flex items-center px-4">
      <div className="w-full h-full  gap-10 items-center">
        <Hero3D t={t} />
      </div>
    </section>
  );
}
