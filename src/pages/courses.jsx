import React, { useState, useRef, useEffect } from "react";
import "./courses.css";
import courseImg from "../assets/images/courseimg.png";
import logo from "../assets/images/logo.png";
import qr1 from "../assets/images/qr1.png";
import qr2 from "../assets/images/qr2.png";
import EmailOutlinedIcon from "@mui/icons-material/EmailOutlined";
import PhoneOutlinedIcon from "@mui/icons-material/PhoneOutlined";
import LocationOnOutlinedIcon from "@mui/icons-material/LocationOnOutlined";
import { Link } from "react-router-dom";

const programs = [
  {
    icon: "🎓",
    title: "Diploma Programs",
    desc: "Hands-on internship experience for diploma holders with real-world project exposure",
    duration: "3-6 months",
    positions: "200+ positions",
    benefits: ["Industry mentorship", "Certificate of completion", "Job placement support"],
    subTracks: [
      { name: "Web Development Basics", level: "Beginner" },
      { name: "Database Management", level: "Intermediate" },
      { name: "IT Support & Troubleshooting", level: "Beginner" },
    ],
  },
  {
    icon: "⚙️",
    title: "Engineering Internships",
    desc: "Advanced technical opportunities for engineering students with live project work",
    duration: "4-8 months",
    positions: "300+ positions",
    benefits: ["Technical projects", "Skill development", "Networking"],
    subTracks: [
      { name: "Full Stack Web Development", level: "Advanced" },
      { name: "Mobile App Development", level: "Advanced" },
      { name: "Cloud Computing with AWS", level: "Intermediate" },
    ],
  },
  {
    icon: "💻",
    title: "BCA Programs",
    desc: "Software development and IT internships with cutting-edge technologies",
    duration: "3-6 months",
    positions: "250+ positions",
    benefits: ["Real-world coding", "Framework training", "Code review"],
    subTracks: [
      { name: "MERN Stack Development", level: "Advanced" },
      { name: "Python & Django", level: "Intermediate" },
      { name: "DevOps & CI/CD Pipeline", level: "Advanced" },
    ],
  },
  {
    icon: "🔬",
    title: "MCA Internships",
    desc: "Senior-level opportunities for MCA graduates with research and development focus",
    duration: "4-12 months",
    positions: "150+ positions",
    benefits: ["Leadership roles", "Research projects", "High stipend"],
    subTracks: [
      { name: "AI & Machine Learning", level: "Advanced" },
      { name: "System Design & Architecture", level: "Advanced" },
      { name: "Blockchain Development", level: "Advanced" },
    ],
  },
  {
    icon: "📊",
    title: "MBA Programs",
    desc: "Business and management internships with strategic consulting opportunities",
    duration: "6-12 months",
    positions: "100+ positions",
    benefits: ["Business strategy", "Executive exposure", "Consulting"],
    subTracks: [
      { name: "Business Analytics", level: "Intermediate" },
      { name: "Digital Marketing Strategy", level: "Intermediate" },
      { name: "Product Management", level: "Advanced" },
    ],
  },
];

const whyUs = [
  {
    icon: "🚀",
    title: "Innovation & Excellence",
    desc: "We continuously explore new technologies and deliver high-quality solutions. Gain hands-on experience with cutting-edge frameworks and AI-driven development practices.",
    tracks: ["React & Next.js Development", "Modern Full Stack Architecture", "Cloud Technologies"],
  },
  {
    icon: "🤝",
    title: "Integrity & Transparency",
    desc: "Our core values emphasize honesty and ethical practices. Work in an environment where your growth and contributions are genuinely valued and recognized.",
    tracks: ["Code of Ethics Training", "Professional Standards", "Industry Best Practices"],
  },
  {
    icon: "🎯",
    title: "Customer-Centric Approach",
    desc: "Learn how we understand client needs and deliver tailored solutions. Develop skills in real-time project management and business collaboration.",
    tracks: ["Client Communication Skills", "Project Management Tools", "Agile Methodologies"],
  },
  {
    icon: "🛠️",
    title: "Real-World Projects",
    desc: "Contribute to live web development, software solutions, and digital transformation projects. Build portfolio-worthy work from day one.",
    tracks: ["Live Client Projects", "Portfolio Development", "Production Deployment"],
  },
  {
    icon: "📈",
    title: "Career Growth & Learning",
    desc: "Our commitment to continuous learning means access to training in web dev, cloud computing, AI, and automation technologies.",
    tracks: ["AI & Machine Learning Basics", "Cloud Computing Fundamentals", "Automation Scripting"],
  },
  {
    icon: "🌍",
    title: "Global & Local Expertise",
    desc: "Based in Bengaluru with a distributed team, experience global standards with local market understanding across IT services.",
    tracks: ["Global Best Practices", "Indian Market Insights", "Multi-Cultural Collaboration"],
  },
];

