import React from "react";
import {
  Award,
  Users,
  Clock,
  CheckCircle,
  Building,
  Shield,
  Zap,
} from "lucide-react";

const About = () => {
  const features = [
    {
      icon: <Shield size={20} />,
      title: "Licensed & Insured",
      description: "Full coverage for your peace of mind",
    },
    {
      icon: <Building size={20} />,
      title: "Expert Team",
      description: "Skilled professionals with years of experience",
    },
    {
      icon: <Zap size={20} />,
      title: "Modern Technology",
      description: "Latest construction methods and equipment",
    },
    {
      icon: <CheckCircle size={20} />,
      title: "Quality Guarantee",
      description: "We stand behind our work with warranties",
    },
  ];

  return (
    <section id="about" className="about">
      <div className="container">
        <div className="section-header">
          <h2>About BuildCraft</h2>
          <p>Your trusted partner in construction excellence</p>
        </div>

        <div className="about-content">
          <div className="about-text">
            <h3>Building Excellence Since 2008</h3>
            <p>
              BuildCraft has been at the forefront of the construction industry
              for over 15 years, delivering exceptional quality and innovative
              solutions for both residential and commercial projects. Our
              commitment to excellence, attention to detail, and customer
              satisfaction has made us a trusted name in the construction
              sector.
            </p>
            <p>
              We specialize in modern construction techniques, sustainable
              building practices, and cutting-edge technology to ensure your
              project is completed on time, within budget, and exceeds your
              expectations.
            </p>

            <div className="about-features">
              {features.map((feature, index) => (
                <div key={index} className="feature">
                  <div className="feature-icon">{feature.icon}</div>
                  <div className="feature-content">
                    <span className="feature-title">{feature.title}</span>
                    <p className="feature-description">{feature.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="about-image">
            <img
              src="https://images.unsplash.com/photo-1504307651254-35680f356dfd?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80"
              alt="Construction team working"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
