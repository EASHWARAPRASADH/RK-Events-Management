/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        maroon: {
          50: '#fdf2f3',
          100: '#fce7e8',
          200: '#f9d2d6',
          300: '#f4b0b7',
          400: '#ec838e',
          500: '#e15668',
          600: '#cd3549',
          700: '#b02438',
          800: '#800020',
          900: '#7a1f37',
        },
        gold: {
          50: '#fffdf0',
          100: '#fffadb',
          200: '#fff2b6',
          300: '#ffe781',
          400: '#ffd43b',
          500: '#D4AF37',
          600: '#cd9934',
          700: '#a67c2a',
          800: '#8b6914',
          900: '#755610',
        }
      },
      fontFamily: {
        'serif': ['Playfair Display', 'serif'],
        'sans': ['Inter', 'sans-serif'],
      },
      animation: {
        'fade-in': 'fadeIn 0.6s ease-in-out',
        'slide-up': 'slideUp 0.8s ease-out',
        'float': 'float 3s ease-in-out infinite',
        'glow': 'glow 2s ease-in-out infinite alternate',
        'shimmer': 'shimmer 3s ease-in-out infinite',
        'loading-bar': 'loadingBar 4s ease-in-out forwards',
        'float-particle': 'floatParticle 4s ease-in-out infinite',
      },
      keyframes: {
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        slideUp: {
          '0%': { opacity: '0', transform: 'translateY(30px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-10px)' },
        },
        glow: {
          '0%': { 
            boxShadow: '0 0 20px rgba(212, 175, 55, 0.5), 0 0 40px rgba(212, 175, 55, 0.3), 0 0 60px rgba(212, 175, 55, 0.1)' 
          },
          '100%': { 
            boxShadow: '0 0 30px rgba(212, 175, 55, 0.8), 0 0 60px rgba(212, 175, 55, 0.5), 0 0 90px rgba(212, 175, 55, 0.3)' 
          },
        },
        shimmer: {
          '0%': { backgroundPosition: '-200% center' },
          '100%': { backgroundPosition: '200% center' },
        },
        loadingBar: {
          '0%': { width: '0%' },
          '100%': { width: '100%' },
        },
        floatParticle: {
          '0%': { 
            transform: 'translateY(100vh) translateX(0px) rotate(0deg)',
            opacity: '0'
          },
          '10%': { opacity: '1' },
          '90%': { opacity: '1' },
          '100%': { 
            transform: 'translateY(-100vh) translateX(100px) rotate(360deg)',
            opacity: '0'
          },
        }
      },
      backgroundImage: {
        'shimmer': 'linear-gradient(90deg, transparent, rgba(255,255,255,0.4), transparent)',
      },
      backgroundSize: {
        'shimmer': '200% 100%',
      }
    },
  },
  plugins: [],
};