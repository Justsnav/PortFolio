import { Reveal } from "@/components/layout/Reveal";
import { tech } from "@/data/portfolio";

export function TechStackSection() {
  return (
    <Reveal id="stack" title="Tech stack" index="03">
      <div className="tech-grid">
        {tech.map(([name, icon]) => (
          <div className="tech" title={name} aria-label={name} key={name}>
            <img
              src={`https://cdn.jsdelivr.net/gh/devicons/devicon/icons/${icon}`}
              alt=""
            />
            <span className="tech-name">{name}</span>
          </div>
        ))}
      </div>
    </Reveal>
  );
}
