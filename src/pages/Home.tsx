import About from "../components/home/About";
import Contact from "../components/home/Contact";
import ExperienceTimeline from "../components/home/ExperienceTimeline";
import Hero from "../components/home/Hero";
import Projects from "../components/home/Projects";
import Skills from "../components/home/Skills";

export default function Home() {
  return (
    <main>
      <Hero />
      <About />
      <ExperienceTimeline />
      <Projects />
      <Skills />
      <Contact />
    </main>
  );
}
