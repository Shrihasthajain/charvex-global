import React, { useEffect, useRef, useState } from "react";
import Header from "../components/header";
import "./journey.css";

const MILESTONES = [
  {
    date: "May 2025",
    title: "Charvex Global Founded",
    description:
      "Charvex Global was officially launched with a bold vision to redefine IT consulting and deliver enterprise-grade technology solutions.",
  },
  {
    date: "July 2025",
    title: "50+ Interns Joined",
    description:
      "Over 100 passionate interns joined Charvex Global, forming a strong foundation of innovation, learning, and collaboration.",
  },
  {
    date: "November 2025",
    title: "First Client – Parishrama Patashala",
    description:
      "We secured our first official client partnership with Parishrama Patashala, marking the beginning of our service journey.",
    link: "https://www.parishramapatashala.org/",
    linkLabel: "Visit Website",
  },
  {
    date: "November 2025",
    title: "Second Client – Dolphin Tutorials",
    description:
      "Expanded our client portfolio by partnering with Dolphin Tutorials for digital and technology solutions.",
    link: "https://www.dolphintutorials.com/",
    linkLabel: "Visit Website",
  },
  {
    date: "December 2025",
    title: "100+ Interns Joined",
    description:
      "Over 50 passionate interns joined Charvex Global, forming a strong foundation of innovation, learning, and collaboration.",
  },
  {
    date: "January 2026",
    title: "Vikas Centre for Learning",
    description:
      "Partnered with Vikas Centre for Learning to strengthen their digital presence and infrastructure.",
    link: "https://www.vikascentreforlearning.com/",
    linkLabel: "Visit Website",
  },
  {
    date: "February 2026",
    title: "Banashree Tutorials",
    description:
      "Successfully onboarded Banashree Tutorials as a valued client, expanding our impact in the education sector.",
    link: "https://www.banashreetutorials.org/",
    linkLabel: "Visit Website",
  },
  {
    date: "March 2026",
    title: "AquaLifePure",
    description:
      "Successfully onboarded AquaLifePure as a valued client, expanding our impact in the Product Development sector.",
    link: "https://www.aqualifepure.com/",
    linkLabel: "Visit Website",
  },
  {
    date: "March 2026",
    title: "50+ Interns Added",
    description:
      "Expanded our team further by welcoming 50 additional interns, accelerating growth and operational capacity.",
  },
  {
    date: "April 2026",
    title: "Deep Hybrid Learning Centre",
    description:
      "Successfully onboarded Deep Hybrid Learning Centre as a valued client, expanding our impact in the education sector.",
    link: "https://www.deephybridlearningcentre.com/",
    linkLabel: "Visit Website",
  },
  {
    date: "17th March 2026",
    title: "Charvex Global LLP Incorporated",
    description:
      "Charvex Global LLP was officially incorporated with a bold vision to redefine IT consulting and deliver enterprise-grade technology solutions.",
    link: "assets/pdf/charvex llpin.pdf",
    linkLabel: "Incorporation Certificate",
    icon: "📄",
  },
];

 function Journey() {
  const trackRef = useRef(null);
  const itemRefs = useRef([]);
  const [visible, setVisible] = useState(() => new Array(MILESTONES.length).fill(false));

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (!entry.isIntersecting) return;
          const idx = Number(entry.target.dataset.index);
          setVisible((prev) => {
            if (prev[idx]) return prev;
            const next = [...prev];
            next[idx] = true;
            return next;
          });
        });
      },
      { threshold: 0.3, rootMargin: "0px 0px -10% 0px" }
    );

    itemRefs.current.forEach((el) => el && observer.observe(el));
    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    const track = trackRef.current;
    if (!track) return;

    const prefersReduced = window.matchMedia(
      "(prefers-reduced-motion: reduce)"
    ).matches;

    if (prefersReduced) {
      track.style.setProperty("--progress", 1);
      return;
    }

    let raf = null;

    const update = () => {
      const rect = track.getBoundingClientRect();
      const vh = window.innerHeight || document.documentElement.clientHeight;
      const total = rect.height + vh * 0.5;
      const covered = vh * 0.85 - rect.top;
      const pct = Math.min(1, Math.max(0, covered / total));
      track.style.setProperty("--progress", pct.toFixed(4));
      raf = null;
    };

    const onScroll = () => {
      if (raf == null) raf = requestAnimationFrame(update);
    };

    update();
    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", onScroll);
    return () => {
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", onScroll);
      if (raf) cancelAnimationFrame(raf);
    };
  }, []);

  return (
    <>
    <Header/>
    <section className="journey" aria-label="Our Journey">
      <header className="journey-header">
        <p className="journey-eyebrow">Since May 2025</p>
        <h1 className="journey-title">
          <span className="journey-titleWhite">Our</span>{" "}
          <span className="journey-titleOrange">Journey</span>
        </h1>
        <p className="journey-subtitle">A timeline of growth and milestones.</p>
      </header>

      <ol className="journey-track" ref={trackRef} role="list">
        <span className="journey-line" aria-hidden="true" />
        <span className="journey-progress" aria-hidden="true" />

        {MILESTONES.map((item, index) => (
          <li
            key={`${item.date}-${item.title}`}
            ref={(el) => (itemRefs.current[index] = el)}
            data-index={index}
            className={
              "journey-item " +
              (index % 2 === 0 ? "journey-item--left" : "journey-item--right") +
              (visible[index] ? " is-visible" : "")
            }
          >
            <span className="journey-node" aria-hidden="true">
              <span className="journey-dot" />
            </span>

            <div className="journey-card">
              <time className="journey-date">{item.date}</time>
              <h3 className="journey-cardTitle">{item.title}</h3>
              <p className="journey-cardText">{item.description}</p>
              {item.link && (
                <a
                  className="journey-link"
                  href={item.link}
                  target="_blank"
                  rel="noreferrer"
                >
                  {item.icon ? `${item.icon} ` : ""}
                  {item.linkLabel}
                  <span className="journey-linkArrow" aria-hidden="true">
                    →
                  </span>
                </a>
              )}
            </div>
          </li>
        ))}
      </ol>
    </section>
    </>
  );
}

export default Journey;