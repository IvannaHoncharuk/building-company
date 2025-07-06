import React from "react";
import {
  Facebook,
  Twitter,
  Instagram,
  Linkedin,
  Phone,
  Mail,
  MapPin,
} from "lucide-react";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const footerSections = [
    {
      title: "BuildCraft",
      content: (
        <>
          <p>
            Professional construction services with over 15 years of experience.
            We deliver quality and excellence in every project.
          </p>
          <div className="social-links">
            <a href="#" aria-label="Facebook">
              <Facebook size={20} />
            </a>
            <a href="#" aria-label="Twitter">
              <Twitter size={20} />
            </a>
            <a href="#" aria-label="Instagram">
              <Instagram size={20} />
            </a>
            <a href="#" aria-label="LinkedIn">
              <Linkedin size={20} />
            </a>
          </div>
        </>
      ),
    },
    {
      title: "Services",
      links: [
        { name: "Residential Construction", href: "#services" },
        { name: "Commercial Construction", href: "#services" },
        { name: "Renovation & Remodeling", href: "#services" },
        { name: "Interior & Exterior Finishing", href: "#services" },
        { name: "Maintenance & Repairs", href: "#services" },
        { name: "Project Management", href: "#services" },
      ],
    },
    {
      title: "Company",
      links: [
        { name: "About Us", href: "#about" },
        { name: "Our Projects", href: "#gallery" },
        { name: "Contact Us", href: "#contact" },
        { name: "Careers", href: "#" },
        { name: "Privacy Policy", href: "#" },
        { name: "Terms of Service", href: "#" },
      ],
    },
    {
      title: "Contact Info",
      content: (
        <>
          <div className="contact-item">
            <Phone size={16} />
            <span>+1 (555) 123-4567</span>
          </div>
          <div className="contact-item">
            <Mail size={16} />
            <span>info@buildcraft.com</span>
          </div>
          <div className="contact-item">
            <MapPin size={16} />
            <span>123 Construction Ave, Building City, BC 12345</span>
          </div>
        </>
      ),
    },
  ];

  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-content">
          {footerSections.map((section, index) => (
            <div key={index} className="footer-section">
              <h3>{section.title}</h3>
              {section.content ? (
                section.content
              ) : (
                <ul className="footer-links">
                  {section.links.map((link, linkIndex) => (
                    <li key={linkIndex}>
                      <a href={link.href}>{link.name}</a>
                    </li>
                  ))}
                </ul>
              )}
            </div>
          ))}
        </div>

        <div className="footer-bottom">
          <p>
            &copy; {currentYear} BuildCraft Construction Company. All rights
            reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
