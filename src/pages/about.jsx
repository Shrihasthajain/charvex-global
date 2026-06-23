// import React, { useEffect } from "react";
// import "./about.css";
// import AOS from "aos";
// import "aos/dist/aos.css";
// import Header from "../components/header";
// import Footer from "../components/footer";

// const AboutSection = () => {
//   useEffect(() => {
//     AOS.init({ duration: 1000, once: true });
//   }, []);

//   return (
//     <>
//       <Header />

//       <section className="about-wrapper">

//         <div className="about-inner">

//           {/* CENTER HEADING */}
//           <h1 className="title" data-aos="fade-up">
//             About <span className="orange-text">Charvex Global LLP</span>
//           </h1>

//           <p className="text" data-aos="fade-up">
//             Charvex Global LLP is a forward-thinking IT consulting and technology services company committed to helping businesses achieve digital excellence. We specialize in delivering custom software development, cloud solutions, and strategic technology consulting designed to accelerate growth, enhance efficiency, and empower innovation.
//           </p>

//         <p className="text" data-aos="fade-up">
//             Established on 2 May 2025, Charvex was built on a shared vision of creating impactful technology solutions and delivering long-term value to businesses. Today, the company is led by{" "}
//             <span className="bold-name">Theja Suryachar P J</span> (Founder & Director),{" "}
//             <span className="bold-name">Mohammed Ahazar</span> (CEO & Director),{" "}
//             <span className="bold-name">Jeevan K</span> (COO & Director),{" "}
//             <span className="bold-name">Deekshith H R</span> (CFO & Director), who work together to drive the company's strategy, growth, and innovation.
//         </p>
//           <p className="text" data-aos="fade-up">
//             Combining technical expertise, operational excellence, and business leadership, the founding team is dedicated to building a trusted technology partner that empowers organizations to embrace digital transformation and achieve sustainable success.
//           </p>

//           <p className="text" data-aos="fade-up">
//             Charvex Global LLP was officially incorporated on 17 March 2026 under the Ministry of Corporate Affairs, Government of India, with LLP Identification Number ACW-4414. Registered in Bengaluru, Karnataka, the company operates as a legally recognized Limited Liability Partnership.
//           </p>

//           <p className="text" data-aos="fade-up">
//             The incorporation of Charvex marked an important milestone in its journey, transforming a growing venture into a structured organization positioned for scalable growth, strategic partnerships, and lasting impact within the technology and digital services ecosystem.
//           </p>

//        <div className="about-divider"></div>
//           {/* BUTTONS CENTER */}
//           <div className="btn-section" data-aos="zoom-in">

//             <div className="btn-row">
//               <button className="btn outline">View Company Profile</button>
//               <button className="btn outline">View Incorporation Certificate</button>
//             </div>

//             <div className="btn-center">
//               <button className="btn outline">
//                 See Our Visionary Journey →
//               </button>
//             </div>

//           </div>

//         </div>
//       </section>


//         <section className="vision-mission-section">

//   <div className="vision-mission-header" data-aos="fade-up">
//     <h2>
//       Our <span className="orange-text">Vision & Mission</span>
//     </h2>
//     <div className="section-line"></div>
//   </div>

//   <div className="vision-mission-grid">

//     {/* Vision */}
//     <div className="vision-box" data-aos="fade-right">

//       <h3>Our Vision</h3>

//       <p>
//         To become a trusted technology partner recognized for delivering
//         world-class digital solutions, building innovative products, and
//         driving meaningful transformation across industries. We aspire to
//         create lasting impact through technology, empower businesses to thrive
//         in a rapidly evolving digital world, and contribute to the development
//         of future technology professionals.
//       </p>

//       <ul>
//         <li>Trusted Partner for Digital Transformation</li>
//         <li>Innovation-Driven Product Development</li>
//         <li>Excellence in Technology and Consulting Services</li>
//         <li>Creating Sustainable Value for Businesses</li>
//         <li>Empowering the Next Generation of Technology Professionals</li>
//       </ul>

//     </div>

//     {/* Mission */}
//     <div className="mission-box" data-aos="fade-left">

//       <h3>Our Mission</h3>

//       <p>
//         To deliver innovative technology solutions and build impactful digital
//         products that help businesses achieve sustainable growth, operational
//         excellence, and digital transformation. Through our expertise in
//         consulting, engineering, and innovation, we are committed to creating
//         long-term value for clients while fostering a culture of continuous
//         learning and professional development.
//       </p>

//       <ul>
//         <li>Delivering Technology That Creates Business Impact</li>
//         <li>Building Scalable and Future-Ready Digital Products</li>
//         <li>Driving Innovation Through Engineering Excellence</li>
//         <li>Creating Long-Term Value Through Trusted Partnerships</li>
//         <li>Developing Industry-Ready Technology Talent</li>
//       </ul>

//     </div>

//   </div>

// </section>



// <section className="leadership-section">

//   <div className="leadership-header" data-aos="fade-up">
//     <h2>
//       Our <span className="orange-text">Leadership Team</span>
//     </h2>

