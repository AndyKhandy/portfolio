import { ArrowDown } from "lucide-react";
import SocialLinks from "../ui/SocialLinks";
import SectionHeading from "../ui/SectionHeading";

export default function About() {
  return (
    <section id="about" className="section">
      <div className="page-shell grid gap-10 lg:grid-cols-[1.2fr_.8fr] lg:items-end">
        <SectionHeading eyebrow="About me" title="Software Engineer + Researcher">
          I’m a Computer Science student at UT Arlington. I like learning a
          system deeply enough to make something real with it, then letting the
          build reveal the next idea worth exploring.
        </SectionHeading>
        <div className="space-y-5 lg:pb-1">
          <p className="text-sm font-semibold text-[var(--muted)]">
            Arlington, TX · Expected May 2028
          </p>
          <div className="flex flex-wrap gap-3">
            <a className="button-primary" href="#projects">
              View projects <ArrowDown size={17} />
            </a>
            <span className="button-secondary cursor-not-allowed opacity-65" aria-disabled="true">
              Resume coming soon
            </span>
          </div>
          <SocialLinks />
        </div>
      </div>
    </section>
  );
}
