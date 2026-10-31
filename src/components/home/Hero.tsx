import { ChevronsDown } from "lucide-react";
import { motion, useReducedMotion } from "framer-motion";
import OceanDecor from "../ui/OceanDecor";

export default function Hero() {
  const reduceMotion = useReducedMotion();

  return (
    <section id="home" className="hero-section">
      <OceanDecor variant="hero-map" className="hero-map" />
      <OceanDecor variant="hero-stars" className="hero-stars" />
      <OceanDecor variant="wave" className="hero-waves" />
      <div className="hero-frame" aria-hidden="true" />
      <p className="hero-signal hero-signal-top" aria-hidden="true">
        BUILD · RESEARCH · EXPLORE · BUILD · RESEARCH · EXPLORE
      </p>
      <div className="hero-center">
        <div className="hero-core" aria-hidden="true" />
        <OceanDecor variant="compass" className="hero-compass" />
        <div className="hero-nameplate">
          <h1>ANDY KHANG TA</h1>
        </div>
        <p className="hero-roles">Software Engineer · Researcher · CS @ UT Arlington</p>
      </div>
      <p className="hero-signal hero-signal-bottom" aria-hidden="true">
        CURIOSITY · LEARNING · BUILDING · DISCOVERY · CURIOSITY · LEARNING
      </p>
      <a className="scroll-cue" href="#about">
        <motion.span
          animate={reduceMotion ? {} : { y: [0, 6, 0] }}
          transition={{ duration: 1.4, repeat: Infinity, ease: "easeInOut" }}
        >
          <ChevronsDown size={40}/>
        </motion.span>
      </a>
    </section>
  );
}