const steps = [
  {
    num: "1",
    title: "Submit Application",
    desc: "Complete our online form with your academic details, course preference, and career goals. Takes less than 5 minutes.",
  },
  {
    num: "2",
    title: "Assessment & Selection",
    desc: "We evaluate your profile and match you with relevant projects aligned to your skills and learning objectives.",
  },
  {
    num: "3",
    title: "Onboarding & Training",
    desc: "Join our team with orientation sessions, tech stack training, and introduction to your project mentors.",
  },
  {
    num: "4",
    title: "Live Project Work",
    desc: "Work on real client projects, learn industry practices, and build portfolio-worthy experience under expert guidance.",
  },
];

const testimonials = [
  {
    quote:
      "Charvex's real-world project exposure and mentorship transformed my understanding of web development. The platform gave me experience before graduation.",
    name: "Adithya Kumar",
    role: "Engineering Student",
    track: "Full Stack Web Development",
    outcome: "Now at Tech Startup",
  },
  {
    quote:
      "The technical training and collaborative environment at Charvex helped me transition from academic learning to industry-ready skills. Highly grateful!",
    name: "Neha Verma",
    role: "MCA Graduate",
    track: "AI & Machine Learning",
    outcome: "Now at Software Company",
  },
  {
    quote:
      "Working on live projects with Charvex team exposed me to real development challenges and best practices. Exceptional learning opportunity!",
    name: "Arjun Patel",
    role: "BCA Student",
    track: "MERN Stack Development",
    outcome: "Now at IT Services",
  },
  {
    quote:
      "Charvex provided the structured training and mentorship I needed to kickstart my IT career. The team is supportive and genuinely invested in success.",
    name: "Shreya Singh",
    role: "Diploma Student",
    track: "Web Development Basics",
    outcome: "Now at Tech Company",
  },
];

const WHATSAPP_LINK = "https://wa.me/916363485061";
const WHATSAPP_BANK_NUMBER = "+91 63634 85061";

const courseOptions = [
  "Diploma Programs",
  "Engineering Internships",
  "BCA Programs",
  "MCA Internships",
  "MBA Programs",
];

/* ---------- Scroll reveal wrapper ---------- */
function Reveal({ children, delay = 0, className = "" }) {
  const ref = useRef(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const node = ref.current;
    if (!node) return;
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true);
          observer.unobserve(node);
        }
      },
      { threshold: 0.15 }
    );
    observer.observe(node);
    return () => observer.disconnect();
  }, []);

  return (
    <div
      ref={ref}
      className={`cx-reveal ${visible ? "is-visible" : ""} ${className}`}
      style={{ transitionDelay: `${delay}ms` }}
    >
      {children}
    </div>
  );
}

/* ---------- Small inline icon set (no external deps) ---------- */
const LinkedInIcon = () => (
  <svg viewBox="0 0 24 24" width="20" height="20" fill="currentColor" aria-hidden="true">
    <path d="M4.98 3.5C4.98 4.88 3.86 6 2.5 6S0 4.88 0 3.5 1.12 1 2.5 1s2.48 1.12 2.48 2.5zM.24 8.25h4.5V23h-4.5V8.25zM8.5 8.25h4.31v2.01h.06c.6-1.14 2.07-2.34 4.26-2.34 4.56 0 5.4 3 5.4 6.9V23h-4.5v-6.86c0-1.64-.03-3.75-2.29-3.75-2.29 0-2.64 1.79-2.64 3.63V23H8.5V8.25z" />
  </svg>
);

