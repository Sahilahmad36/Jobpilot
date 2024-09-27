/* eslint-disable jsx-a11y/img-redundant-alt */
import React from "react";
import "./Footer.css";

export default function Footer({ ...props }) {
  return (
    <footer {...props} className={`${props.className} footer`}>
      <div className="footer-container">
        <div className="footer-content">
          <div className="footer-section">
            <img
              src="images/logo.png"
              alt="Footer Logo Image"
              className="footer-logo" />
            <div className="footer-contact">
              <p className="footer-call-text">Call now:</p>
              <p className="footer-phone">(319) 555-0115</p>
              <p className="footer-address">
                6391 Elgin St. Celina, Delaware 10299, New York, United States of America
              </p>
            </div>
          </div>

          <div className="footer-links">
            <div className="footer-column">
              <p className="footer-heading">Quick Link</p>
              <ul>
                <li><a href="About">About</a></li>
                <li><a href="/">Contact</a></li>
                <li><a href="Pricing">Pricing</a></li>
                <li><a href="Blog">Blog</a></li>
              </ul>
            </div>

            <div className="footer-column">
              <p className="footer-heading">Candidate</p>
              <ul>
                <li><a href="/">Browse Jobs</a></li>
                <li><a href="/">Browse Employers</a></li>
                <li><a href="/">Candidate Dashboard</a></li>
                <li><a href="/">Saved Jobs</a></li>
              </ul>
            </div>

            <div className="footer-column">
              <p className="footer-heading">Employers</p>
              <ul>
                <li><a href="/">Post a Job</a></li>
                <li><a href="/">Browse Candidates</a></li>
                <li><a href="/">Employers Dashboard</a></li>
                <li><a href="Applications">Applications</a></li>
              </ul>
            </div>

            <div className="footer-column">
              <p className="footer-heading">Support</p>
              <ul>
                <li><a href="Faqs">Faqs</a></li>
                <li><a href="/">Privacy Policy</a></li>
                <li><a href="/">Terms & Conditions</a></li>
              </ul>
            </div>
          </div>
        </div>

        <div className="footer-bottom">
          <p className="footer-copyright">@2024 Created by Sahil. All rights reserved</p>
          <div className="footer-social">
            <img src="images/face.png" alt="Facebook" />
            <img src="images/youtube.png" alt="Warning" />
            <img src="images/instagram.png" alt="Instagram" />
            <img src="images/twi.png" alt="Twitter" />
          </div>
        </div>
      </div>
    </footer>
  );
}
