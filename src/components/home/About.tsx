import SectionHeading from "../ui/SectionHeading";
export default function About() {
  return (
    <section id="about" className="section">
      <div className="page-shell">
        <SectionHeading
          eyebrow="About"
          title="Learning is where the build starts."
        >
          I like learning a system deeply enough to make something real with it.
          The constraints, surprises, and small discoveries along the way are
          usually what turn the original idea into a better one.
        </SectionHeading>
      </div>
    </section>
  );
}
