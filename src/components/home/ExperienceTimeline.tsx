import { ArrowUpRight } from "lucide-react";
import { motion, useReducedMotion } from "framer-motion";
import { Link } from "react-router-dom";
import { experiences } from "../../data/experiences";
import SectionHeading from "../ui/SectionHeading";
export default function ExperienceTimeline() {
  const reduceMotion = useReducedMotion();

  return (
    <section id="experience" className="section section-tint">
      <div className="page-shell">
        <SectionHeading
          eyebrow="Experience"
          title="Industry, research, and community."
        />
        <div className="timeline mt-12">
          {experiences.map((item, index) => (
            <motion.article
              className={`timeline-item ${index % 2 ? "timeline-right" : ""}`}
              key={item.slug}
              initial={
                reduceMotion ? {} : { opacity: 0, x: index % 2 ? 20 : -20 }
              }
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, amount: 0.60 }}
              transition={{ duration: 0.45 }}
            >
              <span className="timeline-dot" />
              <div className="card">
                <p className="text-sm font-semibold text-[var(--accent)]">
                  {item.organization}
                </p>
                <h3 className="mt-2 text-xl font-bold">{item.role}</h3>
                <p className="timeline-dates">{item.dates}</p>
                {item.description && (
                  <p className="mt-3 leading-7 text-[var(--muted)]">
                    {item.description}
                  </p>
                )}
                <Link
                  className="mt-5 inline-flex items-center gap-1 text-sm font-bold text-[var(--accent)] hover:underline"
                  to={`/experience/${item.slug}`}
                >
                  More context <ArrowUpRight size={15} />
                </Link>
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}
