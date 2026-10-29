import { CursorGlow } from "@/components/motion/CursorGlow";
import { About } from "@/components/site/About";
import { Contact } from "@/components/site/Contact";
import { Experience } from "@/components/site/Experience";
import { Footer } from "@/components/site/Footer";
import { Hero } from "@/components/site/Hero";
import { Projects } from "@/components/site/Projects";
import { SiteNav } from "@/components/site/SiteNav";
import { Skills } from "@/components/site/Skills";

export default function Home() {
  return (
    <>
      <a
        href="#main-content"
        className="sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-50 focus:rounded-hud focus:bg-accent focus:px-4 focus:py-2 focus:font-mono focus:text-xs focus:uppercase focus:tracking-hud focus:text-void"
      >
        Skip to content
      </a>

      <CursorGlow />

      <SiteNav />

      <main id="main-content" className="relative z-10 pt-14">
        <Hero />
        <About />
        <Projects />
        <Skills />
        <Experience />
        <Contact />
      </main>

      <Footer />
    </>
  );
}
