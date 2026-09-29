import SocialLinks from "../ui/SocialLinks";
export default function Contact() {
  return (
    <section id="contact" className="section">
      <div className="page-shell">
        <div className="contact-card">
          <div className="contact-copy">
            <p className="eyebrow">Contact</p>
            <h2 className="mt-3 text-4xl font-bold tracking-tight">
              Let’s connect.
            </h2>
            <p className="mt-4 max-w-xl leading-7 text-[var(--muted)]">
              I’m always happy to talk about software, research, or the project
              you’re excited to build next.
            </p>
            <p className="mt-4 max-w-xl leading-7 text-[var(--muted)]">
              Feel free to reach out to me about the color blue: my favorite color :)
            </p>
            <div className="mt-8">
              <SocialLinks labels />
            </div>
            <div className="contact-gallery">
              <img src="/me/cruise.jpeg" alt="Andy on a cruise" />
              <img src="/me/cruise2.jpeg" alt="Andy on another cruise" />
            </div>
          </div>
          <img
            className="contact-featured-photo"
            src="/me/beach.jpeg"
            alt="Andy at the beach"
          />
        </div>
      </div>
    </section>
  );
}
