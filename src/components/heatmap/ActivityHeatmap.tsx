import { useMemo, useState } from "react";

export type YearMode = number | "last12";

function formatDate(dateStr: string) {
  const [y, m, d] = dateStr.split("-").map(Number);
  const date = new Date(Date.UTC(y, m - 1, d));
  return date.toLocaleDateString("en-US", {
    weekday: "short",
    month: "short",
    day: "numeric",
    year: "numeric",
    timeZone: "UTC",
  });
}

export interface ActivityHeatmapProps {
  kind: "Codolio" | "GitHub";
  badgeTitle: string;
  calendar: Record<string, number>;
  loading: boolean;
  error?: string | null;
  unit: "submission" | "contribution";
  platformsCount?: number;
}

export function ActivityHeatmap({
  kind,
  badgeTitle,
  calendar,
  loading,
  error,
  unit,
  platformsCount,
}: ActivityHeatmapProps) {
  const [selectedYear, setSelectedYear] = useState<YearMode>(2026);
  const [hoveredCell, setHoveredCell] = useState<{ dateStr: string; count: number } | null>(null);

  const { weeks, monthLabels, activeDays, totalCount } = useMemo(() => {
    const today = new Date();
    let startSunday: Date;
    const monthLabelsList: { name: string; col: number }[] = [];

    if (typeof selectedYear === "number") {
      const year = selectedYear;
      const jan1 = new Date(Date.UTC(year, 0, 1));
      startSunday = new Date(jan1);
      startSunday.setUTCDate(jan1.getUTCDate() - jan1.getUTCDay());

      for (let m = 0; m < 12; m++) {
        const d = new Date(Date.UTC(year, m, 1));
        const diffDays = Math.floor((d.getTime() - startSunday.getTime()) / 86400000);
        const col = Math.floor(diffDays / 7);
        monthLabelsList.push({
          name: d.toLocaleString("en-US", { month: "short", timeZone: "UTC" }),
          col,
        });
      }
    } else {
      const currentUTC = new Date(Date.UTC(today.getFullYear(), today.getMonth(), today.getDate()));
      const endSaturday = new Date(currentUTC);
      endSaturday.setUTCDate(currentUTC.getUTCDate() + (6 - currentUTC.getUTCDay()));
      startSunday = new Date(endSaturday);
      startSunday.setUTCDate(endSaturday.getUTCDate() - (53 * 7 - 1));

      let lastMonth = -1;
      for (let w = 0; w < 53; w++) {
        for (let d = 0; d < 7; d++) {
          const dt = new Date(startSunday);
          dt.setUTCDate(startSunday.getUTCDate() + w * 7 + d);
          const m = dt.getUTCMonth();
          if (m !== lastMonth && dt.getUTCDate() <= 7) {
            monthLabelsList.push({
              name: dt.toLocaleString("en-US", { month: "short", timeZone: "UTC" }),
              col: w,
            });
            lastMonth = m;
          }
        }
      }
    }

    let activeDays = 0;
    let totalCount = 0;
    let maxCount = 1;

    const rawWeeks: { dateStr: string; inYear: boolean; isFuture: boolean; count: number }[][] = [];

    for (let w = 0; w < 53; w++) {
      const week: { dateStr: string; inYear: boolean; isFuture: boolean; count: number }[] = [];
      for (let d = 0; d < 7; d++) {
        const date = new Date(startSunday);
        date.setUTCDate(startSunday.getUTCDate() + w * 7 + d);
        const dateStr = date.toISOString().split("T")[0];
        const inYear = typeof selectedYear === "number" ? date.getUTCFullYear() === selectedYear : true;
        const isFuture = date.getTime() > today.getTime();
        const count = inYear && !isFuture ? (calendar[dateStr] ?? 0) : 0;

        if (inYear && !isFuture) {
          if (count > 0) activeDays++;
          totalCount += count;
          if (count > maxCount) maxCount = count;
        }

        week.push({ dateStr, inYear, isFuture, count });
      }
      rawWeeks.push(week);
    }

    const weeksList = rawWeeks.map((week) =>
      week.map((cell) => {
        let level = 0;
        if (cell.count > 0) {
          level = Math.min(5, Math.max(1, Math.ceil((cell.count / maxCount) * 5)));
        }
        return { ...cell, level };
      })
    );

    return { weeks: weeksList, monthLabels: monthLabelsList, activeDays, totalCount };
  }, [calendar, selectedYear]);

  const defaultNote = useMemo(() => {
    if (loading) return `Loading live ${kind} activity…`;
    if (error) return `${kind} activity is temporarily unavailable.`;
    const period = selectedYear === "last12" ? "the last 12 months" : `${selectedYear}`;
    const platformPart = platformsCount ? ` across ${platformsCount} synced platforms` : "";
    return `Live ${kind} activity · ${activeDays} active days · ${totalCount} ${
      totalCount === 1 ? unit : unit + "s"
    } in ${period}${platformPart}`;
  }, [loading, error, kind, selectedYear, activeDays, totalCount, unit, platformsCount]);

  return (
    <div className="heatmap-wrap" aria-label={`${kind} activity grid`}>
      <div className="heat-header">
        <div className="heat-title-badge">
          <span className="heat-pulse" />
          <span>{badgeTitle}</span>
        </div>
        <div className="heat-year-pills">
          <button
            type="button"
            className={`year-pill ${selectedYear === 2026 ? "active" : ""}`}
            onClick={() => setSelectedYear(2026)}
          >
            2026
          </button>
          <button
            type="button"
            className={`year-pill ${selectedYear === 2025 ? "active" : ""}`}
            onClick={() => setSelectedYear(2025)}
          >
            2025
          </button>
          <button
            type="button"
            className={`year-pill ${selectedYear === "last12" ? "active" : ""}`}
            onClick={() => setSelectedYear("last12")}
          >
            Last 12 Mo
          </button>
        </div>
      </div>

      <div className="heatmap-scroll">
        <div className="heatmap-inner">
          <div className="month-labels-row">
            <div className="day-gutter-spacer" />
            <div className="month-labels-grid">
              {monthLabels.map((m, i) => (
                <span
                  key={i}
                  style={{ gridColumnStart: m.col + 1 }}
                  className="month-label"
                >
                  {m.name}
                </span>
              ))}
            </div>
          </div>

          <div className="heat-grid-row">
            <div className="day-labels">
              <span />
              <span>Mon</span>
              <span />
              <span>Wed</span>
              <span />
              <span>Fri</span>
              <span />
            </div>

            <div className="heatmap-grid">
              {weeks.map((week, wIndex) => (
                <div className="heat-week" key={wIndex}>
                  {week.map((cell, dIndex) => {
                    if (!cell.inYear) {
                      return <i className="cell cell-pad" key={dIndex} aria-hidden="true" />;
                    }

                    const tooltip = cell.isFuture
                      ? `Future: ${formatDate(cell.dateStr)}`
                      : cell.count === 0
                      ? `No ${unit}s on ${formatDate(cell.dateStr)}`
                      : `${cell.count} ${cell.count === 1 ? unit : unit + "s"} on ${formatDate(cell.dateStr)}`;

                    return (
                      <i
                        key={dIndex}
                        className={`cell l${cell.level}`}
                        title={tooltip}
                        onMouseEnter={() => setHoveredCell({ dateStr: cell.dateStr, count: cell.count })}
                        onMouseLeave={() => setHoveredCell(null)}
                      />
                    );
                  })}
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      <div className="heat-footer">
        <span>
          {hoveredCell ? (
            <strong>
              {hoveredCell.count === 0
                ? `No ${unit}s on ${formatDate(hoveredCell.dateStr)}`
                : `${hoveredCell.count} ${hoveredCell.count === 1 ? unit : unit + "s"} on ${formatDate(hoveredCell.dateStr)}`}
            </strong>
          ) : (
            defaultNote
          )}
        </span>
        <span className="legend">
          Less <i className="cell l0" />
          <i className="cell l1" />
          <i className="cell l2" />
          <i className="cell l3" />
          <i className="cell l4" />
          <i className="cell l5" /> More
        </span>
      </div>
    </div>
  );
}
