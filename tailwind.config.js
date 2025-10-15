/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: 'class',
  theme: {
    extend: {
      // Futuristic color palette: neon blue, emerald, charcoal, ivory
      colors: {
        // Primary neon palette
        neon: {
          blue: '#00D9FF',
          cyan: '#0FF',
          emerald: '#00FFB3',
          purple: '#B77FFF',
          pink: '#FF6EC7',
        },
        // Base colors for glassmorphism
        glass: {
          dark: 'rgba(15, 23, 42, 0.7)',
          light: 'rgba(241, 245, 249, 0.7)',
          border: 'rgba(255, 255, 255, 0.1)',
        },
        // City status colors
        city: {
          safe: '#00FFB3',
          warning: '#FFB800',
          alert: '#FF3B30',
          neutral: '#00D9FF',
        },
        // Dark theme palette
        dark: {
          900: '#0A0E1A',
          800: '#0F172A',
          700: '#1E293B',
          600: '#334155',
          500: '#475569',
        },
        // Light theme palette
        light: {
          100: '#F8FAFC',
          200: '#F1F5F9',
          300: '#E2E8F0',
          400: '#CBD5E1',
          500: '#94A3B8',
        },
      },
      // Modern typography
      fontFamily: {
        sans: ['Inter', 'SF Pro Display', '-apple-system', 'system-ui', 'sans-serif'],
        mono: ['JetBrains Mono', 'Menlo', 'Monaco', 'monospace'],
      },
      // Smooth animations
      animation: {
        'glow': 'glow 2s ease-in-out infinite alternate',
        'float': 'float 3s ease-in-out infinite',
        'slide-in': 'slideIn 0.3s ease-out',
        'fade-in': 'fadeIn 0.4s ease-out',
        'pulse-slow': 'pulse 3s cubic-bezier(0.4, 0, 0.6, 1) infinite',
      },
      keyframes: {
        glow: {
          '0%': { boxShadow: '0 0 20px rgba(0, 217, 255, 0.5)' },
          '100%': { boxShadow: '0 0 40px rgba(0, 217, 255, 0.8)' },
        },
        float: {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-10px)' },
        },
        slideIn: {
          '0%': { transform: 'translateX(-100%)', opacity: '0' },
          '100%': { transform: 'translateX(0)', opacity: '1' },
        },
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
      },
      // Glassmorphism backdrop blur
      backdropBlur: {
        xs: '2px',
      },
      // Custom box shadows for depth
      boxShadow: {
        'glow-blue': '0 0 30px rgba(0, 217, 255, 0.3)',
        'glow-emerald': '0 0 30px rgba(0, 255, 179, 0.3)',
        'glass': '0 8px 32px 0 rgba(31, 38, 135, 0.37)',
        'inner-glow': 'inset 0 0 20px rgba(0, 217, 255, 0.2)',
      },
      // Border radius for modern cards
      borderRadius: {
        '2xl': '1rem',
        '3xl': '1.5rem',
      },
    },
  },
  plugins: [],
}
