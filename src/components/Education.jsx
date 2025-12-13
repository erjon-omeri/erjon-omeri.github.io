import React, { useEffect, useRef } from 'react';
import './Education.css';

const Education = () => {
  const educationRef = useRef(null);

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

    const currentRef = educationRef.current;
    if (currentRef) {
      observer.observe(currentRef);
    }

    return () => {
      if (currentRef) {
        observer.unobserve(currentRef);
      }
    };
  }, []);

  const educations = [
    {
      degree: 'Professional Master',
      field: 'Mathematic and Computer Engineering',
      period: '2015 - 2017',
      description: 'Advanced studies in mathematics and computer engineering, focusing on software development and computational methods.'
    },
    {
      degree: 'Bachelor',
      field: 'Mathematic and Computer Engineering',
      period: '2012 - 2015',
      description: 'Fundamental studies in mathematics and computer engineering, building a strong foundation in algorithms, data structures, and software development.'
    }
  ];

  return (
    <section id="education" className="education" ref={educationRef}>
      <div className="container">
        <h2 className="section-title">
          <span className="title-number">03.</span>
          <span className="title-text">Education</span>
          <span className="title-line"></span>
        </h2>
        <div className="education-grid">
          {educations.map((edu, index) => (
            <div key={index} className="education-card">
              <div className="card-icon">
                <span>🎓</span>
              </div>
              <h3 className="degree">{edu.degree}</h3>
              <h4 className="field">{edu.field}</h4>
              <span className="period">{edu.period}</span>
              <p className="description">{edu.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Education;

