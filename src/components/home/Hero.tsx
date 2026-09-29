import { ChevronsDown } from "lucide-react";
import { motion, useReducedMotion } from "framer-motion";

export default function Hero() {
  const reduceMotion = useReducedMotion();

  return (
    <section id="home" className="hero-section">
      <motion.svg
        className="hero-waves hero-waves-back"
        viewBox="0 0 1440 360"
        preserveAspectRatio="none"
        aria-hidden="true"
        animate={
          reduceMotion
            ? undefined
            : {
                x: [-64, 42, -30, 56, -64],
                y: [0, -10, 7, -6, 0],
                scaleX: [1, 1.03, 0.98, 1.02, 1],
              }
        }
        transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
      >
        <path d="M0 210C210 100 405 320 720 190S1170 95 1440 190" />
        <path d="M0 285C250 160 480 350 760 245S1160 170 1440 260" />
      </motion.svg>
      <motion.svg
        className="hero-waves hero-waves-front"
        viewBox="0 0 1440 360"
        preserveAspectRatio="none"
        aria-hidden="true"
        animate={
          reduceMotion
            ? undefined
            : {
                x: [44, -52, 30, -38, 44],
                y: [0, 8, -9, 6, 0],
                scaleX: [1, 0.98, 1.03, 0.99, 1],
              }
        }
        transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
      >
        <path d="M0 250C230 145 460 345 720 235S1180 145 1440 225" />
      </motion.svg>
      <div className="hero-frame" aria-hidden="true" />
      <p className="hero-signal hero-signal-top" aria-hidden="true">
        BUILD · RESEARCH · EXPLORE · BUILD · RESEARCH · EXPLORE
      </p>
      <div className="hero-center">
        <div className="hero-core" aria-hidden="true" />
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
