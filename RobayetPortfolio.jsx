import React, { useState, useEffect, useRef } from "react";
import {
  Shield,
  Cpu,
  Terminal,
  GraduationCap,
  Trophy,
  Users,
  Mail,
  Github,
  Linkedin,
  ChevronRight,
  Menu,
  X,
  Radar,
  Code2,
} from "lucide-react";

/* ------------------------------------------------------------------
   DESIGN NOTE FOR ROBAYET
   Content pulled from your Google Sites profile. Two things weren't
   published on the site so they're marked with EDIT ME below:
   1) Exact academic dates / CGPA (the "Academic Background" page only
      linked to an empty Google Doc)
   2) Email / GitHub / LinkedIn (not listed on the site)
   Search "EDIT ME" in this file to fill those in.
------------------------------------------------------------------- */

const NAV = [
  { id: "home", label: "Home", code: "00" },
  { id: "about", label: "About", code: "01" },
  { id: "academic", label: "Academic", code: "02" },
  { id: "skills", label: "Skills", code: "03" },
  { id: "activities", label: "Activities", code: "04" },
  { id: "achievements", label: "Achievements", code: "05" },
  { id: "contact", label: "Contact", code: "06" },
];

const CAREER_GOAL =
  "As a driven Software Engineering student, I am deeply passionate about Artificial Intelligence, Machine Learning, and advanced cybersecurity architectures. My primary goal is to smoothly transition my academic foundation into impactful industry contributions. I am eager to collaborate with innovative teams to engineer intelligent, highly secure, and scalable software solutions.";

const ABOUT_TEXT =
  "I am Robayet Ratul, a dedicated Software Engineering student at Daffodil International University. I am a highly disciplined, organized, and focused professional who always delivers high-quality work on time. As a natural leader, I know how to motivate teams to collaborate and solve difficult coding problems together. I successfully combine excellent time-management skills with a strong passion for modern technology and innovations. Now, I am ready to bring my unique leadership and technical abilities into exciting, real-world industry development projects.";

const SKILL_GROUPS = [
  {
    title: "Core Coding",
    icon: Code2,
    items: ["Java", "C", "HTML5", "CSS", "JavaScript"],
  },
  {
    title: "Tools & Frameworks",
    icon: Terminal,
    items: ["Git & GitHub", "VS Code"],
  },
  {
    title: "Operating Systems",
    icon: Cpu,
    items: ["Linux (Ubuntu)", "macOS"],
  },
  {
    title: "Productivity Suites",
    icon: Shield,
    items: ["MS Office 365 (Word, PowerPoint, Excel)", "Google Workspace"],
  },
];

const LANGUAGES = [
  { name: "Bangla", level: "Native", pct: 100 },
  { name: "English", level: "Professional Working Proficiency", pct: 80 },
  { name: "Hindi", level: "Fluent Verbal Communication", pct: 70 },
];

const SOFT_SKILLS = [
  {
    title: "Leadership & Team Management",
    desc: "Proven ability to guide project teams and motivate peers.",
  },
  {
    title: "Critical Thinking",
    desc: "Strong analytical approach to debugging and solving complex logic problems.",
  },
  {
    title: "Time Management & Negotiation",
    desc: "Exceptional at meeting strict project deadlines and aligning team goals.",
  },
];

const INTERESTS = [
  "Cricket, Football, Badminton, Formula 1",
  "Cycling & mini-marathon running",
  "Cinematography — global movies & series",
  "Traveling to new cultures & environments",
];

const ACTIVITIES = [
  {
    org: "DIU Model United Nations Association (DIUMUNA)",
    role: "General Member",
    scope: "Daffodil International University",
  },
  {
    org: "Photography Club",
    role: "Member",
    scope: "Milestone College, Uttara",
  },
  {
    org: "DIU Computer Programming Club (CPC)",
    role: "Participant",
    scope: "Daffodil International University",
  },
  {
    org: "Science Club",
    role: "Secretary of Wall Magazine",
    scope: "Milestone College, Uttara",
  },
  {
    org: "DIU Cyber Security / AI Club",
    role: "Member",
    scope: "Daffodil International University",
  },
];

