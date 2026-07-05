import React, { useState, useRef, useEffect } from "react";
import "./courses.css";
import courseImg from "../assets/images/courseimg.png";
import logo from "../assets/images/logo.png";
import qr1 from "../assets/images/qr1.png";
import qr2 from "../assets/images/qr2.png";

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

export default function Courses() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [filter, setFilter] = useState("All Programs");
  const [paymentOpen, setPaymentOpen] = useState(false);
  const [paidVia, setPaidVia] = useState(null);

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
    setPaymentOpen(true);
  };

  const closePayment = () => {
    setPaymentOpen(false);
    setPaidVia(null);
  };

  return (
    <div className="cx-app">
      {/* HEADER */}
      <header className="cx-header">
        <div className="cx-header-inner">
          <div className="cx-logo">
            <img src={logo} alt="Charvex Global logo" className="cx-logo-img" />
            <span className="cx-logo-text">Charvex Global Internships Portal</span>
          </div>

          <nav className={`cx-nav ${menuOpen ? "is-open" : ""}`}>
            <a href="#programs" onClick={() => setMenuOpen(false)}>Programs</a>
            <a
              href="/"
              target="_blank"
              rel="noopener noreferrer"
              onClick={() => setMenuOpen(false)}
            >
              Company
            </a>
            <a href="#why-us" onClick={() => setMenuOpen(false)}>Why Us</a>
            <a
              href="/about"
              target="_blank"
              rel="noopener noreferrer"
              onClick={() => setMenuOpen(false)}
            >
              About Us
            </a>
            <button
              type="button"
              className="cx-nav-cta"
              onClick={() => {
                setMenuOpen(false);
                openPayment();
              }}
            >
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
      </header>
      <div className="cx-header-spacer" />

      {/* MAIN BODY */}
      <main className="cx-main">
        {/* HERO */}
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
                <a href="#contact" className="cx-btn cx-btn-outline">Contact Us</a>
                <a href="#journey" className="cx-btn cx-btn-outline">Our Journey</a>
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

        {/* PROGRAMS */}
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

        {/* WHY US */}
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

        {/* HOW IT WORKS */}
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

        {/* TESTIMONIALS */}
        <section className="cx-section cx-section-alt">
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

        {/* REGISTER / FINAL CTA */}
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

      {/* FOOTER */}
      <footer className="cx-footer">
        <div className="cx-footer-inner">
          <div className="cx-footer-col cx-footer-brand">
            <div className="cx-logo">
              <img src={logo} alt="Charvex Global logo" className="cx-logo-img" />
              <span className="cx-logo-text">Charvex Global Internships Portal</span>
            </div>
            <p>
              Charvex Global LLP — Transforming careers through premium internship
              opportunities connecting students with top companies.
            </p>
          </div>

          <div className="cx-footer-col">
            <h4>Programs</h4>
            <ul>
              <li>Diploma</li>
              <li>Engineering</li>
              <li>BCA</li>
              <li>MCA</li>
              <li>MBA</li>
            </ul>
          </div>

          <div className="cx-footer-col">
            <h4>Company</h4>
            <ul>
              <li>Main Website</li>
              <li>About Us</li>
              <li>Services</li>
              <li>Projects</li>
              <li>Careers</li>
              <li>Contact</li>
            </ul>
          </div>

          <div className="cx-footer-col">
            <h4>Get in Touch</h4>
            <ul>
              <li>info@charvexglobal.com</li>
              <li>+91 6363 485061</li>
              <li>Bengaluru, Karnataka</li>
            </ul>
          </div>
        </div>

        <div className="cx-footer-bottom">
          © 2026 Charvex Global LLP. All rights reserved. | LLP ID: ACW-4414
        </div>
      </footer>

      {/* PAYMENT MODAL */}
      {paymentOpen && (
        <div className="cx-modal-overlay" onClick={closePayment}>
          <div className="cx-modal" onClick={(e) => e.stopPropagation()}>
            <button className="cx-modal-close" aria-label="Close" onClick={closePayment}>
              ×
            </button>

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
              {/* UPI Payment */}
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
                  onClick={() => setPaidVia("upi")}
                >
                  <span className="cx-btn-check">✓</span> I've Paid via UPI
                </button>
                {paidVia === "upi" && (
                  <p className="cx-confirm-msg">✓ Thanks! We'll verify and reach out shortly.</p>
                )}
              </div>

              {/* Bank Transfer */}
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
                  onClick={() => setPaidVia("bank")}
                >
                  <span className="cx-btn-check">✓</span> I've Transferred via Bank
                </button>
                {paidVia === "bank" && (
                  <p className="cx-confirm-msg">✓ Thanks! We'll verify and reach out shortly.</p>
                )}
              </div>
            </div>

            <p className="cx-modal-footnote">
              After payment, fill your details in the next step to complete enrollment.
            </p>
          </div>
        </div>
      )}
    </div>
  );
}