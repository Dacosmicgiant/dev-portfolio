import { Skill } from '../data/portfolio';

interface SkillsProps {
  data: Skill[];
}

const Skills = ({ data }: SkillsProps) => {
  return (
    <section id="skills" className="py-20 bg-gray-50 relative">
      {/* Section title */}
      <div className="max-w-6xl mx-auto px-6 mb-16">
        <div className="text-center animate-on-scroll">
          <h2 className="text-5xl md:text-6xl font-black uppercase mb-4 manga-title">
            Arsenal
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Like a manga hero's special abilities, these are the tools and technologies I've mastered
          </p>
        </div>
      </div>

      {/* Skills grid */}
      <div className="max-w-6xl mx-auto px-6">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {data.map((skillCategory, index) => (
            <div 
              key={skillCategory.category}
              className="manga-panel p-6 bg-white animate-on-scroll"
              style={{ animationDelay: `${index * 0.2}s` }}
            >
              {/* Category header */}
              <div className="text-center mb-6">
                <h3 className="text-2xl font-black uppercase tracking-wide border-b-2 border-black inline-block pb-2">
                  {skillCategory.category}
                </h3>
              </div>

              {/* Skills list */}
              <div className="space-y-3">
                {skillCategory.items.map((skill, skillIndex) => (
                  <div 
                    key={skill}
                    className="flex items-center group hover:scale-105 transition-transform"
                    style={{ animationDelay: `${(index * 0.2) + (skillIndex * 0.1)}s` }}
                  >
                    {/* Skill bullet */}
                    <div className="w-3 h-3 bg-black transform rotate-45 mr-3 group-hover:rotate-90 transition-transform"></div>
                    
                    {/* Skill name */}
                    <span className="font-semibold text-gray-800 group-hover:text-black transition-colors">
                      {skill}
                    </span>
                  </div>
                ))}
              </div>

              {/* Decorative manga lines */}
              <div className="mt-6 pt-4 border-t border-gray-200">
                <div className="flex justify-center space-x-1">
                  <div className="w-2 h-8 bg-black transform -skew-x-12"></div>
                  <div className="w-1 h-6 bg-gray-400 transform -skew-x-12"></div>
                  <div className="w-2 h-8 bg-black transform -skew-x-12"></div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Power level indicator */}
      <div className="max-w-4xl mx-auto px-6 mt-16 animate-on-scroll">
        <div className="manga-panel p-8 bg-white text-center">
          <h3 className="text-2xl font-black uppercase mb-4">Power Level</h3>
          <div className="flex items-center justify-center space-x-4">
            <span className="text-lg font-semibold">Full Stack Development:</span>
            <div className="flex space-x-1">
              {[...Array(5)].map((_, i) => (
                <div 
                  key={i} 
                  className="w-8 h-8 bg-black transform rotate-45"
                  style={{ 
                    animationDelay: `${i * 0.2}s`,
                    animation: 'scaleIn 0.5s ease-out forwards'
                  }}
                ></div>
              ))}
            </div>
            <span className="text-xl font-black">MAX!</span>
          </div>
        </div>
      </div>

      {/* Background decorative elements */}
      <div className="absolute top-20 right-20 w-16 h-16 halftone opacity-30"></div>
      <div className="absolute bottom-20 left-20 w-12 h-12 halftone opacity-30"></div>
    </section>
  );
};

export default Skills;
