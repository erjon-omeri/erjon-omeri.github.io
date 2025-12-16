import React, { useEffect, useRef } from 'react';
import { FaGithub, FaExternalLinkAlt } from 'react-icons/fa';
import './Projects.css';

const Projects = () => {
  const projectsRef = useRef(null);

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

    const currentRef = projectsRef.current;
    if (currentRef) {
      observer.observe(currentRef);
    }

    return () => {
      if (currentRef) {
        observer.unobserve(currentRef);
      }
    };
  }, []);

  const projects = [
    {
      title: 'GoPlay365 - Sports Betting Platform',
      description: 'A comprehensive sports betting platform featuring live odds, real-time updates, multiple betting markets, and secure payment integration. Built with modern web technologies for optimal performance and user experience.',
      technologies: ['Angular', 'TypeScript', 'Angular Material', 'RxJS'],
      github: 'https://github.com',
      demo: 'https://goplay365.com',
      image: '⚽'
    },
  ];

  return (
    <section id="projects" className="projects" ref={projectsRef}>
      <div className="container">
        <h2 className="section-title">
          <span className="title-number">06.</span>
          <span className="title-text">Projects</span>
          <span className="title-line"></span>
        </h2>
        <div className="projects-grid">
          {projects.map((project, index) => (
            <div key={index} className="project-card">
              <div className="project-image">
                <span className="project-emoji">{project.image}</span>
                <div className="project-overlay">
                  <div className="project-links">
                    <a 
                      href={project.github} 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="project-link"
                      aria-label="GitHub"
                    >
                      <FaGithub />
                    </a>
                    <a 
                      href={project.demo} 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="project-link"
                      aria-label="Live Demo"
                    >
                      <FaExternalLinkAlt />
                    </a>
                  </div>
                </div>
              </div>
              <div className="project-content">
                <h3 className="project-title">{project.title}</h3>
                <p className="project-description">{project.description}</p>
                <div className="project-technologies">
                  {project.technologies.map((tech, techIndex) => (
                    <span key={techIndex} className="tech-tag">{tech}</span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;

