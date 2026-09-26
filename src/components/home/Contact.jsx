import SocialLinks from "../ui/SocialLinks";
export default function Contact() {
  return (
    <section id="contact" className="section">
      <div className="page-shell">
        <div className="contact-card">
          <p className="eyebrow">Contact</p>
          <h2 className="mt-3 text-4xl font-bold tracking-tight">
            Let’s connect.
          </h2>
          <p className="mt-4 max-w-xl leading-7 text-[var(--muted)]">
            I’m always happy to talk about software, research, or the project
            you’re excited to build next.
          </p>
          <div className="mt-8">
            <SocialLinks labels />
          </div>
        </div>
      </div>
    </section>
  );
}
