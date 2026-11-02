import { useState } from "react";
import { AnimatePresence, motion } from "motion/react";
import { ChevronDown, Menu, Moon, Sun, X } from "lucide-react";
import { profile } from "@/data/portfolio";

const navItems = [
  ["Home", "home"],
  ["About", "about"],
  ["Projects", "projects"],
] as const;

interface NavbarProps {
  dark: boolean;
  onToggleTheme: () => void;
  onOpenContact: () => void;
  onScrollTo: (id: string) => void;
}

export function Navbar({ dark, onToggleTheme, onOpenContact, onScrollTo }: NavbarProps) {
  const [mobileOpen, setMobileOpen] = useState(false);

  const handleNavClick = (id: string) => {
    onScrollTo(id);
    setMobileOpen(false);
  };

  return (
    <header className="nav">
      <a className="logo" href="#home" onClick={() => handleNavClick("home")}>
        {profile.initials}
      </a>

      <nav>
        {navItems.map(([label, id]) => (
          <button key={id} onClick={() => handleNavClick(id)}>
            {label}
          </button>
        ))}

        <details className="more-menu">
          <summary>
            More <ChevronDown size={13} />
          </summary>
          <div className="more-options">
            <button onClick={() => handleNavClick("education")}>Education</button>
            <a href="/resume">Resume</a>
            <button
              onClick={() => {
                onOpenContact();
              }}
            >
              Contact
            </button>
          </div>
        </details>
      </nav>

      <div className="nav-actions">
        <button aria-label="Toggle theme" onClick={onToggleTheme}>
          {dark ? <Sun size={17} /> : <Moon size={17} />}
        </button>
        <button
          className="mobile-menu"
          aria-label="Menu"
          onClick={() => setMobileOpen(!mobileOpen)}
        >
          {mobileOpen ? <X /> : <Menu />}
        </button>
      </div>

      <AnimatePresence>
        {mobileOpen && (
          <motion.nav
            className="mobile-nav"
            initial={{ opacity: 0, y: -8 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -8 }}
          >
            {[...navItems, ["Education", "education"] as const].map(([label, id]) => (
              <button key={id} onClick={() => handleNavClick(id)}>
                {label}
              </button>
            ))}
            <a href="/resume">Resume</a>
            <button
              onClick={() => {
                onOpenContact();
                setMobileOpen(false);
              }}
            >
              Contact
            </button>
          </motion.nav>
        )}
      </AnimatePresence>
    </header>
  );
}
