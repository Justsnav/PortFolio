import { useEffect, useState } from "react";
import { profile } from "@/data/portfolio";
import { ActivityHeatmap } from "./ActivityHeatmap";

export function GithubHeatmap() {
  const [calendar, setCalendar] = useState<Record<string, number>>({});
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    let isMounted = true;
    const username = profile.githubUsername;

    async function loadGithub() {
      // 1. Try jogruber API
      try {
        const res = await fetch(`https://github-contributions-api.jogruber.de/v4/${encodeURIComponent(username)}`);
        if (res.ok) {
          const data = await res.json();
          if (!isMounted) return;
          const cal: Record<string, number> = {};
          (data.contributions ?? []).forEach((c: { date: string; count: number }) => {
            cal[c.date] = c.count;
          });
          setCalendar(cal);
          setLoading(false);
          return;
        }
      } catch {
        // Fallback below
      }

      // 2. Try Vercel API fallback
      try {
        const res = await fetch(`https://github-contributions.vercel.app/api/v1/${encodeURIComponent(username)}`);
        if (res.ok) {
          const data = await res.json();
          if (!isMounted) return;
          const cal: Record<string, number> = {};
          (data.contributions ?? []).forEach((c: { date: string; count: number }) => {
            cal[c.date] = c.count;
          });
          setCalendar(cal);
          setLoading(false);
          return;
        }
      } catch {
        // Ignore fallback error
      }

      if (isMounted) {
        setError("GitHub activity is temporarily unavailable.");
        setLoading(false);
      }
    }

    void loadGithub();
    return () => {
      isMounted = false;
    };
  }, []);

  return (
    <ActivityHeatmap
      kind="GitHub"
      badgeTitle={`GitHub Sync · @${profile.githubUsername}`}
      calendar={calendar}
      loading={loading}
      error={error}
      unit="contribution"
    />
  );
}
