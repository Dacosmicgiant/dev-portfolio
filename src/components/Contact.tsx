import { useState } from 'react';
import { PortfolioData } from '../data/portfolio';

interface ContactProps {
  data: PortfolioData;
}

const Contact = ({ data }: ContactProps) => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Create mailto link with form data
    const subject = `Portfolio Contact from ${formData.name}`;
    const body = `Name: ${formData.name}\nEmail: ${formData.email}\n\nMessage:\n${formData.message}`;
    const mailtoLink = `mailto:${data.personal.email}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
    window.location.href = mailtoLink;
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const downloadResume = () => {
    const link = document.createElement('a');
    link.href = data.personal.resumeUrl;
    link.download = `${data.personal.name}-Resume.pdf`;
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  const getSocialIcon = (iconName: string) => {
    const icons: { [key: string]: string } = {
      github: '🐙',
      linkedin: '💼',
      twitter: '🐦',
      email: '📧'
    };
    return icons[iconName] || '🔗';
  };

  return (
    <section id="contact" className="py-20 bg-white relative">
      {/* Section title */}
      <div className="max-w-6xl mx-auto px-6 mb-16">
        <div className="text-center animate-on-scroll">
          <h2 className="text-5xl md:text-6xl font-black uppercase mb-4 manga-title">
            Final Boss
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Ready to start your next adventure? Let's team up and create something legendary together!
          </p>
        </div>
      </div>

      <div className="max-w-6xl mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-12">
          {/* Contact form */}
          <div className="animate-on-scroll">
            <div className="manga-panel bg-gray-50 p-8">
              <h3 className="text-3xl font-black uppercase mb-6">Send a Message</h3>
              
              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <label className="block text-sm font-bold uppercase tracking-wide mb-2">
                    Your Name
                  </label>
                  <input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleInputChange}
                    required
                    className="w-full p-3 border-2 border-black bg-white focus:outline-none focus:shadow-lg transition-shadow"
                    placeholder="Enter your name"
                  />
                </div>

                <div>
                  <label className="block text-sm font-bold uppercase tracking-wide mb-2">
                    Email Address
                  </label>
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    required
                    className="w-full p-3 border-2 border-black bg-white focus:outline-none focus:shadow-lg transition-shadow"
                    placeholder="your.email@example.com"
                  />
                </div>

                <div>
                  <label className="block text-sm font-bold uppercase tracking-wide mb-2">
                    Message
                  </label>
                  <textarea
                    name="message"
                    value={formData.message}
                    onChange={handleInputChange}
                    required
                    rows={5}
                    className="w-full p-3 border-2 border-black bg-white focus:outline-none focus:shadow-lg transition-shadow resize-none"
                    placeholder="Tell me about your project..."
                  />
                </div>

                <button type="submit" className="manga-button w-full">
                  Launch Message
                </button>
              </form>
            </div>
          </div>

          {/* Contact info and socials */}
          <div className="space-y-8 animate-on-scroll">
            {/* Direct contact */}
            <div className="manga-panel bg-gray-50 p-8">
              <h3 className="text-3xl font-black uppercase mb-6">Quick Contact</h3>
              
              <div className="space-y-4">
                <div>
                  <div className="text-sm font-bold uppercase tracking-wide text-gray-600 mb-1">
                    Email
                  </div>
                  <a 
                    href={`mailto:${data.personal.email}`}
                    className="text-lg font-semibold hover:underline"
                  >
                    {data.personal.email}
                  </a>
                </div>

                <div>
                  <div className="text-sm font-bold uppercase tracking-wide text-gray-600 mb-1">
                    Location
                  </div>
                  <div className="text-lg font-semibold">
                    {data.personal.location}
                  </div>
                </div>

                <div>
                  <div className="text-sm font-bold uppercase tracking-wide text-gray-600 mb-1">
                    Resume
                  </div>
                  <button 
                    onClick={downloadResume}
                    className="text-lg font-semibold hover:underline text-black"
                  >
                    Download CV/Resume
                  </button>
                </div>
              </div>
            </div>

            {/* Social links */}
            <div className="manga-panel bg-gray-50 p-8">
              <h3 className="text-2xl font-black uppercase mb-6">Connect</h3>
              
              <div className="grid grid-cols-2 gap-4">
                {data.socials.map((social) => (
                  <a
                    key={social.name}
                    href={social.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center p-4 border-2 border-black bg-white hover:bg-black hover:text-white transition-all group"
                  >
                    <span className="text-2xl mr-3">
                      {getSocialIcon(social.icon)}
                    </span>
                    <span className="font-semibold uppercase tracking-wide">
                      {social.name}
                    </span>
                  </a>
                ))}
              </div>
            </div>

            {/* Availability status */}
            <div className="manga-panel bg-black text-white p-8 text-center">
              <div className="text-2xl font-black uppercase mb-2">
                Status: Available
              </div>
              <div className="text-lg">
                Ready for new quests and collaborations!
              </div>
              <div className="mt-4 flex justify-center">
                <div className="w-4 h-4 bg-green-400 rounded-full animate-pulse"></div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Footer */}
      <footer className="mt-20 pt-12 border-t-3 border-black">
        <div className="max-w-6xl mx-auto px-6">
          <div className="text-center space-y-4">
            <div className="text-2xl font-black uppercase">
              {data.personal.name}
            </div>
            <p className="text-gray-600 max-w-2xl mx-auto">
              {data.personal.bio}
            </p>
            <div className="text-sm text-gray-500">
              © {new Date().getFullYear()} {data.personal.name}. Crafted with ⚡ and lots of ☕
            </div>
          </div>
        </div>
      </footer>

      {/* Background decorative elements */}
      <div className="absolute top-20 left-20 w-32 h-32 halftone opacity-10"></div>
      <div className="absolute bottom-20 right-20 w-24 h-24 halftone opacity-10"></div>
    </section>
  );
};

export default Contact;
