import React, { useEffect, useState } from 'react';
import Header from './components/Header';
import Background from './components/Background';
import Hero from './components/Hero';
import About from './components/About';
import Skills from './components/Skills';
import Projects from './components/Projects';
import Experience from './components/Experience';
import Education from './components/Education';
import Contact from './components/Contact';
import Footer from './components/Footer';

function App() {
  const [isLoading, setIsLoading] = useState(true);
  const [progress, setProgress] = useState(12);

  useEffect(() => {
    let settled = false;
    let hideTimer;

    const tickProgress = window.setInterval(() => {
      setProgress((current) => {
        if (settled) {
          return current;
        }

        return current >= 88 ? current : current + Math.max(2, Math.round((92 - current) / 5));
      });
    }, 70);

    const finishLoading = () => {
      if (settled) {
        return;
      }

      settled = true;
      window.clearInterval(tickProgress);
      setProgress(100);
      hideTimer = window.setTimeout(() => {
        setIsLoading(false);
      }, 450);
    };

    if (document.readyState === 'complete') {
      finishLoading();
    } else {
      window.addEventListener('load', finishLoading, { once: true });
    }

    return () => {
      settled = true;
      window.clearInterval(tickProgress);
      window.clearTimeout(hideTimer);
      window.removeEventListener('load', finishLoading);
    };
  }, []);

  return (
    <div className="min-h-screen bg-transparent text-gray-900 dark:text-white transition-colors duration-300 overflow-x-hidden">
      <Background />
      <div className="portfolio-background" aria-hidden="true">
        <div className="portfolio-background__gradient portfolio-background__gradient--one"></div>
        <div className="portfolio-background__gradient portfolio-background__gradient--two"></div>
        <div className="portfolio-background__gradient portfolio-background__gradient--three"></div>
        <div className="portfolio-background__mesh"></div>
        <div className="portfolio-background__line"></div>
      </div>
      <div
        className={`portfolio-loader ${isLoading ? 'portfolio-loader--visible' : 'portfolio-loader--hidden'}`}
        aria-hidden={!isLoading}
      >
        <div className="portfolio-loader__backdrop"></div>
        <div className="portfolio-loader__grid"></div>
        <div className="portfolio-loader__content">
          <div className="portfolio-loader__brand-wrap">
            <div className="portfolio-loader__brand-ring"></div>
            <div className="portfolio-loader__brand">NS</div>
          </div>
          <p className="portfolio-loader__eyebrow">Loading portfolio</p>
          <h1 className="portfolio-loader__title">Grandhi Nithyasai</h1>
          <p className="portfolio-loader__subtitle">Preparing the experience...</p>
          <div className="portfolio-loader__bar">
            <span className="portfolio-loader__bar-fill" style={{ width: `${progress}%` }}></span>
          </div>
          <p className="portfolio-loader__progress">{progress}%</p>
        </div>
      </div>
      <Header />
      <Hero />
      <About />
      <Education />
      <Skills />
      <Experience />
      <Projects />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;
