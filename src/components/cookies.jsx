import React from "react";
import { useNavigate } from "react-router-dom";
import "./privacy.css";

function CookiePolicy() {
  const navigate = useNavigate();

  return (
    <div className="legal-page">
      <div className="legal-container">
        <div className="legal-header">
          <h1>Cookie Policy</h1>
        </div>

        <p className="legal-intro">
          Charvex Global LLP uses cookies to enhance your browsing experience
          and analyze website traffic. Cookies are small files stored on
          your device that help us recognize you, remember preferences, and
          deliver better performance.
        </p>

        <h2>Types of Cookies We Use</h2>
        <ul className="legal-list">
          <li>
            <strong>Essential Cookies —</strong> Necessary for website
            functionality.
          </li>
          <li>
            <strong>Analytical Cookies —</strong> Help us understand user
            behavior and improve site usability.
          </li>
          <li>
            <strong>Functional Cookies —</strong> Store preferences such as
            language and layout.
          </li>
          <li>
            <strong>Marketing Cookies —</strong> Support personalized
            advertisements and promotions.
          </li>
        </ul>

        <h2>How We Use Cookies</h2>
        <ul className="legal-list">
          <li>Track site performance and engagement.</li>
          <li>Personalize content and measure campaign effectiveness.</li>
          <li>Maintain security and prevent fraud.</li>
        </ul>

        <h2>Managing Cookies</h2>
        <p className="legal-intro">
          You can control cookies via your browser settings. Disabling
          cookies may affect certain features of our website.
        </p>

        <h2>Third-Party Cookies</h2>
        <p className="legal-intro">
          Some analytics or marketing tools (like Google Analytics) may use
          third-party cookies, governed by their own privacy policies.
        </p>

        <p className="legal-footer-note">
          By continuing to use our website, you consent to our cookie usage
          as described in this policy.
        </p>

        <div className="legal-close-wrapper">
          <button className="legal-close-btn" onClick={() => navigate(-1)}>
            Close
          </button>
        </div>
      </div>
    </div>
  );
}

export default CookiePolicy;