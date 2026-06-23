import React from "react";
import "./footer.css";
import logo from "../assets/images/logo.png";
import PhoneIcon from "@mui/icons-material/Phone";
import EmailIcon from "@mui/icons-material/Email";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import InstagramIcon from "@mui/icons-material/Instagram";
import WhatsAppIcon from "@mui/icons-material/WhatsApp";

function Footer() {
  return (
    <footer className="footer">
      <div className="footer-container">

        <div className="footer-column company-column">
          <div className="footer-logo">
            <img
              src={logo}
              alt="Charvex Logo"
              className="footer-logo-img"
            />

            <h2>Charvex Global</h2>
          </div>

          <p className="footer-description">
            Empowering digital transformation through AI, ERP,
            and cloud-driven innovation.
          </p>

          <div className="social-icons">
            <a href="/"><LinkedInIcon /></a>
            <a href="/"><InstagramIcon /></a>
            <a href="mailto:info@charvexglobal.com"><EmailIcon /></a>
            <a href="/"><WhatsAppIcon /></a>
          </div>
        </div>

        <div className="footer-column">
          <h3>Product</h3>
          <ul>
            <li>Services</li>
            <li>Projects</li>
            <li>About</li>
            <li>Careers</li>
            <li>Internships</li>
          </ul>
        </div>

        <div className="footer-column">
          <h3>Services</h3>
          <ul>
            <li>Web Development</li>
            <li>ERP Systems</li>
            <li>Machine Learning</li>
            <li>UI/UX Design</li>
            <li>AI & Data Science</li>
            <li>Automation & DevOps</li>
          </ul>
        </div>

        <div className="footer-column">
          <h3>Legal</h3>
          <ul>
            <li>Privacy Policy</li>
            <li>Terms of Service</li>
            <li>Cookie Policy</li>
            <li>Security</li>
          </ul>
        </div>

        <div className="footer-column">
          <h3>Contact</h3>
          <ul className="contact-list">
            <li>
              <EmailIcon className="footer-icon" />
              <span>info@charvexglobal.com</span>
            </li>

            <li>
              <EmailIcon className="footer-icon" />
              <span>support@charvexglobal.com</span>
            </li>

            <li>
              <PhoneIcon className="footer-icon" />
              <span>+91 94823 50233</span>
            </li>

            <li>
              <LocationOnIcon className="footer-icon" />
              <span>
                Yeshwanthpur, Bengaluru,
                Karnataka 560054
              </span>
            </li>
          </ul>
        </div>
      </div>

      <div className="footer-bottom">
        <p>
          © 2026 Charvex Global LLP. All rights reserved.
        </p>

        <p>
          Built with excellence by <span className="char-span ">Charvex Global Team</span>
        </p>
      </div>
    </footer>
  );
}

export default Footer;