import React from 'react';
import { Link } from 'react-router-dom';
import './Header.css';

const Header = () => {
  return (
    <header className="sticky-header">
      <div className="container">
        <div className="logo">
          <Link to="/">
            <img src="/logo.svg" alt="School Logo" />
          </Link>
        </div>
        <nav className="main-nav">
          <ul>
            <li><Link to="/">Home</Link></li>
            <li><Link to="/contact">Contact Us</Link></li>
            <li><Link to="/team">Our Team</Link></li>
            <li><Link to="/links">Important Links</Link></li>
            <li><Link to="/faq">FAQs</Link></li>
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Header;
