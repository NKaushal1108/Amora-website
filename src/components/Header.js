import React from 'react';
import './Header.css';

const Header = () => {
  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <header className="header">
      <div className="header-container">
        <div className="logo">
          <h1 className="logo-main">AMORA</h1>
          <p className="logo-subtitle">BY AMEESHA SANTHUSA</p>
        </div>
        <nav className="nav">
          <a href="#home" onClick={(e) => { e.preventDefault(); scrollToSection('home'); }}>HOME</a>
          <a href="#gallery" onClick={(e) => { e.preventDefault(); scrollToSection('gallery'); }}>GALLERY</a>
          <a href="#about" onClick={(e) => { e.preventDefault(); scrollToSection('about'); }}>ABOUT US</a>
          <a href="#contact" onClick={(e) => { e.preventDefault(); scrollToSection('contact'); }}>CONTACT US</a>
        </nav>
      </div>
    </header>
  );
};

export default Header;
