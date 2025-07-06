import React, { useState, useEffect } from "react";
import { Menu, X, Phone, Mail } from "lucide-react";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const closeMenu = () => {
    setIsMenuOpen(false);
  };

  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
    closeMenu();
  };

  const navItems = [
    { id: "about", label: "About" },
    { id: "services", label: "Services" },
    { id: "gallery", label: "Gallery" },
    { id: "contact", label: "Contact" },
  ];

  return (
    <header className={`header ${isScrolled ? "scrolled" : ""}`}>
      <div className="container">
        <div className="header-content">
          <div className="logo">
            <h1>BuildCraft</h1>
            <span>Construction Company</span>
          </div>

          <nav className={`nav ${isMenuOpen ? "active" : ""}`}>
            <ul className="nav-list">
              {navItems.map((item) => (
                <li key={item.id} className="nav-item">
                  <button
                    onClick={() => scrollToSection(item.id)}
                    className="nav-link"
                  >
                    {item.label}
                  </button>
                </li>
              ))}
            </ul>
          </nav>

          <div className="header-contact">
            <a href="tel:+15551234567" className="contact-link">
              <Phone size={16} />
              <span>+1 (555) 123-4567</span>
            </a>
            <a href="mailto:info@buildcraft.com" className="contact-link">
              <Mail size={16} />
              <span>info@buildcraft.com</span>
            </a>
          </div>

          <button
            className={`menu-toggle ${isMenuOpen ? "active" : ""}`}
            onClick={toggleMenu}
            aria-label="Toggle menu"
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>
    </header>
  );
};

export default Header;
