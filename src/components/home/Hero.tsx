import { ChevronsDown } from "lucide-react";
import { motion, useReducedMotion } from "framer-motion";
import OceanDecor from "../ui/OceanDecor";

export default function Hero() {
  const reduceMotion = useReducedMotion();
  const playIntro = !reduceMotion;

  return (
    <section id="home" className="hero-section">
      <motion.svg
        aria-hidden="true"
        fill="none"
        initial={playIntro ? "hidden" : false}
        animate="visible"
        preserveAspectRatio="xMidYMid slice"
        style={{
          position: "absolute",
          inset: 0,
          zIndex: 0,
          width: "100%",
          height: "100%",
          color: "var(--accent)",
          opacity: 0.78,
          pointerEvents: "none",
        }}
        viewBox="0 0 1440 900"
      >
        {[86, 132, 178].map((radius, index) => (
          <motion.circle
            key={radius}
            cx="720"
            cy="450"
            r={radius}
            stroke="currentColor"
            strokeDasharray={index === 2 ? "3 12" : undefined}
            strokeWidth="1"
            style={{ pathLength: 0 }}
            variants={{
              hidden: { pathLength: 0, opacity: 0 },
              visible: {
                pathLength: 1,
                opacity: index === 2 ? 0.62 : 0.84,
                transition: {
                  pathLength: {
                    delay: index * 0.08,
                    duration: 0.95,
                    ease: "easeInOut",
                  },
                  opacity: { delay: index * 0.08, duration: 0.75 },
                },
              },
            }}
          />
        ))}
      </motion.svg>

      <motion.div
        animate={{ opacity: 1, scale: 1 }}
        initial={playIntro ? { opacity: 0, scale: 0.96 } : false}
        style={{
          position: "absolute",
          inset: 0,
          zIndex: 0,
          pointerEvents: "none",
        }}
        transition={{ delay: 1.15, duration: 0.32, ease: "easeOut" }}
      >
        <OceanDecor variant="hero-map" className="hero-map" />
      </motion.div>
      <motion.div
        animate={{ opacity: 1, scale: 1 }}
        initial={playIntro ? { opacity: 0, scale: 0.94 } : false}
        style={{
          position: "absolute",
          inset: 0,
          zIndex: 0,
          pointerEvents: "none",
        }}
        transition={{ delay: 1.5, duration: 0.26, ease: "easeOut" }}
      >
        <OceanDecor variant="hero-stars" className="hero-stars" />
      </motion.div>
      <motion.div
        animate={{ opacity: 1, y: 0 }}
        initial={playIntro ? { opacity: 0, y: 10 } : false}
        style={{
          position: "absolute",
          inset: 0,
          zIndex: 0,
          pointerEvents: "none",
        }}
        transition={{ delay: 1.54, duration: 0.34, ease: "easeOut" }}
      >
        <OceanDecor variant="wave" className="hero-waves" />
      </motion.div>
      <motion.div
        aria-hidden="true"
        className="hero-frame"
        animate={{ opacity: 1 }}
        initial={playIntro ? { opacity: 0 } : false}
        transition={{ delay: 1.17, duration: 0.3, ease: "easeOut" }}
      />

      <motion.p
        className="hero-signal hero-signal-top"
        aria-hidden="true"
        animate={{ opacity: 1, y: 0 }}
        initial={playIntro ? { opacity: 0, y: -8 } : false}
        transition={{ delay: 1.58, duration: 0.24, ease: "easeOut" }}
      >
        BUILD · RESEARCH · EXPLORE · BUILD · RESEARCH · EXPLORE
      </motion.p>

      <div className="hero-center">
        <motion.div
          aria-hidden="true"
          className="hero-core"
          animate={{ opacity: 1, scale: 1 }}
          initial={playIntro ? { opacity: 0, scale: 0.72 } : false}
          transition={{ delay: 1.11, duration: 0.4, ease: "easeOut" }}
        />
        <motion.div
          animate={{ opacity: 0.76, scale: 1 }}
          initial={playIntro ? { opacity: 0, scale: 0.92 } : false}
          style={{
            position: "absolute",
            inset: 0,
            zIndex: 0,
            display: "grid",
            placeItems: "center",
            pointerEvents: "none",
          }}
          transition={{ delay: 1.19, duration: 0.34, ease: "easeOut" }}
        >
          <OceanDecor variant="compass" className="hero-compass" />
        </motion.div>
        <motion.div
          className="hero-nameplate"
          animate={{ opacity: 1, y: 0 }}
          initial={playIntro ? { opacity: 0, y: 12 } : false}
          transition={{ delay: 1.37, duration: 0.32, ease: "easeOut" }}
        >
          <h1
            style={{
              fontSize: "clamp(1.5rem, 7.5vw, 7rem)",
              whiteSpace: "nowrap",
            }}
          >
            ANDY KHANG TA
          </h1>
        </motion.div>
        <motion.p
          className="hero-roles"
          animate={{ opacity: 1, y: 0 }}
          initial={playIntro ? { opacity: 0, y: 8 } : false}
          transition={{ delay: 1.5, duration: 0.26, ease: "easeOut" }}
        >
          Software Engineer · Researcher · CS @ UT Arlington
        </motion.p>
      </div>

      <motion.p
        className="hero-signal hero-signal-bottom"
        aria-hidden="true"
        animate={{ opacity: 1, y: 0 }}
        initial={playIntro ? { opacity: 0, y: 8 } : false}
        transition={{ delay: 1.63, duration: 0.24, ease: "easeOut" }}
      >
        CURIOSITY · LEARNING · BUILDING · DISCOVERY · CURIOSITY · LEARNING
      </motion.p>
      <motion.a
        aria-label="Scroll to About"
        className="scroll-cue"
        href="#about"
        animate={{ opacity: 1, y: 0 }}
        initial={playIntro ? { opacity: 0, y: 8 } : false}
        transition={{ delay: 1.72, duration: 0.24, ease: "easeOut" }}
      >
        <motion.span
          aria-hidden="true"
          animate={reduceMotion ? {} : { y: [0, 6, 0] }}
          transition={{ duration: 1.1, repeat: Infinity, ease: "easeInOut" }}
        >
          <ChevronsDown size={40} />
        </motion.span>
      </motion.a>
    </section>
  );
}
