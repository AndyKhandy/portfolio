import { ArrowLeft, CheckCircle2, Code2, ExternalLink } from "lucide-react";
import { Link, Navigate, useParams } from "react-router-dom";
import {
  projects,
  type CaseStudy,
  type CaseStudyHighlight,
  type Update,
  type UpdateType,
} from "../data/projects";

interface DetailProps {
  label: string;
  value: string;
}

const updateStyles: Record<UpdateType, string> = {
  feature:
    "border-emerald-900 bg-emerald-800 text-white",
  fix: "border-red-900 bg-red-700 text-white",
  improvement:
    "border-amber-900 bg-amber-400 text-amber-950 dark:border-amber-100 dark:bg-amber-300",
  refactor:
    "border-violet-900 bg-violet-700 text-white",
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
        <h1 className="text-4xl font-bold tracking-tight sm:text-6xl">
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
        {project.caseStudy && <CaseStudyContent caseStudy={project.caseStudy} />}
        {(project.challenges || project.updates?.length || project.result) && (
          <div className={`detail-grid ${project.caseStudy ? "mt-10" : "mt-16"}`}>
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

function CaseStudyContent({ caseStudy }: { caseStudy: CaseStudy }) {
  return (
    <div className="case-study mt-16">
      <section className="case-study-intro">
        <div>
          <h2 className="text-lg font-bold">Context</h2>
          <p className="mt-2 leading-7 text-[var(--muted)]">{caseStudy.context}</p>
        </div>
        <div className="case-study-outcome">
          <CheckCircle2 aria-hidden="true" size={20} />
          <div>
            <p className="text-sm font-bold uppercase tracking-[0.1em]">Outcome</p>
            <p className="mt-2 leading-7">{caseStudy.outcome}</p>
          </div>
        </div>
      </section>

      <section className="case-study-section" aria-labelledby="built-heading">
        <h2 id="built-heading">What I built</h2>
        <ol className="case-study-list">
          {caseStudy.ownership.map((item) => (
            <li key={item}>{item}</li>
          ))}
        </ol>
      </section>

      <section className="case-study-section" aria-labelledby="architecture-heading">
        <h2 id="architecture-heading">Architecture at a glance</h2>
        <ol className="architecture-flow">
          {caseStudy.architecture.map((step) => (
            <li key={step}>{step}</li>
          ))}
        </ol>
      </section>

      <section className="case-study-section" aria-labelledby="decision-heading">
        <h2 id="decision-heading">Key engineering decision</h2>
        <div className="decision-card">
          <h3>{caseStudy.decision.title}</h3>
          <p>{caseStudy.decision.rationale}</p>
        </div>
      </section>

      <section className="case-study-section" aria-labelledby="highlights-heading">
        <h2 id="highlights-heading">Engineering highlights</h2>
        <div className="case-study-highlights">
          {caseStudy.highlights.map((highlight) => (
            <HighlightCard highlight={highlight} key={highlight.title} />
          ))}
        </div>
      </section>
    </div>
  );
}

function HighlightCard({ highlight }: { highlight: CaseStudyHighlight }) {
  return (
    <article className="case-study-highlight">
      <span
        className={`case-study-label ${updateStyles[highlight.type]}`}
      >
        {highlight.type}
      </span>
      <h3>{highlight.title}</h3>
      <p>{highlight.text}</p>
    </article>
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
