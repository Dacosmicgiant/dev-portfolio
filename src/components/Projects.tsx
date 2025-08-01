import { useState } from 'react';
import portfolio from '../data/portfolio';

interface ProjectsProps {
  data: typeof portfolio.projects;
}

const Projects = ({ data }: ProjectsProps) => {
  const [selectedProject, setSelectedProject] = useState<number | null>(null);

  const openLink = (url: string) => {
    window.open(url, '_blank');
  };

  return (
    <section id="projects" className="py-20 bg-white relative">
      {/* Section title */}
      <div className="max-w-6xl mx-auto px-6 mb-16">
        <div className="text-center animate-on-scroll">
          <h2 className="text-5xl md:text-6xl font-black uppercase mb-4 manga-title">
            Epic Quests
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Every great manga hero has legendary battles. Here are mine - crafted with code instead of swords
          </p>
        </div>
      </div>

      {/* Projects grid */}
      <div className="max-w-6xl mx-auto px-6">
        <div className="grid lg:grid-cols-3 gap-8">
          {data.map((project, index) => (
            <div 
              key={project.title}
              className="manga-panel bg-white p-6 cursor-pointer animate-on-scroll group"
              style={{ animationDelay: `${index * 0.2}s` }}
              onClick={() => setSelectedProject(selectedProject === index ? null : index)}
            >
              {/* Project image placeholder */}
              <div className="w-full h-48 bg-gradient-to-br from-gray-100 to-gray-200 mb-6 relative overflow-hidden">
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="text-6xl font-black text-gray-400">
                    {project.title.split(' ').map(word => word[0]).join('')}
                  </div>
                </div>
                
                {/* Hover effect */}
                <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-10 transition-all duration-300 flex items-center justify-center">
                  <div className="text-white font-black text-lg opacity-0 group-hover:opacity-100 transition-opacity">
                    CLICK TO EXPAND
                  </div>
                </div>
              </div>

              {/* Project title */}
              <h3 className="text-2xl font-black uppercase mb-3 group-hover:scale-105 transition-transform">
                {project.title}
              </h3>

              {/* Short description */}
              <p className="text-gray-600 mb-4 line-clamp-3">
                {project.description}
              </p>

              {/* Technologies */}
              <div className="flex flex-wrap gap-2 mb-4">
                {project.technologies.slice(0, 3).map((tech) => (
                  <span 
                    key={tech}
                    className="bg-black text-white px-2 py-1 text-xs font-bold uppercase tracking-wide"
                  >
                    {tech}
                  </span>
                ))}
                {project.technologies.length > 3 && (
                  <span className="text-gray-500 text-xs">
                    +{project.technologies.length - 3} more
                  </span>
                )}
              </div>

              {/* Expand indicator */}
              <div className="text-center">
                <div className={`transform transition-transform ${
                  selectedProject === index ? 'rotate-180' : ''
                }`}>
                  ▼
                </div>
              </div>

              {/* Expanded content */}
              {selectedProject === index && (
                <div className="mt-6 pt-6 border-t-2 border-black animate-on-scroll">
                  {/* Full description */}
                  <p className="text-gray-700 mb-4">
                    {project.description}
                  </p>

                  {/* All technologies */}
                  <div className="mb-6">
                    <h4 className="font-bold mb-2 uppercase tracking-wide">Technologies Used:</h4>
                    <div className="flex flex-wrap gap-2">
                      {project.technologies.map((tech) => (
                        <span 
                          key={tech}
                          className="border-2 border-black bg-white text-black px-2 py-1 text-xs font-semibold uppercase"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* Action buttons */}
                  <div className="flex gap-3">
                    {project.githubUrl && (
                      <button 
                        onClick={(e) => {
                          e.stopPropagation();
                          openLink(project.githubUrl!);
                        }}
                        className="flex-1 border-2 border-black bg-white text-black py-2 px-4 font-semibold uppercase text-sm hover:bg-black hover:text-white transition-all"
                      >
                        View Code
                      </button>
                    )}
                    {project.liveUrl && (
                      <button 
                        onClick={(e) => {
                          e.stopPropagation();
                          openLink(project.liveUrl!);
                        }}
                        className="flex-1 manga-button text-sm py-2"
                      >
                        Live Demo
                      </button>
                    )}
                  </div>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>

      {/* Call to action */}
      <div className="max-w-4xl mx-auto px-6 mt-16 text-center animate-on-scroll">
        <div className="speech-bubble inline-block">
          <p className="text-lg font-semibold">
            Want to see more projects or discuss a collaboration?
          </p>
        </div>
        <div className="mt-6">
          <button 
            onClick={() => {
              const element = document.getElementById('contact');
              if (element) element.scrollIntoView({ behavior: 'smooth' });
            }}
            className="manga-button"
          >
            Let's Talk!
          </button>
        </div>
      </div>

      {/* Background decorative elements */}
      <div className="absolute top-32 left-10 w-20 h-20 halftone opacity-20"></div>
      <div className="absolute bottom-32 right-10 w-16 h-16 halftone opacity-20"></div>
    </section>
  );
};

export default Projects;
