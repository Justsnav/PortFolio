import { ArrowUpRight } from "lucide-react";
import { Reveal } from "@/components/layout/Reveal";
import { CodolioHeatmap } from "@/components/heatmap/CodolioHeatmap";
import { profile } from "@/data/portfolio";

export function CodingSection() {
  return (
    <Reveal id="coding" title="Coding activity" index="05">
      <div className="activity-head">
        <p>Live activity aggregated from your connected Codolio platforms.</p>
        <a href={profile.codolio} target="_blank" rel="noreferrer">
          Open Codolio profile <ArrowUpRight size={15} />
        </a>
      </div>
      <CodolioHeatmap />
    </Reveal>
  );
}
