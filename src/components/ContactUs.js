import React, { useState } from 'react';
import './ContactUs.css';
import image01 from './love.jpg'


const ContactUs = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    subject: '',
    message: ''
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
    alert('Thank you for your message! We will get back to you soon.');
    setFormData({
      name: '',
      email: '',
      phone: '',
      subject: '',
      message: ''
    });
  };

  return (
    <section id="contact" className="contact-us">
      <h2 className="contact-heading">CONTACT US</h2>
      <div className="contact-content">
        <div className="contact-info-section">
          <div className="contact-image">
            <div className="contact-image-placeholder">
              <img src={image01} alt="Couple in Car" />
            </div>
          </div>
          <div className="contact-details">
            <div className="contact-item">
              <h3>Email</h3>
              <p>ameeshasanthusa@gmail.com</p>
              <p>amora@gmail.com</p>
            </div>
            <div className="contact-item">
              <h3>Telephone</h3>
              <p>077 112 6124</p>
              <p>078 822 4121</p>
            </div>
          </div>
        </div>
      </div>
      <div className="contact-form-section">
        <h2 className="form-heading">LET ME KNOW</h2>
        <form className="contact-form" onSubmit={handleSubmit}>
          <div className="form-row">
            <div className="form-group">
              <input
                type="text"
                name="name"
                placeholder="Name"
                value={formData.name}
                onChange={handleChange}
                required
              />
            </div>
            <div className="form-group">
              <input
                type="email"
                name="email"
                placeholder="Email"
                value={formData.email}
                onChange={handleChange}
                required
              />
            </div>
          </div>
          <div className="form-row">
            <div className="form-group">
              <input
                type="tel"
                name="phone"
                placeholder="Phone"
                value={formData.phone}
                onChange={handleChange}
                required
              />
            </div>
            <div className="form-group">
              <input
                type="text"
                name="subject"
                placeholder="Subject"
                value={formData.subject}
                onChange={handleChange}
                required
              />
            </div>
          </div>
          <div className="form-group full-width">
            <textarea
              name="message"
              placeholder="Message..."
              value={formData.message}
              onChange={handleChange}
              rows="6"
              required
            ></textarea>
          </div>
        </form>
      </div>
      <div className="cta-section">
        <h2 className="cta-heading">WE CREATE SOMETHING BEAUTIFUL</h2>
        <button type="submit" className="cta-button" onClick={handleSubmit}>
          Connect Us
        </button>
      </div>
    </section>
  );
};

export default ContactUs;
