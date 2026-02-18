import Hero from "../components/Hero";
import FeaturedProjects from "../components/FeaturedProjects";
import About from "../components/About";
import Experience from "../components/Experience";
import Skills from "../components/Skills";
import ContactSection from "../components/ContactSection";

export default function HomePage() {
  return (
    <>
      <Hero />
      <main className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <About />
        <FeaturedProjects />
        <Experience />
        <Skills />
        <ContactSection />
      </main>
    </>
  );
}
