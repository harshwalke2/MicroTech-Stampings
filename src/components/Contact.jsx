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

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState(null);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleCardClick = (action) => {
    switch(action) {
      case 'address':
        window.open('https://www.google.com/maps/place/Microtech+Stampings/@18.4840218,74.0109754,17z/data=!3m1!4b1!4m6!3m5!1s0x3bc2e96b4b5acbff:0xf545d623c1219792!8m2!3d18.4840218!4d74.0109754!16s%2Fg%2F11y0z9tm6c?hl=en-IN&entry=ttu&g_ep=EgoyMDI2MDEyMS4wIKXMDSoASAFQAw%3D%3D', '_blank');
        break;
      case 'phone':
        window.location.href = 'tel:9404123171';
        break;
      case 'email':
        window.location.href = 'mailto:microstampings@gmail.com';
        break;
      case 'linkedin':
        window.open('https://www.linkedin.com/in/aryaan-attar-86a548220', '_blank');
        break;
      default:
        break;
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus(null);

    // Validate required fields
    if (!formData.name || !formData.email || !formData.requirements) {
      setSubmitStatus('error');
      setIsSubmitting(false);
      return;
    }

    try {
      const response = await fetch('https://formspree.io/f/mreqjjzb', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          name: formData.name,
          email: formData.email,
          company: formData.company || 'Not provided',
          phone: formData.phone || 'Not provided',
          requirements: formData.requirements,
        })
      });

      if (response.ok) {
        setSubmitStatus('success');
        setFormData({
          name: '',
          email: '',
          company: '',
          phone: '',
          requirements: ''
        });
        setTimeout(() => {
          setSubmitStatus(null);
        }, 3000);
      } else {
        setSubmitStatus('error');
      }
    } catch (error) {
      console.error('Form submission error:', error);
      setSubmitStatus('error');
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
              <div className="contact-card" onClick={() => handleCardClick('address')} style={{cursor: 'pointer'}}>
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

              <div className="contact-card" onClick={() => handleCardClick('phone')} style={{cursor: 'pointer'}}>
                <div className="card-icon">📞</div>
                <div className="card-body">
                  <h5 className="card-title">Phone</h5>
                  <p className="card-text">
                    <a href="tel:9404123171">9404123171</a>
                  </p>
                </div>
              </div>

              <div className="contact-card" onClick={() => handleCardClick('email')} style={{cursor: 'pointer'}}>
                <div className="card-icon">✉️</div>
                <div className="card-body">
                  <h5 className="card-title">Email</h5>
                  <p className="card-text">
                    <a href="mailto:microstampings@gmail.com">microstampings@gmail.com</a>
                  </p>
                </div>
              </div>

              

              <div className="contact-card" onClick={() => handleCardClick('linkedin')} style={{cursor: 'pointer'}}>
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
                {submitStatus === 'success' && (
                  <div className="form-status-message success">
                    Details Sent. We will contact you shortly.
                  </div>
                )}
                {submitStatus === 'error' && (
                  <div className="form-status-message error">
                    The details were not sent. Please contact us on other platforms.
                  </div>
                )}
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
