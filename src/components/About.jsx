import React, { useEffect, useRef } from 'react';
import './About.css';

const About = () => {
  const aboutRef = useRef(null);

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

    const currentRef = aboutRef.current;
    if (currentRef) {
      observer.observe(currentRef);
    }

    return () => {
      if (currentRef) {
        observer.unobserve(currentRef);
      }
    };
  }, []);

  return (
    <section id="about" className="about" ref={aboutRef}>
      <div className="container">
        <h2 className="section-title">
          <span className="title-number">01.</span>
          <span className="title-text">About Me</span>
          <span className="title-line"></span>
        </h2>
        <div className="about-content">
          <div className="about-text">
            <p className="about-description">
              I'm a passionate <strong>Frontend Web Developer</strong> with extensive experience 
              in building modern, responsive web applications. I specialize in creating 
              user-friendly interfaces and seamless user experiences using cutting-edge 
              technologies.
            </p>
            <p className="about-description">
              With a strong foundation in mathematics and computer engineering, I bring 
              analytical thinking and problem-solving skills to every project. I'm 
              dedicated to writing clean, maintainable code and staying up-to-date with 
              the latest web development trends and best practices.
            </p>
            <div className="about-highlights">
              <div className="highlight-item">
                <span className="highlight-icon">💼</span>
                <span>Professional Experience</span>
              </div>
              <div className="highlight-item">
                <span className="highlight-icon">🎓</span>
                <span>Strong Educational Background</span>
              </div>
              <div className="highlight-item">
                <span className="highlight-icon">🚀</span>
                <span>Modern Tech Stack</span>
              </div>
              <div className="highlight-item">
                <span className="highlight-icon">✨</span>
                <span>Clean & Efficient Code</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;

