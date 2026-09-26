import { Menu, X } from "lucide-react";
import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import ThemeToggle from "./ThemeToggle";

const links = ["About", "Experience", "Projects", "Skills", "Contact"];

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const { pathname } = useLocation();
  const href = (name) =>
    pathname === "/" ? `#${name.toLowerCase()}` : `/#${name.toLowerCase()}`;
  return (
    <header className="sticky top-0 z-50 border-b border-[var(--line)] bg-[color:var(--surface)/.86] backdrop-blur-xl">
      <nav
        className="page-shell flex h-16 items-center justify-between"
        aria-label="Main navigation"
      >
        <Link to="/" className="text-base font-bold tracking-tight">
          Andy Ta
        </Link>
        <div className="hidden items-center gap-6 md:flex">
          {links.map((name) => (
            <a className="nav-link" key={name} href={href(name)}>
              {name}
            </a>
          ))}
          <span className="resume-disabled">Resume coming soon</span>
          <ThemeToggle />
        </div>
        <div className="flex items-center gap-2 md:hidden">
          <ThemeToggle />
          <button
            className="icon-button"
            aria-expanded={open}
            aria-controls="mobile-nav"
            aria-label="Toggle navigation"
            onClick={() => setOpen(!open)}
          >
            {open ? <X size={20} /> : <Menu size={20} />}
          </button>
        </div>
      </nav>
      {open && (
        <div
          id="mobile-nav"
          className="border-t border-[var(--line)] bg-[var(--surface)] px-5 py-4 md:hidden"
        >
          {links.map((name) => (
            <a
              className="block py-3 font-semibold"
              key={name}
              href={href(name)}
              onClick={() => setOpen(false)}
            >
              {name}
            </a>
          ))}
          <span className="mt-2 block py-3 text-sm text-[var(--muted)]">
            Resume coming soon
          </span>
        </div>
      )}
    </header>
  );
}