//     <p>
//       Experienced professionals dedicated to your success
//     </p>

//     <div className="section-line"></div>
//   </div>

//   <div className="leadership-grid">

//     <div className="leader-card" data-aos="fade-up">
//       <h3>Theja Suryachar P J</h3>
//       <span>Founder & Director</span>
//     </div>

//     <div className="leader-card" data-aos="fade-up" data-aos-delay="100">
//       <h3>Mohammed Ahazar</h3>
//       <span>CEO & Director</span>
//     </div>

//     <div className="leader-card" data-aos="fade-up" data-aos-delay="200">
//       <h3>Deekshith H R</h3>
//       <span>CFO & Director</span>
//     </div>

//     <div className="leader-card" data-aos="fade-up" data-aos-delay="300">
//       <h3>Jeevan K</h3>
//       <span>COO & Director</span>
//     </div>

//   </div>

// </section>


// <section className="global-section">

//   <div className="global-left" data-aos="fade-right">

//     <div className="global-icon">🌍</div>

//     <h2>
//       Global <span className="orange-text">Reach</span>
//     </h2>

//     <h3>Global Presence, Local Expertise</h3>

//     <p>
//       With a distributed team and global network of partners, we deliver
//       world-class solutions tailored to your local market needs.
//     </p>

//   </div>

//   <div className="global-right">

//     <div
//       className="global-feature"
//       data-aos="fade-up"
//       data-aos-delay="100"
//     >
//       <div className="feature-icon">🚀</div>
//       <div>
//         <h4>Innovation Hub</h4>
//         <p>
//           Cutting-edge technology and forward-thinking solutions
//         </p>
//       </div>
//     </div>

//     <div
//       className="global-feature"
//       data-aos="fade-up"
//       data-aos-delay="200"
//     >
//       <div className="feature-icon">🤝</div>
//       <div>
//         <h4>Strategic Partnerships</h4>
//         <p>
//           Collaborating with industry leaders worldwide
//         </p>
//       </div>
//     </div>

//     <div
//       className="global-feature"
//       data-aos="fade-up"
//       data-aos-delay="300"
//     >
//       <div className="feature-icon">⚡</div>
//       <div>
//         <h4>24/7 Support</h4>
//         <p>
//           Round-the-clock assistance across all time zones
//         </p>
//       </div>
//     </div>

//   </div>

// </section>

//       <Footer />
//     </>
//   );
// };

// export default AboutSection;






import React, { useEffect, useRef } from "react";
import "./about.css";
import Header from "../components/header";
import Footer from "../components/footer";

