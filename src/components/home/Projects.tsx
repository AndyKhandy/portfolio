import { motion, useReducedMotion } from "framer-motion";
import { Code2, ExternalLink } from "lucide-react";
import { Link } from "react-router-dom";
import { Project, projects } from "../../data/projects";
import SectionHeading from "../ui/SectionHeading";

export default function Projects() {
  const reduceMotion = useReducedMotion();

  return (
    <section id="projects" className="section">
      <div className="page-shell">
        <SectionHeading
          eyebrow="Projects"
          title="Things I’m building and exploring."
        />
        <div className="project-list mt-14">
          {projects.map((project, index) => {
            const isReversed = index % 2 !== 0;
            const direction = isReversed ? -20 : 20;

            return (
              <article
                className={`project-row ${isReversed ? "project-row-reversed" : ""}`}
                key={project.slug}
              >
                <motion.div
                  className="project-visual"
                  initial={reduceMotion ? {} : { opacity: 0, x: direction }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true, amount: 0.45 }}
                  transition={{ duration: 0.35 }}
                >
                  <ProjectMedia project={project} />
                </motion.div>
                <motion.div
                  className="project-copy"
                  initial={reduceMotion ? {} : { opacity: 0, x: -direction }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true, amount: 0.45 }}
                  transition={{ duration: 0.35, delay: 0.10 }}
                >
                  <p className="eyebrow">Project 0{index + 1}</p>
                  <h3 className="mt-3 text-3xl font-bold tracking-tight">
                    {project.title}
                  </h3>
                  {project.shortDescription && (
                    <p className="mt-4 leading-7 text-[var(--muted)]">
                      {project.shortDescription}
                    </p>
                  )}
                  {project.techStack.length > 0 && (
                    <div className="mt-6 flex flex-wrap gap-2">
                      {project.techStack.map((tech, techIndex) => (
                        <motion.span
                          className="tech-badge"
                          initial={reduceMotion ? {} : { opacity: 0, y: 4 }}
                          whileInView={{ opacity: 1, y: 0 }}
                          viewport={{ once: true }}
                          transition={{
                            duration: 0.2,
                            delay: techIndex * 0.04,
                          }}
                          key={tech}
                        >
                          {tech}
                        </motion.span>
                      ))}
                    </div>
                  )}
                  <div className="mt-8 flex flex-wrap gap-3">
                    <Link
                      className="button-primary"
                      to={`/projects/${project.slug}`}
                    >
                      Case study
                    </Link>
                    {project.githubUrl && (
                      <a
                        className="button-secondary"
                        href={project.githubUrl}
                        target="_blank"
                        rel="noreferrer"
                      >
                        <Code2 size={17} /> GitHub
                      </a>
                    )}
                    {project.liveDemoUrl && (
                      <a
                        className="button-secondary"
                        href={project.liveDemoUrl}
                        target="_blank"
                        rel="noreferrer"
                      >
                        <ExternalLink size={17} /> Live demo
                      </a>
                    )}
                  </div>
                </motion.div>
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
}

interface ProjectMediaProps{
  project: Project
}

function ProjectMedia({ project }: ProjectMediaProps) {
  const screenshots = project.screenshots.length
    ? project.screenshots
    : project.image
      ? [project.image]
      : [];
  if (!screenshots.length)
    return (
      <div className="project-placeholder">Project visual coming soon</div>
    );
  return (
    <div
      className={`project-media ${screenshots.length > 1 ? "project-media-stacked" : ""}`}
    >
      {screenshots.slice(0, 3).map((screenshot, index) => (
        <img
          className={`project-shot project-shot-${index}`}
          src={screenshot}
          alt={`${project.title} screenshot ${index + 1}`}
          key={screenshot}
        />
      ))}
    </div>
  );
}
