"use client";

import { createContext, useContext, useEffect, useState } from "react";

type Lang = "pt" | "en";

const I18nContext = createContext<{
  lang: Lang;
  setLang: (l: Lang) => void;
}>({
  lang: "pt",
  setLang: () => {},
});

export function I18nProvider({ children }: { children: React.ReactNode }) {
  const [lang, setLang] = useState<Lang>("pt");

  // Detecta idioma do navegador
  useEffect(() => {
    const browserLang = navigator.language.startsWith("pt") ? "pt" : "en";
    setLang(browserLang);
  }, []);

  return (
    <I18nContext.Provider value={{ lang, setLang }}>
      {children}
    </I18nContext.Provider>
  );
}

export const useI18n = () => useContext(I18nContext);
