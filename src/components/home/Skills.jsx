import { skills } from "../../data/skills";
import SectionHeading from "../ui/SectionHeading";
export default function Skills() {
  return (
    <section id="skills" className="section section-tint">
      <div className="page-shell">
        <SectionHeading eyebrow="Skills" title="A growing toolkit." />
        <div className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-5">
          {Object.entries(skills).map((group, items) => (
            <section className="card" key={group}>
              <h3 className="font-bold">{group}</h3>
              {items.length ? (
                <div className="mt-4 flex flex-wrap flex-col gap-2">
                  {items.map((item) => (
                    <span className="tech-badge" key={item}>
                      {item}
                    </span>
                  ))}
                </div>
              ) : (
                <p className="mt-3 text-sm text-[var(--muted)]">
                  Details coming soon.
                </p>
              )}
            </section>
          ))}
        </div>
      </div>
    </section>
  );
}
