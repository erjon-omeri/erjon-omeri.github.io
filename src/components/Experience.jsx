import React, { useEffect, useRef } from 'react';
import './Experience.css';

const Experience = () => {
  const experienceRef = useRef(null);

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

    const currentRef = experienceRef.current;
    if (currentRef) {
      observer.observe(currentRef);
    }

    return () => {
      if (currentRef) {
        observer.unobserve(currentRef);
      }
    };
  }, []);

  const experiences = [
    {
      company: 'B2Tech',
      position: 'Frontend Web Developer',
      period: '2025 - Now',
      description: 'Currently working as a Frontend Web Developer, building modern web applications and contributing to innovative projects.',
      current: true
    },
    {
      company: 'Blacksoft',
      position: 'Frontend Web Developer',
      period: '2019 - 2025',
      description: 'Developed and maintained frontend applications using modern web technologies. Collaborated with cross-functional teams to deliver high-quality software solutions.',
      current: false
    }
  ];

  return (
    <section id="experience" className="experience" ref={experienceRef}>
      <div className="container">
        <h2 className="section-title">
          <span className="title-number">02.</span>
          <span className="title-text">Experience</span>
          <span className="title-line"></span>
        </h2>
        <div className="experience-timeline">
          {experiences.map((exp, index) => (
            <div key={index} className="timeline-item">
              <div className="timeline-marker">
                <div className="marker-dot"></div>
                {index < experiences.length - 1 && <div className="marker-line"></div>}
              </div>
              <div className="timeline-content">
                <div className="timeline-header">
                  <h3 className="company-name">{exp.company}</h3>
                  {exp.current && <span className="current-badge">Current</span>}
                </div>
                <h4 className="position-title">{exp.position}</h4>
                <span className="period">{exp.period}</span>
                <p className="description">{exp.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;

