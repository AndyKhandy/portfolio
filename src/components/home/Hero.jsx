import { ArrowDown } from "lucide-react";
import SocialLinks from "../ui/SocialLinks";

export default function Hero() {
  return (
    <section id="home" className="hero-section">
      <div className="hero-glow hero-glow-one" />
      <div className="hero-glow hero-glow-two" />
      <div className="page-shell relative grid min-h-[calc(100vh-4rem)] items-center gap-14 py-20 lg:grid-cols-[1.2fr_.8fr]">
        <div>
          <p className="eyebrow">Arlington, Texas</p>
          <h1 className="mt-5 max-w-3xl text-5xl font-bold tracking-[-.05em] sm:text-7xl">
            Andy Khang Ta
          </h1>
          <p className="mt-5 text-xl font-semibold text-[var(--accent)] sm:text-2xl">
            Software Engineer + Researcher
          </p>
          <p className="mt-3 text-[var(--muted)]">
            Computer Science @ UT Arlington · Expected May 2028
          </p>
          <p className="mt-8 max-w-xl text-lg leading-8 text-[var(--muted)]">
            I follow curiosity far enough to build with it—then let the act of
            building reveal the next idea worth exploring.
          </p>
          <div className="mt-9 flex flex-wrap gap-3">
            <a className="button-primary" href="#projects">
              View projects <ArrowDown size={17} />
            </a>
            <span
              className="button-secondary cursor-not-allowed opacity-65"
              aria-disabled="true"
            >
              Resume coming soon
            </span>
          </div>
          <div className="mt-8">
            <SocialLinks />
          </div>
        </div>
        <div
          className="water-frame"
          aria-label="Abstract ocean composition for future headshot"
        >
          <div className="water-orb" />
          <div className="water-ring water-ring-one" />
          <div className="water-ring water-ring-two" />
        </div>
      </div>
    </section>
  );
}
