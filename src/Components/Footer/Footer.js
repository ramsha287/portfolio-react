import React from "react";
import "./Footer.css";

const Footer = () => {
  return (
    <footer className="footer-container">
      <div className="footer-content">

        <div className="footer-right">
          <h3>Follow Me</h3>
          <div className="social-icons">
            <a href="https://github.com/ramsha287" target="_blank" rel="noopener noreferrer">
              <i className="fab fa-github"></i>
            </a>
            <a href="https://www.linkedin.com/in/ramsha-arshad-559116249/" target="_blank" rel="noopener noreferrer">
              <i className="fab fa-linkedin"></i>
            </a>
            <a href="mailto:arshadramsha04@gmail.com" target="_blank" rel="noopener noreferrer">
              <i className="fa-solid fa-envelope"></i>
            </a>
            <a href="https://www.instagram.com/_a.v.i.o.t.h.i.c._/" target="_blank" rel="noopener noreferrer">
              <i className="fab fa-instagram"></i>
            </a>
          </div>
        </div>
      </div>

      <div className="footer-bottom">
        <p>© 2025 Ramsha Arshad. All Rights Reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
