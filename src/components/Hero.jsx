import React, { useEffect, useRef } from 'react';
import './Hero.css';

const Hero = () => {
  const heroRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('animate');
          }
        });
      },
      { threshold: 0.1 }
    );

    const currentRef = heroRef.current;
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
    <section id="home" className="hero" ref={heroRef}>
      <div className="hero-content">
        <div className="hero-text">
          <h1 className="hero-name">
            <span className="greeting">Hello, I'm</span>
            <span className="name">Erjon Omeri</span>
          </h1>
          <h2 className="hero-title">
            <span className="title-text">Frontend Web Developer</span>
            <span className="title-cursor">|</span>
          </h2>
          <p className="hero-description">
            Crafting beautiful and functional web experiences with modern technologies
          </p>
          <div className="hero-buttons">
            <a href="#contact" className="btn btn-primary">Get In Touch</a>
            <a href="#about" className="btn btn-secondary">Learn More</a>
          </div>
        </div>
        <div className="hero-image">
          <div className="image-placeholder">
            <div className="placeholder-content">
              <img src='\assets\profile.png' alt='img' className='profile-img' />
            </div>
            <div className="image-glow"></div>
          </div>
        </div>
      </div>
      <div className="scroll-indicator">
        <div className="scroll-arrow"></div>
      </div>
    </section>
  );
};

export default Hero;

