import React from "react";
import { useNavigate } from "react-router-dom";
import "./privacy.css";

function Security() {
  const navigate = useNavigate();

  return (
    <div className="legal-page">
      <div className="legal-container">
        <div className="legal-header">
          <h1>Security</h1>
        </div>

        <p className="legal-intro">
          At Charvex Global LLP, data protection and cybersecurity are top
          priorities. Our systems are designed following global security
          standards to ensure the confidentiality, integrity, and
          availability of all information processed through our networks.
        </p>

        <h2>Our Security Measures</h2>
        <ol className="legal-list">
          <li>
            <strong>Infrastructure Security —</strong> We use cloud-native
            architecture with firewalls, intrusion detection systems, and
            encrypted data storage.
          </li>
          <li>
            <strong>Access Control —</strong> Strict identity management, MFA
            (multi-factor authentication), and role-based access are
            enforced.
          </li>
          <li>
            <strong>Data Encryption —</strong> All sensitive data is
            encrypted in transit (TLS 1.3) and at rest (AES-256).
          </li>
          <li>
            <strong>Regular Audits —</strong> We conduct internal and
            external security audits quarterly to identify and mitigate
            vulnerabilities.
          </li>
          <li>
            <strong>Incident Response —</strong> A dedicated security team
            monitors systems 24/7 and follows an incident response plan
            aligned with ISO/IEC 27001.
          </li>
          <li>
            <strong>Employee Training —</strong> Every Charvex employee
            undergoes annual security and compliance training.
          </li>
          <li>
            <strong>Client Responsibility —</strong> Clients are encouraged
            to follow best practices for password management and system
            hygiene.
          </li>
          <li>
            <strong>Reporting —</strong> Any suspected breach or security
            incident can be reported to{" "}
            <a href="mailto:security@charvexglobal.com">
              security@charvexglobal.com
            </a>{" "}
            for immediate review.
          </li>
        </ol>

        <p className="legal-footer-note">
          Charvex Global LLP remains committed to maintaining the highest
          standards of data security and resilience across our products and
          services.
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

export default Security;