const ACHIEVEMENTS = [
  {
    title: "Top 30 Competitor",
    event: "Take-Off Programming Contest",
    org: "DIU Computer and Programming Club (DIU CPC)",
  },
  {
    title: "Finalist / Top Project Presenter",
    event: "DIU AI Project Competition",
    org: "Daffodil International University",
  },
  {
    title: "Successful Project Deployment",
    event: "Software Engineering Exhibition",
    org: "Department of Software Engineering, DIU",
  },
  {
    title: "Top 10 Finalist",
    event: "National Data Analysis Competition (NDAC)",
    org: "Hosted at Daffodil Smart City",
  },
];

function useActiveSection(ids) {
  const [active, setActive] = useState(ids[0]);
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) setActive(entry.target.id);
        });
      },
      { rootMargin: "-40% 0px -50% 0px", threshold: 0 }
    );
    ids.forEach((id) => {
      const el = document.getElementById(id);
      if (el) observer.observe(el);
    });
    return () => observer.disconnect();
  }, [ids]);
  return active;
}

function TypedLine({ text, speed = 22, startDelay = 300 }) {
  const [shown, setShown] = useState("");
  useEffect(() => {
    let i = 0;
    let timeout;
    const start = setTimeout(() => {
      const tick = () => {
        i += 1;
        setShown(text.slice(0, i));
        if (i < text.length) timeout = setTimeout(tick, speed);
      };
      tick();
    }, startDelay);
    return () => {
      clearTimeout(start);
      clearTimeout(timeout);
    };
  }, [text, speed, startDelay]);
  return (
    <span>
      {shown}
      <span className="caret">&nbsp;</span>
    </span>
  );
}

