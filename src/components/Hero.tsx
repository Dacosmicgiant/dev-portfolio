import { useEffect, useState } from 'react';
import { PortfolioData } from '../data/portfolio';

interface HeroProps {
  data: PortfolioData;
}

const Hero = ({ data }: HeroProps) => {
  const [displayedText, setDisplayedText] = useState('');
  const [currentTextIndex, setCurrentTextIndex] = useState(0);
  
  const texts = [
    data.hero.greeting,
    data.personal.title,
    data.hero.tagline
  ];

  useEffect(() => {
    const currentText = texts[currentTextIndex];
    let charIndex = 0;

    const typeTimer = setInterval(() => {
      if (charIndex < currentText.length) {
        setDisplayedText(currentText.slice(0, charIndex + 1));
        charIndex++;
      } else {
        clearInterval(typeTimer);
        setTimeout(() => {
          if (currentTextIndex < texts.length - 1) {
            setCurrentTextIndex(currentTextIndex + 1);
            setDisplayedText('');
          }
        }, 2000);
      }
    }, 100);

    return () => clearInterval(typeTimer);
  }, [currentTextIndex]);

  const scrollToProjects = () => {
    const element = document.getElementById('projects');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const downloadResume = () => {
    const link = document.createElement('a');
    link.href = data.personal.resumeUrl;
    link.download = `${data.personal.name}-Resume.pdf`;
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <section id="hero" className="min-h-screen flex items-center justify-center relative overflow-hidden pt-20">
      {/* Background decorative elements */}
      <div className="absolute inset-0 speed-lines opacity-20"></div>
      
      <div className="max-w-6xl mx-auto px-6 relative z-10">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Text Content */}
          <div className="space-y-8 animate-on-scroll">
            {/* Speech bubble with typing effect */}
            <div className="speech-bubble max-w-md">
              <div className="text-xl font-semibold min-h-[2rem]">
                {displayedText}
                <span className="animate-pulse">|</span>
              </div>
            </div>

            {/* Main title */}
            <div className="space-y-4">
              <h1 className="text-6xl md:text-8xl font-black uppercase tracking-tight manga-title">
                {data.personal.name}
              </h1>
              <div className="text-2xl md:text-3xl font-bold uppercase tracking-wide text-gray-600">
                {data.personal.title}
              </div>
            </div>

            {/* Description */}
            <p className="text-lg text-gray-700 leading-relaxed max-w-lg">
              {data.hero.description}
            </p>

            {/* Action buttons */}
            <div className="flex flex-wrap gap-4">
              <button 
                onClick={scrollToProjects}
                className="manga-button"
              >
                View My Work
              </button>
              <button 
                onClick={downloadResume}
                className="border-3 border-black bg-white text-black px-6 py-3 font-semibold uppercase tracking-wide hover:bg-black hover:text-white transition-all duration-300 hover:translate-x-1 hover:translate-y-1"
              >
                Download CV
              </button>
            </div>
          </div>

          {/* Character illustration panel */}
          <div className="flex justify-center animate-on-scroll">
            <div className="manga-panel w-80 h-96 flex items-center justify-center bg-gradient-to-b from-gray-100 to-white">
              <div className="text-center space-y-4">
                {/* Avatar placeholder */}
                <div className="w-32 h-32 bg-black rounded-full mx-auto mb-4 relative overflow-hidden">
                  <div className="absolute inset-0 bg-white" style={{
                    clipPath: 'polygon(30% 0%, 70% 0%, 100% 30%, 100% 70%, 70% 100%, 30% 100%, 0% 70%, 0% 30%)'
                  }}></div>
                  <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-white text-2xl font-black">
                    {data.personal.name.split(' ').map(n => n[0]).join('')}
                  </div>
                </div>
                
                {/* Location */}
                <div className="text-sm font-medium text-gray-600 uppercase tracking-wide">
                  📍 {data.personal.location}
                </div>
                
                {/* Status */}
                <div className="inline-block bg-black text-white px-3 py-1 text-xs font-bold uppercase tracking-wide">
                  Available for work
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 border-2 border-black rounded-full flex justify-center">
          <div className="w-1 h-3 bg-black rounded-full mt-2 animate-pulse"></div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
