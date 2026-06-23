import React, { useEffect } from "react";
import "./Home.css";
import AOS from "aos";
import "aos/dist/aos.css";
import Header from "../components/header";
import Footer from "../components/footer";
import { TypeAnimation } from "react-type-animation";
import LanguageIcon from "@mui/icons-material/Language";
import BusinessCenterIcon from "@mui/icons-material/BusinessCenter";
import PsychologyIcon from "@mui/icons-material/Psychology";
import BrushIcon from "@mui/icons-material/Brush";
import AutoGraphIcon from "@mui/icons-material/AutoGraph";
import SettingsSuggestIcon from "@mui/icons-material/SettingsSuggest";
import FormatQuoteIcon from "@mui/icons-material/FormatQuote";
import { useNavigate } from "react-router-dom";

function Home() {
  useEffect(() => {
    AOS.init({
      duration: 1200,
      once: true,
    });
  }, []);

  const navigate = useNavigate();

  return (
    <>
    <Header/>
    <section className="hero-section">
      <div className="hero-container">

        <div
          className="hero-content"
          data-aos="fade-up"
        >
         <h1 className="hero-title">
          <span className="black-text">
            Transform Your Business
            <br />
            with{" "} 
          </span>

          <span className="orange-text">
            Enterprise
          </span>

          <br />

          <span className="orange-text">
            Technology.
          </span>
         </h1>

          <div className="typing-wrapper">
            <TypeAnimation
              sequence={[
                "Charvex Global delivers cutting-edge IT consulting, AI-powered solutions, and enterprise infrastructure to drive your digital transformation.",
                2000,
              ]}
              speed={65}
              cursor={true}
              repeat={0}
            />
          </div>

          <div
            className="hero-buttons"
            data-aos="zoom-in"
            data-aos-delay="300"
          >
            <button className="orange-btn" onClick={() => navigate("/contact")}>
              Get Started →
            </button>

            <button className="white-btn" onClick={() => navigate("/services")}>
              Explore Services
            </button>

            <button className="orange-btn">
              Our Visionary Journey →
            </button>
          </div>
        </div>

      </div>
    </section>

   <section className="about-company-section">
  <div className="about-cards">

    <div
      className="about-card"
      data-aos="fade-up"
      data-aos-delay="100"
    >
      <div className="card-accent"></div>

      <h3>Who We Are</h3>

    <p>
      Charvex Global LLP is a next-generation technology company
      focused on building digital ecosystems powered by AI,
      cloud, and intelligent design.
    </p>
    </div>

    <div
      className="about-card"
      data-aos="fade-up"
      data-aos-delay="250"
    >
      <div className="card-accent"></div>

      <h3>Why We Exist</h3>

      <p>
       We exist to help businesses achieve clarity and
       control through innovative technology solutions
       that transform challenges into opportunities.

      </p>
    </div>

    <div
      className="about-card"
      data-aos="fade-up"
      data-aos-delay="400"
    >
      <div className="card-accent"></div>

      <h3>What We Do</h3>

      <p>
       From web engineering to AI & data platforms,
       we deliver end-to-end solutions that enable enterprises
       to scale, optimize, and innovate faster.
      </p>
    </div>

  </div>
</section>

<section className="home-services-section">

  <div className="services-heading">

  <span className="services-tag">
  Our <span className="tag-orange">Services</span>
  </span>

    <p>
     Empowering businesses through cutting-edge digital solutions
      — from scalable web platforms to AI, DevOps, and cybersecurity excellence.
    </p>

  </div>

  <div className="services-grid">

  <div
    className="service-card"
    data-aos="zoom-in-up"
    data-aos-delay="100"
  >
    <div className="icon-wrapper">
      <LanguageIcon className="service-icon" />
    </div>

    <h3>Web Development</h3>

    <p>
      Modern, scalable web applications built with
      cutting-edge technologies.
    </p>
  </div>

  <div
    className="service-card"
    data-aos="zoom-in-up"
    data-aos-delay="200"
  >
    <div className="icon-wrapper">
      <BusinessCenterIcon className="service-icon" />
    </div>

    <h3>ERP Systems</h3>

    <p>
      Enterprise resource planning solutions
      for streamlined operations.
    </p>
  </div>

  <div
    className="service-card"
    data-aos="zoom-in-up"
    data-aos-delay="300"
  >
    <div className="icon-wrapper">
      <PsychologyIcon className="service-icon" />
    </div>

    <h3>Machine Learning</h3>

    <p>
      Intelligent models that learn from data
      to predict, optimize, and automate processes.
    </p>
  </div>

  <div
    className="service-card"
    data-aos="zoom-in-up"
    data-aos-delay="400"
  >
    <div className="icon-wrapper">
      <BrushIcon className="service-icon" />
    </div>

    <h3>UI/UX Design & Branding</h3>

    <p>
      Design-led innovation that enhances
      engagement and reflects your brand identity.
    </p>
  </div>

  <div
    className="service-card"
    data-aos="zoom-in-up"
    data-aos-delay="500"
  >
    <div className="icon-wrapper">
      <AutoGraphIcon className="service-icon" />
    </div>

    <h3>AI & Data Science</h3>

    <p>
      Intelligent solutions powered by machine
      learning and advanced analytics.
    </p>
  </div>

  <div
    className="service-card"
    data-aos="zoom-in-up"
    data-aos-delay="600"
  >
    <div className="icon-wrapper">
      <SettingsSuggestIcon className="service-icon" />
    </div>

    <h3>Automation & DevOps</h3>

    <p>
      Streamlined development pipelines and
      automated workflows for faster delivery.
    </p>
  </div>

</div>

</section>


<div className="stats-testimonial-wrapper">

  <section className="stats-section">
    <div className="stats-grid">

      <div className="stat-card">
        <h2>25+</h2>
        <p>Projects Completed</p>
      </div>

      <div className="stat-card">
        <h2>20+</h2>
        <p>Team Members</p>
      </div>

      <div className="stat-card">
        <h2>10+</h2>
        <p>Innovations Delivered</p>
      </div>

    </div>
  </section>

  <section className="testimonial-section">

    <div className="testimonial-heading">
      <h2>What Our Clients Say</h2>
    </div>

    <div className="testimonial-slider">

      <div className="testimonial-track">

        <div className="testimonial-card">
          <FormatQuoteIcon className="quote-icon" />
          <p>"Charvex truly exceeded expectations. Their creativity and precision stand unmatched."</p>
          <h4>— Anirudh Rao</h4>
        </div>

        <div className="testimonial-card">
          <FormatQuoteIcon className="quote-icon" />
          <p>The process was smooth and results were beyond what we imagined.</p>
          <h4>— Sanjana Hegde</h4>
        </div>

        <div className="testimonial-card">
          <FormatQuoteIcon className="quote-icon" />
          <p>Fantastic experience! They delivered on time and understood our vision perfectly.</p>
          <h4>— Karthik Shetty</h4>
        </div>

        <div className="testimonial-card">
          <FormatQuoteIcon className="quote-icon" />
          <p>Charvex brings energy and innovation to every project. Highly recommended.</p>
          <h4>— Aishwarya Kulkarni</h4>
        </div>

        <div className="testimonial-card">
          <FormatQuoteIcon className="quote-icon" />
          <p>Their design and tech blend was flawless. We’re already seeing great results.</p>
          <h4>— Rohan Patil</h4>
        </div>

        <div className="testimonial-card">
          <FormatQuoteIcon className="quote-icon" />
          <p>The professionalism and dedication are top-notch. Great communication all through.</p>
          <h4>— Nandini Iyer</h4>
        </div>

        <div className="testimonial-card">
          <FormatQuoteIcon className="quote-icon" />
          <p>Reliable, visionary, and passionate team. A pleasure working with them.</p>
          <h4>— Suresh Gowda</h4>
        </div>

        <div className="testimonial-card">
          <FormatQuoteIcon className="quote-icon" />
          <p>Impressed by their ability to merge business logic with cutting-edge technology.</p>
          <h4>— Meghana Deshpande</h4>
        </div>

        <div className="testimonial-card">
          <FormatQuoteIcon className="quote-icon" />
          <p>Charvex truly exceeded expectations. Their creativity and precision stand unmatched.</p>
          <h4>— Anirudh Rao</h4>
        </div>

        <div className="testimonial-card">
          <FormatQuoteIcon className="quote-icon" />
          <p>The process was smooth and results were beyond what we imagined.</p>
          <h4>— Sanjana Hegde</h4>
        </div>

      </div>

    </div>

  </section>

  <section className="hcta-section">
    <div className="hcta-content">
      <h2>Ready to Transform Your Business?</h2>
      <p>
        Let's discuss how Charvex Global LLP can help you
        achieve your technology goals.
      </p>

      <button className="hcta-btn">
        Start Your Journey →
      </button>
    </div>
  </section>

</div>
    <Footer/>
    </>
  );
}

export default Home;