export default function RobayetPortfolio() {
  const [menuOpen, setMenuOpen] = useState(false);
  const active = useActiveSection(NAV.map((n) => n.id));
  const scrollTo = (id) => {
    setMenuOpen(false);
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <div className="rr-root">
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Space+Grotesk:wght@400;500;600;700&family=Inter:wght@400;500;600&family=JetBrains+Mono:wght@400;500;600&display=swap');

        .rr-root {
          --bg: #0a0e13;
          --surface: #10151c;
          --surface-2: #161d26;
          --border: #232c37;
          --text: #e8edf2;
          --text-dim: #8a97a6;
          --text-faint: #55616f;
          --accent: #45e0c4;
          --accent-soft: rgba(69, 224, 196, 0.12);
          --warn: #f2ab3d;
          --warn-soft: rgba(242, 171, 61, 0.12);
          font-family: 'Inter', -apple-system, sans-serif;
          background: var(--bg);
          color: var(--text);
          min-height: 100vh;
          position: relative;
          isolation: isolate;
        }
        .rr-root * { box-sizing: border-box; }
        .rr-display { font-family: 'Space Grotesk', 'Inter', sans-serif; }
        .rr-mono { font-family: 'JetBrains Mono', monospace; }

        .rr-bgfx {
          position: fixed; inset: 0; z-index: -1;
          background:
            radial-gradient(ellipse 900px 500px at 85% -10%, rgba(69,224,196,0.09), transparent 60%),
            radial-gradient(ellipse 700px 500px at -10% 40%, rgba(242,171,61,0.06), transparent 60%),
            var(--bg);
        }
        .rr-bgfx::after {
          content: '';
          position: absolute; inset: 0;
          background-image:
            linear-gradient(rgba(255,255,255,0.025) 1px, transparent 1px),
            linear-gradient(90deg, rgba(255,255,255,0.025) 1px, transparent 1px);
          background-size: 42px 42px;
          mask-image: radial-gradient(ellipse 80% 60% at 50% 0%, black 10%, transparent 75%);
        }

        /* ---------- Nav ---------- */
        .rr-topbar {
          position: sticky; top: 0; z-index: 40;
          display: flex; align-items: center; justify-content: space-between;
          padding: 14px 24px;
          background: rgba(10,14,19,0.85);
          backdrop-filter: blur(10px);
          border-bottom: 1px solid var(--border);
        }
        .rr-brand { display: flex; align-items: center; gap: 10px; }
        .rr-brand-mark {
          width: 34px; height: 34px; border-radius: 8px;
          background: linear-gradient(150deg, var(--accent-soft), transparent);
          border: 1px solid var(--border);
          display: flex; align-items: center; justify-content: center;
          color: var(--accent);
        }
        .rr-brand-text { line-height: 1.1; }
        .rr-brand-name { font-weight: 600; font-size: 14px; letter-spacing: 0.02em; }
        .rr-brand-sub { font-size: 10.5px; color: var(--text-faint); letter-spacing: 0.08em; text-transform: uppercase; }

        .rr-nav-desktop { display: none; }
        .rr-navlink {
          display: flex; align-items: center; gap: 6px;
          background: none; border: none; cursor: pointer;
          color: var(--text-dim); font-size: 12.5px;
          padding: 7px 12px; border-radius: 6px;
          transition: color .15s ease, background .15s ease;
        }
        .rr-navlink:hover { color: var(--text); background: var(--surface-2); }
        .rr-navlink.active { color: var(--accent); background: var(--accent-soft); }
        .rr-navlink .code { color: var(--text-faint); }
        .rr-navlink.active .code { color: var(--accent); }

        .rr-menu-btn {
          display: flex; align-items: center; justify-content: center;
          width: 36px; height: 36px; border-radius: 8px;
          background: var(--surface); border: 1px solid var(--border);
          color: var(--text); cursor: pointer;
        }
        .rr-mobile-menu {
          position: fixed; inset: 60px 0 0 0; z-index: 39;
          background: rgba(10,14,19,0.98);
          padding: 20px; display: flex; flex-direction: column; gap: 4px;
        }
        .rr-mobile-menu button {
          text-align: left; padding: 14px 12px; border-radius: 8px;
          background: var(--surface); border: 1px solid var(--border);
          color: var(--text); font-size: 15px; cursor: pointer;
        }

        @media (min-width: 860px) {
          .rr-nav-desktop { display: flex; gap: 2px; }
          .rr-menu-btn, .rr-mobile-menu { display: none; }
        }

        .rr-shell { max-width: 1080px; margin: 0 auto; padding: 0 24px; }
        section { scroll-margin-top: 70px; }

        .rr-eyebrow {
          display: inline-flex; align-items: center; gap: 8px;
          font-size: 11.5px; letter-spacing: 0.14em; text-transform: uppercase;
          color: var(--accent); margin-bottom: 16px;
        }
        .rr-eyebrow::before {
          content: ''; width: 16px; height: 1px; background: var(--accent);
        }

        /* ---------- Hero ---------- */
        .rr-hero {
          padding: 96px 0 80px;
          display: grid; gap: 40px;
        }
        .rr-hero-title {
          font-size: clamp(36px, 6vw, 62px);
          line-height: 1.04; font-weight: 700; letter-spacing: -0.02em;
        }
        .rr-hero-title .accent { color: var(--accent); }
        .rr-hero-lede {
          margin-top: 20px; color: var(--text-dim); font-size: 16px;
          line-height: 1.7; max-width: 600px;
        }
        .caret {
          display: inline-block; width: 8px; height: 1em;
          background: var(--accent); margin-left: 2px;
          animation: blink 1s steps(1) infinite; vertical-align: -2px;
        }
        @keyframes blink { 50% { opacity: 0; } }

        .rr-cta-row { display: flex; gap: 12px; margin-top: 32px; flex-wrap: wrap; }
        .rr-btn {
          display: inline-flex; align-items: center; gap: 8px;
          padding: 12px 20px; border-radius: 8px; font-size: 13.5px; font-weight: 600;
          cursor: pointer; border: 1px solid transparent; transition: transform .15s ease, opacity .15s ease;
        }
        .rr-btn:hover { transform: translateY(-1px); }
        .rr-btn.primary { background: var(--accent); color: #06110e; }
        .rr-btn.ghost { background: transparent; border-color: var(--border); color: var(--text); }

        .rr-status-panel {
          background: var(--surface);
          border: 1px solid var(--border);
          border-radius: 14px;
          padding: 22px;
          position: relative;
          overflow: hidden;
        }
        .rr-status-panel::before {
          content: '';
          position: absolute; left: 0; right: 0; height: 2px; top: 0;
          background: linear-gradient(90deg, transparent, var(--accent), transparent);
          animation: scan 3.2s linear infinite;
        }
        @keyframes scan { 0% { transform: translateY(0); } 100% { transform: translateY(180px); } }
        .rr-status-head { display: flex; align-items: center; justify-content: space-between; margin-bottom: 16px; }
        .rr-status-title { font-size: 11px; letter-spacing: 0.1em; text-transform: uppercase; color: var(--text-faint); }
        .rr-status-dot { width: 7px; height: 7px; border-radius: 50%; background: var(--accent); box-shadow: 0 0 0 3px var(--accent-soft); }
        .rr-status-row { display: flex; justify-content: space-between; padding: 9px 0; border-top: 1px solid var(--border); font-size: 12.5px; }
        .rr-status-row:first-of-type { border-top: none; }
        .rr-status-key { color: var(--text-faint); }
        .rr-status-val { color: var(--text); font-weight: 500; }

        /* ---------- Section shell ---------- */
        .rr-section { padding: 72px 0; border-top: 1px solid var(--border); }
        .rr-section-head { display: flex; align-items: baseline; justify-content: space-between; margin-bottom: 36px; flex-wrap: wrap; gap: 10px; }
        .rr-h2 { font-size: clamp(24px, 3.4vw, 32px); font-weight: 700; letter-spacing: -0.01em; }
        .rr-section-num { color: var(--text-faint); font-size: 13px; }

        /* ---------- About ---------- */
        .rr-about-grid { display: grid; gap: 28px; grid-template-columns: 1fr; }
        @media (min-width: 780px) { .rr-about-grid { grid-template-columns: 1.3fr 1fr; } }
        .rr-body-text { color: var(--text-dim); font-size: 15.5px; line-height: 1.8; }
        .rr-fact-card {
          background: var(--surface); border: 1px solid var(--border); border-radius: 12px; padding: 20px;
        }
        .rr-fact-row { display: flex; gap: 12px; padding: 12px 0; border-top: 1px solid var(--border); }
        .rr-fact-row:first-child { border-top: none; padding-top: 0; }
        .rr-fact-icon { color: var(--accent); flex-shrink: 0; margin-top: 2px; }
        .rr-fact-label { font-size: 10.5px; text-transform: uppercase; letter-spacing: 0.08em; color: var(--text-faint); margin-bottom: 3px; }
        .rr-fact-val { font-size: 14px; color: var(--text); }

        /* ---------- Academic ---------- */
        .rr-timeline { position: relative; padding-left: 28px; }
        .rr-timeline::before { content: ''; position: absolute; left: 6px; top: 6px; bottom: 6px; width: 1px; background: var(--border); }
        .rr-tl-item { position: relative; padding-bottom: 32px; }
        .rr-tl-item:last-child { padding-bottom: 0; }
        .rr-tl-dot { position: absolute; left: -28px; top: 4px; width: 13px; height: 13px; border-radius: 50%; background: var(--bg); border: 2px solid var(--accent); }
        .rr-tl-card { background: var(--surface); border: 1px solid var(--border); border-radius: 12px; padding: 18px 20px; }
        .rr-tl-title { font-weight: 600; font-size: 15.5px; }
        .rr-tl-sub { color: var(--accent); font-size: 12.5px; margin-top: 3px; }
        .rr-tl-desc { color: var(--text-dim); font-size: 13.5px; margin-top: 8px; line-height: 1.6; }
        .rr-tag { display: inline-block; font-size: 10.5px; padding: 3px 8px; border-radius: 5px; background: var(--warn-soft); color: var(--warn); margin-top: 10px; }

        /* ---------- Skills ---------- */
        .rr-skill-grid { display: grid; gap: 16px; grid-template-columns: 1fr; }
        @media (min-width: 700px) { .rr-skill-grid { grid-template-columns: 1fr 1fr; } }
        .rr-skill-card { background: var(--surface); border: 1px solid var(--border); border-radius: 12px; padding: 20px; }
        .rr-skill-card-head { display: flex; align-items: center; gap: 10px; margin-bottom: 14px; color: var(--accent); }
        .rr-skill-card-title { font-size: 13.5px; font-weight: 600; color: var(--text); }
        .rr-chip-row { display: flex; flex-wrap: wrap; gap: 8px; }
        .rr-chip { font-size: 12px; padding: 6px 11px; border-radius: 6px; background: var(--surface-2); border: 1px solid var(--border); color: var(--text-dim); }

        .rr-subhead { font-size: 13px; letter-spacing: 0.08em; text-transform: uppercase; color: var(--text-faint); margin: 44px 0 18px; }
        .rr-lang-row { margin-bottom: 16px; }
        .rr-lang-top { display: flex; justify-content: space-between; font-size: 13px; margin-bottom: 6px; }
        .rr-lang-name { color: var(--text); font-weight: 500; }
        .rr-lang-level { color: var(--text-faint); font-size: 11.5px; }
        .rr-lang-bar { height: 5px; border-radius: 3px; background: var(--surface-2); overflow: hidden; }
        .rr-lang-fill { height: 100%; background: linear-gradient(90deg, var(--accent), #7ff0dc); border-radius: 3px; }

        .rr-soft-grid { display: grid; gap: 14px; grid-template-columns: 1fr; }
        @media (min-width: 700px) { .rr-soft-grid { grid-template-columns: repeat(3, 1fr); } }
        .rr-soft-card { border: 1px solid var(--border); border-radius: 12px; padding: 18px; background: var(--surface); }
        .rr-soft-title { font-size: 13.5px; font-weight: 600; margin-bottom: 8px; }
        .rr-soft-desc { font-size: 12.5px; color: var(--text-dim); line-height: 1.6; }

        .rr-interest-list { display: grid; gap: 10px; grid-template-columns: 1fr; margin-top: 14px; }
        @media (min-width: 700px) { .rr-interest-list { grid-template-columns: 1fr 1fr; } }
        .rr-interest-item { display: flex; gap: 10px; align-items: flex-start; font-size: 13.5px; color: var(--text-dim); }
        .rr-interest-item svg { color: var(--warn); flex-shrink: 0; margin-top: 3px; }

        /* ---------- Activities ---------- */
        .rr-act-list { display: grid; gap: 12px; }
        .rr-act-card {
          display: flex; align-items: center; justify-content: space-between; gap: 16px;
          background: var(--surface); border: 1px solid var(--border); border-radius: 12px;
          padding: 16px 20px; flex-wrap: wrap;
        }
        .rr-act-left { display: flex; align-items: center; gap: 14px; }
        .rr-act-icon {
          width: 38px; height: 38px; border-radius: 9px; background: var(--surface-2);
          display: flex; align-items: center; justify-content: center; color: var(--accent); flex-shrink: 0;
        }
        .rr-act-org { font-size: 14px; font-weight: 600; }
        .rr-act-scope { font-size: 12px; color: var(--text-faint); margin-top: 2px; }
        .rr-act-role { font-size: 11.5px; padding: 5px 11px; border-radius: 20px; background: var(--accent-soft); color: var(--accent); white-space: nowrap; }

        /* ---------- Achievements ---------- */
        .rr-ach-grid { display: grid; gap: 16px; grid-template-columns: 1fr; }
        @media (min-width: 700px) { .rr-ach-grid { grid-template-columns: 1fr 1fr; } }
        .rr-ach-card { background: var(--surface); border: 1px solid var(--border); border-radius: 12px; padding: 20px; position: relative; }
        .rr-ach-icon { color: var(--warn); margin-bottom: 12px; }
        .rr-ach-title { font-size: 15px; font-weight: 600; }
        .rr-ach-event { font-size: 13px; color: var(--accent); margin-top: 4px; }
        .rr-ach-org { font-size: 12px; color: var(--text-faint); margin-top: 6px; }

        /* ---------- Contact ---------- */
        .rr-contact-card {
          background: var(--surface); border: 1px solid var(--border); border-radius: 16px;
          padding: 44px 32px; text-align: center;
        }
        .rr-contact-title { font-size: clamp(22px, 3vw, 30px); font-weight: 700; }
        .rr-contact-lede { color: var(--text-dim); font-size: 14.5px; margin: 12px auto 26px; max-width: 480px; line-height: 1.7; }
        .rr-social-row { display: flex; justify-content: center; gap: 12px; flex-wrap: wrap; }
        .rr-social-btn {
          display: inline-flex; align-items: center; gap: 8px;
          padding: 11px 18px; border-radius: 8px; border: 1px solid var(--border);
          color: var(--text-dim); font-size: 13px; text-decoration: none;
        }
        .rr-social-btn:hover { color: var(--text); border-color: var(--accent); }

        .rr-footer { text-align: center; padding: 28px 0 40px; color: var(--text-faint); font-size: 12px; }
      `}</style>

      <div className="rr-bgfx" />

      {/* NAV */}
      <header className="rr-topbar">
        <div className="rr-brand">
          <div className="rr-brand-mark">
            <Shield size={17} strokeWidth={2} />
          </div>
          <div className="rr-brand-text">
            <div className="rr-brand-name rr-display">Robayet Ratul</div>
            <div className="rr-brand-sub rr-mono">SWE · AI/ML · SEC</div>
          </div>
        </div>

        <nav className="rr-nav-desktop">
          {NAV.map((n) => (
            <button
              key={n.id}
              className={`rr-navlink rr-mono ${active === n.id ? "active" : ""}`}
              onClick={() => scrollTo(n.id)}
            >
              <span className="code">{n.code}</span>
              {n.label}
            </button>
          ))}
        </nav>

        <button className="rr-menu-btn" onClick={() => setMenuOpen((v) => !v)}>
          {menuOpen ? <X size={18} /> : <Menu size={18} />}
        </button>
      </header>

      {menuOpen && (
        <div className="rr-mobile-menu">
          {NAV.map((n) => (
            <button key={n.id} onClick={() => scrollTo(n.id)} className="rr-mono">
              <span style={{ color: "var(--accent)", marginRight: 10 }}>{n.code}</span>
              {n.label}
            </button>
          ))}
        </div>
      )}

      {/* HERO */}
      <section id="home" className="rr-shell rr-hero">
        <div>
          <div className="rr-eyebrow rr-mono">Software Engineering · DIU</div>
          <h1 className="rr-hero-title rr-display">
            Driven to innovate.
            <br />
            <span className="accent">Built to last.</span>
          </h1>
          <p className="rr-hero-lede">
            <TypedLine text={CAREER_GOAL} speed={12} />
          </p>
          <div className="rr-cta-row">
            <button className="rr-btn primary" onClick={() => scrollTo("achievements")}>
              View achievements <ChevronRight size={15} />
            </button>
            <button className="rr-btn ghost" onClick={() => scrollTo("contact")}>
              Get in touch
            </button>
          </div>
        </div>

        <div className="rr-status-panel">
          <div className="rr-status-head">
            <span className="rr-status-title rr-mono">System Profile</span>
            <span className="rr-status-dot" />
          </div>
          <div className="rr-status-row rr-mono">
            <span className="rr-status-key">Name</span>
            <span className="rr-status-val">Robayet Ratul</span>
          </div>
          <div className="rr-status-row rr-mono">
            <span className="rr-status-key">Institution</span>
            <span className="rr-status-val">Daffodil Int'l University</span>
          </div>
          <div className="rr-status-row rr-mono">
            <span className="rr-status-key">Track</span>
            <span className="rr-status-val">Software Engineering</span>
          </div>
          <div className="rr-status-row rr-mono">
            <span className="rr-status-key">Focus</span>
            <span className="rr-status-val">AI · ML · Cybersecurity</span>
          </div>
          <div className="rr-status-row rr-mono">
            <span className="rr-status-key">Status</span>
            <span className="rr-status-val" style={{ color: "var(--accent)" }}>
              Open to opportunities
            </span>
          </div>
        </div>
      </section>

      {/* ABOUT */}
      <section id="about" className="rr-section rr-shell">
        <div className="rr-section-head">
          <h2 className="rr-h2 rr-display">About</h2>
          <span className="rr-section-num rr-mono">01 / 06</span>
        </div>
        <div className="rr-about-grid">
          <p className="rr-body-text">{ABOUT_TEXT}</p>
          <div className="rr-fact-card">
            <div className="rr-fact-row">
              <GraduationCap size={18} className="rr-fact-icon" />
              <div>
                <div className="rr-fact-label rr-mono">University</div>
                <div className="rr-fact-val">Daffodil International University</div>
              </div>
            </div>
            <div className="rr-fact-row">
              <Terminal size={18} className="rr-fact-icon" />
              <div>
                <div className="rr-fact-label rr-mono">Program</div>
                <div className="rr-fact-val">B.Sc. in Software Engineering</div>
              </div>
            </div>
            <div className="rr-fact-row">
              <Radar size={18} className="rr-fact-icon" />
              <div>
                <div className="rr-fact-label rr-mono">Interest Areas</div>
                <div className="rr-fact-val">AI, Machine Learning, Cybersecurity</div>
              </div>
            </div>
            <div className="rr-fact-row">
              <Users size={18} className="rr-fact-icon" />
              <div>
                <div className="rr-fact-label rr-mono">Strengths</div>
                <div className="rr-fact-val">Leadership, discipline, time management</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ACADEMIC */}
      <section id="academic" className="rr-section rr-shell">
        <div className="rr-section-head">
          <h2 className="rr-h2 rr-display">Academic Background</h2>
          <span className="rr-section-num rr-mono">02 / 06</span>
        </div>
        <div className="rr-timeline">
          <div className="rr-tl-item">
            <div className="rr-tl-dot" />
            <div className="rr-tl-card">
              <div className="rr-tl-title">B.Sc. in Software Engineering</div>
              <div className="rr-tl-sub rr-mono">Daffodil International University</div>
              <p className="rr-tl-desc">
                Coursework and project work centered on software development,
                artificial intelligence, and cybersecurity fundamentals.
              </p>
              {/* EDIT ME: add exact semester/CGPA/graduation year once available */}
              <span className="rr-tag rr-mono">Add dates &amp; CGPA here</span>
            </div>
          </div>
          <div className="rr-tl-item">
            <div className="rr-tl-dot" />
            <div className="rr-tl-card">
              <div className="rr-tl-title">Higher Secondary Education</div>
              <div className="rr-tl-sub rr-mono">Milestone College, Uttara</div>
              <p className="rr-tl-desc">
                Built early technical foundations while active in the Science
                Club and Photography Club.
              </p>
              {/* EDIT ME: add group/GPA/year once available */}
              <span className="rr-tag rr-mono">Add group &amp; GPA here</span>
            </div>
          </div>
        </div>
      </section>

      {/* SKILLS */}
      <section id="skills" className="rr-section rr-shell">
        <div className="rr-section-head">
          <h2 className="rr-h2 rr-display">Skills &amp; Interests</h2>
          <span className="rr-section-num rr-mono">03 / 06</span>
        </div>

        <div className="rr-skill-grid">
          {SKILL_GROUPS.map((g) => (
            <div key={g.title} className="rr-skill-card">
              <div className="rr-skill-card-head">
                <g.icon size={17} />
                <span className="rr-skill-card-title">{g.title}</span>
              </div>
              <div className="rr-chip-row">
                {g.items.map((it) => (
                  <span key={it} className="rr-chip rr-mono">
                    {it}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>

        <div className="rr-subhead rr-mono">Languages</div>
        <div>
          {LANGUAGES.map((l) => (
            <div key={l.name} className="rr-lang-row">
              <div className="rr-lang-top">
                <span className="rr-lang-name">{l.name}</span>
                <span className="rr-lang-level">{l.level}</span>
              </div>
              <div className="rr-lang-bar">
                <div className="rr-lang-fill" style={{ width: `${l.pct}%` }} />
              </div>
            </div>
          ))}
        </div>

        <div className="rr-subhead rr-mono">Core Soft Skills</div>
        <div className="rr-soft-grid">
          {SOFT_SKILLS.map((s) => (
            <div key={s.title} className="rr-soft-card">
              <div className="rr-soft-title">{s.title}</div>
              <div className="rr-soft-desc">{s.desc}</div>
            </div>
          ))}
        </div>

        <div className="rr-subhead rr-mono">Personal Interests</div>
        <div className="rr-interest-list">
          {INTERESTS.map((it) => (
            <div key={it} className="rr-interest-item">
              <ChevronRight size={15} />
              <span>{it}</span>
            </div>
          ))}
        </div>
      </section>

      {/* ACTIVITIES */}
      <section id="activities" className="rr-section rr-shell">
        <div className="rr-section-head">
          <h2 className="rr-h2 rr-display">Extra-Curricular Activities</h2>
          <span className="rr-section-num rr-mono">04 / 06</span>
        </div>
        <div className="rr-act-list">
          {ACTIVITIES.map((a) => (
            <div key={a.org} className="rr-act-card">
              <div className="rr-act-left">
                <div className="rr-act-icon">
                  <Users size={17} />
                </div>
                <div>
                  <div className="rr-act-org">{a.org}</div>
                  <div className="rr-act-scope rr-mono">{a.scope}</div>
                </div>
              </div>
              <span className="rr-act-role rr-mono">{a.role}</span>
            </div>
          ))}
        </div>
      </section>

      {/* ACHIEVEMENTS */}
      <section id="achievements" className="rr-section rr-shell">
        <div className="rr-section-head">
          <h2 className="rr-h2 rr-display">Achievements &amp; Awards</h2>
          <span className="rr-section-num rr-mono">05 / 06</span>
        </div>
        <div className="rr-ach-grid">
          {ACHIEVEMENTS.map((a) => (
            <div key={a.title + a.event} className="rr-ach-card">
              <Trophy size={20} className="rr-ach-icon" />
              <div className="rr-ach-title">{a.title}</div>
              <div className="rr-ach-event">{a.event}</div>
              <div className="rr-ach-org rr-mono">{a.org}</div>
            </div>
          ))}
        </div>
      </section>

      {/* CONTACT */}
      <section id="contact" className="rr-section rr-shell">
        <div className="rr-section-head">
          <h2 className="rr-h2 rr-display">Contact</h2>
          <span className="rr-section-num rr-mono">06 / 06</span>
        </div>
        <div className="rr-contact-card">
          <div className="rr-contact-title rr-display">Let's build something secure & intelligent.</div>
          <p className="rr-contact-lede">
            Open to internships, research collaborations, and software
            engineering roles in AI, machine learning, and cybersecurity.
          </p>
          <div className="rr-social-row">
            {/* EDIT ME: replace href="#" with your real email/GitHub/LinkedIn */}
            <a className="rr-social-btn" href="mailto:youremail@example.com">
              <Mail size={15} /> Email
            </a>
            <a className="rr-social-btn" href="#">
              <Github size={15} /> GitHub
            </a>
            <a className="rr-social-btn" href="#">
              <Linkedin size={15} /> LinkedIn
            </a>
          </div>
        </div>
      </section>

      <footer className="rr-footer rr-mono">
        © {new Date().getFullYear()} Robayet Ratul — Software Engineering, Daffodil International University
      </footer>
    </div>
  );
}
