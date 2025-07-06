import React from "react";
import { ArrowRight, Phone, Mail } from "lucide-react";

const Hero = () => {
  const scrollToContact = () => {
    const contactSection = document.getElementById("contact");
    if (contactSection) {
      contactSection.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section className="hero">
      <div className="hero-background">
        <div className="hero-overlay"></div>
      </div>

      <div className="container">
        <div className="hero-content">
          <div className="hero-text">
            <h1 className="hero-title">
              Building Dreams Into
              <span className="highlight"> Reality</span>
            </h1>

            <p className="hero-subtitle">
              Professional construction services with over 15 years of
              experience. From residential to commercial projects, we deliver
              quality and excellence.
            </p>

            <div className="hero-actions">
              <button onClick={scrollToContact} className="btn btn-primary">
                Get Free Quote
                <ArrowRight size={20} />
              </button>

              <div className="hero-contact">
                <a href="tel:+15551234567" className="contact-item">
                  <Phone size={20} />
                  <span>Call Now</span>
                </a>
                <a href="mailto:info@buildcraft.com" className="contact-item">
                  <Mail size={20} />
                  <span>Email Us</span>
                </a>
              </div>
            </div>
          </div>

          <div className="hero-stats">
            <div className="stat-item">
              <h3>500+</h3>
              <p>Projects Completed</p>
            </div>
            <div className="stat-item">
              <h3>15+</h3>
              <p>Years Experience</p>
            </div>
            <div className="stat-item">
              <h3>100%</h3>
              <p>Client Satisfaction</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
