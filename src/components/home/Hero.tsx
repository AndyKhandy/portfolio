import { ChevronsDown } from "lucide-react";
import { motion, useReducedMotion } from "framer-motion";

export default function Hero() {
  const reduceMotion = useReducedMotion();

  return (
    <section id="home" className="hero-section">
      <div className="hero-frame" aria-hidden="true" />
      <p className="hero-signal hero-signal-top" aria-hidden="true">
        BUILD · RESEARCH · EXPLORE · BUILD · RESEARCH · EXPLORE
      </p>
      <div className="hero-center">
        <div className="hero-core" aria-hidden="true" />
        <div className="hero-nameplate">
          <h1>ANDY TA</h1>
        </div>
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
