import React from "react";
import {
  Home,
  Building,
  Wrench,
  Paintbrush,
  Hammer,
  Settings,
} from "lucide-react";

const Services = () => {
  const services = [
    {
      icon: <Building size={32} />,
      title: "Commercial Construction",
      description:
        "Complete commercial building solutions from office complexes to retail spaces.",
      features: [
        "Office Buildings",
        "Retail Spaces",
        "Industrial Facilities",
        "Restaurant & Hospitality",
      ],
    },
    {
      icon: <Home size={32} />,
      title: "Residential Construction",
      description:
        "Custom homes and residential projects built to your specifications.",
      features: [
        "Custom Homes",
        "Home Additions",
        "Kitchen Remodeling",
        "Bathroom Renovations",
      ],
    },
    {
      icon: <Wrench size={32} />,
      title: "Renovation & Remodeling",
      description:
        "Transform your existing space with our renovation expertise.",
      features: [
        "Interior Remodeling",
        "Exterior Updates",
        "Structural Modifications",
        "Modern Upgrades",
      ],
    },
    {
      icon: <Paintbrush size={32} />,
      title: "Interior & Exterior Finishing",
      description:
        "Professional finishing work for both interior and exterior projects.",
      features: [
        "Interior Painting",
        "Exterior Painting",
        "Flooring Installation",
        "Cabinetry & Trim",
      ],
    },
    {
      icon: <Hammer size={32} />,
      title: "Maintenance & Repairs",
      description:
        "Ongoing maintenance and repair services to keep your property in top condition.",
      features: [
        "Preventive Maintenance",
        "Emergency Repairs",
        "Structural Repairs",
        "System Upgrades",
      ],
    },
    {
      icon: <Settings size={32} />,
      title: "Project Management",
      description:
        "Comprehensive project management services from concept to completion.",
      features: [
        "Project Planning",
        "Timeline Management",
        "Budget Control",
        "Quality Assurance",
      ],
    },
  ];

  return (
    <section id="services" className="services">
      <div className="container">
        <div className="section-header">
          <h2>Our Services</h2>
          <p>
            Comprehensive construction solutions for all your building needs
          </p>
        </div>

        <div className="services-grid">
          {services.map((service, index) => (
            <div key={index} className="service-card">
              <div className="service-icon">{service.icon}</div>
              <h3>{service.title}</h3>
              <p>{service.description}</p>
              <ul className="service-features">
                {service.features.map((feature, featureIndex) => (
                  <li key={featureIndex}>{feature}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
