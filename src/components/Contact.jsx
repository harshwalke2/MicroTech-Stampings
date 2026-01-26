import React, { useState, useEffect } from 'react';
import emailjs from '@emailjs/browser';
import '../styles/Contact.css';

function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    phone: '',
    requirements: ''
  });

  const [isSubmitting, setIsSubmitting] = useState(false);

  useEffect(() => {
    // Initialize EmailJS
    emailjs.init('RZOuLLSgkqjD3HWnU');
  }, []);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      const response = await emailjs.send(
        'service_xnb2dkv',
        'template_2u5z8sf',
        {
          to_email: 'microstampings@gmail.com',
          from_name: formData.name,
          from_email: formData.email,
          company: formData.company || 'Not provided',
          phone: formData.phone || 'Not provided',
          requirements: formData.requirements,
          reply_to: formData.email
        }
      );

      if (response.status === 200) {
        alert('Thank you for your inquiry! We will contact you soon.');
        setFormData({
          name: '',
          email: '',
          company: '',
          phone: '',
          requirements: ''
        });
      }
    } catch (error) {
      console.error('Email send error:', error);
      alert('Failed to send your request. Please try again or contact us directly at microstampings@gmail.com');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section id="contact" className="contact">
      <div className="container">
        <div className="section-header">
          <h2 className="section-title">GET IN TOUCH</h2>
          <h3 className="section-subtitle">We'd Love to Hear From You</h3>
        </div>

        <div className="contact-wrapper">
          <div className="contact-left">
            <div className="contact-intro">
              <h4 className="intro-title">Let's Build Something Great Together</h4>
              <p className="intro-text">
                Whether you need custom metal stampings, cam locks for cold room panels, or any precision metal components, our team is ready to deliver quality solutions tailored to your specifications.
              </p>
            </div>

            <div className="contact-cards-grid">
              <div className="contact-card">
                <div className="card-icon">📍</div>
                <div className="card-body">
                  <h5 className="card-title">Address</h5>
                  <p className="card-text">
                    Gat No 742, Near Laxmi Park,<br />
                    Gaikwad DP Road, Kadamwak Wasti,<br />
                    Tal- Haveli, Dist- Pune,<br />
                    Pin- 412201
                  </p>
                  <a href="https://www.google.com/maps/place/Microtech+Stampings/@18.4840218,74.0109754,17z/data=!3m1!4b1!4m6!3m5!1s0x3bc2e96b4b5acbff:0xf545d623c1219792!8m2!3d18.4840218!4d74.0109754!16s%2Fg%2F11y0z9tm6c?hl=en-IN&entry=ttu&g_ep=EgoyMDI2MDEyMS4wIKXMDSoASAFQAw%3D%3D" target="_blank" rel="noopener noreferrer" className="map-link">
                    Get Directions →
                  </a>
                </div>
              </div>

              <div className="contact-card">
                <div className="card-icon">📞</div>
                <div className="card-body">
                  <h5 className="card-title">Phone</h5>
                  <p className="card-text">
                    <a href="tel:9404123171">9404123171</a>
                  </p>
                </div>
              </div>

              <div className="contact-card">
                <div className="card-icon">✉️</div>
                <div className="card-body">
                  <h5 className="card-title">Email</h5>
                  <p className="card-text">
                    <a href="mailto:microstampings@gmail.com">microstampings@gmail.com</a>
                  </p>
                </div>
              </div>

              <div className="contact-card">
                <div className="card-icon">🏢</div>
                <div className="card-body">
                  <h5 className="card-title">Business</h5>
                  <p className="card-text">
                    Manufacturing, Trading, Importing & Exporting
                  </p>
                </div>
              </div>

              <div className="contact-card">
                <div className="card-icon">💼</div>
                <div className="card-body">
                  <h5 className="card-title">LinkedIn</h5>
                  <p className="card-text">
                    <a href="https://www.linkedin.com/in/aryaan-attar-86a548220" target="_blank" rel="noopener noreferrer">Connect with us</a>
                  </p>
                </div>
              </div>
            </div>

            {/* Map removed as per request. Only Get Directions button remains. */}
          </div>

          <div className="contact-right">
            <div className="form-wrapper">
              <div className="form-header">
                <h4 className="form-title">Request a Quote</h4>
                <p className="form-subtitle">Get a custom quote for your project</p>
              </div>
              <form className="contact-form" onSubmit={handleSubmit}>
                <div className="form-row">
                  <div className="form-group">
                    <label htmlFor="name">Your Name *</label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      required
                      placeholder="John Doe"
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
                </div>

                <div className="form-row">
                  <div className="form-group">
                    <label htmlFor="company">Company Name</label>
                    <input
                      type="text"
                      id="company"
                      name="company"
                      value={formData.company}
                      onChange={handleChange}
                      placeholder="Your company"
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
                      placeholder="+91 XXXXX XXXXX"
                    />
                  </div>
                </div>

                <div className="form-group full-width">
                  <label htmlFor="requirements">Your Requirements *</label>
                  <textarea
                    id="requirements"
                    name="requirements"
                    value={formData.requirements}
                    onChange={handleChange}
                    required
                    placeholder="Describe your metal stamping requirements..."
                    rows="5"
                  ></textarea>
                </div>

                <button 
                  type="submit" 
                  className="btn btn-primary"
                  disabled={isSubmitting}
                >
                  {isSubmitting ? 'Sending...' : 'Send Request'}
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Contact;
