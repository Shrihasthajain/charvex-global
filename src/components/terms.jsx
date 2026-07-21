import React from "react";
import { useNavigate } from "react-router-dom";
import "./privacy.css";

function TermsOfService() {
  const navigate = useNavigate();

  return (
    <div className="legal-page">
      <div className="legal-container">
        <div className="legal-header">
          <h1>Terms of Service</h1>
        </div>

        <p className="legal-intro">
          Welcome to Charvex Global LLP. By accessing or using our website,
          services, or software, you agree to the following Terms of
          Service.
        </p>

        <h2>Terms</h2>
        <ol className="legal-list">
          <li>
            <strong>Acceptance of Terms —</strong> These terms constitute a
            legally binding agreement between you and Charvex Global LLP.
          </li>
          <li>
            <strong>Scope of Services —</strong> Charvex Global provides IT
            consulting, software development, and digital transformation
            services as described on our website.
          </li>
          <li>
            <strong>User Responsibilities —</strong> You agree not to misuse
            our services, attempt to breach security, or use them for
            unlawful purposes.
          </li>
          <li>
            <strong>Intellectual Property —</strong> All content, code,
            logos, and visuals on our site are owned or licensed by Charvex
            Global LLP and may not be reproduced without permission.
          </li>
          <li>
            <strong>Service Availability —</strong> We strive for uptime and
            reliability but may temporarily suspend services for maintenance
            or unforeseen issues.
          </li>
          <li>
            <strong>Limitation of Liability —</strong> Charvex Global LLP is
            not responsible for indirect, incidental, or consequential
            damages arising from service use.
          </li>
          <li>
            <strong>Termination —</strong> We reserve the right to suspend
            access or terminate agreements in cases of violation or misuse.
          </li>
          <li>
            <strong>Governing Law —</strong> These terms are governed by the
            laws of India and subject to the jurisdiction of Bangalore
            courts.
          </li>
          <li>
            <strong>Amendments —</strong> Charvex reserves the right to
            modify these terms at any time with appropriate notification.
          </li>
        </ol>

        <p className="legal-footer-note">
          Continued use of our services after changes indicates acceptance of
          the revised Terms of Service.
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

export default TermsOfService;