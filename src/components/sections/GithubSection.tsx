import { ArrowUpRight } from "lucide-react";
import { Reveal } from "@/components/layout/Reveal";
import { GithubHeatmap } from "@/components/heatmap/GithubHeatmap";
import { profile } from "@/data/portfolio";

export function GithubSection() {
  return (
    <Reveal id="github" title="GitHub activity" index="06">
      <div className="activity-head">
        <p>Live open source contributions and commits synced directly from GitHub.</p>
        <a href={profile.github} target="_blank" rel="noreferrer">
          GitHub profile <ArrowUpRight size={15} />
        </a>
      </div>
      <GithubHeatmap />
    </Reveal>
  );
}
