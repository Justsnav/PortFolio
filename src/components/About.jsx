import { useState, useEffect } from "react";

const skills = [
  { icon: "⚙️", name: "Node.js & Express", level: "Advanced" },
  { icon: "⚡", name: "React.js", level: "Advanced" },
  { icon: "🗄️", name: "MongoDB", level: "Advanced" },
  { icon: "🧠", name: "Generative AI & LLMs", level: "Certified" },
  { icon: "📊", name: "Data Structures & Algorithms", level: "Proficient" },
  { icon: "🏆", name: "Competitive Programming", level: "Intermediate" },
  { icon: "💻", name: "C++", level: "Intermediate" },
];

const stats = [
  { value: "5+", label: "Projects", color: "text-white" },
  { value: "8.41", label: "CGPA", color: "text-teal" },
  { value: "350+", label: "Problems Solved", color: "text-gold" },
];

const education = [
  {
    institution: "RNS Institute of Technology",
    location: "Bengaluru, India",
    degree: "B.E. – Computer Science (AI & ML)",
    period: "Sept 2023 – Aug 2027",
    bullets: [
      "GPA: 8.41 / 10  |  7th Semester",
      "DSA, OOP, OS, Computer Networks, DBMS, Machine Learning",
    ],
  },
];

const codingProfiles = [
  {
    name: "LeetCode",
    url: "https://leetcode.com/u/rag_spark_40/",
    emoji: "🟨",
    stat: "Rating: 1501",
  },
  {
    name: "Codeforces",
    url: "https://codeforces.com/profile/rag_spark_40",
    emoji: "🔵",
    stat: "Rating: 974",
  },
  {
    name: "CodeChef",
    url: "https://www.codechef.com/users/rag_spark_40",
    emoji: "🟤",
    stat: "⭐ 2 stars",
  },
];

const levelColor = {
  Certified: "text-gold",
  Advanced: "text-teal",
  Proficient: "text-cream",
  Intermediate: "text-cream/50",
};

export default function About() {
  const [count, setCount] = useState(0);

  // Animate the problems solved counter when stat card is visible
  useEffect(() => {
    const target = 350;
    const el = document.querySelector("#problems-solved");
    if (!el) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (!entry.isIntersecting) return;
        let start = 0;
        const step = Math.ceil(target / 40);
        const timer = setInterval(() => {
          start += step;
          if (start >= target) { setCount(target); clearInterval(timer); }
          else setCount(start);
        }, 30);
        observer.disconnect();
      },
      { threshold: 0.5 }
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  return (
    <section id="about" className="px-4 py-10">
      <div className="hard-border hard-shadow-lg mx-auto max-w-5xl rounded-[2.5rem] bg-forest p-6 text-cream sm:p-10 space-y-0">

        {/* ── EDUCATION ── */}
        <div className="border-b border-cream/20 pb-8">
          <p className="text-xs font-bold uppercase tracking-widest text-cream/40 mb-2">
            // education.log
          </p>
          <h3 className="font-display text-xl font-bold mb-5">🎓 Education</h3>
          <div className="space-y-6">
            {education.map((edu, i) => (
              <div key={i}>
                <div className="flex items-start justify-between gap-4 flex-wrap">
                  <div>
                    <p className="font-semibold text-cream">{edu.institution}</p>
                    <p className="text-sm text-cream/50">{edu.location}</p>
                  </div>
                  <span className="text-sm text-cream/50 whitespace-nowrap">{edu.period}</span>
                </div>
                <p className="mt-1 text-sm italic text-cream/70">{edu.degree}</p>
                <ul className="mt-2 space-y-1 text-sm list-disc list-inside text-cream/60">
                  {edu.bullets.map((b, j) => <li key={j}>{b}</li>)}
                </ul>
              </div>
            ))}
          </div>
        </div>

        {/* ── SKILLS ── */}
        <div className="border-b border-cream/20 py-8">
          <p className="text-xs font-bold uppercase tracking-widest text-cream/40 mb-2">
            // skills.json
          </p>
          <h3 className="font-display text-xl font-bold mb-5">🔧 Core Abilities</h3>
          <div className="grid gap-3 sm:grid-cols-2">
            {skills.map((skill) => (
              <div
                key={skill.name}
                className="flex items-center gap-3 rounded-2xl border border-cream/20 bg-white/5 px-4 py-3 hover:bg-white/10 transition-colors"
              >
                <span className="text-xl">{skill.icon}</span>
                <div className="flex-1 min-w-0">
                  <p className="font-semibold text-sm truncate">{skill.name}</p>
                  <p className={`text-xs font-medium ${levelColor[skill.level] ?? "text-cream/60"}`}>
                    {skill.level}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* ── STATS + CODING PROFILES ── */}
        <div className="pt-8">
          <p className="text-xs font-bold uppercase tracking-widest text-cream/40 mb-2">
            // player.stats
          </p>
          <h3 className="font-display text-xl font-bold mb-5">🏆 Player Stats</h3>

          {/* Stat cards */}
          <div className="grid grid-cols-3 gap-4">
            {stats.map((stat) => (
              <div
                key={stat.label}
                id={stat.label === "Problems Solved" ? "problems-solved" : undefined}
                className="rounded-2xl border border-cream/20 bg-white/5 px-4 py-6 text-center hover:bg-white/10 transition-colors"
              >
                <p className={`font-display text-3xl font-bold sm:text-4xl ${stat.color}`}>
                  {stat.label === "Problems Solved" ? `${count}+` : stat.value}
                </p>
                <p className="mt-1 text-xs font-semibold uppercase tracking-widest text-cream/50">
                  {stat.label}
                </p>
              </div>
            ))}
          </div>

          {/* Coding profiles */}
          <div className="mt-5">
            <p className="text-xs font-bold uppercase tracking-widest text-cream/40 mb-3">
              // coding.profiles
            </p>
            <div className="grid gap-3 sm:grid-cols-3">
              {codingProfiles.map((profile) => (
                <a
                  key={profile.name}
                  href={profile.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-between rounded-2xl border border-cream/20 bg-white/5 px-4 py-3 hover:bg-white/10 transition-colors group"
                >
                  <div className="flex items-center gap-3">
                    <span className="text-xl">{profile.emoji}</span>
                    <div>
                      <p className="font-semibold text-sm">{profile.name}</p>
                      <p className="text-xs text-cream/50">{profile.stat}</p>
                    </div>
                  </div>
                  <span className="text-cream/30 group-hover:text-cream/70 transition-colors text-sm">↗</span>
                </a>
              ))}
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}