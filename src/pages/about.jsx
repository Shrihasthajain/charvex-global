import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import "./about.css";
import Header from "../components/header";
import Footer from "../components/footer";
import MailIcon from "@mui/icons-material/Mail";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import ThejaImg from "../assets/images/thejas.png";
import AhazarImg from "../assets/images/ahzhar.png";
import DeekshithImg from "../assets/images/deekshith.png";
import JeevanImg from "../assets/images/jeevan.png";
import { useNavigate } from "react-router-dom";


const Icon = ({ name }) => {
  const paths = {
    compass: (
      <>
        <circle cx="12" cy="12" r="9" />
        <path d="M14.8 9.2 13 13l-3.8 1.8L11 11z" />
      </>
    ),
    shield: <path d="M12 3l7 3v6c0 4.5-3 7.7-7 9-4-1.3-7-4.5-7-9V6z" />,
    users: (
      <>
        <circle cx="8.5" cy="8" r="3" />
        <path d="M2.5 20c0-3.3 2.7-5.5 6-5.5s6 2.2 6 5.5" />
        <circle cx="17" cy="9" r="2.4" />
        <path d="M15.3 14.6c2.7.2 4.7 2.2 4.7 5.4" />
      </>
    ),
    spark: <path d="M12 2l1.8 6.2L20 10l-6.2 1.8L12 18l-1.8-6.2L4 10l6.2-1.8z" />,
    trend: <path d="M3 17l6-6 4 4 8-9M15 6h6v6" />,
    target: (
      <>
        <circle cx="12" cy="12" r="8.5" />
        <circle cx="12" cy="12" r="4.5" />
        <circle cx="12" cy="12" r="0.8" />
      </>
    ),
    layers: <path d="M12 3 2 8l10 5 10-5zM2 13l10 5 10-5M2 18l10 5 10-5" />,
    clock: (
      <>
        <circle cx="12" cy="12" r="9" />
        <path d="M12 7v5l3.5 2" />
      </>
    ),
    globe: (
      <>
        <circle cx="12" cy="12" r="9" />
        <path d="M3 12h18M12 3c2.6 2.6 4 5.7 4 9s-1.4 6.4-4 9c-2.6-2.6-4-5.7-4-9s1.4-6.4 4-9z" />
      </>
    ),
    doc: <path d="M6 2h9l3 3v17H6zM15 2v3h3M9 12h6M9 16h6M9 8h3" />,
    rocket: <path d="M12 2c3 2 5 6 5 10 0 2-1 4-2 5l-1 3-2-2-2 2-1-3c-1-1-2-3-2-5 0-4 2-8 5-10zM8 15l-3 3M16 15l3 3" />,
    pin: (
      <>
        <path d="M12 21s-7-6.2-7-12a7 7 0 1 1 14 0c0 5.8-7 12-7 12z" />
        <circle cx="12" cy="9" r="2.6" />
      </>
    ),
    check: <path d="M4 12.5l5 5L20 6.5" />,
  };
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
      {paths[name]}
    </svg>
  );
};

/* ══════════════════════════════════════════
   HERO SIGNAL — animated origin→now spine preview
══════════════════════════════════════════ */
const HeroSignal = () => (
  <div className="hero-signal">
    <svg viewBox="0 0 280 360" className="hs-svg" xmlns="http://www.w3.org/2000/svg">
      <line x1="60" y1="24" x2="60" y2="336" className="hs-track" />
      <line x1="60" y1="24" x2="60" y2="336" className="hs-progress" />

      <g className="hs-node hs-node-a">
        <circle cx="60" cy="60" r="7" />
        <text x="86" y="56">MAY 2025</text>
        <text x="86" y="76" className="hs-sub">Charvex founded</text>
      </g>

      <g className="hs-node hs-node-b">
        <circle cx="60" cy="180" r="7" />
        <text x="86" y="176">MAR 2026</text>
        <text x="86" y="196" className="hs-sub">LLP incorporated</text>
      </g>

      <g className="hs-node hs-node-c">
        <circle cx="60" cy="300" r="8" className="hs-now-dot" />
        <text x="86" y="296">TODAY</text>
        <text x="86" y="316" className="hs-sub">Building what's next</text>
      </g>
    </svg>
  </div>
);