const AboutSection = () => {
  const observerRef = useRef(null);

  useEffect(() => {
    const elements = document.querySelectorAll(".reveal");
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("revealed");
          }
        });
      },
      { threshold: 0.12 }
    );
    elements.forEach((el) => observer.observe(el));
    observerRef.current = observer;
    return () => observer.disconnect();
  }, []);

  return (
    <>
      <Header />

      {/* ── HERO ABOUT ── */}
      <section className="about-hero">
        <div className="about-hero-inner">
          <p className="about-eyebrow reveal">Who We Are</p>
          <h1 className="about-hero-title reveal">
            About <span className="accent">Charvex Global LLP</span>
          </h1>

          <div className="about-hero-body">
            <p className="about-hero-lead reveal">
              Charvex Global LLP is a forward-thinking IT consulting and
              technology services company committed to helping businesses achieve
              digital excellence. We specialize in delivering custom software
              development, cloud solutions, and strategic technology consulting
              designed to accelerate growth, enhance efficiency, and empower
              innovation.
            </p>

            <p className="about-hero-text reveal">
              Established on 2 May 2025, Charvex was built on a shared vision of
              creating impactful technology solutions and delivering long-term
              value to businesses. Today, the company is led by{" "}
              <strong>Theja Suryachar P J</strong> (Founder &amp; Director),{" "}
              <strong>Mohammed Ahazar</strong> (CEO &amp; Director),{" "}
              <strong>Jeevan K</strong> (COO &amp; Director),{" "}
              <strong>Deekshith H R</strong> (CFO &amp; Director), who work
              together to drive the company's strategy, growth, and innovation.
            </p>

            <p className="about-hero-text reveal">
              Combining technical expertise, operational excellence, and business
              leadership, the founding team is dedicated to building a trusted
              technology partner that empowers organizations to embrace digital
              transformation and achieve sustainable success.
            </p>

            <p className="about-hero-text reveal">
              Charvex Global LLP was officially incorporated on 17 March 2026
              under the Ministry of Corporate Affairs, Government of India, with
              LLP Identification Number ACW-4414. Registered in Bengaluru,
              Karnataka, the company operates as a legally recognized Limited
              Liability Partnership.
            </p>

            <p className="about-hero-text reveal">
              The incorporation of Charvex marked an important milestone in its
              journey, transforming a growing venture into a structured
              organization positioned for scalable growth, strategic
              partnerships, and lasting impact within the technology and digital
              services ecosystem.
            </p>
          </div>

          <div className="about-hero-actions reveal">
            <button className="btn-ghost">View Company Profile</button>
            <button className="btn-ghost">View Incorporation Certificate</button>
            <button className="btn-primary">
              See Our Visionary Journey <span className="btn-arrow">→</span>
            </button>
          </div>
        </div>
      </section>

      {/* ── VISION & MISSION ── */}
      <section className="vm-section">
        <div className="section-header reveal">
          <p className="section-eyebrow">What Drives Us</p>
          <h2 className="section-title">
            Our <span className="accent">Vision &amp; Mission</span>
          </h2>
          <div className="title-bar"></div>
        </div>

        <div className="vm-grid">
          <div className="vm-card reveal">
            <div className="vm-card-tag">Vision</div>
            <h3 className="vm-card-title">Our Vision</h3>
            <p className="vm-card-body">
              To become a trusted technology partner recognized for delivering
              world-class digital solutions, building innovative products, and
              driving meaningful transformation across industries. We aspire to
              create lasting impact through technology, empower businesses to
              thrive in a rapidly evolving digital world, and contribute to the
              development of future technology professionals.
            </p>
            <ul className="vm-list">
              <li>Trusted Partner for Digital Transformation</li>
              <li>Innovation-Driven Product Development</li>
              <li>Excellence in Technology and Consulting Services</li>
              <li>Creating Sustainable Value for Businesses</li>
              <li>Empowering the Next Generation of Technology Professionals</li>
            </ul>
          </div>

          <div className="vm-card reveal" style={{ animationDelay: "0.15s" }}>
            <div className="vm-card-tag">Mission</div>
            <h3 className="vm-card-title">Our Mission</h3>
            <p className="vm-card-body">
              To deliver innovative technology solutions and build impactful
              digital products that help businesses achieve sustainable growth,
              operational excellence, and digital transformation. Through our
              expertise in consulting, engineering, and innovation, we are
              committed to creating long-term value for clients while fostering a
              culture of continuous learning and professional development.
            </p>
            <ul className="vm-list">
              <li>Delivering Technology That Creates Business Impact</li>
              <li>Building Scalable and Future-Ready Digital Products</li>
              <li>Driving Innovation Through Engineering Excellence</li>
              <li>Creating Long-Term Value Through Trusted Partnerships</li>
              <li>Developing Industry-Ready Technology Talent</li>
            </ul>
          </div>
        </div>
      </section>

      {/* ── LEADERSHIP ── */}
      <section className="leadership-section">
        <div className="section-header reveal">
          <p className="section-eyebrow">The People Behind It</p>
          <h2 className="section-title">
            Our <span className="accent">Leadership Team</span>
          </h2>
          <p className="section-sub">
            Experienced professionals dedicated to your success
          </p>
          <div className="title-bar"></div>
        </div>

        <div className="leadership-grid">
          {[
            { name: "Theja Suryachar P J", role: "Founder & Director", delay: "0s" },
            { name: "Mohammed Ahazar", role: "CEO & Director", delay: "0.1s" },
            { name: "Deekshith H R", role: "CFO & Director", delay: "0.2s" },
            { name: "Jeevan K", role: "COO & Director", delay: "0.3s" },
          ].map(({ name, role, delay }) => (
            <div
              className="leader-card reveal"
              key={name}
              style={{ animationDelay: delay }}
            >
              <div className="leader-avatar">
                {name
                  .split(" ")
                  .slice(0, 2)
                  .map((w) => w[0])
                  .join("")}
              </div>
              <h3 className="leader-name">{name}</h3>
              <span className="leader-role">{role}</span>
            </div>
          ))}
        </div>
      </section>

      {/* ── GLOBAL REACH ── */}
      <section className="global-section">
        <div className="global-left reveal">
          <div className="global-globe">🌍</div>
          <p className="section-eyebrow">Where We Operate</p>
          <h2 className="global-title">
            Global <span className="accent">Reach</span>
          </h2>
          <h3 className="global-sub">Global Presence, Local Expertise</h3>
          <p className="global-body">
            With a distributed team and global network of partners, we deliver
            world-class solutions tailored to your local market needs.
          </p>
        </div>

        <div className="global-right">
          {[
            {
              icon: "🚀",
              title: "Innovation Hub",
              body: "Cutting-edge technology and forward-thinking solutions",
              delay: "0.1s",
            },
            {
              icon: "🤝",
              title: "Strategic Partnerships",
              body: "Collaborating with industry leaders worldwide",
              delay: "0.2s",
            },
            {
              icon: "⚡",
              title: "24/7 Support",
              body: "Round-the-clock assistance across all time zones",
              delay: "0.3s",
            },
          ].map(({ icon, title, body, delay }) => (
            <div
              className="global-feature reveal"
              key={title}
              style={{ animationDelay: delay }}
            >
              <div className="feature-icon">{icon}</div>
              <div className="feature-text">
                <h4 className="feature-title">{title}</h4>
                <p className="feature-body">{body}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      <Footer />
    </>
  );
};

export default AboutSection;