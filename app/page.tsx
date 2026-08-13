import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Experience from "@/components/Experience";
import Skills from "@/components/Skills";
import Expertise from "@/components/Expertise";
import Projects from "@/components/Projects";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <main id="home" className="min-h-screen bg-[#FFF9F5]">
      <Navbar />

      <Hero />
      <About />
      <Experience />
      <Skills />
      <Expertise />
      <Projects />
      <Contact />
      <Footer />
    </main>
  );
}