import React, { useEffect } from "react";
import "./contact.css";
import Header from "../components/header";
import Footer from "../components/footer";
import AOS from "aos";
import "aos/dist/aos.css";
import EmailIcon from "@mui/icons-material/Email";
import PhoneIcon from "@mui/icons-material/Phone";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import InstagramIcon from "@mui/icons-material/Instagram";
import MailIcon from "@mui/icons-material/Mail";

function Contact() {

  useEffect(() => {
    AOS.init({
      duration: 1200,
      once: true,
    });
  }, []);

  return (
    <>
      <Header />
     <section className="contact-section">
          <div className="contact-heading">

        <h1>Get In <span className="orange-text">Touch</span></h1>
        <p>
          Have a question or ready to start your digital
          transformation? We'd love to hear from you.
        </p>
        <div className="contact-divider"></div>
        
      </div>
      </section>

      <section className="contact-sec">
        <div className="contact-container">
          <div
            className="contact-info"
            data-aos="fade-right">

            <div className="info-card">
              <EmailIcon className="contact-icon" />
              <h3>Email</h3>
              <p>info@charvexglobal.com</p>
              <p>hr@charvexglobal.com</p>
            </div>

            <div className="info-card">
              <PhoneIcon className="contact-icon" />
              <h3>Phone / WhatsApp</h3>
              <p>CEO: +91 63634 85061</p>
              <p>Company: +91 94823 50233</p>
            </div>

            <div className="info-card">
              <LocationOnIcon className="contact-icon" />
              <h3>Office</h3>
              <p>Charvex Global LLP<br />2GPX+9H3, 15th A Cross
                <br />
                Near JP Park Backgate,
                BNS Layout
                <br />
                Mathikere, Yeswanthpur
                <br />
                Bengaluru, Karnataka 560054
              </p>
            </div>

          </div>

          <div
            className="contact-form-card"
            data-aos="fade-right">
            <h2>Send an Enquiry</h2>
            <form>
              <input
                type="text"
                placeholder="Full Name"
              />

              <input
                type="email"
                placeholder="Email"
              />

              <input
                type="text"
                placeholder="Phone Number"
              />

              <input
                type="text"
                placeholder="Company (Optional)"
              />

              <textarea
                rows="6"
                placeholder="Your Message"
              ></textarea>

              <button type="submit">
                Send Enquiry
              </button>
            </form>
          </div>
        </div>

        <div
          className="social-section"
          data-aos="zoom-in">
          <a
                        href="https://www.linkedin.com/company/charvex"
                        target="_blank"
                        rel="noopener noreferrer"
                        aria-label="LinkedIn"
                      >
                        <LinkedInIcon />
                      </a>
                      <a
                        href="https://www.instagram.com/charvexglobal"
                        target="_blank"
                        rel="noopener noreferrer"
                        aria-label="Instagram"
                      >
                        <InstagramIcon />
                      </a>
                      <a href="mailto:info@charvexglobal.com" aria-label="Email">
                        <MailIcon />
                      </a>
          <a href="tel:+919482350233"><PhoneIcon /></a>
        </div>
      </section>
      <Footer />
    </>
  );
}

export default Contact;