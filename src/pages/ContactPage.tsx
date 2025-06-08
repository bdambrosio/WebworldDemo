import React, { useState } from 'react';
import { Mail, Send, User, MessageSquare } from 'lucide-react';
import './ContactPage.css';

const ContactPage: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    organization: '',
    interest: '',
    message: ''
  });
  const [submitStatus, setSubmitStatus] = useState('');

  const interestOptions = [
    'Research & Development',
    'Creative Applications',
    'Educational Use',
    'Therapeutic Applications',
    'Commercial Licensing',
    'Partnership Opportunities',
    'Technical Support',
    'General Inquiry'
  ];

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    // Create formatted email body
    const emailBody = `
Hello ImprovAI Team,

I'm interested in learning more about ImprovAI and its capabilities.

Contact Information:
Name: ${formData.name}
Email: ${formData.email}
Organization: ${formData.organization || 'Not specified'}

Area of Interest: ${formData.interest}

Message:
${formData.message}

Best regards,
${formData.name}
    `.trim();

    // Use encodeURIComponent for proper URL encoding
    const subject = encodeURIComponent('ImprovAI Access Request - ' + formData.interest);
    const body = encodeURIComponent(emailBody);
    
    // Open mailto link
    window.location.href = `mailto:info@tuuyi.com?subject=${subject}&body=${body}`;
    
    // Show success message
    setSubmitStatus('Thank you! Your email client should now open with a pre-filled message. Please send it to complete your inquiry.');
    
    // Clear form after a delay
    setTimeout(() => {
      setFormData({
        name: '',
        email: '',
        organization: '',
        interest: '',
        message: ''
      });
      setSubmitStatus('');
    }, 5000);
  };

  return (
    <div className="contact-page">
      <div className="contact-header">
        <div className="contact-header-content">
          <h1>Contact ImprovAI</h1>
          <p>Ready to explore the future of AI character simulation? We'd love to hear from you.</p>
        </div>
      </div>

      <div className="contact-content">
        <div className="contact-grid">
          <div className="contact-info">
            <h2>Get in Touch</h2>
            <p>Whether you're a researcher, creative professional, educator, or just curious about AI characters, we're here to help you explore ImprovAI's capabilities.</p>
            
            <div className="contact-methods">
              <div className="contact-method">
                <Mail className="contact-icon" />
                <div>
                  <h3>Email Us Directly</h3>
                  <p>info@tuuyi.com</p>
                </div>
              </div>
              <div className="contact-method">
                <User className="contact-icon" />
                <div>
                  <h3>Demo & Partnership</h3>
                  <p>Schedule a personalized demonstration or discuss partnership opportunities</p>
                </div>
              </div>
              <div className="contact-method">
                <MessageSquare className="contact-icon" />
                <div>
                  <h3>Technical Support</h3>
                  <p>Get help with implementation, integration, or technical questions</p>
                </div>
              </div>
            </div>

            <div className="use-cases">
              <h3>Perfect for:</h3>
              <ul>
                <li>AI/ML researchers exploring character simulation</li>
                <li>Game developers creating dynamic NPCs</li>
                <li>Content creators building interactive narratives</li>
                <li>Educators teaching psychology or AI concepts</li>
                <li>Therapists developing innovative treatment tools</li>
              </ul>
            </div>
          </div>

          <div className="contact-form-section">
            <form onSubmit={handleSubmit} className="contact-form">
              <h2>Send Us a Message</h2>
              
              <div className="form-row">
                <div className="form-group">
                  <label htmlFor="name">Name *</label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleInputChange}
                    required
                    placeholder="Your full name"
                  />
                </div>
                <div className="form-group">
                  <label htmlFor="email">Email *</label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    required
                    placeholder="your.email@example.com"
                  />
                </div>
              </div>

              <div className="form-group">
                <label htmlFor="organization">Organization</label>
                <input
                  type="text"
                  id="organization"
                  name="organization"
                  value={formData.organization}
                  onChange={handleInputChange}
                  placeholder="Company, University, or Institution (optional)"
                />
              </div>

              <div className="form-group">
                <label htmlFor="interest">Area of Interest *</label>
                <select
                  id="interest"
                  name="interest"
                  value={formData.interest}
                  onChange={handleInputChange}
                  required
                >
                  <option value="">Select your primary interest...</option>
                  {interestOptions.map((option) => (
                    <option key={option} value={option}>{option}</option>
                  ))}
                </select>
              </div>

              <div className="form-group">
                <label htmlFor="message">Message *</label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleInputChange}
                  required
                  rows={5}
                  placeholder="Tell us about your project, research, or how you'd like to use ImprovAI..."
                />
              </div>

              <button type="submit" className="submit-button">
                <Send size={20} />
                Send Message
              </button>

              {submitStatus && (
                <div className="status-message">
                  {submitStatus}
                </div>
              )}
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactPage; 