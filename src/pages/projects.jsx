import React, { useEffect, useState } from "react";
import "./projects.css";
import Header from "../components/header";
import Footer from "../components/footer";
import AOS from "aos";
import "aos/dist/aos.css";
import { useNavigate } from "react-router-dom";

const PROJECTS = [
  {
    category: "Cloud Infrastructure",
    name: "Nexar Cloud",
    desc: "Enterprise cloud platform with advanced analytics and real-time monitoring capabilities.",
    stack: ["AWS", "React", "Node.js", "PostgreSQL"],
    impact: "40% reduction in infrastructure costs",
  },
  {
    category: "AI & Machine Learning",
    name: "VistaAI",
    desc: "Intelligent data analysis platform powered by machine learning algorithms.",
    stack: ["Python", "TensorFlow", "React", "FastAPI"],
    impact: "95% accuracy in predictions",
  },
  {
    category: "Web Development",
    name: "Omnify Web",
    desc: "High-performance e-commerce platform with seamless user experience.",
    stack: ["Next.js", "TypeScript", "Stripe", "Vercel"],
    impact: "3x increase in conversion rate",
  },
  {
    category: "Business Intelligence",
    name: "DataPulse",
    desc: "Real-time business intelligence dashboard for data-driven decision making.",
    stack: ["React", "D3.js", "Node.js", "MongoDB"],
    impact: "50% faster insights generation",
  },
  {
    category: "Enterprise Resource Planning",
    name: "Syntra ERP",
    desc: "Integrated ERP system streamlining operations across finance, HR, and supply chain for mid-sized enterprises.",
    stack: ["React", "Spring Boot", "PostgreSQL", "Docker"],
    impact: "60% boost in operational efficiency",
  },
  {
    category: "AI Automation",
    name: "InnovaX",
    desc: "Intelligent process automation suite leveraging AI bots and NLP to optimize repetitive workflows.",
    stack: ["Python", "OpenAI API", "FastAPI", "Redis"],
    impact: "70% reduction in manual processing time",
  },
  {
    category: "Customer Experience",
    name: "AuraCX",
    desc: "Omnichannel customer engagement platform offering personalization through data-driven insights.",
    stack: ["Next.js", "Node.js", "GraphQL", "AWS Lambda"],
    impact: "2.5x increase in customer retention",
  },
  {
    category: "Financial Analytics",
    name: "FinEdge",
    desc: "Predictive finance analytics engine for real-time budget forecasting and anomaly detection.",
    stack: ["Python", "Pandas", "Power BI", "Azure"],
    impact: "30% improvement in forecast accuracy",
  },
  {
    category: "Computer Vision",
    name: "VisionFlow",
    desc: "AI-powered image recognition platform designed for retail analytics and quality inspection.",
    stack: ["PyTorch", "React", "Flask", "TensorFlow"],
    impact: "85% reduction in defect identification time",
  },
  {
    category: "Data Engineering",
    name: "Corelytics",
    desc: "Data pipeline architecture enabling scalable data ingestion and transformation for big data analytics.",
    stack: ["Apache Kafka", "Snowflake", "Python", "Airflow"],
    impact: "5x data processing speed",
  },
  {
    category: "Healthcare Tech",
    name: "PulseTrack",
    desc: "Patient monitoring platform integrating IoT devices and real-time data analytics for hospitals.",
    stack: ["React Native", "Node.js", "IoT Core", "MongoDB"],
    impact: "40% improvement in patient response time",
  },
  {
    category: "Sustainability & ESG",
    name: "EcoSphere",
    desc: "Analytics-driven ESG reporting solution helping enterprises measure and reduce carbon footprint.",
    stack: ["Django", "React", "Tableau", "AWS"],
    impact: "25% reduction in energy consumption reports",
  },
  {
    category: "Business Consulting",
    name: "StratIQ",
    desc: "AI-assisted business strategy suite providing predictive insights and competitive market analysis.",
    stack: ["Python", "Streamlit", "OpenAI API", "GCP"],
    impact: "2x faster strategic decision cycles",
  },
  {
    category: "Conversational AI",
    name: "NeuraChat",
    desc: "Advanced chatbot framework integrating NLP and contextual memory for enterprise support automation.",
    stack: ["Next.js", "FastAPI", "LangChain", "Pinecone"],
    impact: "80% reduction in customer service response time",
  },
];

