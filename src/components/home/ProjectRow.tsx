import { motion, useReducedMotion } from "framer-motion";
import { Code2, ExternalLink, ArrowLeft, ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";
import { Project } from "../../data/projects";
import ProjectMedia from "./ProjectMedia";
import { useState } from "react";

interface ProjectProps {
  project: Project;
  index: number;
}

export function ProjectRow({ project, index }: ProjectProps) {
  const reduceMotion = useReducedMotion();
  const [projectNum, setProjectNum] = useState<number>(0);
  const imageCount = Math.min(
    project.screenshots.length || (project.image ? 1 : 0),
    3,
  );
  const isReversed = index % 2 !== 0;
  const direction = isReversed ? -20 : 20;

  const onClick = (value: number) => {
    if (projectNum + value >= imageCount) {
      setProjectNum(0);
    } else if (projectNum + value < 0) {
      setProjectNum(imageCount - 1);
    } else {
      setProjectNum((prev) => prev + value);
    }
  };

  return (
    <article
      className={`project-row ${isReversed ? "project-row-reversed" : ""}`}
    >
      <motion.div
        className="project-visual"
        initial={reduceMotion ? {} : { opacity: 0, x: direction }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true, amount: 0.45 }}
        transition={{ duration: 0.35 }}
      >
        <ProjectMedia project={project} offset={projectNum} />
      </motion.div>
      <motion.div
        className="project-copy"
        initial={reduceMotion ? {} : { opacity: 0, x: -direction }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true, amount: 0.45 }}
        transition={{ duration: 0.35, delay: 0.1 }}
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
        <div className="project-actions">
          {imageCount > 1 && (
            <div
              className="project-gallery-controls"
              aria-label={`${project.title} screenshot controls`}
            >
              <button
                className="gallery-nav"
                type="button"
                onClick={() => onClick(-1)}
                aria-label={`Previous ${project.title} screenshot`}
              >
                <ArrowLeft size={17} />
              </button>
              <span className="gallery-count" aria-live="polite">
                {projectNum + 1} / {imageCount}
              </span>
              <button
                className="gallery-nav"
                type="button"
                onClick={() => onClick(1)}
                aria-label={`Next ${project.title} screenshot`}
              >
                <ArrowRight size={17} />
              </button>
            </div>
          )}
          <Link className="button-primary" to={`/projects/${project.slug}`}>
            More Info!
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
}
