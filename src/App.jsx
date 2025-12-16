import React from 'react';
import './App.css';
import BackgroundEffects from './components/BackgroundEffects';
import Hero from './components/Hero';
import About from './components/About';
import Experience from './components/Experience';
import Education from './components/Education';
import Skills from './components/Skills';
import Projects from './components/Projects';
import Contact from './components/Contact';
import Navbar from './components/Navbar';

function App() {
  return (
    <div className="App">
      <BackgroundEffects />
      <Navbar />
      <Hero />
      <About />
      <Experience />
      <Education />
      <Skills />
      <Projects />
      <Contact />
    </div>
  );
}

export default App;