const InstagramIcon = () => (
  <svg viewBox="0 0 24 24" width="20" height="20" fill="currentColor" aria-hidden="true">
    <path d="M12 2.2c3.2 0 3.58.01 4.85.07 1.17.05 1.8.25 2.23.41.56.22.96.48 1.38.9.42.42.68.82.9 1.38.16.42.36 1.06.41 2.23.06 1.27.07 1.65.07 4.85s-.01 3.58-.07 4.85c-.05 1.17-.25 1.8-.41 2.23-.22.56-.48.96-.9 1.38-.42.42-.82.68-1.38.9-.42.16-1.06.36-2.23.41-1.27.06-1.65.07-4.85.07s-3.58-.01-4.85-.07c-1.17-.05-1.8-.25-2.23-.41-.56-.22-.96-.48-1.38-.9-.42-.42-.68-.82-.9-1.38-.16-.42-.36-1.06-.41-2.23C2.21 15.58 2.2 15.2 2.2 12s.01-3.58.07-4.85c.05-1.17.25-1.8.41-2.23.22-.56.48-.96.9-1.38.42-.42.82-.68 1.38-.9.42-.16 1.06-.36 2.23-.41C8.42 2.21 8.8 2.2 12 2.2zm0-2.2C8.74 0 8.33.01 7.05.07 5.78.13 4.9.33 4.14.63c-.8.31-1.47.72-2.14 1.39C1.33 2.7.92 3.37.61 4.16c-.3.76-.5 1.64-.56 2.91C-.01 8.33 0 8.74 0 12s-.01 3.67.05 4.95c.06 1.27.26 2.15.56 2.91.31.8.72 1.47 1.39 2.14.67.67 1.34 1.08 2.14 1.39.76.3 1.64.5 2.91.56C8.33 23.99 8.74 24 12 24s3.67-.01 4.95-.05c1.27-.06 2.15-.26 2.91-.56.8-.31 1.47-.72 2.14-1.39.67-.67 1.08-1.34 1.39-2.14.3-.76.5-1.64.56-2.91.06-1.28.07-1.69.07-4.95s-.01-3.67-.07-4.95c-.06-1.27-.26-2.15-.56-2.91-.31-.8-.72-1.47-1.39-2.14C21.3 1.33 20.63.92 19.84.61c-.76-.3-1.64-.5-2.91-.56C15.67.01 15.26 0 12 0z" />
    <path d="M12 5.84A6.16 6.16 0 1 0 12 18.16 6.16 6.16 0 0 0 12 5.84zm0 10.16A4 4 0 1 1 12 8a4 4 0 0 1 0 8z" />
    <circle cx="18.41" cy="5.59" r="1.44" />
  </svg>
);

const WhatsAppIcon = () => (
  <svg viewBox="0 0 24 24" width="30" height="30" fill="currentColor" aria-hidden="true">
    <path d="M17.47 14.38c-.3-.15-1.75-.86-2.02-.96-.27-.1-.47-.15-.67.15-.2.3-.77.96-.94 1.16-.17.2-.35.22-.65.07-.3-.15-1.26-.46-2.4-1.48-.89-.79-1.49-1.77-1.66-2.07-.17-.3-.02-.46.13-.61.13-.13.3-.35.45-.52.15-.17.2-.3.3-.5.1-.2.05-.37-.02-.52-.07-.15-.67-1.6-.91-2.2-.24-.58-.48-.5-.67-.5-.17-.01-.37-.01-.57-.01-.2 0-.52.07-.8.37-.27.3-1.04 1.02-1.04 2.48s1.07 2.87 1.22 3.07c.15.2 2.1 3.2 5.08 4.49.71.3 1.26.49 1.69.62.71.22 1.36.19 1.87.12.57-.09 1.75-.72 2-1.41.25-.69.25-1.28.17-1.41-.07-.13-.27-.2-.57-.35z" />
    <path d="M12.01 2C6.49 2 2 6.48 2 12c0 1.85.5 3.58 1.36 5.07L2 22l5.09-1.33A9.96 9.96 0 0 0 12.01 22C17.52 22 22 17.52 22 12S17.52 2 12.01 2zm0 18.09c-1.65 0-3.19-.46-4.5-1.25l-.32-.19-3.02.79.8-2.94-.21-.31A8.07 8.07 0 0 1 3.94 12c0-4.45 3.62-8.07 8.07-8.07S20.08 7.55 20.08 12s-3.62 8.09-8.07 8.09z" />
  </svg>
);

