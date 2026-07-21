import React, { useState, useEffect } from "react";
import "./header.css";
import logo from "../assets/images/logo.png";
import { Link, useLocation } from "react-router-dom";

function Header() {
  const [mobileMenu, setMobileMenu] = useState(false);
  const location = useLocation();

  const toggleMenu = () => {
    setMobileMenu((prev) => !prev);
  };

  const closeMenu = () => {
    setMobileMenu(false);
  };

  useEffect(() => {
    setMobileMenu(false);
  }, [location.pathname]);

  useEffect(() => {
    const handlePageShow = () => setMobileMenu(false);
    window.addEventListener("pageshow", handlePageShow);
    return () => window.removeEventListener("pageshow", handlePageShow);
  }, []);

  return (
    <header className="header">
      <div className="header-container">
        <Link to="/" className="logo-section" onClick={closeMenu}>
          <img src={logo} alt="Charvex Global LLP" className="logo" />
          <h2 className="company-name">Charvex Global LLP</h2>
        </Link>

        <nav className="nav-menu">
          <Link to="/">Home</Link>
          <Link to="/about">About</Link>
          <Link to="/services">Services</Link>
          <Link to="/projects">Projects</Link>
          <Link to="/careers">Careers</Link>
          <Link to="/contact">Contact</Link>
        </nav>

        <div
          className={`hamburger ${mobileMenu ? "active" : ""}`}
          onClick={toggleMenu}
          role="button"
          aria-label="Toggle menu"
          aria-expanded={mobileMenu}
        >
          <span></span>
          <span></span>
          <span></span>
        </div>
      </div>

      <div className={`mobile-menu ${mobileMenu ? "show" : ""}`}>
        <Link to="/" onClick={closeMenu}>Home</Link>
        <Link to="/about" onClick={closeMenu}>About</Link>
        <Link to="/services" onClick={closeMenu}>Services</Link>
        <Link to="/projects" onClick={closeMenu}>Projects</Link>
        <Link to="/careers" onClick={closeMenu}>Careers</Link>
        <Link to="/contact" onClick={closeMenu}>Contact</Link>
      </div>
    </header>
  );
}

export default Header;