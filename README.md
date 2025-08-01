# Manga-Inspired Portfolio Website

A static, minimal yet visually appealing portfolio website designed with manga aesthetics using only black and white colors. Built with React, TypeScript, and Tailwind CSS.

## Features

- 🎨 **Manga-inspired design** with speech bubbles, panels, and comic-style elements
- ⚫ **Monochrome aesthetic** using only black and white colors
- 🌊 **Smooth animations** and transitions throughout
- 📱 **Fully responsive** design for all devices
- ♿ **Accessibility features** including reduced motion support
- 📝 **Single data file configuration** for easy customization
- 🚀 **Fast and lightweight** built with modern web technologies

## Sections

- **Hero** - Introduction with typewriter effect and character panel
- **Skills** - Technical abilities organized by category with manga-style presentation
- **Projects** - Showcased work with expandable details and action buttons
- **Experience** - Professional timeline with manga panel layout
- **Contact** - Contact form, social links, and resume download

## Customization

All content is managed through a single data file located at `src/data/portfolio.ts`. Simply update the `portfolioData` object to customize:

- Personal information
- Skills and technologies
- Project details and links
- Work experience
- Social media links
- Contact information

### Example customization:

```typescript
export const portfolioData: PortfolioData = {
  personal: {
    name: "Your Name",
    title: "Your Title",
    bio: "Your bio...",
    location: "Your Location",
    email: "your.email@example.com",
    resumeUrl: "/path-to-your-resume.pdf"
  },
  // ... rest of the configuration
};
```

## Development

### Prerequisites

- Node.js (v16 or higher)
- npm or yarn

### Getting Started

1. Clone the repository
2. Install dependencies:
   ```bash
   npm install
   ```

3. Start the development server:
   ```bash
   npm run dev
   ```

4. Open [http://localhost:5173](http://localhost:5173) in your browser

### Build for Production

```bash
npm run build
```

The built files will be in the `dist` directory, ready for deployment.

## Technology Stack

- **React 19** - UI library
- **TypeScript** - Type safety
- **Tailwind CSS 4** - Styling framework
- **Vite** - Build tool and dev server

## Design Philosophy

This portfolio embraces the visual language of manga:

- **Bold typography** with strong contrast
- **Panel-based layouts** mimicking comic book panels
- **Speech bubbles** for callouts and highlights  
- **Speed lines and effects** for dynamic elements
- **Monochrome palette** staying true to traditional manga aesthetics
- **Sharp edges and borders** creating that authentic comic book feel

## Browser Support

- Modern browsers (Chrome, Firefox, Safari, Edge)
- Mobile browsers (iOS Safari, Chrome Mobile)
- Accessibility features for screen readers

## Contributing

This is a personal portfolio template, but feel free to fork and adapt it for your own use!

## License

MIT License - feel free to use this template for your own portfolio.
