import { useEffect, useState } from 'react';
import { portfolioData } from './data/portfolio';
import Hero from './components/Hero';
import Skills from './components/Skills';
import Projects from './components/Projects';
import Experience from './components/Experience';
import Contact from './components/Contact';
import Navigation from './components/Navigation';

function App() {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Simulate loading time for manga effect
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 2000);

    return () => clearTimeout(timer);
  }, []);

  useEffect(() => {
    // Intersection Observer for scroll animations
    const observerCallback = (entries: IntersectionObserverEntry[]) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('animated');
        }
      });
    };

    const observer = new IntersectionObserver(observerCallback, {
      threshold: 0.1,
      rootMargin: '0px 0px -50px 0px'
    });

    const elements = document.querySelectorAll('.animate-on-scroll');
    elements.forEach((el) => observer.observe(el));

    return () => observer.disconnect();
  }, [isLoading]);

  if (isLoading) {
    return (
      <div className="fixed inset-0 bg-white flex items-center justify-center z-50">
        <div className="text-center">
          <div className="text-6xl font-black mb-4 manga-title">
            LOADING
          </div>
          <div className="text-xl loading-dots">Please wait</div>
          <div className="w-32 h-1 bg-black mx-auto mt-4 relative overflow-hidden">
            <div className="absolute top-0 left-0 h-full bg-black animate-pulse w-full"></div>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-white text-black">
      <Navigation />
      
      {/* Main content */}
      <main>
        <Hero data={portfolioData} />
        <Skills data={portfolioData.skills} />
        <Projects data={portfolioData.projects} />
        <Experience data={portfolioData.experience} />
        <Contact data={portfolioData} />
      </main>

      {/* Manga-style decorative elements */}
      <div className="fixed top-0 right-0 w-32 h-32 halftone pointer-events-none z-10"></div>
      <div className="fixed bottom-0 left-0 w-24 h-24 halftone pointer-events-none z-10"></div>
    </div>
  );
}

export default App;
