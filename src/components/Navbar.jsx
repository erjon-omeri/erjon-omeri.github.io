import React, { useState, useEffect } from 'react';
import './Navbar.css';

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState('home');

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
      
      const sections = ['home', 'about', 'experience', 'education', 'skills', 'projects', 'contact'];
      const scrollPosition = window.scrollY;
      const viewportHeight = window.innerHeight;
      const threshold = viewportHeight * 0.3; // 30% from top of viewport
      
      let currentSection = 'home';
      let maxVisible = 0;
      
      // Check each section to find which one is most visible
      sections.forEach((section) => {
        const element = document.getElementById(section);
        if (element) {
          const rect = element.getBoundingClientRect();
          const elementTop = rect.top;
          const elementBottom = rect.bottom;
          
          // Calculate how much of the section is visible in the viewport
          const visibleTop = Math.max(0, -elementTop);
          const visibleBottom = Math.max(0, elementBottom - viewportHeight);
          const visibleHeight = rect.height - visibleTop - visibleBottom;
          
          // If section is near the top of viewport (within threshold)
          if (elementTop <= threshold && elementBottom > threshold) {
            if (visibleHeight > maxVisible) {
              maxVisible = visibleHeight;
              currentSection = section;
            }
          }
        }
      });
      
      // Special case: if we're at the very top, always set home
      if (scrollPosition < 100) {
        currentSection = 'home';
      }
      
      setActiveSection(currentSection);
    };

    // Initial check
    handleScroll();
    
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  return (
    <nav className={`navbar ${isScrolled ? 'scrolled' : ''}`}>
      <div className="nav-container">
        <div className="nav-logo" onClick={() => scrollToSection('home')}>
          <span className="logo-text">EO</span>
        </div>
        <ul className="nav-menu">
          <li>
            <a 
              href="#home" 
              className={activeSection === 'home' ? 'active' : ''}
              onClick={(e) => { e.preventDefault(); scrollToSection('home'); }}
            >
              Home
            </a>
          </li>
          <li>
            <a 
              href="#about" 
              className={activeSection === 'about' ? 'active' : ''}
              onClick={(e) => { e.preventDefault(); scrollToSection('about'); }}
            >
              About
            </a>
          </li>
          <li>
            <a 
              href="#experience" 
              className={activeSection === 'experience' ? 'active' : ''}
              onClick={(e) => { e.preventDefault(); scrollToSection('experience'); }}
            >
              Experience
            </a>
          </li>
          <li>
            <a 
              href="#education" 
              className={activeSection === 'education' ? 'active' : ''}
              onClick={(e) => { e.preventDefault(); scrollToSection('education'); }}
            >
              Education
            </a>
          </li>
          <li>
            <a 
              href="#skills" 
              className={activeSection === 'skills' ? 'active' : ''}
              onClick={(e) => { e.preventDefault(); scrollToSection('skills'); }}
            >
              Skills
            </a>
          </li>
          <li>
            <a 
              href="#projects" 
              className={activeSection === 'projects' ? 'active' : ''}
              onClick={(e) => { e.preventDefault(); scrollToSection('projects'); }}
            >
              Projects
            </a>
          </li>
          <li>
            <a 
              href="#contact" 
              className={activeSection === 'contact' ? 'active' : ''}
              onClick={(e) => { e.preventDefault(); scrollToSection('contact'); }}
            >
              Contact
            </a>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;

