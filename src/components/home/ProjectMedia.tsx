import { Project } from "../../data/projects";

interface ProjectMediaProps {
  project: Project;
  offset: number,
}

export default function ProjectMedia({ project, offset }: ProjectMediaProps) {
  const screenshots: string[] = project.screenshots.length
    ? project.screenshots
    : project.image
      ? [project.image]
      : [];
  const visibleScreenshots = screenshots.slice(0, 3);
  if (!screenshots.length)
    return (
      <div className="project-placeholder">Project visual coming soon</div>
    );
  return (
    <div
      className={`project-media ${screenshots.length > 1 ? "project-media-stacked" : ""}`}
    >
      {visibleScreenshots.map((screenshot, index) => (
        <img
          className={`project-shot project-shot-${(index + offset) % visibleScreenshots.length}`}
          src={screenshot}
          alt={`${project.title} screenshot ${index + 1}`}
          key={screenshot}
        />
      ))}
    </div>
  );
}
