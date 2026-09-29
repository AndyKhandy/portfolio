import { ArrowDown } from "lucide-react";
import SocialLinks from "../ui/SocialLinks";
import SectionHeading from "../ui/SectionHeading";

export default function About() {
  return (
    <section id="about" className="section">
      <div className="page-shell grid lg:grid-cols-[2fr_1fr] gap-10 sm:grid-cols-1 lg:items-end">
        <div className="left">
          <SectionHeading
            eyebrow="About me"
            title="Software Engineer + Researcher"
          >
            I build software for real people and enjoy understanding the systems
            behind it. At UT Arlington, I learn through research, internships,
            and personal projects—then turn that curiosity into tools people can
            use.
          </SectionHeading>
          <div className="space-y-5 lg:pb-1">
            <p className="text-sm font-semibold text-[var(--muted)]">
              Arlington, TX · Expected May 2028
            </p>
            <p className="leading-7 text-[var(--muted)]">
              When I’m not coding, I’m usually near water, trying something new,
              or absorbed in whatever I’m learning next.
            </p>
            <div className="flex flex-wrap gap-3">
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
            <SocialLinks />
          </div>
        </div>
        <img className="contact-featured-photo" src="/me/pro.jpeg" alt="" />
      </div>
    </section>
  );
}
