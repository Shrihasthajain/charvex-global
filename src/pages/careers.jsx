import React, { useEffect, useState } from "react";
import "./careers.css";
import Header from "../components/header";
import Footer from "../components/footer";
import AOS from "aos";
import "aos/dist/aos.css";
import LightbulbIcon from "@mui/icons-material/Lightbulb";
import GroupsIcon from "@mui/icons-material/Groups";
import TrendingUpIcon from "@mui/icons-material/TrendingUp";
import WorkspacePremiumIcon from "@mui/icons-material/WorkspacePremium";

function Careers() {

  const [activeTab, setActiveTab] = useState("jobs");

  useEffect(() => {
    AOS.init({
      duration: 1200,
      once: true,
    });
  }, []);

  const jobs = [
    "UI/UX Designer",
    "AI Engineer",
    "Data Scientist",
  ];

  const internships = [
    "Web Development Internship",
    "ERP Systems Internship",
    "Machine Learning Internship",
    "UI/UX Design Internship",
    "AI & Data Science Internship",
    "DevOps & Automation Internship",
    "IOT Internship / Embedded Internship",
  ];

  const [openModal, setOpenModal] = useState(false);
  const [selectedRole, setSelectedRole] = useState("");
  const [applicationType, setApplicationType] = useState("");
  const handleApply = (role, type) => {
  setSelectedRole(role);
  setApplicationType(type);
  setOpenModal(true);
};

  const closeModal = () => {
  setOpenModal(false);
};

  return (
    <>
      <Header />

<section className="career-section">
  <div className="career-heading">

  <div className="career-bg-shape shape1"></div>
  <div className="career-bg-shape shape2"></div>

  <h1>
    Join Our <span className="orange-text">Team</span>
  </h1>

  <p>
    Be part of a dynamic team of innovators and
    problem-solvers shaping the future of technology.
  </p>
  <div className="career-divider"></div>

</div>
    <div className="culture-section">
          <div className="culture-heading">
            <h2>Our Culture</h2>
            <p>
              We believe in creating an environment where
              talented individuals can thrive and make an impact.
            </p>
          </div>

          <div className="culture-grid">

            <div className="culture-card" data-aos="fade-up">
              <LightbulbIcon className="culture-icon" />
              <h3>Innovation</h3>
              <p>
                We encourage creative thinking and bold
                ideas that drive progress.
              </p>
            </div>

            <div className="culture-card" data-aos="fade-up" data-aos-delay="100">
              <GroupsIcon className="culture-icon" />
              <h3>Collaboration</h3>
              <p>
                Together we achieve more through teamwork
                and shared expertise.
              </p>
            </div>

            <div className="culture-card" data-aos="fade-up" data-aos-delay="200">
              <TrendingUpIcon className="culture-icon" />
              <h3>Growth</h3>
              <p>
                Continuous learning and professional
                development opportunities.
              </p>
            </div>

            <div className="culture-card" data-aos="fade-up" data-aos-delay="300">
              <WorkspacePremiumIcon className="culture-icon" />
              <h3>Excellence</h3>
              <p>
                We're committed to delivering the highest
                quality in everything we do.
              </p>
            </div>

          </div>

        </div>

        <div className="openings-section">
          <h2>Careers at Charvex</h2>
          <p>
            Explore job openings and internship opportunities
          </p>

          <div className="tabs">
            <button
              className={activeTab === "jobs" ? "active-tab" : ""}
              onClick={() => setActiveTab("jobs")}
            >
              Job Openings
            </button>

            <button
              className={activeTab === "internships" ? "active-tab" : ""}
              onClick={() => setActiveTab("internships")}
            >
              Internships
            </button>

            <button
              className={activeTab === "courses" ? "active-tab" : ""}
              onClick={() => setActiveTab("courses")}
            >
              Courses
            </button>

          </div>

          <div className="jobs-grid">
            {activeTab === "jobs" &&
              jobs.map((item, index) => (
                <div
                  key={index}
                  className="job-card"
                  data-aos="zoom-in"
                >
                  <h3>{item}</h3>
                  
                 <button onClick={() => handleApply(item, "job")}>Apply →</button>
                </div>
              ))}

            {activeTab === "internships" &&
              internships.map((item, index) => (
                <div
                  key={index}
                  className="job-card"
                  data-aos="zoom-in"
                >
                  <h3>{item}</h3>

                  <button onClick={() => handleApply(item, "internship")}>Apply →</button>
                </div>
              ))}

            {activeTab === "courses" && (
              <div className="coming-soon">
                Courses Coming Soon...
              </div>
            )}

          </div>

        </div>

      </section>

     {openModal && (
  <div className="apply-modal-overlay">

    <div className="apply-modal">

      <button
        className="close-modal"
        onClick={closeModal}
      >
        ✕
      </button>

      <h2>
        Apply for {selectedRole}
      </h2>

      {applicationType === "job" ? (

        <form className="apply-form">

          <input type="text" placeholder="Full Name" />
          <input type="email" placeholder="Email" />
          <input type="text" placeholder="Phone Number" />
          <input type="text" placeholder="Current Role / Status"/>
          <input type="text" placeholder="Total Experience (Years)"/>
          <input type="text" placeholder="Relevant Experience (Years)"/>
          <input type="text" placeholder="Primary Skills"/>
          <input type="text" placeholder="Tech Stack / Tools"/>
          <input type="text" placeholder="LinkedIn / GitHub / Portfolio URL" />            
          <input type="text" placeholder="Notice Period"/>
          <input type="text" placeholder="Current Location"/>

          <button
            type="submit"
            className="submit-application-btn"
          >
            Submit Application
          </button>
        </form>

      ) : (

        <form className="apply-form">

          <input type="text" placeholder="Full Name"/>

          <input type="email" placeholder="Email"/>
          <input type="text" placeholder="College / University"/>
          <input type="text" placeholder="Branch"/>
          <input type="text" placeholder="Year of Study"/>
          <input type="text" placeholder="Availability Duration"/>

          <button
            type="submit"
            className="submit-application-btn"
          >
            Submit Application
          </button>

        </form>

      )}

    </div>

  </div>
)}

 <section className="ccta-wrapper">
  <div className="ccta-section">
    <div className="ccta-content">
      <h2>Ready to Transform Your Business?</h2>

      <p>
        Let's discuss how Charvex Global LLP can help you
        achieve your technology goals.
      </p>

      <button className="ccta-btn">
        Start Your Journey →
      </button>
    </div>
  </div>
</section>

      <Footer />
    </>
  );
}

export default Careers;