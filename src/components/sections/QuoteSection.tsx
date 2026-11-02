import { useMemo } from "react";
import { Reveal } from "@/components/layout/Reveal";
import { quotes } from "@/data/portfolio";

export function QuoteSection() {
  const quote = useMemo(
    () => quotes[Math.floor(new Date().setHours(0, 0, 0, 0) / 86400000) % quotes.length],
    []
  );

  return (
    <Reveal id="quote" title="A thought for today" index="07">
      <blockquote className="quote-card">
        <span>“</span>
        <p>{quote[0]}</p>
        <footer>— {quote[1]}</footer>
      </blockquote>
    </Reveal>
  );
}
