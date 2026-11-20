import { useRef, useState, type KeyboardEvent } from "react";
import { ArrowUpRight, ChevronRight } from "lucide-react";
import { AnimatePresence, motion, useReducedMotion } from "framer-motion";
import { Link } from "react-router-dom";
import { experiences } from "../../data/experiences";
import OceanDecor from "../ui/OceanDecor";
import SectionHeading from "../ui/SectionHeading";
export default function ExperienceTimeline() {
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
    <section id="experience" className="section ocean-section ocean-section-ornamented">
      <OceanDecor variant="compass-ribbon" className="experience-route" />
      <div className="page-shell">
        <SectionHeading
          title="Experience across industry, research, and community."
        />
        <div className="experience-explorer mt-12">
          <div aria-label="Select an experience" className="experience-archive" role="tablist">
            {experiences.map((item, index) => (
              <button
                aria-controls={`experience-panel-${item.slug}`}
                aria-selected={index === selectedIndex}
                className="experience-entry"
                id={`experience-tab-${item.slug}`}
                key={item.slug}
                onClick={() => selectExperience(index)}
                onKeyDown={(event) => handleTabKeyDown(event, index)}
                ref={(element) => { tabRefs.current[index] = element; }}
                role="tab"
                tabIndex={index === selectedIndex ? 0 : -1}
                type="button"
              >
                <span className="experience-entry-index" aria-hidden="true">
                  {String(index + 1).padStart(2, "0")}
                </span>
                <span className="experience-entry-copy">
                  <span className="experience-entry-role">{item.role}</span>
                  <span className="experience-entry-dates">{item.dates}</span>
                </span>
                <ChevronRight aria-hidden="true" className="experience-entry-arrow" size={18} />
              </button>
            ))}
          </div>
          <AnimatePresence mode="wait">
            <motion.article
              animate={{ opacity: 1, x: 0 }}
              aria-labelledby={`experience-tab-${selectedExperience.slug}`}
              className="experience-sheet"
              exit={reduceMotion ? undefined : { opacity: 0, x: -12 }}
              id={`experience-panel-${selectedExperience.slug}`}
              initial={reduceMotion ? false : { opacity: 0, x: 12 }}
              key={selectedExperience.slug}
              role="tabpanel"
              transition={{ duration: 0.22 }}
            >
              <div className="experience-sheet-heading">
                <p className="experience-organization">{selectedExperience.organization}</p>
                <p className="timeline-dates">{selectedExperience.dates}</p>
              </div>
              <h3>{selectedExperience.role}</h3>
              {selectedExperience.description && (
                <p className="experience-description">
                  {selectedExperience.description}
                </p>
              )}
              <Link
                className="experience-link"
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
