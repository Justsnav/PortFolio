const tags = ["C++", "JavaScript", "React", "Express", "Node.js"];

const infoCards = [
  { label: "Top Project", value: "Prompt Optimizer & Cost Calculator" },
  { label: "Current Focus", value: "Advance Backend" },
  { label: "Status", value: "Available for hire" },
  { label: "Based In", value: "Bengaluru, India" },
];

export default function Hero() {
  return (
    <section id="home" className="mx-auto max-w-5xl px-4 pt-16 pb-10 sm:pt-24">
      <h1 className="font-display text-4xl font-bold leading-tight tracking-tight sm:text-6xl">
        Hi, I'm <span className="text-coral">Abhinav</span> —{" "}
        <span className="bg-gold px-2 hard-border hard-shadow-sm inline-block rotate-1">
          Dev
        </span> 
      </h1>

      <p className="mt-6 max-w-2xl text-lg text-ink/80">
        I craft high-performance web experiences inspired by real-world Project. Blending nostalgic retro aesthetics with modern web tech, I design and build fast, responsive sites packed with playful micro-interactions that give the web a tactile, arcade-like feel.
      </p>

      <div className="mt-8 flex flex-wrap gap-4">
        <a
          href="#projects"
          className="hard-border hard-shadow press-effect rounded-full bg-coral px-6 py-3 font-bold"
        >
          View Projects →
        </a>
        <a
          href="#contact"
          className="hard-border hard-shadow press-effect rounded-full bg-white px-6 py-3 font-bold"
        >
          Hire Me
        </a>
      </div>

      <div className="mt-6 flex flex-wrap gap-2">
        {tags.map((tag) => (
          <span
            key={tag}
            className="hard-border rounded-full bg-white/70 px-3 py-1 text-sm font-semibold"
          >
            {tag}
          </span>
        ))}
      </div>

      <div className="mt-10 grid grid-cols-2 gap-4 sm:grid-cols-4">
        {infoCards.map((card) => (
          <div
            key={card.label}
            className="hard-border hard-shadow-sm rounded-2xl bg-white p-4"
          >
            <p className="text-xs font-bold uppercase tracking-wide text-ink/50">
              {card.label}
            </p>
            <p className="mt-1 font-display text-base font-bold">
              {card.value}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}
