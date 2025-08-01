/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        'inter': ['Inter', 'sans-serif'],
      },
      borderWidth: {
        '3': '3px',
      },
      animation: {
        'panel-slide': 'panelSlide 0.6s ease-out forwards',
        'fade-in-up': 'fadeInUp 0.8s ease-out forwards',
        'scale-in': 'scaleIn 0.5s ease-out forwards',
        'draw-line': 'drawLine 1s ease-out forwards',
        'text-reveal': 'textReveal 1.5s ease-out forwards',
        'speed-line': 'speedLineMove 2s infinite',
        'loading-dots': 'loadingDots 1.5s infinite',
        'comic-zoom': 'comicZoom 0.6s ease-out forwards',
        'shaking-text': 'shakingText 0.5s ease-in-out infinite',
        'pulse-glow': 'pulseGlow 0.5s ease-in-out',
        'slide-left': 'slideInFromLeft 0.8s ease-out forwards',
        'slide-right': 'slideInFromRight 0.8s ease-out forwards',
        'floating': 'floatingElement 3s ease-in-out infinite',
      },
      keyframes: {
        panelSlide: {
          from: { transform: 'translateX(-100%)', opacity: '0' },
          to: { transform: 'translateX(0)', opacity: '1' }
        },
        fadeInUp: {
          from: { transform: 'translateY(30px)', opacity: '0' },
          to: { transform: 'translateY(0)', opacity: '1' }
        },
        scaleIn: {
          from: { transform: 'scale(0.8)', opacity: '0' },
          to: { transform: 'scale(1)', opacity: '1' }
        },
        drawLine: {
          from: { width: '0' },
          to: { width: '100%' }
        },
        textReveal: {
          from: { width: '0' },
          to: { width: '100%' }
        },
        speedLineMove: {
          '0%': { left: '-100%' },
          '100%': { left: '100%' }
        },
        loadingDots: {
          '0%, 20%': { content: '""' },
          '40%': { content: '"."' },
          '60%': { content: '".."' },
          '80%, 100%': { content: '"..."' }
        },
        comicZoom: {
          '0%': { transform: 'scale(0.5) rotate(-5deg)', opacity: '0' },
          '50%': { transform: 'scale(1.1) rotate(2deg)' },
          '100%': { transform: 'scale(1) rotate(0deg)', opacity: '1' }
        },
        shakingText: {
          '0%, 100%': { transform: 'translateX(0)' },
          '25%': { transform: 'translateX(-2px)' },
          '75%': { transform: 'translateX(2px)' }
        },
        pulseGlow: {
          '0%, 100%': { boxShadow: '0 0 5px rgba(0, 0, 0, 0.3)' },
          '50%': { boxShadow: '0 0 20px rgba(0, 0, 0, 0.6), 0 0 30px rgba(0, 0, 0, 0.4)' }
        },
        slideInFromLeft: {
          from: { transform: 'translateX(-100%)', opacity: '0' },
          to: { transform: 'translateX(0)', opacity: '1' }
        },
        slideInFromRight: {
          from: { transform: 'translateX(100%)', opacity: '0' },
          to: { transform: 'translateX(0)', opacity: '1' }
        },
        floatingElement: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-10px)' }
        }
      }
    },
  },
  plugins: [],
}