const GlobeSVG = () => (
  <div className="globe-scene">
    <div className="g-ring g-ring-1" />
    <div className="g-ring g-ring-2" />
    <div className="g-ring g-ring-3" />
    <div className="g-glow" />
    <div className="g-sphere">
      <div className="g-ocean" />
      <svg
        className="g-continents"
        viewBox="0 0 560 280"
        xmlns="http://www.w3.org/2000/svg"
        preserveAspectRatio="xMidYMid slice"
      >
        <defs>
          <pattern id="grid" x="0" y="0" width="56" height="56" patternUnits="userSpaceOnUse">
            <path d="M 56 0 L 0 0 0 56" fill="none" stroke="rgba(255,255,255,0.06)" strokeWidth="0.5" />
          </pattern>
        </defs>
        <rect width="560" height="280" fill="url(#grid)" />
        <path d="M48 30 Q55 25 65 28 Q72 32 78 28 Q85 22 92 26 Q98 30 100 38 Q105 48 102 58 Q98 68 90 72 Q82 78 74 88 Q66 98 60 110 Q55 122 58 132 Q62 140 56 145 Q50 148 44 142 Q38 135 36 122 Q34 108 38 96 Q42 84 40 72 Q38 60 42 48 Z" fill="#4a9c2e"/>
        <path d="M52 88 Q60 82 68 86 Q74 92 70 100 Q64 108 56 106 Q48 102 50 94 Z" fill="#5ab03a"/>
        <path d="M32 38 Q38 32 46 36 Q50 40 48 46 Q44 50 38 48 Q32 44 32 38 Z" fill="#4a9c2e"/>
        <path d="M90 10 Q100 6 108 10 Q114 16 112 24 Q108 30 100 28 Q92 24 90 18 Z" fill="#d8eef4"/>
        <path d="M58 146 Q64 142 68 148 Q70 154 64 158 Q58 158 56 152 Z" fill="#4a9c2e"/>
        <path d="M62 162 Q72 156 82 160 Q92 166 96 178 Q100 192 98 208 Q94 222 86 230 Q76 236 66 232 Q56 226 52 212 Q48 196 50 182 Q52 168 62 162 Z" fill="#3dae28"/>
        <path d="M66 182 Q74 178 80 184 Q82 192 76 198 Q68 198 64 192 Z" fill="#5acc3e"/>
        <path d="M152 22 Q160 16 170 18 Q178 22 180 30 Q180 40 172 46 Q162 50 154 44 Q146 36 148 28 Z" fill="#5eba34"/>
        <path d="M144 24 Q150 20 154 26 Q152 32 146 32 Q142 28 144 24 Z" fill="#5eba34"/>
        <path d="M162 8 Q170 4 176 10 Q178 18 174 24 Q168 26 162 22 Q158 16 162 8 Z" fill="#5eba34"/>
        <path d="M148 44 Q156 40 162 46 Q164 54 158 58 Q150 58 146 52 Z" fill="#5eba34"/>
        <path d="M158 58 Q170 52 182 56 Q192 62 196 76 Q200 92 198 110 Q194 128 186 140 Q176 150 164 150 Q152 148 146 136 Q140 122 142 106 Q144 90 148 76 Q152 64 158 58 Z" fill="#d4913a"/>
        <path d="M196 112 Q200 108 204 112 Q206 120 202 126 Q196 126 194 120 Z" fill="#d4913a"/>
        <path d="M180 16 Q200 8 228 12 Q250 18 260 28 Q264 38 256 44 Q240 48 220 44 Q200 40 186 34 Q178 28 180 16 Z" fill="#62be3a"/>
        <path d="M196 62 Q208 56 218 62 Q224 70 220 80 Q212 86 202 82 Q194 74 196 62 Z" fill="#d49a38"/>
        <path d="M198 84 Q210 78 220 84 Q226 94 222 106 Q214 112 204 108 Q196 100 198 84 Z" fill="#e0aa42"/>
        <path d="M222 64 Q236 58 248 64 Q256 72 254 84 Q248 94 236 96 Q224 92 218 82 Q216 72 222 64 Z" fill="#6aca3e"/>
        <path d="M228 96 Q238 90 246 96 Q250 108 244 120 Q236 126 228 120 Q222 110 228 96 Z" fill="#72d040"/>
        <path d="M236 126 Q240 122 244 126 Q244 132 240 132 Q236 130 236 126 Z" fill="#72d040"/>
        <path d="M256 68 Q270 62 280 68 Q286 76 282 86 Q274 92 262 88 Q254 80 256 68 Z" fill="#5ab832"/>
        <path d="M262 88 Q272 84 280 90 Q282 100 276 108 Q268 110 262 104 Z" fill="#62be3a"/>
        <path d="M270 110 Q278 106 284 112 Q284 118 278 120 Q270 118 270 110 Z" fill="#5ab832"/>
        <path d="M266 44 Q282 36 300 40 Q316 46 320 58 Q322 70 314 78 Q300 84 284 80 Q268 74 264 62 Q262 52 266 44 Z" fill="#72c840"/>
        <path d="M318 50 Q324 46 328 52 Q328 58 322 60 Q316 58 318 50 Z" fill="#60bc34"/>
        <path d="M322 62 Q328 58 332 64 Q332 72 326 74 Q320 72 322 62 Z" fill="#60bc34"/>
        <path d="M292 158 Q310 150 330 154 Q346 160 350 174 Q352 190 342 200 Q328 208 310 206 Q292 200 284 186 Q278 172 292 158 Z" fill="#c87830"/>
        <path d="M356 190 Q362 184 368 190 Q370 198 364 204 Q356 204 354 196 Z" fill="#62be3a"/>
        <path d="M222 42 Q242 34 264 38 Q270 46 264 54 Q248 58 230 54 Q218 50 222 42 Z" fill="#a89040"/>
        <path d="M328 30 Q335 25 345 28 Q352 32 358 28 Q365 22 372 26 Q378 30 380 38 Q385 48 382 58 Q378 68 370 72 Q362 78 354 88 Q346 98 340 110 Q335 122 338 132 Q342 140 336 145 Q330 148 324 142 Q318 135 316 122 Q314 108 318 96 Q322 84 320 72 Q318 60 322 48 Z" fill="#4a9c2e"/>
        <path d="M332 88 Q340 82 348 86 Q354 92 350 100 Q344 108 336 106 Q328 102 330 94 Z" fill="#5ab03a"/>
        <path d="M312 38 Q318 32 326 36 Q330 40 328 46 Q324 50 318 48 Q312 44 312 38 Z" fill="#4a9c2e"/>
        <path d="M370 10 Q380 6 388 10 Q394 16 392 24 Q388 30 380 28 Q372 24 370 18 Z" fill="#d8eef4"/>
        <path d="M338 146 Q344 142 348 148 Q350 154 344 158 Q338 158 336 152 Z" fill="#4a9c2e"/>
        <path d="M342 162 Q352 156 362 160 Q372 166 376 178 Q380 192 378 208 Q374 222 366 230 Q356 236 346 232 Q336 226 332 212 Q328 196 330 182 Q332 168 342 162 Z" fill="#3dae28"/>
        <path d="M346 182 Q354 178 360 184 Q362 192 356 198 Q348 198 344 192 Z" fill="#5acc3e"/>
        <path d="M432 22 Q440 16 450 18 Q458 22 460 30 Q460 40 452 46 Q442 50 434 44 Q426 36 428 28 Z" fill="#5eba34"/>
        <path d="M424 24 Q430 20 434 26 Q432 32 426 32 Q422 28 424 24 Z" fill="#5eba34"/>
        <path d="M442 8 Q450 4 456 10 Q458 18 454 24 Q448 26 442 22 Q438 16 442 8 Z" fill="#5eba34"/>
        <path d="M428 44 Q436 40 442 46 Q444 54 438 58 Q430 58 426 52 Z" fill="#5eba34"/>
        <path d="M438 58 Q450 52 462 56 Q472 62 476 76 Q480 92 478 110 Q474 128 466 140 Q456 150 444 150 Q432 148 426 136 Q420 122 422 106 Q424 90 428 76 Q432 64 438 58 Z" fill="#d4913a"/>
        <path d="M476 112 Q480 108 484 112 Q486 120 482 126 Q476 126 474 120 Z" fill="#d4913a"/>
        <path d="M460 16 Q480 8 508 12 Q530 18 540 28 Q544 38 536 44 Q520 48 500 44 Q480 40 466 34 Q458 28 460 16 Z" fill="#62be3a"/>
        <path d="M476 62 Q488 56 498 62 Q504 70 500 80 Q492 86 482 82 Q474 74 476 62 Z" fill="#d49a38"/>
        <path d="M478 84 Q490 78 500 84 Q506 94 502 106 Q494 112 484 108 Q476 100 478 84 Z" fill="#e0aa42"/>
        <path d="M502 64 Q516 58 528 64 Q536 72 534 84 Q528 94 516 96 Q504 92 498 82 Q496 72 502 64 Z" fill="#6aca3e"/>
        <path d="M508 96 Q518 90 526 96 Q530 108 524 120 Q516 126 508 120 Q502 110 508 96 Z" fill="#72d040"/>
        <path d="M516 126 Q520 122 524 126 Q524 132 520 132 Q516 130 516 126 Z" fill="#72d040"/>
        <path d="M536 68 Q550 62 560 68 Q560 76 560 86 Q552 92 542 88 Q534 80 536 68 Z" fill="#5ab832"/>
        <path d="M542 88 Q552 84 560 90 Q560 108 556 108 Q548 110 542 104 Z" fill="#62be3a"/>
        <path d="M550 110 Q558 106 560 112 Q560 120 558 120 Q550 118 550 110 Z" fill="#5ab832"/>
        <path d="M546 44 Q562 36 560 40 Q560 70 560 78 Q560 84 544 80 Q528 74 544 62 Q542 52 546 44 Z" fill="#72c840"/>
        <path d="M572 158 Q590 150 610 154 Q626 160 630 174 Q632 190 622 200 Q608 208 590 206 Q572 200 564 186 Q558 172 572 158 Z" fill="#c87830"/>
        <path d="M502 42 Q522 34 544 38 Q550 46 544 54 Q528 58 510 54 Q498 50 502 42 Z" fill="#a89040"/>
        <ellipse cx="280" cy="140" rx="279" ry="139" fill="none" stroke="rgba(120,190,255,0.12)" strokeWidth="3" />
      </svg>
      <div className="g-gloss" />
      <div className="g-shadow" />
    </div>
    <div className="g-orb g-orb-1" />
    <div className="g-orb g-orb-2" />
    <div className="g-ground" />
  </div>
);


