"use client";

import {
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
} from "@/components/ui/navigation-menu";

const menu = [
  { id: "01", label: "home", href: "#" },
  { id: "02", label: "expertise", href: "#expertise" },
  { id: "03", label: "work", href: "#work" },
  { id: "04", label: "experience", href: "#experience" },
  { id: "05", label: "contact", href: "#contact" },
];

export default function Header() {
  return (
    <header className="w-full bg-[#0b1220] border-b border-white/10">
      <div className="max-w-7xl mx-auto flex items-center justify-between px-6 py-4">
        {/* LOGO */}
        <div className="flex items-center gap-3">
          <div className="w-3 h-3 rounded-full bg-cyan-400" />
          <span className="text-cyan-400 font-semibold text-xl tracking-wide">
            TamalSen._
          </span>
        </div>

        {/* MENU */}
        <NavigationMenu>
          <NavigationMenuList className="flex gap-10">
            {menu.map((item) => (
              <NavigationMenuItem key={item.id}>
                <NavigationMenuLink
                  href={item.href}
                  className="
                    group flex items-center gap-2
                    text-white/80 hover:text-white
                    transition-colors
                  "
                >
                  <span className="text-xs text-white/50 group-hover:text-cyan-400">
                    {item.id}
                  </span>

                  <span className="text-sm tracking-wide">// {item.label}</span>
                </NavigationMenuLink>
              </NavigationMenuItem>
            ))}
          </NavigationMenuList>
        </NavigationMenu>
      </div>
    </header>
  );
}
