export default function Footer() {
  return (
    <footer className="mx-auto max-w-5xl px-4 pb-10 pt-6 text-center">
      <h2 className="font-display text-4xl font-bold leading-tight tracking-tight sm:text-6xl">
        <span
          style={{ WebkitTextStroke: "2px #16160f" }}
          className="text-cream"
        >
          LET'S BUILD
        </span>
        <br />
        <span
          style={{ WebkitTextStroke: "2px #16160f" }}
          className="text-cream"
        >
          SOMETHING EPIC
        </span>
      </h2>

      <a
        href="mailto:003abhinavkumar@gmail.com"
        className="hard-border hard-shadow press-effect mt-6 inline-block rounded-full bg-white px-6 py-3 font-bold"
      >
        003abhinavkumar@gmail.com
      </a>

      <div className="mt-10 flex flex-col items-center justify-between gap-4 border-t-[3px] border-ink pt-6 sm:flex-row">
        <p className="text-sm font-semibold text-ink/60">
          © 2026 Abhinav.
        </p>
        <a
          href="#home"
          className="hard-border hard-shadow-sm press-effect rounded-full bg-white px-4 py-2 text-sm font-bold"
        >
          Back to Top ↑
        </a>
      </div>
    </footer>
  );
}
