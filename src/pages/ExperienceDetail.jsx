import { ArrowLeft } from "lucide-react";
import { Link, Navigate, useParams } from "react-router-dom";
import { experiences } from "../data/experiences";

export default function ExperienceDetail() {
  const { slug } = useParams();
  const experience = experiences.find((item) => item.slug === slug);
  if (!experience) return <Navigate to="/not-found" replace />;
  return (
    <main className="page-shell py-24 sm:py-32">
      <Link
        className="inline-flex items-center gap-2 text-sm font-semibold text-[var(--accent)] hover:underline"
        to="/#experience"
      >
        <ArrowLeft size={16} /> All experience
      </Link>
      <article className="mt-10 max-w-3xl">
        <p className="eyebrow">Experience</p>
        <h1 className="mt-3 text-4xl font-bold tracking-tight sm:text-6xl">
          {experience.organization}
        </h1>
        <p className="mt-3 text-xl text-[var(--accent)]">{experience.role}</p>
        {experience.description && (
          <p className="mt-8 text-lg leading-8 text-[var(--muted)]">
            {experience.description}
          </p>
        )}
      </article>
    </main>
  );
}
