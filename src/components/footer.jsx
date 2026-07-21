import React from "react";
import { Link } from "react-router-dom";
import "./footer.css";
import logo from "../assets/images/logo.png";
import PhoneIcon from "@mui/icons-material/Phone";
import EmailIcon from "@mui/icons-material/Email";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import InstagramIcon from "@mui/icons-material/Instagram";
import WhatsAppIcon from "@mui/icons-material/WhatsApp";

const productLinks = [
  { label: "Services", path: "/services" },
  { label: "Projects", path: "/projects" },
  { label: "About", path: "/about" },
  { label: "Careers", path: "/careers" },
  { label: "Internships", path: "/careers" },
];

const serviceLinks = [
  { label: "Web Development", path: "/services" },
  { label: "ERP Systems", path: "/services" },
  { label: "Machine Learning", path: "/services" },
  { label: "UI/UX Design", path: "/services" },
  { label: "AI & Data Science", path: "/services" },
  { label: "Automation & DevOps", path: "/services" },
];

const legalLinks = [
  { label: "Privacy Policy", path: "/privacy" },
  { label: "Terms of Service", path: "/terms" },
  { label: "Cookie Policy", path: "/cookies" },
  { label: "Security", path: "/security" },
];

function Footer() {
  const scrollToTop = () => window.scrollTo(0, 0);

  return (
    <footer className="footer">
      <div className="footer-container">

        <div className="footer-column company-column">
          <Link to="/" className="footer-logo" onClick={scrollToTop}>
            <img
              src={logo}
              alt="Charvex Logo"
              className="footer-logo-img"
            />
            <h2>Charvex Global</h2>
          </Link>

          <p className="footer-description">
            Empowering digital transformation through AI, ERP,
            and cloud-driven innovation.
          </p>

          <div className="social-icons">
            <a
              href="https://www.linkedin.com/company/charvexglobal"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="LinkedIn"
            >
              <LinkedInIcon />
            </a>
            <a
              href="https://www.instagram.com/charvex"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Instagram"
            >
              <InstagramIcon />
            </a>
            <a href="mailto:info@charvexglobal.com" aria-label="Email">
              <EmailIcon />
            </a>
            <a
              href="https://wa.me/919482350233"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="WhatsApp"
            >
              <WhatsAppIcon />
            </a>
          </div>
        </div>

        <div className="footer-column">
          <h3>Product</h3>
          <ul>
            {productLinks.map((item) => (
              <li key={item.label}>
                <Link to={item.path} onClick={scrollToTop}>
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div className="footer-column">
          <h3>Services</h3>
          <ul>
            {serviceLinks.map((item) => (
              <li key={item.label}>
                <Link to={item.path} onClick={scrollToTop}>
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div className="footer-column">
          <h3>Legal</h3>
          <ul>
            {legalLinks.map((item) => (
              <li key={item.label}>
                <Link to={item.path} onClick={scrollToTop}>
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div className="footer-column">
          <h3>Contact</h3>
          <ul className="contact-list">
            <li>
              <EmailIcon className="footer-icon" />
              <a href="mailto:info@charvexglobal.com">
                <span>info@charvexglobal.com</span>
              </a>
            </li>

            <li>
              <EmailIcon className="footer-icon" />
              <a href="mailto:support@charvexglobal.com">
                <span>support@charvexglobal.com</span>
              </a>
            </li>

            <li>
              <PhoneIcon className="footer-icon" />
              <a href="tel:+919482350233">
                <span>+91 94823 50233</span>
              </a>
            </li>

            <li>
              <LocationOnIcon className="footer-icon" />
              <a
                href="https://www.google.com/maps/search/?api=1&query=Charvex+Global+LLP,+Yeshwanthpur,+Bengaluru"
                target="_blank"
                rel="noopener noreferrer"
              >
                <span>
                  Yeshwanthpur, Bengaluru,
                  Karnataka 560054
                </span>
              </a>
            </li>
          </ul>
        </div>
      </div>

      <div className="footer-bottom">
        <p>
          © 2026 Charvex Global LLP. All rights reserved.
        </p>

        <p>
          Built with excellence by <span className="char-span">Charvex Global Team</span>
        </p>
      </div>
    </footer>
  );
}

export default Footer;