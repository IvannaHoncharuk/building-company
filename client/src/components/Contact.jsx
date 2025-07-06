import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { Phone, Mail, MapPin, Send, CheckCircle } from "lucide-react";

const Contact = () => {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState(null);

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm();

  const onSubmit = async (data) => {
    setIsSubmitting(true);
    setSubmitStatus(null);

    try {
      // Симулюємо відправку форми (без backend)
      await new Promise((resolve) => setTimeout(resolve, 1000));

      // В реальному проекті тут був би API запит
      console.log("Form data:", data);

      setSubmitStatus("success");
      reset();
    } catch (error) {
      console.error("Error submitting form:", error);
      setSubmitStatus("error");
    } finally {
      setIsSubmitting(false);
    }
  };

  const contactInfo = [
    {
      icon: <Phone size={24} />,
      title: "Phone",
      content: "+1 (555) 123-4567",
      link: "tel:+15551234567",
    },
    {
      icon: <Mail size={24} />,
      title: "Email",
      content: "info@buildcraft.com",
      link: "mailto:info@buildcraft.com",
    },
    {
      icon: <MapPin size={24} />,
      title: "Address",
      content: "123 Construction Ave, Building City, BC 12345",
      link: "https://maps.google.com",
    },
  ];

  return (
    <section id="contact" className="contact">
      <div className="container">
        <div className="section-header">
          <h2>Contact Us</h2>
          <p>Get in touch for your next construction project</p>
        </div>

        <div className="contact-content">
          <div className="contact-info">
            <h3>Let's Build Together</h3>
            <p>
              Ready to start your construction project? Contact us today for a
              free consultation and quote. Our team is ready to bring your
              vision to life.
            </p>

            <div className="contact-details">
              {contactInfo.map((info, index) => (
                <div key={index} className="contact-item">
                  <div className="contact-icon">{info.icon}</div>
                  <div className="contact-text">
                    <h4>{info.title}</h4>
                    <a
                      href={info.link}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      {info.content}
                    </a>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="contact-form-container">
            <form onSubmit={handleSubmit(onSubmit)} className="contact-form">
              <div className="form-row">
                <div className="form-group">
                  <label htmlFor="name">Full Name *</label>
                  <input
                    type="text"
                    id="name"
                    {...register("name", {
                      required: "Name is required",
                      minLength: {
                        value: 2,
                        message: "Name must be at least 2 characters",
                      },
                    })}
                    className={errors.name ? "error" : ""}
                  />
                  {errors.name && (
                    <span className="error-message">{errors.name.message}</span>
                  )}
                </div>

                <div className="form-group">
                  <label htmlFor="email">Email *</label>
                  <input
                    type="email"
                    id="email"
                    {...register("email", {
                      required: "Email is required",
                      pattern: {
                        value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                        message: "Invalid email address",
                      },
                    })}
                    className={errors.email ? "error" : ""}
                  />
                  {errors.email && (
                    <span className="error-message">
                      {errors.email.message}
                    </span>
                  )}
                </div>
              </div>

              <div className="form-row">
                <div className="form-group">
                  <label htmlFor="phone">Phone</label>
                  <input type="tel" id="phone" {...register("phone")} />
                </div>

                <div className="form-group">
                  <label htmlFor="service">Service Interest</label>
                  <select id="service" {...register("service")}>
                    <option value="">Select a service</option>
                    <option value="residential">
                      Residential Construction
                    </option>
                    <option value="commercial">Commercial Construction</option>
                    <option value="renovation">Renovation & Remodeling</option>
                    <option value="maintenance">Maintenance & Repairs</option>
                    <option value="finishing">
                      Interior & Exterior Finishing
                    </option>
                    <option value="management">Project Management</option>
                  </select>
                </div>
              </div>

              <div className="form-group">
                <label htmlFor="message">Message *</label>
                <textarea
                  id="message"
                  rows="5"
                  {...register("message", {
                    required: "Message is required",
                    minLength: {
                      value: 10,
                      message: "Message must be at least 10 characters",
                    },
                  })}
                  className={errors.message ? "error" : ""}
                  placeholder="Tell us about your project..."
                />
                {errors.message && (
                  <span className="error-message">
                    {errors.message.message}
                  </span>
                )}
              </div>

              <button
                type="submit"
                className="btn btn-primary submit-btn"
                disabled={isSubmitting}
              >
                {isSubmitting ? (
                  <>
                    <div className="spinner"></div>
                    Sending...
                  </>
                ) : (
                  <>
                    <Send size={20} />
                    Send Message
                  </>
                )}
              </button>

              {submitStatus === "success" && (
                <div className="success-message">
                  <CheckCircle size={20} />
                  Thank you! Your message has been sent successfully. We will
                  contact you soon!
                </div>
              )}

              {submitStatus === "error" && (
                <div className="error-message">
                  Sorry, there was an error sending your message. Please try
                  again.
                </div>
              )}
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
