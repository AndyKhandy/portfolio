import { ArrowLeft, Code2, ExternalLink } from "lucide-react";
import { Link, Navigate, useParams } from "react-router-dom";
import { projects, type Update, type UpdateType } from "../data/projects";

interface DetailProps {
  label: string;
  value: string;
}

const updateStyles: Record<UpdateType, string> = {
  feature:
    "border-emerald-900 bg-emerald-600 text-white dark:border-emerald-100 dark:bg-emerald-500",
  fix: "border-red-900 bg-red-600 text-white dark:border-red-100 dark:bg-red-500",
  improvement:
    "border-amber-900 bg-amber-400 text-amber-950 dark:border-amber-100 dark:bg-amber-300",
  refactor:
    "border-violet-900 bg-violet-600 text-white dark:border-violet-100 dark:bg-violet-500",
};

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
        {(project.challenges || project.updates?.length || project.result) && (
          <div className="detail-grid mt-16">
            {project.challenges && (
              <Detail label="Challenges" value={project.challenges} />
            )}
            {project.updates && project.updates.length > 0 && (
              <Updates updates={project.updates} />
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

function Updates({ updates }: { updates: Update[] }) {
  return (
    <section aria-labelledby="updates-heading">
      <h2 id="updates-heading" className="text-lg font-bold">
        Updates
      </h2>
      <ol className="mt-4 space-y-4">
        {updates.map((update) => (
          <li
            className="border-l-2 border-[var(--line)] pl-4"
            key={`${update.date}-${update.text}`}
          >
            <div className="flex flex-wrap items-center gap-2">
              <span
                className={`rounded-sm border-2 px-1.5 py-0.5 text-[0.65rem] font-black tracking-[0.12em] uppercase shadow-[2px_2px_0_var(--text)] ${updateStyles[update.type]}`}
              >
                {update.type}
              </span>
              <time className="text-xs font-bold uppercase tracking-[0.08em] text-[var(--muted)]">
                {update.date}
              </time>
            </div>
            <p className="mt-2 leading-7 text-[var(--muted)]">{update.text}</p>
          </li>
        ))}
      </ol>
    </section>
  );
}
