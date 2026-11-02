import { useEffect, useState } from "react";
import { profile } from "@/data/portfolio";
import { ActivityHeatmap } from "./ActivityHeatmap";

export function CodolioHeatmap() {
  const [calendar, setCalendar] = useState<Record<string, number>>({});
  const [platformsCount, setPlatformsCount] = useState<number>(0);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    let isMounted = true;
    fetch(`https://api.codolio.com/profile?userKey=${encodeURIComponent(profile.leetcodeUsername)}`)
      .then((res) => (res.ok ? res.json() : Promise.reject(new Error("API returned status " + res.status))))
      .then((payload) => {
        if (!isMounted) return;
        const platforms = payload.data?.platformProfiles?.platformProfiles ?? [];
        const cal: Record<string, number> = {};
        platforms.forEach((platform: { dailyActivityStatsResponse?: { submissionCalendar?: Record<string, number> } }) => {
          Object.entries(platform.dailyActivityStatsResponse?.submissionCalendar ?? {}).forEach(([ts, count]) => {
            const dateStr = new Date(Number(ts) * 1000).toISOString().split("T")[0];
            cal[dateStr] = (cal[dateStr] ?? 0) + Number(count);
          });
        });
        setCalendar(cal);
        setPlatformsCount(platforms.length);
        setLoading(false);
      })
      .catch((err) => {
        if (!isMounted) return;
        setError(err.message || "Failed to load Codolio data");
        setLoading(false);
      });
    return () => {
      isMounted = false;
    };
  }, []);

  return (
    <ActivityHeatmap
      kind="Codolio"
      badgeTitle="Codolio Sync · LeetCode, Codeforces, CodeChef & GeeksforGeeks"
      calendar={calendar}
      loading={loading}
      error={error}
      unit="submission"
      platformsCount={platformsCount}
    />
  );
}
