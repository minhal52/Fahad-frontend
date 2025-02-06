import React, { useState } from "react";
import "remixicon/fonts/remixicon.css";
import logo from "../assets/images/Fahad_EngineeringLogo-.png"; // Corrected path
import { FaChevronDown } from "react-icons/fa"; // Font Awesome icon for dropdown

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const toggleDropdown = () => {
    setIsDropdownOpen(!isDropdownOpen); // Toggle dropdown visibility on click
  };

  return (
    <header className="header">
      {/* Logo Section */}
      <div className="logo">
        <a href="/">
          <img src={logo} alt="Logo" className="logo-img" />
        </a>
      </div>

      {/* Mobile Menu Toggle Button */}
      <button className="menu-toggle" onClick={toggleMenu}>
        <i className={isMenuOpen ? "ri-close-line" : "ri-menu-line"}></i>
      </button>

      {/* Navigation Links */}
      <nav className={`nav-links ${isMenuOpen ? "open" : ""}`}>
        <ul className="nav-list">
          <li><a href="/">Home</a></li>
          <li><a href="/about">About</a></li>

          {/* Service Link */}
          <li>
            <a href="/services">Services</a> {/* Redirect to /services page when clicked */}
          </li>

          <li><a href="/category/products">Products</a></li>
          <li><a href="/contact">Contact</a></li>
        </ul>
        <div className="quote-btn">
          <a href="/quote" className="quote-btn-link">Get Quote</a>
        </div>
      </nav>
    </header>
  );
};

export default Header;
