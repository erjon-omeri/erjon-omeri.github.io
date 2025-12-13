import React, { useEffect, useRef } from 'react';
import { 
  SiAngular, 
  SiTypescript, 
  SiJavascript, 
  SiHtml5, 
  SiCss3,
  SiReact,
  SiNodedotjs,
  SiGit,
  SiSass,
  SiBootstrap,
  SiMui,
  SiTailwindcss,
  SiRedux,
  SiWebpack,
  SiNpm
} from 'react-icons/si';
import './Skills.css';

const Skills = () => {
  const skillsRef = useRef(null);

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

    const currentRef = skillsRef.current;
    if (currentRef) {
      observer.observe(currentRef);
    }

    return () => {
      if (currentRef) {
        observer.unobserve(currentRef);
      }
    };
  }, []);

  const technologies = [
    { name: 'Angular', icon: SiAngular, color: '#DD0031' },
    { name: 'React', icon: SiReact, color: '#61DAFB' },
    { name: 'TypeScript', icon: SiTypescript, color: '#3178C6' },
    { name: 'JavaScript', icon: SiJavascript, color: '#F7DF1E' },
    { name: 'HTML5', icon: SiHtml5, color: '#E34F26' },
    { name: 'CSS3', icon: SiCss3, color: '#1572B6' },
    { name: 'Angular Material', icon: SiMui, color: '#007FFF' },
    { name: 'Node.js', icon: SiNodedotjs, color: '#339933' },
    { name: 'Git', icon: SiGit, color: '#F05032' },
    { name: 'SASS', icon: SiSass, color: '#CC6699' },
    { name: 'Bootstrap', icon: SiBootstrap, color: '#7952B3' },
    { name: 'Tailwind CSS', icon: SiTailwindcss, color: '#06B6D4' },
    { name: 'Redux', icon: SiRedux, color: '#764ABC' },
    { name: 'Webpack', icon: SiWebpack, color: '#8DD6F9' },
    { name: 'NPM', icon: SiNpm, color: '#CB3837' }
  ];

  return (
    <section id="skills" className="skills" ref={skillsRef}>
      <div className="container">
        <h2 className="section-title">
          <span className="title-number">04.</span>
          <span className="title-text">Skills & Technologies</span>
          <span className="title-line"></span>
        </h2>
        <div className="skills-grid">
          {technologies.map((tech, index) => {
            const IconComponent = tech.icon;
            return (
              <div key={index} className="skill-card">
                <div className="skill-icon-wrapper">
                  <IconComponent className="skill-icon" style={{ color: tech.color }} />
                </div>
                <span className="skill-name">{tech.name}</span>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Skills;

