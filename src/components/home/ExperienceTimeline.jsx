import { ArrowUpRight } from "lucide-react";
import { Link } from "react-router-dom";
import { experiences } from "../../data/experiences";
import SectionHeading from "../ui/SectionHeading";
export default function ExperienceTimeline() {
  return (
    <section id="experience" className="section section-tint">
      <div className="page-shell">
        <SectionHeading
          eyebrow="Experience"
          title="Industry, research, and community."
        />
        <div className="timeline mt-12">
          {experiences.map((item, index) => (
            <article
              className={`timeline-item ${index % 2 ? "timeline-right" : ""}`}
              key={item.slug}
            >
              <span className="timeline-dot" />
              <div className="card">
                <p className="text-sm font-semibold text-[var(--accent)]">
                  {item.organization}
                </p>
                <h3 className="mt-2 text-xl font-bold">{item.role}</h3>
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
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