function Projects() {
  const total = PROJECTS.length;
  const [active, setActive] = useState(0);
  const navigate = useNavigate();

  useEffect(() => {
    AOS.init({
      duration: 1200,
      once: true,
    });
  }, []);

  const goPrev = () => setActive((i) => (i - 1 + total) % total);
  const goNext = () => setActive((i) => (i + 1) % total);

  const handleSelect = (i) => {
    setActive(i);
    const stage = document.getElementById("project-stage-top");
    if (stage) stage.scrollIntoView({ behavior: "smooth", block: "start" });
  };

  const current = PROJECTS[active];

  return (
    <>
      <Header />

      <section className="projects-section">
        <div className="projects-heading">
          <h1>
            Our Top {total} <span className="orange-text">Projects</span>
          </h1>
          <p>
            Showcase of successful projects that demonstrate our expertise
            and commitment to excellence.
          </p>
          <div className="projects-divider"></div>
        </div>
      </section>

      <section className="projects-sec">
        <div id="project-stage-top"></div>

        <div className="project-wrapper">
          <div className="carousel-container">
            <div className="carousel-track">
              <div className="carousel-card" key={active}>
                <div className="card-content-top">
                  <div className="badge-wrapper">
                    <span className="category-badge">{current.category}</span>
                  </div>
                  <h2 className="card-title">{current.name}</h2>
                  <p className="card-description">{current.desc}</p>
                </div>

                <div className="card-content-bottom">
                  <div className="tech-stack">
                    {current.stack.map((tech) => (
                      <span className="tech-tag" key={tech}>
                        {tech}
                      </span>
                    ))}
                  </div>

                  <div className="card-footer">
                    <div className="impact-metrics">
                      <p className="impact-label">Business Impact</p>
                      <p className="impact-value">{current.impact}</p>
                    </div>
                    <button
                      className="btn-external"
                      tabIndex={0}
                      aria-label="View Project Details"
                    >
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="20"
                        height="20"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        className="lucide lucide-external-link"
                      >
                        <path d="M15 3h6v6"></path>
                        <path d="M10 14 21 3"></path>
                        <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"></path>
                      </svg>
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="carousel-controls">
            <div className="pagination-dots">
              {PROJECTS.map((_, index) => (
                <button
                  key={index}
                  className={`dot${index === active ? " active" : ""}`}
                  onClick={() => handleSelect(index)}
                  aria-label={`Go to slide ${index + 1}`}
                ></button>
              ))}
            </div>

            <div className="nav-buttons">
              <button
                className="btn-nav btn-prev"
                tabIndex={0}
                onClick={goPrev}
                aria-label="Previous Project"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="20"
                  height="20"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="lucide lucide-chevron-left"
                >
                  <path d="m15 18-6-6 6-6"></path>
                </svg>
              </button>
              <button
                className="btn-nav btn-next"
                tabIndex={0}
                onClick={goNext}
                aria-label="Next Project"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="20"
                  height="20"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="lucide lucide-chevron-right"
                >
                  <path d="m9 18 6-6-6-6"></path>
                </svg>
              </button>
            </div>
          </div>

          <div className="project-counter">
            <p>
              Project {active + 1} of {total}
            </p>
          </div>
        </div>

        <div className="all-projects-head" data-aos="fade-up">
          <h2>All Projects</h2>
        </div>

        <div className="projects-grid">
          {PROJECTS.map((p, i) => (
            <button
              type="button"
              key={p.name}
              className={`project-card${i === active ? " is-active" : ""}`}
              onClick={() => handleSelect(i)}
              data-aos="fade-up"
              data-aos-delay={(i % 2) * 100}
            >
              <div className="card-top">
                <span className="card-cat-chip">{p.category}</span>
              </div>
              <h3 className="card-name">{p.name}</h3>
              <p className="card-desc">{p.desc}</p>
              <div className="card-stack">
                {p.stack.map((tech) => (
                  <span className="card-chip" key={tech}>
                    {tech}
                  </span>
                ))}
              </div>
            </button>
          ))}
        </div>
      </section>

    <section className="procta-wrapper">
      <div className="procta-section">
        <div className="procta-content">
          <h2>Ready to Transform Your Business?</h2>

          <p>
            Let's discuss how Charvex Global LLP can help you
            achieve your technology goals.
          </p>

          <button className="procta-btn" onClick={() => navigate("/contact")}>
            Start Your Journey →
          </button>
        </div>
      </div>
    </section>

      <Footer />
    </>
  );
}

export default Projects;