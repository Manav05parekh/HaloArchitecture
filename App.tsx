import React, { useState, useEffect } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Services from './components/Services';
import Portfolio from './components/Portfolio';
import BeforeAfterSliderComponent from './components/BeforeAfterSlider';
import VideoPlayer from './components/VideoPlayer';
import SketchfabViewer from './components/SketchFabViewer';
import TestimonialsAndServices from "./components/TestimonialsAndServices";
import Team from './components/Team';
import LocationsSlider from './components/LocationsSlider';
import Contact from './components/Contact';
import Footer from './components/Footer';

const App: React.FC = () => {
  const [isDarkMode, setIsDarkMode] = useState<boolean>(false);

  useEffect(() => {
    const root = window.document.documentElement;
    if (isDarkMode) {
      root.classList.add('dark');
    } else {
      root.classList.remove('dark');
    }
  }, [isDarkMode]);

  const toggleDarkMode = () => {
    setIsDarkMode((prev) => !prev);
  };

  return (
    <div className="min-h-screen bg-white dark:bg-gray-900 text-gray-900 dark:text-white">
      <Navbar isDarkMode={isDarkMode} toggleDarkMode={toggleDarkMode} />
      <Hero />
      <About />
      <Services />
      <Portfolio />
      <LocationsSlider />
      <BeforeAfterSliderComponent />
      <VideoPlayer />
      <SketchfabViewer />
      <TestimonialsAndServices />
      <Team />
      <Contact />
      <Footer />
    </div>
  );
};

export default App;