const AboutSection = () => {
  useEffect(() => {
    AOS.init({ duration: 900, easing: "ease-out-cubic", once: true, offset: 80 });
    AOS.refresh();
  }, []);

  const navigate = useNavigate();

  const stats = [
    { value: "2025", label: "Founded" },
    { value: "2026", label: "LLP Incorporated" },
    { value: "4", label: "Founding Directors" },
    { value: "ACW-4414", label: "LLPIN, Bengaluru" },
  ];

  const values = [
    { icon: "target", title: "Client-First Thinking", body: "Every engagement starts with your outcome, not our stack. We shape the solution around the business problem, not the other way around." },
    { icon: "shield", title: "Integrity by Default", body: "Transparent scoping, honest timelines, and no surprises in the invoice. Trust is the actual deliverable behind every project." },
    { icon: "spark", title: "Engineering Craft", body: "We sweat the details others skip — performance, security, and code that's still legible and maintainable two years on." },
    { icon: "users", title: "Partnership, Not Vendorship", body: "We stay close after go-live. Long-term relationships matter more to us than one-off contracts and quick handoffs." },
  ];

  const timeline = [
    {
      tag: "MAY 2025",
      title: "Foundation",
      body: "Established on 2 May 2025, Charvex was built on a shared vision of creating impactful technology solutions and delivering long-term value to businesses. The founding team came together to drive the company's strategy, growth, and innovation from day one.",
      status: "done",
    },
    {
      tag: "MAR 2026",
      title: "LLP Incorporation",
      body: "Charvex Global LLP was officially incorporated on 17 March 2026 under the Ministry of Corporate Affairs, Government of India, with LLP Identification Number ACW-4414. Registered in Bengaluru, Karnataka, the company operates as a legally recognized Limited Liability Partnership.",
      status: "done",
    },
    {
      tag: "NOW",
      title: "Growth Milestones",
      body: "The incorporation of Charvex marked an important milestone in its journey — transforming a growing venture into a structured organization positioned for scalable growth, strategic partnerships, and lasting impact within the technology and digital services ecosystem.",
      status: "now",
    },
  ];

  const roadmap = [
    { tag: "H2 2026", title: "Deepen Cloud & AI Practice", body: "Building out dedicated pods for cloud modernization and applied AI engineering." },
    { tag: "2027", title: "Second Delivery Hub", body: "Expanding beyond Bengaluru to widen our talent base and client coverage across time zones." },
    { tag: "2027+", title: "Charvex Labs", body: "An internal R&D track for product prototypes, open-source tooling, and early-stage partnerships." },
  ];

  const leaders = [
    {
      name: "Theja Suryachar P J",
      role: "Founder & Director",
      image: ThejaImg,
      delay: 0,
      email: "theja@charvexglobal.com",
      linkedin: "https://linkedin.com/in/theja-suryachar",
    },
    {
      name: "Mohammed Ahazar",
      role: "CEO & Director",
      image: AhazarImg,
      delay: 90,
      email: "ahazar@charvexglobal.com",
    },
    {
      name: "Jeevan K",
      role: "COO & Director",
      image: JeevanImg,
      delay: 180,
      email: "jeevan@charvexglobal.com",
    },
    {
      name: "Deekshith H R",
      role: "CFO & Director",
      image: DeekshithImg,
      delay: 270,
      email: "deekshith@charvexglobal.com",
    },
  ];

  const whyChoose = [
    { icon: "layers", title: "Full-Stack Capability", body: "Software, cloud, and consulting under one roof — no hand-offs between disconnected vendors." },
    { icon: "clock", title: "Built for Speed", body: "Lean team structure means fewer approval layers and faster time from brief to build." },
    { icon: "globe", title: "Local Roots, Global Standards", body: "Based in Bengaluru, held to the engineering bar expected by international clients." },
    { icon: "doc", title: "Legally Structured, Fully Accountable", body: "Registered LLP with a clear governance structure — you're partnering with an entity, not a freelancer." },
  ];

  const globalFeatures = [
    { icon: "rocket", title: "Innovation Hub", body: "Cutting-edge technology and forward-thinking solutions built for what businesses need next." },
    { icon: "users", title: "Strategic Partnerships", body: "Collaborating with industry leaders and technology partners worldwide to widen what we can deliver." },
    { icon: "clock", title: "24/7 Support", body: "Round-the-clock assistance across time zones, so engagements never stall on a response." },
  ];

  const visionPoints = [
    "Trusted Partner for Digital Transformation",
    "Innovation-Driven Product Development",
    "Excellence in Technology and Consulting Services",
    "Creating Sustainable Value for Businesses",
    "Empowering the Next Generation of Technology Professionals",
  ];

  const missionPoints = [
    "Delivering Technology That Creates Business Impact",
    "Building Scalable and Future-Ready Digital Products",
    "Driving Innovation Through Engineering Excellence",
    "Creating Long-Term Value Through Trusted Partnerships",
    "Developing Industry-Ready Technology Talent",
  ];

  return (
    <>
      <Header />

      <section className="ab-hero">
        <div className="ab-hero-grain" />
        <div className="ab-hero-inner">
          <div className="ab-hero-copy" data-aos="fade-up">
            <span className="ab-eyebrow">IT Consulting · Bengaluru, India</span>
            <h1 className="ab-hero-title">
              We build the technology
              <br />
              behind other people's <span className="gradient-text">growth.</span>
            </h1>
            <p className="ab-hero-lead">
              Charvex Global LLP is a forward-thinking IT consulting and technology
              services company committed to helping businesses achieve digital
              excellence. We specialize in delivering custom software development,
              cloud solutions, and strategic technology consulting designed to
              accelerate growth, enhance efficiency, and empower innovation.
            </p>
            <div className="ab-hero-actions">
              <button className="btn-filled" onClick={() => navigate("/journey")}>
                Our Journey <span className="btn-arr">→</span>
              </button>
              <button className="btn-ghost" onClick={() => window.open("/assets/pdf/profile.pdf", "_blank")}>
                Company Profile
              </button>
              <button className="btn-ghost" onClick={() => window.open("assets/pdf/charvex llpin.pdf", "_blank")}>
                Incorporation Certificate
              </button>
            </div>
          </div>
          <div className="ab-hero-visual" data-aos="fade-left" data-aos-delay="150">
            <HeroSignal />
          </div>
        </div>

        <div className="about-stat-strip" data-aos="fade-up" data-aos-delay="200">
          {stats.map((s) => (
            <div className="about-stat-item" key={s.label}>
              <span className="about-stat-value">{s.value}</span>
              <span className="about-stat-label">{s.label}</span>
            </div>
          ))}
        </div>
      </section>

      <section className="story-section">
        <div className="story-grid">
          <div className="story-copy" data-aos="fade-up">
            <h2 className="section-title">The Charvex journey, from first client to registered entity</h2>
            <p className="story-p">
              Established on <strong>2 May 2025</strong>, Charvex was built on a
              shared vision of creating impactful technology solutions and delivering
              long-term value to businesses. Today, the company is led by{" "}
              <strong>Theja Suryachar P J</strong> (Founder &amp; Director),{" "}
              <strong>Mohammed Ahazar</strong> (CEO &amp; Director),{" "}
              <strong>Jeevan K</strong> (COO &amp; Director), and{" "}
              <strong>Deekshith H R</strong> (CFO &amp; Director), who work together
              to drive the company's strategy, growth, and innovation.
            </p>
            <p className="story-p">
              Combining technical expertise, operational excellence, and business
              leadership, the founding team is dedicated to building a trusted
              technology partner that empowers organizations to embrace digital
              transformation and achieve sustainable success.
            </p>
            <p className="story-p">
              Charvex Global LLP was officially incorporated on{" "}
              <strong>17 March 2026</strong> under the Ministry of Corporate
              Affairs, Government of India, with LLP Identification Number{" "}
              <strong>ACW-4414</strong>. Registered in Bengaluru, Karnataka, the
              company operates as a legally recognized Limited Liability
              Partnership.
            </p>
            <p className="story-p story-p-last">
              The incorporation of Charvex marked an important milestone in its
              journey, transforming a growing venture into a structured organization
              positioned for scalable growth, strategic partnerships, and lasting
              impact within the technology and digital services ecosystem.
            </p>
          </div>
          <div className="story-card" data-aos="fade-up" data-aos-delay="150">
            <span className="story-card-mark">"</span>
            <p className="story-quote">
              We'd rather stay small enough to know every client by name than grow
              past the point where that's possible.
            </p>
            <span className="story-quote-attr">— Founding principle, Charvex Global LLP</span>
          </div>
        </div>
      </section>

      <section className="vm-section">
        <div className="sec-head" data-aos="fade-up">
          <h2 className="sec-title">Vision &amp; Mission</h2>
        </div>
        <div className="vm-grid">
          <div className="vm-card" data-aos="fade-up">
            <span className="vm-tag">Vision</span>
            <p className="vm-card-body">
              To become a trusted technology partner recognized for delivering
              world-class digital solutions, building innovative products, and
              driving meaningful transformation across industries. We aspire to
              create lasting impact through technology, empower businesses to thrive
              in a rapidly evolving digital world, and contribute to the development
              of future technology professionals.
            </p>
            <ul className="vm-list">
              {visionPoints.map((p) => (
                <li key={p}><Icon name="check" /><span>{p}</span></li>
              ))}
            </ul>
          </div>
          <div className="vm-card" data-aos="fade-up" data-aos-delay="150">
            <span className="vm-tag">Mission</span>
            <p className="vm-card-body">
              To deliver innovative technology solutions and build impactful digital
              products that help businesses achieve sustainable growth, operational
              excellence, and digital transformation. Through our expertise in
              consulting, engineering, and innovation, we are committed to creating
              long-term value for clients while fostering a culture of continuous
              learning and professional development.
            </p>
            <ul className="vm-list">
              {missionPoints.map((p) => (
                <li key={p}><Icon name="check" /><span>{p}</span></li>
              ))}
            </ul>
          </div>
        </div>
      </section>

     
      <section className="values-section">
        <div className="sec-head" data-aos="fade-up">
          <h2 className="sec-title">Core Values</h2>
        </div>
        <div className="values-grid">
          {values.map((v, i) => (
            <div className="value-card" key={v.title} data-aos="fade-up" data-aos-delay={i * 90}>
              <div className="value-icon"><Icon name={v.icon} /></div>
              <h3 className="value-title">{v.title}</h3>
              <p className="value-body">{v.body}</p>
            </div>
          ))}
        </div>
      </section>

     
      <section className="spine-section">
        <div className="sec-head" data-aos="fade-up">
          <h2 className="sec-title">Timeline</h2>
          <p className="sec-sub">From first client to registered entity — the milestones that got us here.</p>
        </div>
        <div className="spine-track">
          {timeline.map((t, i) => (
            <div className={`spine-item spine-${t.status}`} key={t.title} data-aos="fade-up" data-aos-delay={i * 120}>
              <div className="spine-node" />
              <div className="spine-content">
                <span className="spine-tag">{t.tag}</span>
                <h3 className="spine-title">{t.title}</h3>
                <p className="spine-body">{t.body}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      
      <section className="leadership-section">
        <div className="sec-head" data-aos="fade-up">
          <h2 className="sec-title">Leadership Team</h2>
        </div>
        <div className="leadership-grid">
          {leaders.map(({ name, role, image, delay, email, linkedin }) => (
            <div className="leader-card" key={name} data-aos="fade-up" data-aos-delay={delay}>
              <div className="leader-image">
                <img src={image} alt={name} />
              </div>
              <h3 className="leader-name">{name}</h3>
              <span className="leader-role">{role}</span>
              <div className="leader-contacts">
                <a href={`mailto:${email}`} className="leader-icon-btn" aria-label={`Email ${name}`} title={email}>
                  <MailIcon fontSize="small" />
                </a>
                {linkedin && (
                  <a href={linkedin} target="_blank" rel="noopener noreferrer" className="leader-icon-btn" aria-label={`${name} on LinkedIn`} title="LinkedIn">
                    <LinkedInIcon fontSize="small" />
                  </a>
                )}
              </div>
            </div>
          ))}
        </div>
      </section>

      
      <section className="global-section">
        <div className="global-visual" data-aos="zoom-in">
          <GlobeSVG />
        </div>
        <div className="global-copy" data-aos="fade-up" data-aos-delay="150">
          <span className="section-eyebrow">Global Reach</span>
          <h2 className="global-sub">Global Presence, Local Expertise</h2>
          <p className="global-body">
            With a distributed team and a growing network of partners, we deliver
            world-class solutions tailored to local market needs — without losing the
            responsiveness of a founder-led company.
          </p>
          <div className="global-features">
            {globalFeatures.map((f, i) => (
              <div className="gf-row" key={f.title} data-aos="fade-up" data-aos-delay={i * 100}>
                <div className="gf-icon"><Icon name={f.icon} /></div>
                <div className="gf-text">
                  <h4 className="gf-title">{f.title}</h4>
                  <p className="gf-body">{f.body}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      
      <section className="why-section">
        <div className="sec-head" data-aos="fade-up">
          <h2 className="sec-title">Why Choose Charvex</h2>
        </div>
        <div className="why-grid">
          {whyChoose.map((w, i) => (
            <div className="why-row" key={w.title} data-aos="fade-up" data-aos-delay={i * 100}>
              <div className="why-icon"><Icon name={w.icon} /></div>
              <div>
                <h4 className="why-title">{w.title}</h4>
                <p className="why-body">{w.body}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

     
      <section className="spine-section roadmap-section">
        <div className="sec-head" data-aos="fade-up">
          <h2 className="sec-title">Future Roadmap</h2>
          <p className="sec-sub">The timeline above doesn't stop at "now" — here's where it's headed.</p>
        </div>
        <div className="spine-track spine-track-future">
          {roadmap.map((r, i) => (
            <div className="spine-item spine-future" key={r.title} data-aos="fade-up" data-aos-delay={i * 120}>
              <div className="spine-node" />
              <div className="spine-content">
                <span className="spine-tag">{r.tag}</span>
                <h3 className="spine-title">{r.title}</h3>
                <p className="spine-body">{r.body}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

     
      <section className="abcta-section">
        <div className="abcta-content">
          <h2>Ready to Transform Your Business?</h2>
          <p>
            Let's discuss how Charvex Global LLP can help you
            achieve your technology goals.
          </p>

          <button className="abcta-btn" onClick={() => navigate("/contact")}>
            Start Your Journey →
          </button>
        </div>
      </section>

      <Footer />
    </>
  );
};

export default AboutSection;