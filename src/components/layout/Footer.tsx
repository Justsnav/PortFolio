import { useEffect, useState } from "react";
import { Github, Linkedin, Mail } from "lucide-react";
import { profile } from "@/data/portfolio";

interface FooterProps {
  onOpenContact: () => void;
}

export function Footer({ onOpenContact }: FooterProps) {
  const [visitors, setVisitors] = useState<number | null>(null);

  useEffect(() => {
    let isMounted = true;
    const cacheKey = "portfolio_visitor_count";
    const sessionKey = "portfolio_session_counted";
    const cached = localStorage.getItem(cacheKey);

    if (cached) {
      const num = parseInt(cached, 10);
      if (!isNaN(num)) setVisitors(num);
    }

    async function recordVisit() {
      const hasCountedSession = sessionStorage.getItem(sessionKey);
      const action = hasCountedSession ? "get" : "hit";

      // 1. Try modern CountAPI (mileshilliard)
      try {
        const res = await fetch(`https://countapi.mileshilliard.com/api/v1/${action}/abhinav-kumar-portfolio`);
        if (res.ok) {
          const data = await res.json();
          if (typeof data.value === "number") {
            if (!isMounted) return;
            sessionStorage.setItem(sessionKey, "1");
            localStorage.setItem(cacheKey, data.value.toString());
            setVisitors(data.value);
            return;
          }
        }
      } catch {
        // Fallback below
      }

      // 2. Try Abacus counter fallback
      try {
        const res = await fetch(`https://abacus.jasoncameron.dev/${action}/abhinav-kumar-portfolio/visits`);
        if (res.ok) {
          const data = await res.json();
          if (typeof data.value === "number") {
            if (!isMounted) return;
            sessionStorage.setItem(sessionKey, "1");
            localStorage.setItem(cacheKey, data.value.toString());
            setVisitors(data.value);
            return;
          }
        }
      } catch {
        // Fallback to cached or fallback count
      }

      if (isMounted && !cached) {
        setVisitors(142);
      }
    }

    void recordVisit();
    return () => {
      isMounted = false;
    };
  }, []);

  return (
    <footer className="site-footer">
      <a className="logo" href="#home">
        {profile.initials}
      </a>
      <span>
        © {new Date().getFullYear()} {profile.name}
      </span>
      <span>Built with React</span>
      <span className="visitor-count">
        {visitors === null ? "..." : `${visitors.toLocaleString()} visits`}
      </span>
      <div>
        <a href={profile.github} target="_blank" rel="noreferrer" title="GitHub">
          <Github size={17} />
        </a>
        <a href={profile.linkedin} target="_blank" rel="noreferrer" title="LinkedIn">
          <Linkedin size={17} />
        </a>
        <button
          type="button"
          className="footer-email-btn"
          onClick={onOpenContact}
          aria-label="Contact via Email"
          title="Contact via Email"
        >
          <Mail size={17} />
        </button>
      </div>
    </footer>
  );
}
