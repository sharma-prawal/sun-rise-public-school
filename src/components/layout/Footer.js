import React from 'react';
import './Footer.css';

const Footer = () => {
  return (
    <footer className="site-footer">
      <div className="container">
        <div className="footer-content">
          <div className="footer-section">
            <h4>Contact Us</h4>
            <p>Sun Rise Public School</p>
            <p>123 School Lane, City, State</p>
            <p>Email: info@sunriseps.edu</p>
            <p>Phone: +1 (555) 123-4567</p>
          </div>
          <div className="footer-section">
            <h4>Quick Links</h4>
            <ul>
              <li><a href="/">Home</a></li>
              <li><a href="/contact">Contact Us</a></li>
              <li><a href="/team">Our Team</a></li>
              <li><a href="/links">Important Links</a></li>
              <li><a href="/faq">FAQs</a></li>
            </ul>
          </div>
          <div className="footer-section">
            <h4>Follow Us</h4>
            <p>Stay connected with us on social media:</p>
            <ul className="social-links">
              <li><a href="#">Facebook</a></li>
              <li><a href="#">Twitter</a></li>
              <li><a href="#">Instagram</a></li>
            </ul>
          </div>
        </div>
        <div className="footer-bottom">
          <p>&copy; 2025 Sun Rise Public School. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;