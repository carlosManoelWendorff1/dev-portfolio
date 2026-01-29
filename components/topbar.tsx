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
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "./ui/dropdown-menu";
import { ChevronDown, Menu } from "lucide-react";

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
        <span className="font-semibold text-xl tracking-wide bg-gradient-to-r from-blue-400 to-cyan-300 bg-clip-text text-transparent">
          CarlosWendorff._
        </span>

        <NavigationMenu className="hidden lg:block">
          <NavigationMenuList className="flex gap-10">
            {menu.map((item, i) => {
              const isActive = active === item.id;

              return (
                <NavigationMenuItem key={item.id}>
                  <NavigationMenuLink
                    onClick={() => handleScroll(item.id)}
                    className="group flex items-center gap-0.5 cursor-pointer  mx-2"
                  >
                    <span
                      className={`text-sm tracking-wide  whitespace-nowrap ${
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

        <div className="flex items-center gap-3">
          <div className="lg:hidden">
            <DropdownMenu modal={false}>
              <DropdownMenuTrigger asChild>
                <button className="flex items-center gap-2 px-3 py-1 rounded-lg border border-cyan-400/40 text-cyan-400 hover:bg-cyan-400/10 focus:outline-none">
                  <Menu className="w-6 h-full" />
                </button>
              </DropdownMenuTrigger>

              <DropdownMenuContent
                align="end"
                className="w-56 bg-[#0b1220]/95 backdrop-blur-md border border-white/10"
              >
                {menu.map((item, i) => {
                  const isActive = active === item.id;

                  return (
                    <DropdownMenuItem
                      key={item.id}
                      onClick={() => handleScroll(item.id)}
                      className={`flex items-center gap-3 px-3 py-3 cursor-pointer ${
                        isActive ? "text-cyan-400" : "text-white/70"
                      }`}
                    >
                      <span className="text-xs">
                        {String(i + 1).padStart(2, "0")}
                      </span>
                      <span className="text-sm">{t.menu[item.index]}</span>
                    </DropdownMenuItem>
                  );
                })}
              </DropdownMenuContent>
            </DropdownMenu>
          </div>

          <DropdownMenu modal={false}>
            <DropdownMenuTrigger asChild>
              <button className="flex items-center gap-2 px-3 py-1 rounded-lg border border-cyan-400/40 text-cyan-400 hover:bg-cyan-400/10">
                {lang === "pt" ? (
                  <>
                    <BrazilFlag className="w-5 h-5" />
                    <span className="hidden sm:inline">PT</span>
                  </>
                ) : (
                  <>
                    <EUAFlag className="w-5 h-5" />
                    <span className="hidden sm:inline">EN</span>
                  </>
                )}
                <ChevronDown className="w-3 h-3 ml-1" />
              </button>
            </DropdownMenuTrigger>

            <DropdownMenuContent
              align="end"
              className="bg-[#0b1220]/95 backdrop-blur-md border border-white/10"
            >
              <DropdownMenuItem
                onClick={() => setLang("pt")}
                className="flex items-center gap-2 px-3 py-2 cursor-pointer text-white hover:bg-white/5"
              >
                <BrazilFlag className="w-5 h-5" />
                <span>PT</span>
              </DropdownMenuItem>

              <DropdownMenuItem
                onClick={() => setLang("en")}
                className="flex items-center gap-2 px-3 py-2 cursor-pointer text-white hover:bg-white/5"
              >
                <EUAFlag className="w-5 h-5" />
                <span>EN</span>
              </DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>
        </div>
      </div>
    </header>
  );
}
