import React, { useEffect, useRef } from 'react';
import { FaEnvelope, FaPhone, FaLinkedin, FaGithub } from 'react-icons/fa';
import './Contact.css';

const Contact = () => {
  const contactRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('animate');
          }
        });
      },
      { threshold: 0.2 }
    );

    const currentRef = contactRef.current;
    if (currentRef) {
      observer.observe(currentRef);
    }

    return () => {
      if (currentRef) {
        observer.unobserve(currentRef);
      }
    };
  }, []);

  const contactInfo = [
    {
      icon: FaEnvelope,
      label: 'Email',
      value: 'erjonomeri@gmail.com',
      link: 'mailto:erjonomeri@gmail.com',
      color: '#EA4335'
    },
    {
      icon: FaPhone,
      label: 'Phone',
      value: '+355 68 525 6338',
      link: 'tel:+355685256338',
      color: '#34A853'
    }
  ];

  const socialLinks = [
    {
      icon: FaLinkedin,
      label: 'LinkedIn',
      link: 'https://linkedin.com/in/erjon-omeri-67bb09109',
      color: '#0077B5'
    },
    {
      icon: FaGithub,
      label: 'GitHub',
      link: 'https://github.com/erjon-omeri',
      color: '#333'
    }
  ];

  return (
    <section id="contact" className="contact" ref={contactRef}>
      <div className="container">
        <h2 className="section-title">
          <span className="title-number">07.</span>
          <span className="title-text">Get In Touch</span>
          <span className="title-line"></span>
        </h2>
        <div className="contact-content">
          <div className="contact-text">
            <p className="contact-description">
              I'm always open to discussing new projects, creative ideas, or 
              opportunities to be part of your visions. Feel free to reach out!
            </p>
          </div>
          <div className="contact-info">
            {contactInfo.map((info, index) => {
              const IconComponent = info.icon;
              return (
                <a 
                  key={index}
                  href={info.link}
                  className="contact-item"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <div className="contact-icon-wrapper" style={{ background: `${info.color}20` }}>
                    <IconComponent className="contact-icon" style={{ color: info.color }} />
                  </div>
                  <div className="contact-details">
                    <span className="contact-label">{info.label}</span>
                    <span className="contact-value">{info.value}</span>
                  </div>
                </a>
              );
            })}
          </div>
          <div className="social-links">
            {socialLinks.map((social, index) => {
              const IconComponent = social.icon;
              return (
                <a
                  key={index}
                  href={social.link}
                  className="social-link"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={social.label}
                >
                  <IconComponent className="social-icon" style={{ color: social.color }} />
                </a>
              );
            })}
          </div>
        </div>
        <div className="footer">
          <p>© {new Date().getFullYear()} Erjon Omeri. All rights reserved.</p>
        </div>
      </div>
    </section>
  );
};

export default Contact;

