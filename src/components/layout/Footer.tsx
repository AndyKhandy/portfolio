export default function Footer() {
  return (
    <footer className="border-t border-[var(--line)] py-8 text-center text-sm text-[var(--muted)]">
      © {new Date().getFullYear()} Andy Ta. Built with curiosity.
    </footer>
  );
}