export default function Courses() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [filter, setFilter] = useState("All Programs");
  const [paymentOpen, setPaymentOpen] = useState(false);
  const [paidVia, setPaidVia] = useState(null);
  const [modalStep, setModalStep] = useState("payment"); // "payment" | "details"
  const [form, setForm] = useState({
    fullName: "",
    email: "",
    phone: "",
    course: "",
    screenshot: null,
  });

  const filterKeys = {
    "All Programs": null,
    Diploma: "Diploma Programs",
    Engineering: "Engineering Internships",
    BCA: "BCA Programs",
    MCA: "MCA Internships",
    MBA: "MBA Programs",
  };

  const visiblePrograms =
    filter === "All Programs"
      ? programs
      : programs.filter((p) => p.title === filterKeys[filter]);

  const openPayment = () => {
    setPaidVia(null);
    setModalStep("payment");
    setPaymentOpen(true);
  };

  const closePayment = () => {
    setPaymentOpen(false);
    setPaidVia(null);
    setModalStep("payment");
    setForm({ fullName: "", email: "", phone: "", course: "", screenshot: null });
  };

  const handleConfirmPayment = (method) => {
    setPaidVia(method);
    setModalStep("details");
  };

  const handleFormChange = (field) => (e) => {
    const value = field === "screenshot" ? e.target.files?.[0] || null : e.target.value;
    setForm((f) => ({ ...f, [field]: value }));
  };

  const handleEnrollSubmit = (e) => {
    e.preventDefault();
   
    alert("Thanks! Your enrollment details have been submitted.");
    closePayment();
  };

  return (
    <div className="cx-app">
      <header className="cx-header">
        <div className="cx-header-inner">
          <div className="cx-logo">
            <img src={logo} alt="Charvex Global logo" className="cx-logo-img" />
            <span className="cx-logo-text">Charvex Global Internships Portal</span>
          </div>

          <nav className="cx-nav">
            <a href="#programs">Programs</a>
            <a href="/" target="_blank" rel="noopener noreferrer">Company</a>
            <a href="#why-us">Why Us</a>
            <a href="/about" target="_blank" rel="noopener noreferrer">About Us</a>
            <button type="button" className="cx-nav-cta" onClick={openPayment}>
              Register Now
            </button>
          </nav>

          <button
            className={`cx-menu-btn ${menuOpen ? "is-active" : ""}`}
            aria-label="Toggle menu"
            aria-expanded={menuOpen}
            onClick={() => setMenuOpen((o) => !o)}
          >
            <span />
            <span />
            <span />
          </button>
        </div>

        <nav className={`cx-mobile-nav ${menuOpen ? "is-open" : ""}`}>
          <a href="#programs" onClick={() => setMenuOpen(false)}>Programs</a>
          <a href="#why-us" onClick={() => setMenuOpen(false)}>Why Us</a>
          <a href="#about" onClick={() => setMenuOpen(false)}>Process</a>
          <a href="#testimonials" onClick={() => setMenuOpen(false)}>Testimonials</a>
          <button
            type="button"
            className="cx-mobile-nav-cta"
            onClick={() => {
              setMenuOpen(false);
              openPayment();
            }}
          >
            Register
          </button>
        </nav>
      </header>
      <div className="cx-header-spacer" />

      <main className="cx-main">
        <section className="cx-hero">
          <div className="cx-hero-top">
            <Reveal className="cx-hero-content">
              <p className="cx-eyebrow">Charvex Global LLP</p>
              <h1>
                Transform Your <span>Career</span> Today
              </h1>
              <p className="cx-hero-copy">
                Join Charvex Global — a forward-thinking technology company committed to
                delivering innovative IT solutions and empowering young talent. Founded in
                2025 and incorporated in March 2026, we specialize in web development,
                software solutions, and digital transformation while fostering exceptional
                talent through structured internship programs.
              </p>
              <div className="cx-hero-actions">
                <a href="#programs" className="cx-btn cx-btn-primary">
                  Explore Programs <span className="cx-btn-arrow">→</span>
                </a>
                <a href="/contact" target="_blank" rel="noopener noreferrer" className="cx-btn cx-btn-outline">Contact Us</a>
                <a href="/journey" target="_blank" rel="noopener noreferrer" className="cx-btn cx-btn-outline">Our Journey</a>
              </div>

              <div id="journey" className="cx-journey-stats">
                <div className="cx-stat">
                  <span className="cx-stat-num">2025</span>
                  <span className="cx-stat-label">Founded</span>
                </div>
                <div className="cx-stat">
                  <span className="cx-stat-num">2026</span>
                  <span className="cx-stat-label">Incorporated</span>
                </div>
                <div className="cx-stat">
                  <span className="cx-stat-num">100%</span>
                  <span className="cx-stat-label">Dedicated Support</span>
                </div>
              </div>
            </Reveal>

            <Reveal delay={150} className="cx-hero-visual">
              <img src={courseImg} alt="Charvex Global internship students" className="cx-hero-img" />
            </Reveal>
          </div>
        </section>

        <section id="programs" className="cx-section">
          <Reveal className="cx-section-head">
            <p className="cx-eyebrow">Our Programs</p>
            <h2>Choose Your Path</h2>
            <p className="cx-section-copy">
              Select from our diverse range of internship programs tailored to your
              academic background and career goals.
            </p>
          </Reveal>

          <div className="cx-filter-row">
            {Object.keys(filterKeys).map((key) => (
              <button
                key={key}
                className={`cx-filter-chip ${filter === key ? "is-active" : ""}`}
                onClick={() => setFilter(key)}
              >
                {key}
              </button>
            ))}
          </div>

          <div className="cx-program-grid">
            {visiblePrograms.map((p, i) => (
              <Reveal delay={i * 80} key={p.title}>
                <article className="cx-program-card">
                  <div className="cx-program-icon">{p.icon}</div>
                  <h3>{p.title}</h3>
                  <p className="cx-program-desc">{p.desc}</p>

                  <div className="cx-program-meta">
                    <div className="cx-meta-row">
                      <span className="cx-meta-icon">⏱️</span>
                      <span>{p.duration}</span>
                    </div>
                    <div className="cx-meta-row">
                      <span className="cx-meta-icon">👥</span>
                      <span>{p.positions}</span>
                    </div>
                  </div>

                  <div className="cx-benefits-block">
                    <p className="cx-benefits-label">Key Benefits:</p>
                    <ul className="cx-program-benefits">
                      {p.benefits.map((b) => (
                        <li key={b}>{b}</li>
                      ))}
                    </ul>
                  </div>

                  <div className="cx-price-block">
                    <div className="cx-price-row">
                      <span className="cx-price-label">Regular Price:</span>
                      <span className="cx-price-old">₹8999</span>
                    </div>
                    <div className="cx-price-row cx-price-row-new">
                      <span className="cx-price-new">₹5999</span>
                      <span className="cx-price-save">Save 33%</span>
                    </div>
                  </div>

                  <div className="cx-subtracks">
                    <p className="cx-subtracks-label">Available Sub-Internships</p>
                    {p.subTracks.map((s) => (
                      <div className="cx-subtrack-row" key={s.name}>
                        <span>▪ {s.name}</span>
                        <span className="cx-level-tag">{s.level}</span>
                      </div>
                    ))}
                  </div>

                  <button
                    type="button"
                    className="cx-btn cx-btn-primary cx-btn-block"
                    onClick={openPayment}
                  >
                    Register Now
                  </button>
                </article>
              </Reveal>
            ))}
          </div>
        </section>

        <section id="why-us" className="cx-section cx-section-alt">
          <Reveal className="cx-section-head">
            <p className="cx-eyebrow">Why Choose Charvex</p>
            <h2>Why Students Love Us</h2>
            <p className="cx-section-copy">
              We are committed to providing an exceptional internship experience that
              transforms careers and opens doors to unlimited opportunities.
            </p>
          </Reveal>

          <div className="cx-why-grid">
            {whyUs.map((w, i) => (
              <Reveal delay={i * 70} key={w.title}>
                <div className="cx-why-card">
                  <div className="cx-why-icon">{w.icon}</div>
                  <h3>{w.title}</h3>
                  <p>{w.desc}</p>
                  <p className="cx-why-subtracks-label">Sub-Tracks:</p>
                  <ul className="cx-why-subtracks-list">
                    {w.tracks.map((t) => (
                      <li key={t}>▪ {t}</li>
                    ))}
                  </ul>
                </div>
              </Reveal>
            ))}
          </div>
        </section>

        <section id="about" className="cx-section">
          <Reveal className="cx-section-head">
            <p className="cx-eyebrow">How It Works</p>
            <h2>Simple Process, Big Results</h2>
            <p className="cx-section-copy">
              Get started with Charvex Global in just a few simple steps. From
              application to placement, we guide you every step of the way.
            </p>
          </Reveal>

          <div className="cx-steps">
            {steps.map((s, i) => (
              <Reveal delay={i * 90} key={s.num} className="cx-step">
                <div className="cx-step-num">{s.num}</div>
                <h3>{s.title}</h3>
                <p>{s.desc}</p>
                {i < steps.length - 1 && <div className="cx-step-connector" />}
              </Reveal>
            ))}
          </div>

          <div className="cx-center-cta">
            <button type="button" className="cx-btn cx-btn-primary" onClick={openPayment}>
              Register Now
            </button>
          </div>
        </section>

        <section id="testimonials" className="cx-section cx-section-alt">
          <Reveal className="cx-section-head">
            <p className="cx-eyebrow">Success Stories</p>
            <h2>What Our Students Say</h2>
            <p className="cx-section-copy">
              Hear from our successful students who transformed their careers with
              Charvex Global internship programs.
            </p>
          </Reveal>

          <div className="cx-testimonial-grid">
            {testimonials.map((t, i) => (
              <Reveal delay={i * 80} key={t.name}>
                <figure className="cx-testimonial-card">
                  <div className="cx-testi-stars" aria-label="5 out of 5 stars">
                    ★★★★★
                  </div>
                  <blockquote>&ldquo;{t.quote}&rdquo;</blockquote>
                  <figcaption>
                    <span className="cx-testi-name">{t.name}</span>
                    <span className="cx-testi-role">{t.role}</span>
                    <span className="cx-testi-chip">{t.track}</span>
                    <span className="cx-testi-outcome">{t.outcome}</span>
                  </figcaption>
                </figure>
              </Reveal>
            ))}
          </div>
        </section>

        <section id="register" className="cx-cta-section">
          <Reveal className="cx-cta-inner">
            <h2>Ready to Launch Your Tech Career?</h2>
            <p>
              Charvex Global specializes in connecting talented students with
              real-world technology projects. Our internship programs are designed to
              bridge the gap between academic learning and industry requirements.
            </p>
            <p>
              Founded in 2025 and incorporated in March 2026, we're committed to your
              growth through hands-on experience in web development, software
              solutions, and digital transformation.
            </p>
            <div className="cx-cta-actions">
              <button type="button" className="cx-btn cx-btn-light" onClick={openPayment}>
                Register Now — ₹5,999
              </button>
              <a
                href={WHATSAPP_LINK}
                target="_blank"
                rel="noopener noreferrer"
                className="cx-btn cx-btn-outline-light"
              >
                WhatsApp Inquiry
              </a>
            </div>
            <p className="cx-cta-tags">
              ✓ Industry-Ready Training &nbsp;•&nbsp; ✓ Real Projects &nbsp;•&nbsp; ✓ Mentor Guidance
            </p>
            <p id="contact" className="cx-cta-contact">
              Contact: info@charvexglobal.com | +91 6363 485061
            </p>
          </Reveal>
        </section>
      </main>
      
      <footer className="cx-footer">
  <div className="cx-footer-inner">

    <div className="cx-footer-col cx-footer-brand">
      <div className="cx-logo">
        <img
          src={logo}
          alt="Charvex Global logo"
          className="cx-logo-img"
        />
        <span className="cx-logo-text">Charvex Global LLP</span>
      </div>

      <p>
        Charvex Global LLP — Transforming careers through premium internship
        opportunities by connecting students with top companies.
      </p>
    </div>

    <div className="cx-footer-col">
      <h4>Programs</h4>

      <ul>
      <li>
          <a href="#programs">Diploma</a>
          </li>

          <li>
            <a href="#programs">Engineering</a>
          </li>

          <li>
            <a href="#programs">BCA</a>
          </li>

          <li>
            <a href="#programs">MCA</a>
          </li>

          <li>
            <a href="#programs">MBA</a>
          </li>
              </ul>
              </div>

    <div className="cx-footer-col">
      <h4>Company</h4>

      <ul>
        <li>
         <li>
   <Link to="/">Main Website</Link>
    </li>
        </li>

        <li>
          <Link to="/about">About Us</Link>
        </li>

        <li>
          <Link to="/services">Services</Link>
        </li>

        <li>
          <Link to="/projects">Projects</Link>
        </li>

        <li>
          <Link to="/careers">Careers</Link>
        </li>

        <li>
          <Link to="/contact">Contact</Link>
        </li>
      </ul>
    </div>

    <div className="cx-footer-col">
      <h4>Get in Touch</h4>

      <ul>
        <li>
          <a href="mailto:info@charvexglobal.com">
            <EmailOutlinedIcon className="cx-footer-icon" />
            info@charvexglobal.com
          </a>
        </li>

        <li>
          <a href="tel:+916363485061">
            <PhoneOutlinedIcon className="cx-footer-icon" />
            +91 6363 485061
          </a>
        </li>

        <li>
          <a
            href="https://www.google.com/maps/search/?api=1&query=Charvex+Global+LLP,+Yeshwanthpur,+Bengaluru"
            target="_blank"
            rel="noopener noreferrer"
          >
            <LocationOnOutlinedIcon className="cx-footer-icon" />
            Bengaluru, Karnataka
          </a>
        </li>
      </ul>
    </div>

  </div>

  <div className="cx-footer-bottom">
    <p>
      © 2026 Charvex Global LLP. All rights reserved. | LLP ID: ACW-4414
    </p>

    <div className="cx-footer-social">

      <a
        href="https://www.linkedin.com/company/charvex"
        target="_blank"
        rel="noopener noreferrer"
        aria-label="LinkedIn"
        className="cx-social-icon"
      >
        <LinkedInIcon />
      </a>

      <a
        href="https://www.instagram.com/charvexglobal"
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Instagram"
        className="cx-social-icon"
      >
        <InstagramIcon />
      </a>

    </div>
  </div>
</footer>

      <a
        href={WHATSAPP_LINK}
        target="_blank"
        rel="noopener noreferrer"
        className="cx-whatsapp-float"
        aria-label="Chat with us on WhatsApp"
      >
        <WhatsAppIcon />
      </a>

      {paymentOpen && (
        <div className="cx-modal-overlay" onClick={closePayment}>
          <div className="cx-modal" onClick={(e) => e.stopPropagation()}>
            <button className="cx-modal-close" aria-label="Close" onClick={closePayment}>
              ×
            </button>

            {modalStep === "payment" && (
              <>
                <h3 className="cx-modal-title">Payment &amp; Enrollment</h3>
                <p className="cx-modal-sub">
                  Choose your payment method to complete the enrollment process.
                </p>

                <div className="cx-modal-fee">
                  <span className="cx-modal-fee-label">Enrollment Fee:</span>
                  <span className="cx-modal-fee-amount">₹5,999</span>
                  <span className="cx-modal-fee-tag">Limited Time Offer - Save 33%!</span>
                </div>

                <div className="cx-payment-methods">
                  <div className="cx-payment-card">
                    <h4>UPI Payment</h4>
                    <div className="cx-qr-row">
                      <div className="cx-qr-box">
                        <img src={qr1} alt="UPI QR code 1" className="cx-qr-img" />
                      </div>
                      <div className="cx-qr-box">
                        <img src={qr2} alt="UPI QR code 2" className="cx-qr-img" />
                      </div>
                    </div>
                    <p className="cx-payment-note">Scan any QR and pay ₹5,999 via UPI</p>
                    <button
                      type="button"
                      className="cx-btn cx-btn-primary cx-btn-block"
                      onClick={() => handleConfirmPayment("upi")}
                    >
                      <span className="cx-btn-check">✓</span> I've Paid via UPI
                    </button>
                  </div>

                  <div className="cx-payment-card">
                    <h4>Bank Transfer</h4>
                    <ul className="cx-bank-details">
                      <li><strong>Bank Name:</strong> UNION BANK OF INDIA</li>
                      <li><strong>Account Name:</strong> Theja Suryachar P J</li>
                      <li><strong>Account Number:</strong> 520481026759733</li>
                      <li><strong>IFSC Code:</strong> UBIN0911437</li>
                      <li><strong>Amount:</strong> ₹5,999</li>
                    </ul>
                    <p className="cx-payment-note">
                      WhatsApp us for complete bank details:{" "}
                      <a href={WHATSAPP_LINK} target="_blank" rel="noopener noreferrer">
                        {WHATSAPP_BANK_NUMBER}
                      </a>
                    </p>
                    <button
                      type="button"
                      className="cx-btn cx-btn-primary cx-btn-block"
                      onClick={() => handleConfirmPayment("bank")}
                    >
                      <span className="cx-btn-check">✓</span> I've Transferred via Bank
                    </button>
                  </div>
                </div>

                <p className="cx-modal-footnote">
                  After payment, fill your details in the next step to complete enrollment.
                </p>
              </>
            )}

            {modalStep === "details" && (
              <form className="cx-details-form" onSubmit={handleEnrollSubmit}>
                <h3 className="cx-modal-title">Your Details</h3>

                <label className="cx-field">
                  <span className="cx-field-label">Full Name *</span>
                  <input
                    type="text"
                    required
                    value={form.fullName}
                    onChange={handleFormChange("fullName")}
                    placeholder="Enter your full name"
                  />
                </label>

                <label className="cx-field">
                  <span className="cx-field-label">Email *</span>
                  <input
                    type="email"
                    required
                    value={form.email}
                    onChange={handleFormChange("email")}
                    placeholder="you@example.com"
                  />
                </label>

                <label className="cx-field">
                  <span className="cx-field-label">Phone Number *</span>
                  <input
                    type="tel"
                    required
                    value={form.phone}
                    onChange={handleFormChange("phone")}
                    placeholder="+91 00000 00000"
                  />
                </label>

                <label className="cx-field">
                  <span className="cx-field-label">Select Course *</span>
                  <select
                    required
                    value={form.course}
                    onChange={handleFormChange("course")}
                  >
                    <option value="">Choose a program...</option>
                    {courseOptions.map((c) => (
                      <option key={c} value={c}>
                        {c}
                      </option>
                    ))}
                  </select>
                </label>

                <label className="cx-field">
                  <span className="cx-field-label">Payment Screenshot (Optional)</span>
                  <input
                    type="file"
                    accept="image/*"
                    onChange={handleFormChange("screenshot")}
                  />
                </label>

                <div className="cx-form-actions">
                  <button
                    type="button"
                    className="cx-btn cx-btn-outline"
                    onClick={() => setModalStep("payment")}
                  >
                    Back
                  </button>
                  <button type="submit" className="cx-btn cx-btn-primary">
                    Complete Enrollment
                  </button>
                </div>
              </form>
            )}
          </div>
        </div>
      )}
    </div>
  );
}