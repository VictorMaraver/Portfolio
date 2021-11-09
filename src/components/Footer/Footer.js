import React from "react";
import "./Footer.css";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-info">
        <h2>Contact</h2>
      </div>
      <div className="footer-contact">
        <p>✉️  victormaraver@me.com</p>
        <p>📲  +34 628 453 780</p>
      </div>
      <div className="footer-sns">
        <div className="design-by"></div>
        <div className="sns-links">
          <a href="https://www.linkedin.com/in/v%C3%ADctor-maraver/" target="_blank" rel="noreferrer">
            <i className="fab fa-linkedin linkedin"></i>
          </a>
          <a href="https://github.com/VictorMaraver/Readme" target="_blank" rel="noreferrer">
            <i className="fab fa-github github"></i>
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;