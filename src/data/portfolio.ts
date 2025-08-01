// Portfolio data types
export interface SocialLink {
  name: string;
  url: string;
  icon: string;
}

export interface Project {
  title: string;
  description: string;
  technologies: string[];
  githubUrl?: string;
  liveUrl?: string;
  imageUrl?: string;
}

export interface Experience {
  company: string;
  position: string;
  duration: string;
  description: string;
  technologies: string[];
}

export interface Skill {
  category: string;
  items: string[];
}

export interface PortfolioData {
  personal: {
    name: string;
    title: string;
    bio: string;
    location: string;
    email: string;
    resumeUrl: string;
    avatar?: string;
  };
  hero: {
    greeting: string;
    tagline: string;
    description: string;
  };
  skills: Skill[];
  projects: Project[];
  experience: Experience[];
  socials: SocialLink[];
}

// Portfolio data
export const portfolioData: PortfolioData = {
  personal: {
    name: "Vedant Vankar",
    title: "Full Stack Developer",
    bio: "Passionate full-stack developer who loves creating digital experiences that matter. When not coding, you'll find me reading manga or exploring new technologies.",
    location: "Earth",
    email: "vedant@example.com",
    resumeUrl: "/resume.pdf",
    avatar: "/avatar.jpg"
  },
  hero: {
    greeting: "Hello, World!",
    tagline: "I craft digital stories through code",
    description: "Like a manga artist brings characters to life, I transform ideas into interactive experiences using modern web technologies."
  },
  skills: [
    {
      category: "Frontend",
      items: ["React", "TypeScript", "Next.js", "Tailwind CSS", "Vue.js", "Angular"]
    },
    {
      category: "Backend", 
      items: ["Node.js", "Express", "Python", "Django", "PostgreSQL", "MongoDB"]
    },
    {
      category: "DevOps",
      items: ["Docker", "AWS", "Vercel", "Git", "CI/CD", "Linux"]
    },
    {
      category: "Tools",
      items: ["VS Code", "Figma", "Postman", "Jest", "Webpack", "Vite"]
    }
  ],
  projects: [
    {
      title: "E-commerce Platform",
      description: "A full-stack e-commerce solution with real-time inventory management, payment processing, and admin dashboard.",
      technologies: ["React", "Node.js", "PostgreSQL", "Stripe", "Redis"],
      githubUrl: "https://github.com/vedant/ecommerce",
      liveUrl: "https://ecommerce-demo.com"
    },
    {
      title: "Task Management App",
      description: "Collaborative task management application with real-time updates, team collaboration features, and advanced filtering.",
      technologies: ["Next.js", "TypeScript", "Prisma", "WebSocket", "Tailwind"],
      githubUrl: "https://github.com/vedant/task-manager",
      liveUrl: "https://tasks-demo.com"
    },
    {
      title: "AI Chat Interface",
      description: "Modern chat interface for AI assistants with markdown support, code highlighting, and conversation management.",
      technologies: ["React", "Python", "FastAPI", "OpenAI API", "MongoDB"],
      githubUrl: "https://github.com/vedant/ai-chat",
      liveUrl: "https://ai-chat-demo.com"
    }
  ],
  experience: [
    {
      company: "TechCorp Inc.",
      position: "Senior Full Stack Developer",
      duration: "2022 - Present",
      description: "Led development of microservices architecture serving 1M+ users. Mentored junior developers and established coding standards.",
      technologies: ["React", "Node.js", "AWS", "Docker", "PostgreSQL"]
    },
    {
      company: "StartupXYZ",
      position: "Frontend Developer",
      duration: "2020 - 2022", 
      description: "Built responsive web applications from design mockups. Improved application performance by 40% through optimization.",
      technologies: ["Vue.js", "TypeScript", "Webpack", "SASS", "REST APIs"]
    },
    {
      company: "Digital Agency",
      position: "Junior Developer",
      duration: "2019 - 2020",
      description: "Developed client websites and learned full-stack development. Collaborated with designers and project managers.",
      technologies: ["HTML", "CSS", "JavaScript", "PHP", "MySQL"]
    }
  ],
  socials: [
    {
      name: "GitHub",
      url: "https://github.com/vedant-vankar",
      icon: "github"
    },
    {
      name: "LinkedIn", 
      url: "https://linkedin.com/in/vedant-vankar",
      icon: "linkedin"
    },
    {
      name: "Twitter",
      url: "https://twitter.com/vedant_vankar",
      icon: "twitter"
    },
    {
      name: "Email",
      url: "mailto:vedant@example.com",
      icon: "email"
    }
  ]
};
