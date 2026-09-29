import { Menu, X } from "lucide-react";
import { motion, useReducedMotion } from "framer-motion";
import { useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import ThemeToggle from "./ThemeToggle";

const links = ["About", "Experience", "Projects", "Skills", "Contact"];

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const { pathname } = useLocation();
  const reduceMotion = useReducedMotion();
  const [showNavbar, setShowNavbar] = useState(pathname !== "/");

  useEffect(() => {
    if (pathname !== "/") {
      setShowNavbar(true);
      return;
    }

    const updateVisibility = () => {
      const about = document.getElementById("about");
      setShowNavbar(Boolean(about && window.scrollY >= about.offsetTop - 500));
    };

    const frame = requestAnimationFrame(updateVisibility);
    window.addEventListener("scroll", updateVisibility, { passive: true });

    return () => {
      cancelAnimationFrame(frame);
      window.removeEventListener("scroll", updateVisibility);
    };
  }, [pathname]);

  const href = (name: string) =>
    pathname === "/" ? `#${name.toLowerCase()}` : `/#${name.toLowerCase()}`;

  if (!showNavbar) return null;

  return (
    <motion.header
      className="fixed inset-x-0 top-0 z-50 border-b border-[var(--line)] bg-[color:var(--surface)/.86] backdrop-blur-xl"
      initial={reduceMotion ? false : { opacity: 0, y: -16 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: reduceMotion ? 0 : 0.28, ease: "easeOut" }}
    >
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
    </motion.header>
  );
}
