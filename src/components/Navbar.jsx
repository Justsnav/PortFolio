const links = [
  { label: "Home", href: "#home" },
  { label: "Projects", href: "#projects" },
  { label: "About", href: "#about" },
  { label: "Contact", href: "#contact" },
];

export default function Navbar() {
  return (
    <header className="sticky top-4 z-50 mx-auto w-[95%] max-w-3xl">
      <nav className="hard-border hard-shadow-sm flex items-center justify-between gap-4 rounded-full bg-white px-4 py-2.5 sm:px-6">
        <a href="#home" className="flex items-center gap-2 shrink-0">
          <span className="hard-border flex h-8 w-8 items-center justify-center rounded-full bg-coral">
            <span className="h-2.5 w-2.5 rounded-full bg-ink" />
          </span>
          <span className="hidden font-display text-sm font-bold tracking-tight sm:inline">
            ABHINAV.DEV
          </span>
        </a>

        <ul className="flex items-center gap-1 sm:gap-2">
          {links.map((link) => (
            <li key={link.href}>
              <a
                href={link.href}
                className="rounded-full px-2 py-1.5 text-sm font-semibold text-ink/70 transition hover:bg-cream hover:text-ink sm:px-3"
              >
                {link.label}
              </a>
            </li>
          ))}
        </ul>

        <a
          href="#contact"
          className="hard-border hard-shadow-sm press-effect hidden rounded-full bg-teal px-4 py-1.5 text-sm font-bold sm:block"
        >
          Hire Me
        </a>
      </nav>
    </header>
  );
}
