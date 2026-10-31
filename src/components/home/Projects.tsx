import { Project, projects } from "../../data/projects";
import SectionHeading from "../ui/SectionHeading";
import { ProjectRow } from "./ProjectRow";
import OceanDecor from "../ui/OceanDecor";

export default function Projects() {
  return (
    <section id="projects" className="section ocean-section ocean-section-ornamented">
      <OceanDecor variant="wave" className="section-wave" />
      <OceanDecor variant="current" className="project-current" />
      <OceanDecor variant="project-stars" className="project-stars" />
      <OceanDecor variant="compass" className="section-compass section-compass-right" />
      <OceanDecor variant="compass" className="section-compass section-compass-project" />
      <div className="page-shell">
        <SectionHeading
          eyebrow="Projects"
          title="Things I’m building and exploring."
        />
        <div className="project-list mt-20">
          {projects.map((project: Project, index: number) => {
            return <ProjectRow key={project.slug} project={project} index={index} />;
          })}
        </div>
      </div>
    </section>
  );
}
