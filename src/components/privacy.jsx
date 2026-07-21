import React from "react";
import { useNavigate } from "react-router-dom";
import "./privacy.css";

function PrivacyPolicy() {
  const navigate = useNavigate();

  return (
    <div className="legal-page">
      <div className="legal-container">
        <div className="legal-header">
          <h1>Privacy Policy</h1>
        </div>

        <p className="legal-intro">
          At Charvex Global LLP, we are committed to protecting your privacy
          and ensuring transparency in how we handle your data. We collect
          only the information necessary to deliver and improve our
          services, and we process all personal data in accordance with
          applicable data protection laws, including the Information
          Technology Act, 2000, and GDPR guidelines where applicable.
        </p>

        <h2>Our Data Practices</h2>
        <ol className="legal-list">
          <li>
            <strong>Information Collection —</strong> We collect data such as
            your name, contact details, and company information when you
            engage with our services.
          </li>
          <li>
            <strong>Use of Data —</strong> We use your information to enhance
            user experience, deliver solutions, provide customer support, and
            improve our offerings.
          </li>
          <li>
            <strong>Data Sharing —</strong> We never sell your personal data.
            We may share information only with trusted third parties that
            assist us in operations, under strict confidentiality.
          </li>
          <li>
            <strong>Cookies and Tracking —</strong> Our website uses
            analytics tools and cookies to monitor site performance and
            improve user interaction.
          </li>
          <li>
            <strong>Data Security —</strong> We employ advanced encryption,
            firewalls, and secure storage practices to safeguard all
            information.
          </li>
          <li>
            <strong>User Rights —</strong> You have the right to access,
            correct, or delete your personal data upon request.
          </li>
          <li>
            <strong>Retention Policy —</strong> Data is retained only as long
            as required for business or legal purposes.
          </li>
          <li>
            <strong>Third-Party Links —</strong> External websites linked
            from our platform are not covered under this policy.
          </li>
          <li>
            <strong>Updates to Policy —</strong> This policy may be updated
            periodically to reflect new compliance requirements or business
            practices.
          </li>
        </ol>

        <p className="legal-footer-note">
          By using Charvex Global LLP website or services, you consent to our
          Privacy Policy. For questions, please contact{" "}
          <a href="mailto:support@charvexglobal.com">
            support@charvexglobal.com
          </a>
          .
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

export default PrivacyPolicy;