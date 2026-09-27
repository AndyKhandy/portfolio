import { Project, projects } from "../../data/projects";
import SectionHeading from "../ui/SectionHeading";
import { ProjectRow } from "./ProjectRow";

export default function Projects() {
  return (
    <section id="projects" className="section">
      <div className="page-shell">
        <SectionHeading
          eyebrow="Projects"
          title="Things I’m building and exploring."
        />
        <div className="project-list mt-20">
          {projects.map((project: Project, index: number) => {
            return <ProjectRow project={project} index={index}></ProjectRow>;
          })}
        </div>
      </div>
    </section>
  );
}
