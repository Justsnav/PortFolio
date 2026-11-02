import { projects } from "../data/projects";

const accentMap = {
  coral: "bg-coral",
  teal: "bg-teal",
  gold: "bg-gold",
};

const accentTintMap = {
  coral: "bg-coral/20",
  teal: "bg-teal/20",
  gold: "bg-gold/20",
};

function ProjectCard({ project }) {
  return (
    <div className="hard-border hard-shadow-sm press-effect flex flex-col overflow-hidden rounded-2xl bg-white">
      <div className="flex items-center gap-1.5 border-b-[3px] border-ink bg-cream-dark px-3 py-2">
        <span className="h-2.5 w-2.5 rounded-full bg-coral" />
        <span className="h-2.5 w-2.5 rounded-full bg-gold" />
        <span className="h-2.5 w-2.5 rounded-full bg-teal" />
        <span className="ml-auto rounded-full border-2 border-ink bg-ink px-2 py-0.5 text-[10px] font-bold text-cream">
          RANK {project.level}
        </span>
      </div>

      <div
        className={`flex h-32 items-center justify-center border-b-[3px] border-ink ${accentTintMap[project.accent]}`}
      >
        <span className={`hard-border rounded-xl px-4 py-2 font-display font-bold ${accentMap[project.accent]}`}>
          {project.title}
        </span>
      </div>

      <div className="flex flex-1 flex-col p-5">
        <h3 className="font-display text-lg font-bold">{project.title}</h3>
        <p className="mt-2 flex-1 text-sm text-ink/70">{project.description}</p>

        <div className="mt-4 flex flex-wrap gap-2">
          {project.tags.map((tag) => (
            <span
              key={tag}
              className="rounded-full border-2 border-ink px-2.5 py-0.5 text-xs font-bold"
            >
              {tag}
            </span>
          ))}
        </div>

        
      </div>
    </div>
  );
}

export default function Projects() {
  return (
    <section id="projects" className="mx-auto max-w-5xl px-4 py-16">
      <div className="text-center">
        <h2 className="font-display text-3xl font-bold sm:text-4xl">
          Projects
        </h2>
        <p className="mt-2 text-ink/70">
          Showcasing my work with a retro game twist ⚡
        </p>
      </div>

      <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {projects.map((project) => (
          <ProjectCard key={project.title} project={project} />
        ))}
      </div>
    </section>
  );
}
