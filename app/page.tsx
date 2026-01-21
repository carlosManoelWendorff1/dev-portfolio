import Header from "@/components/topbar";

import Hero from "@/components/sections/Hero/Hero";
import Work from "@/components/sections/Work/Work";
import Expertise from "@/components/sections/Expertise/Expertise";
import Experience from "@/components/sections/Experience/Experience";
import Contact from "@/components/sections/Contact/Contact";
import HeroNew from "@/components/sections/Hero/HeroNew";

export default function Page() {
  return (
    <>
      <Header />

      <main className="pt-20">
        <HeroNew />
        <Expertise />

        <Work />
        <Experience />
        <Contact />
      </main>
    </>
  );
}
