import { useState } from "react";
import { motion, useReducedMotion } from "motion/react";
import { ArrowUpRight, ExternalLink, Github } from "lucide-react";
import { Reveal } from "@/components/layout/Reveal";
import { projects } from "@/data/portfolio";

// =============================================================================
// PROJECTS SECTION COMPONENT
// =============================================================================
// Displays your featured and all projects.
// Project data, descriptions, tags, and links are defined in `src/data/portfolio.ts`.
// =============================================================================
export function ProjectsSection() {
  const [showAll, setShowAll] = useState(false);
  const reduce = useReducedMotion();

  // Shows first 2 projects initially, expands to all when "Show all projects" is clicked
  const displayedProjects = showAll ? projects : projects.slice(0, 2);

  return (
    <Reveal id="projects" title="Selected projects" index="04">
      <p className="section-lede">
        A few things I’ve been making. You can add or update project details and repository/demo links directly in <code>src/data/portfolio.ts</code>.
      </p>

      <div className="projects">
        {displayedProjects.map((project, i) => (
          <motion.article
            className="project"
            key={project.name}
            initial={reduce ? false : { opacity: 0, y: 14 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.08 }}
          >
            <div className={`project-image ${project.accent}`}>
              <div className="mock-window">
                <span />
                <span />
                <span />
                <b>{project.name}</b>
              </div>
            </div>

            <div className="project-info">
              <div>
                <h3>{project.name}</h3>
                <p>{project.description}</p>
              </div>

              <div className="project-bottom">
                <div className="project-tags">
                  {project.tags.map((tag) => (
                    <small key={tag}>{tag}</small>
                  ))}
                </div>

                <div className="project-links">
                  {project.github && (
                    <a
                      href={project.github}
                      target="_blank"
                      rel="noreferrer"
                      title="View source code on GitHub"
                      className="project-link"
                    >
                      <Github size={13} /> Code <ArrowUpRight size={12} />
                    </a>
                  )}
                  {project.demo && (
                    <a
                      href={project.demo}
                      target="_blank"
                      rel="noreferrer"
                      title="Open live demo"
                      className="project-link demo"
                    >
                      <ExternalLink size={13} /> Demo <ArrowUpRight size={12} />
                    </a>
                  )}
                </div>
              </div>
            </div>
          </motion.article>
        ))}
      </div>

      <button className="show-more" onClick={() => setShowAll(!showAll)}>
        {showAll ? "Show less" : "Show all projects"}
      </button>
    </Reveal>
  );
}
