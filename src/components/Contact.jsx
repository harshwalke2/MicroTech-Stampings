import React, { useState } from 'react';
import '../styles/Contact.css';

function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    phone: '',
    requirements: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission
    console.log('Form submitted:', formData);
    alert('Thank you for your inquiry! We will contact you soon.');
    setFormData({
      name: '',
      email: '',
      company: '',
      phone: '',
      requirements: ''
    });
  };

  return (
    <section id="contact" className="contact">
      <div className="container">
        <div className="section-header">
          <h2 className="section-title">GET IN TOUCH</h2>
          <h3 className="section-subtitle">Contact Us</h3>
        </div>

        <div className="contact-content">
          <div className="contact-info">
            <div className="intro">
              <h4 className="intro-title">Let's Build Something Great Together</h4>
              <p className="intro-text">
                Whether you need custom metal stampings, cam locks for cold room panels, or any precision metal components, our team is ready to deliver quality solutions tailored to your specifications.
              </p>
              <div className="contact-image">
                <img src="https://microtechstampings.lovable.app/assets/product-sheetmetal-80owJ07a.jpg" alt="Contact Us" />
              </div>
            </div>

            <div className="contact-details">
              <div className="detail-item">
                <div className="detail-icon">📍</div>
                <div className="detail-content">
                  <h5 className="detail-title">Manufacturing Unit</h5>
                  <p className="detail-text">
                    Gat No 742, Near Laxmi Park, Gaikwad DP Road,<br />
                    Kadamwak Wasti, Tal- Haveli,<br />
                    Dist- Pune, Pin- 412201
                  </p>
                </div>
              </div>

              <div className="detail-item">
                <div className="detail-icon">📞</div>
                <div className="detail-content">
                  <h5 className="detail-title">Phone</h5>
                  <p className="detail-text">
                    <a href="tel:9404123171">9404123171</a>
                  </p>
                </div>
              </div>

              <div className="detail-item">
                <div className="detail-icon">✉️</div>
                <div className="detail-content">
                  <h5 className="detail-title">Email</h5>
                  <p className="detail-text">
                    <a href="mailto:microstampings@gmail.com">microstampings@gmail.com</a>
                  </p>
                </div>
              </div>

              <div className="detail-item">
                <div className="detail-icon">🏢</div>
                <div className="detail-content">
                  <h5 className="detail-title">Business Activities</h5>
                  <p className="detail-text">
                    Manufacturing · Marketing · Trading · Importing · Exporting
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div className="contact-form-wrapper">
            <div className="form-header">
              <h4 className="form-title">Request a Quote</h4>
            </div>
            <form className="contact-form" onSubmit={handleSubmit}>
              <div className="form-group">
                <label htmlFor="name">Your Name *</label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  placeholder="Enter your full name"
                />
              </div>

              <div className="form-group">
                <label htmlFor="email">Email Address *</label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  placeholder="your@email.com"
                />
              </div>

              <div className="form-group">
                <label htmlFor="company">Company Name</label>
                <input
                  type="text"
                  id="company"
                  name="company"
                  value={formData.company}
                  onChange={handleChange}
                  placeholder="Your company name"
                />
              </div>

              <div className="form-group">
                <label htmlFor="phone">Phone Number</label>
                <input
                  type="tel"
                  id="phone"
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange}
                  placeholder="Your phone number"
                />
              </div>

              <div className="form-group">
                <label htmlFor="requirements">Your Requirements *</label>
                <textarea
                  id="requirements"
                  name="requirements"
                  value={formData.requirements}
                  onChange={handleChange}
                  required
                  placeholder="Describe your metal stamping requirements..."
                  rows="6"
                ></textarea>
              </div>

              <button type="submit" className="btn btn-primary">Send Message</button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Contact;
