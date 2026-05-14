import React, { useState } from 'react';

const Contact = () => {
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
  };

  if (submitted) {
    return (
      <div className="contact-success">
        <h2>Thank you for reaching out!</h2>
        <p>We have received your message and will get back to you shortly.</p>
        <button onClick={() => setSubmitted(false)} className="cta-button">Send another message</button>
      </div>
    );
  }

  return (
    <div className="contact-container">
      <h1>Contact Us</h1>
      <p>Have questions? We're here to help.</p>
      <form className="contact-form" onSubmit={handleSubmit}>
        <div className="form-group">
          <label htmlFor="name">Name</label>
          <input type="text" id="name" required placeholder="Your Name" />
        </div>
        <div className="form-group">
          <label htmlFor="email">Email</label>
          <input type="email" id="email" required placeholder="Your Email" />
        </div>
        <div className="form-group">
          <label htmlFor="message">Message</label>
          <textarea id="message" rows="5" required placeholder="How can we help?"></textarea>
        </div>
        <button type="submit" className="submit-btn">Send Message</button>
      </form>
    </div>
  );
};

export default Contact;
