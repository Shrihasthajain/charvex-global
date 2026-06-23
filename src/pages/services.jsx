import React, { useEffect } from "react";
import "./services.css";
import Header from "../components/header";
import Footer from "../components/footer";
import AOS from "aos";
import "aos/dist/aos.css";
import TaskAltIcon from "@mui/icons-material/TaskAlt";
import LanguageIcon from "@mui/icons-material/Language";
import BusinessCenterIcon from "@mui/icons-material/BusinessCenter";
import PsychologyIcon from "@mui/icons-material/Psychology";
import BrushIcon from "@mui/icons-material/Brush";
import AnalyticsIcon from "@mui/icons-material/Analytics";
import SettingsSuggestIcon from "@mui/icons-material/SettingsSuggest";

function Services() {

  useEffect(() => {
    AOS.init({
      duration: 1200,
      once: true,
    });
  }, []);

  const services = [
  {
    icon: <LanguageIcon />,
    title: "Web Development",
    description:
      "Modern, scalable web applications built with cutting-edge technologies.",
    points: [
      "React & Next.js applications",
      "Responsive design",
      "Performance optimization",
      "SEO-friendly architecture",
      "Progressive web apps"
    ]
  },
  {
    icon: <BusinessCenterIcon />,
    title: "ERP Systems",
    description:
      "Enterprise resource planning solutions for streamlined operations.",
    points: [
      "System implementation",
      "Process optimization",
      "Data migration",
      "Custom integrations",
      "Training & support"
    ]
  },
  {
    icon: <PsychologyIcon />,
    title: "Machine Learning",
    description:
      "Data-driven algorithms that enable systems to predict outcomes and continuously improve performance.",
    points: [
      "Predictive analytics",
      "Recommendation systems",
      "Behavioral analysis",
      "Automation & optimization",
      "Scalable ML pipelines"
    ]
  },
  {
    icon: <BrushIcon />,
    title: "UI/UX Design & Branding",
    description:
      "Design-led innovation that enhances engagement and reflects your brand identity.",
    points: [
      "User research & wireframing",
      "Prototyping & testing",
      "Product branding",
      "Design systems",
      "Accessibility & responsiveness"
    ]
  },
  {
    icon: <AnalyticsIcon />,
    title: "AI & Data Science",
    description:
      "Intelligent solutions powered by machine learning and advanced analytics.",
    points: [
      "Machine learning models",
      "Predictive analytics",
      "Natural language processing",
      "Computer vision solutions",
      "Data-driven insights"
    ]
  },
  {
    icon: <SettingsSuggestIcon />,
    title: "Automation & DevOps",
    description:
      "Streamlined development pipelines and automated workflows for faster delivery.",
    points: [
      "CI/CD pipelines",
      "Docker & Kubernetes",
      "Workflow automation",
      "Infrastructure as Code",
      "Monitoring & observability"
    ]
  }
];

  return (
    <>
      <Header />

      <section className="services-section">
        <div className="services-heading">
          <div className="services-bg-shape shape1"></div>
          <div className="services-bg-shape shape2"></div>

          <h1>
            Our <span className="orange-text">Services</span>
          </h1>

          <p>
           Charvex Global offers innovative, end-to-end technology solutions 
           crafted to accelerate digital transformation and empower businesses to achieve sustainable growth. 
           We collaborate with organizations worldwide to deliver tailored, scalable,
            and impactful solutions that enhance productivity and drive measurable results.
          </p>

          <p className="hero-second-para">
           Our team of seasoned professionals combines deep industry expertise with 
           advanced technologies to design solutions that perfectly align with each
            client’s unique needs. From strategic consulting and software development to AI,
             cloud computing, and automation,
            we help businesses stay ahead in a rapidly evolving digital landscape.
          </p>

          <div className="services-divider"></div>

        </div>

<div className="services-list">

  {services.map((service, index) => (

    <div
      key={index}
      className={`service-row ${index % 2 !== 0 ? "reverse" : ""}`}
      data-aos="fade-up"
    >

      <div className="service-content">

        <div className="service-title">

          <div className="service-icon-box">
            {service.icon}
          </div>

          <h2>{service.title}</h2>

        </div>

        <p className="service-desc">
          {service.title === "Web Development" &&
            "Modern, scalable web applications built with cutting-edge technologies."}

          {service.title === "ERP Systems" &&
            "Enterprise resource planning solutions for streamlined operations."}

          {service.title === "Machine Learning" &&
            "Data-driven algorithms that enable systems to predict outcomes and continuously improve performance."}

          {service.title === "UI/UX Design & Branding" &&
            "Design-led innovation that enhances engagement and reflects your brand identity."}

          {service.title === "AI & Data Science" &&
            "Intelligent solutions powered by machine learning and advanced analytics."}

          {service.title === "Automation & DevOps" &&
            "Streamlined development pipelines and automated workflows for faster delivery."}
        </p>

          <ul className="service-points">
              {service.points.map((point, i) => (
              <li
              key={i}
              className="service-point"
              data-aos="fade-up"
              data-aos-delay={i * 100}
            >
              <span className="point-check">
              <TaskAltIcon />
            </span>
                  {point}
                </li>
              ))}
            </ul>

      </div>

      <div className="service-image-card">
        <div className="bg-shape bg1"></div>
        <div className="bg-shape bg2"></div>
        <div className="service-image-content">

          <div className="big-icon">
            {service.icon}
          </div>

          <h3>{service.title}</h3>

        </div>

      </div>

    </div>

  ))}

</div>

      </section>

  <section className="scta-wrapper">
  <div className="scta-section">
    <div className="scta-content">
      <h2>Ready to Transform Your Business?</h2>

      <p>
        Let's discuss how Charvex Global LLP can help you
        achieve your technology goals.
      </p>

      <button className="scta-btn">
        Start Your Journey →
      </button>
    </div>
  </div>
</section>

      <Footer />
    </>
  );
}

export default Services;