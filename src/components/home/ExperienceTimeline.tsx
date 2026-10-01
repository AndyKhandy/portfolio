import { useRef, useState, type KeyboardEvent } from "react";
import { ArrowUpRight } from "lucide-react";
import { AnimatePresence, motion, useReducedMotion } from "framer-motion";
import { Link } from "react-router-dom";
import { experiences } from "../../data/experiences";
import SectionHeading from "../ui/SectionHeading";
export default function ExperienceTimeline() {
  const [isEnvelopeOpen, setIsEnvelopeOpen] = useState(false);
  const [selectedIndex, setSelectedIndex] = useState(0);
  const reduceMotion = useReducedMotion();
  const tabRefs = useRef<(HTMLButtonElement | null)[]>([]);
  const selectedExperience = experiences[selectedIndex];

  function selectExperience(index: number) {
    setSelectedIndex(index);
  }

  function handleTabKeyDown(event: KeyboardEvent<HTMLButtonElement>, index: number) {
    const direction = event.key === "ArrowRight" || event.key === "ArrowDown" ? 1
      : event.key === "ArrowLeft" || event.key === "ArrowUp" ? -1
      : 0;

    if (!direction) return;

    event.preventDefault();
    const nextIndex = (index + direction + experiences.length) % experiences.length;
    selectExperience(nextIndex);
    tabRefs.current[nextIndex]?.focus();
  }

  return (
    <section id="experience" className="section section-tint">
      <div className="page-shell">
        <SectionHeading
          eyebrow="Experience"
          title="Industry, research, and community."
        />
        <div className="experience-explorer mt-12">
          <div className={`experience-envelope ${isEnvelopeOpen ? "is-open" : ""}`}>
            {!isEnvelopeOpen && (
              <button
                aria-label="Open experience envelope"
                className="experience-envelope-toggle"
                onClick={() => setIsEnvelopeOpen(true)}
                type="button"
              />
            )}
            <AnimatePresence>
              {isEnvelopeOpen && (
                <motion.div
                  animate={{ opacity: 1, y: 0 }}
                  aria-label="Select an experience"
                  className="experience-slip-stack"
                  initial={reduceMotion ? false : { opacity: 0, y: 20 }}
                  role="tablist"
                  transition={{ duration: 0.3 }}
                >
                  {experiences.map((item, index) => (
                    <button
                      aria-controls={`experience-panel-${item.slug}`}
                      aria-selected={index === selectedIndex}
                      className="experience-slip"
                      id={`experience-tab-${item.slug}`}
                      key={item.slug}
                      onClick={() => selectExperience(index)}
                      onKeyDown={(event) => handleTabKeyDown(event, index)}
                      ref={(element) => { tabRefs.current[index] = element; }}
                      role="tab"
                      tabIndex={index === selectedIndex ? 0 : -1}
                      type="button"
                    >
                      {item.role}
                    </button>
                  ))}
                </motion.div>
              )}
            </AnimatePresence>
          </div>
          <AnimatePresence mode="wait">
            <motion.article
              animate={{ opacity: 1, x: 0 }}
              aria-labelledby={`experience-tab-${selectedExperience.slug}`}
              className="experience-sheet card"
              exit={reduceMotion ? undefined : { opacity: 0, x: -12 }}
              id={`experience-panel-${selectedExperience.slug}`}
              initial={reduceMotion ? false : { opacity: 0, x: 12 }}
              key={selectedExperience.slug}
              role="tabpanel"
              transition={{ duration: 0.22 }}
            >
              <p className="text-sm font-semibold text-[var(--accent)]">
                {selectedExperience.organization}
              </p>
              <h3 className="mt-2 text-xl font-bold">{selectedExperience.role}</h3>
              <p className="timeline-dates">{selectedExperience.dates}</p>
              {selectedExperience.description && (
                <p className="mt-3 leading-7 text-[var(--muted)]">
                  {selectedExperience.description}
                </p>
              )}
              <Link
                className="mt-5 inline-flex items-center gap-1 text-sm font-bold text-[var(--accent)] hover:underline"
                to={`/experience/${selectedExperience.slug}`}
              >
                More context <ArrowUpRight size={15} />
              </Link>
            </motion.article>
          </AnimatePresence>
        </div>
      </div>
    </section>
  );
}
