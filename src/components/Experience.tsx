import { Experience } from '../data/portfolio';

interface ExperienceProps {
  data: Experience[];
}

const ExperienceComponent = ({ data }: ExperienceProps) => {
  return (
    <section id="experience" className="py-20 bg-gray-50 relative">
      {/* Section title */}
      <div className="max-w-6xl mx-auto px-6 mb-16">
        <div className="text-center animate-on-scroll">
          <h2 className="text-5xl md:text-6xl font-black uppercase mb-4 manga-title">
            Journey
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Every manga protagonist has a backstory. Here's mine - the chapters that shaped me into the developer I am today
          </p>
        </div>
      </div>

      {/* Timeline */}
      <div className="max-w-4xl mx-auto px-6">
        <div className="relative">
          {/* Vertical timeline line */}
          <div className="absolute left-1/2 transform -translate-x-1/2 w-1 h-full bg-black"></div>

          {data.map((experience, index) => (
            <div 
              key={`${experience.company}-${experience.position}`}
              className={`flex items-center mb-16 animate-on-scroll ${
                index % 2 === 0 ? 'justify-start' : 'justify-end'
              }`}
              style={{ animationDelay: `${index * 0.3}s` }}
            >
              {/* Experience card */}
              <div className={`manga-panel bg-white p-6 w-full md:w-5/12 relative ${
                index % 2 === 0 ? 'mr-auto' : 'ml-auto'
              }`}>
                {/* Timeline connector */}
                <div className={`absolute top-1/2 transform -translate-y-1/2 w-8 h-1 bg-black ${
                  index % 2 === 0 ? '-right-8' : '-left-8'
                }`}></div>
                
                {/* Timeline dot */}
                <div className={`absolute top-1/2 transform -translate-y-1/2 w-6 h-6 bg-black border-4 border-white rounded-full ${
                  index % 2 === 0 ? '-right-11' : '-left-11'
                }`}></div>

                {/* Duration badge */}
                <div className="inline-block bg-black text-white px-3 py-1 text-sm font-bold uppercase tracking-wide mb-4">
                  {experience.duration}
                </div>

                {/* Company and position */}
                <h3 className="text-2xl font-black uppercase mb-2">
                  {experience.position}
                </h3>
                <h4 className="text-xl font-semibold text-gray-600 mb-4">
                  {experience.company}
                </h4>

                {/* Description */}
                <p className="text-gray-700 mb-4 leading-relaxed">
                  {experience.description}
                </p>

                {/* Technologies */}
                <div className="space-y-2">
                  <h5 className="font-bold uppercase tracking-wide text-sm">Technologies:</h5>
                  <div className="flex flex-wrap gap-2">
                    {experience.technologies.map((tech) => (
                      <span 
                        key={tech}
                        className="border border-black bg-white text-black px-2 py-1 text-xs font-semibold uppercase hover:bg-black hover:text-white transition-colors"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Manga-style decoration */}
                <div className={`absolute ${
                  index % 2 === 0 ? 'top-4 right-4' : 'top-4 left-4'
                } w-8 h-8`}>
                  <div className="w-full h-1 bg-black mb-1"></div>
                  <div className="w-3/4 h-1 bg-black mb-1"></div>
                  <div className="w-1/2 h-1 bg-black"></div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Career stats */}
      <div className="max-w-6xl mx-auto px-6 mt-20 animate-on-scroll">
        <div className="grid md:grid-cols-3 gap-8">
          <div className="manga-panel bg-white p-6 text-center">
            <div className="text-4xl font-black mb-2">{data.length}+</div>
            <div className="text-lg font-semibold uppercase tracking-wide">Companies</div>
          </div>
          <div className="manga-panel bg-white p-6 text-center">
            <div className="text-4xl font-black mb-2">
              {new Date().getFullYear() - 2019}+
            </div>
            <div className="text-lg font-semibold uppercase tracking-wide">Years Coding</div>
          </div>
          <div className="manga-panel bg-white p-6 text-center">
            <div className="text-4xl font-black mb-2">50+</div>
            <div className="text-lg font-semibold uppercase tracking-wide">Projects</div>
          </div>
        </div>
      </div>

      {/* Background decorative elements */}
      <div className="absolute top-40 right-20 w-24 h-24 halftone opacity-20"></div>
      <div className="absolute bottom-40 left-20 w-16 h-16 halftone opacity-20"></div>
    </section>
  );
};

export default ExperienceComponent;
