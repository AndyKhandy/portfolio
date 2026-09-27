import { ArrowLeft, Code2, ExternalLink } from "lucide-react";
import { Link, Navigate, useParams } from "react-router-dom";
import { projects } from "../data/projects";

interface DetailProps {
  label: string;
  value: string;
}

export default function ProjectDetail() {
  const { slug } = useParams();
  const project = projects.find((item) => item.slug === slug);
  if (!project) return <Navigate to="/not-found" replace />;

  return (
    <main className="page-shell py-24 sm:py-32">
      <Link
        className="inline-flex items-center gap-2 text-sm font-semibold text-[var(--accent)] hover:underline"
        to="/#projects"
      >
        <ArrowLeft size={16} /> All projects
      </Link>
      <article className="mt-10 max-w-3xl">
        <p className="eyebrow">Case study</p>
        <h1 className="mt-3 text-4xl font-bold tracking-tight sm:text-6xl">
          {project.title}
        </h1>
        {project.longDescription && (
          <p className="mt-6 text-lg leading-8 text-[var(--muted)]">
            {project.longDescription}
          </p>
        )}
        <div className="mt-8 flex flex-wrap gap-2">
          {project.techStack.map((tech) => (
            <span className="tech-badge" key={tech}>
              {tech}
            </span>
          ))}
        </div>
        <div className="mt-10 flex flex-wrap gap-3">
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
              className="button-primary"
              href={project.liveDemoUrl}
              target="_blank"
              rel="noreferrer"
            >
              <ExternalLink size={17} /> Live demo
            </a>
          )}
        </div>
        {(project.role ||
          project.challenges ||
          project.lessons ||
          project.result) && (
          <div className="detail-grid mt-16">
            {project.role && <Detail label="Role" value={project.role} />}
            {project.challenges && (
              <Detail label="Challenges" value={project.challenges} />
            )}
            {project.lessons && (
              <Detail label="What I learned" value={project.lessons} />
            )}
            {project.result && <Detail label="Result" value={project.result} />}
          </div>
        )}
      </article>
    </main>
  );
}

function Detail({ label, value }: DetailProps) {
  return (
    <section>
      <h2 className="text-lg font-bold">{label}</h2>
      <p className="mt-2 leading-7 text-[var(--muted)]">{value}</p>
    </section>
  );
}
