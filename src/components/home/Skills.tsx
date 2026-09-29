import { Code2 } from "lucide-react";
import { skillIcons, skills } from "../../data/skills";
import SectionHeading from "../ui/SectionHeading";

export default function Skills() {
  return (
    <section id="skills" className="section section-tint">
      <div className="page-shell">
        <SectionHeading eyebrow="Skills" title="A growing toolkit." />
        <div className="mt-10 grid gap-15 sm:grid-cols-2 lg:grid-cols-3">
          {Object.entries(skills).map(([group, items]) => (
            <section className="card" key={group}>
              <h3 className="font-bold">{group}</h3>
              <div className="skill-container mt-6 gap-2">
                {items.map((item) => (
                  <span className="tech-badge flex flex-col items-center gap-2" key={item}>
                    {skillIcons[item] ? (
                      <img
                        className="size-9"
                        src={skillIcons[item]}
                        alt=""
                        aria-hidden="true"
                      />
                    ) : (
                      <Code2 className="size-4" aria-hidden="true" />
                    )}
                    {item}
                  </span>
                ))}
              </div>
            </section>
          ))}
        </div>
      </div>
    </section>
  );
}
