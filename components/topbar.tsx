"use client";

import {
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
} from "@/components/ui/navigation-menu";
import { useI18n } from "./i18nProvider";
import { BrazilFlag } from "@/i18n/BrazilFlag";
import { EUAFlag } from "@/i18n/EUAFlag";
import { dict } from "@/i18n/dictionary";
import { useScrollSpy } from "@/hooks/useScrollSpy";

const menu = [
  { id: "hero", index: 0 },
  { id: "expertise", index: 1 },
  { id: "work", index: 2 },
  { id: "experience", index: 3 },
  { id: "contact", index: 4 },
];

export default function Header() {
  const { lang, setLang } = useI18n();
  const t = dict[lang];

  const active = useScrollSpy(menu.map((m) => m.id));

  function handleScroll(id: string) {
    const el = document.getElementById(id);
    if (!el) return;

    el.scrollIntoView({
      behavior: "smooth",
      block: "start",
    });
  }

  return (
    <header className="fixed top-0 w-full z-50 bg-[#0b1220]/90 backdrop-blur border-b border-white/10">
      <div className="max-w-7xl mx-auto flex items-center justify-between px-6 py-4">
        {/* LOGO */}
        <span className="font-semibold text-xl tracking-wide bg-gradient-to-r from-blue-400 to-cyan-300 bg-clip-text text-transparent">
          CarlosManoelWendorff._
        </span>

        {/* MENU */}
        <NavigationMenu>
          <NavigationMenuList className="flex gap-10">
            {menu.map((item, i) => {
              const isActive = active === item.id;

              return (
                <NavigationMenuItem key={item.id}>
                  <NavigationMenuLink
                    onClick={() => handleScroll(item.id)}
                    className="group flex items-center gap-2 cursor-pointer"
                  >
                    <span
                      className={`text-xs ${
                        isActive
                          ? "text-cyan-400 animate-pulse"
                          : "text-white/50"
                      }`}
                    >
                      {String(i + 1).padStart(2, "0")}
                    </span>

                    <span
                      className={`text-sm tracking-wide ${
                        isActive ? "text-cyan-400" : "text-white/50"
                      }`}
                    >
                      // {t.menu[item.index]}
                    </span>
                  </NavigationMenuLink>
                </NavigationMenuItem>
              );
            })}
          </NavigationMenuList>
        </NavigationMenu>

        {/* SWITCH */}
        <button
          onClick={() => setLang(lang === "pt" ? "en" : "pt")}
          className="flex items-center gap-2 px-3 py-1 rounded-lg border border-cyan-400/40 text-cyan-400 hover:bg-cyan-400/10"
        >
          {lang === "pt" ? (
            <>
              <BrazilFlag className="w-5 h-5" />
              <span>PT</span>
            </>
          ) : (
            <>
              <EUAFlag className="w-5 h-5" />
              <span>EN</span>
            </>
          )}
        </button>
      </div>
    </header>
  );
}
