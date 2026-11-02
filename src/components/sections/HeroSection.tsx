import { motion, useReducedMotion } from "motion/react";
import { ArrowUpRight, Braces, Code2, Github, Linkedin, Mail } from "lucide-react";
import { profile } from "@/data/portfolio";

interface HeroSectionProps {
  onViewProjects: () => void;
  onOpenContact: () => void;
}

export function HeroSection({ onViewProjects, onOpenContact }: HeroSectionProps) {
  const reduce = useReducedMotion();

  return (
    <section id="home" className="hero section">
      {/* 🖼️ HERO BANNER: Background image is loaded from profile.bannerUrl in src/data/portfolio.ts */}
      <div className="banner">
        {profile.bannerUrl && (
          <>
            <img src={profile.bannerUrl} alt="" className="banner-bg" />
            <div className="banner-overlay" />
          </>
        )}
        <div className="banner-copy">
          <Code2 size={22} />
          <span>building at the intersection of logic & imagination</span>
        </div>
        <div className="orb orb-one" />
        <div className="orb orb-two" />
        <div className="code-lines">
          const ideas = <b>build()</b>
        </div>
      </div>

      <motion.div
        className="identity"
        initial={reduce ? false : { opacity: 0, y: 18 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        {/* 👤 CIRCULAR PROFILE AVATAR: Image loaded from profile.avatarUrl (e.g. /profile.jpg in public/) */}
        <div className="avatar">
          <div className="avatar-img-wrap">
            {profile.avatarUrl ? (
              <img
                src={profile.avatarUrl}
                alt={profile.name}
                className="avatar-img"
                onError={(e) => {
                  (e.currentTarget as HTMLElement).style.display = "none";
                }}
              />
            ) : (
              profile.initials
            )}
          </div>
          <span />
        </div>

        <div className="identity-copy">
          <p className="eyebrow">Hello, I’m</p>
          <h1>{profile.name}</h1>
          <p className="role">{profile.role}</p>
          <p className="intro">{profile.intro}</p>

          <div className="hero-buttons">
            <button className="primary" onClick={onViewProjects}>
              View projects <ArrowUpRight size={16} />
            </button>
            <button className="secondary" type="button" onClick={onOpenContact}>
              Contact me
            </button>
          </div>

          <div className="socials">
            <a href={profile.github} target="_blank" rel="noreferrer">
              <Github /> GitHub
            </a>
            <a href={profile.linkedin} target="_blank" rel="noreferrer">
              <Linkedin /> LinkedIn
            </a>
            <a href={profile.leetcode} target="_blank" rel="noreferrer">
              <Braces /> LeetCode
            </a>
            <button
              type="button"
              className="social-email-btn"
              onClick={onOpenContact}
            >
              <Mail /> Email
            </button>
          </div>
        </div>
      </motion.div>
    </section>
  );
}
