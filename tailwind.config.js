/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        slate: {
          900: '#0A192F',
          800: '#112240',
          700: '#233554',
          600: '#445575',
          500: '#647596',
          400: '#8892B0',
          300: '#A8B2D1',
          200: '#CCD6F6',
          100: '#E6F1FF'
        },
        cyan: {
          400: '#64FFDA',
          300: '#84FFF0',
          500: '#44E5CC'
        },
        blue: {
          500: '#4F9CF9',
          600: '#2E7CE8'
        }
      },
      fontFamily: {
        'sans': ['Poppins', 'system-ui', 'sans-serif']
      },
      backdropBlur: {
        'xs': '2px',
        'sm': '4px',
        'md': '8px'
      },
      boxShadow: {
        'glow-cyan': '0 0 20px rgba(100, 255, 218, 0.5)',
        'glow-blue': '0 0 20px rgba(79, 156, 249, 0.5)',
      },
      animation: {
        'glow': 'glow 2s ease-in-out infinite alternate',
        'float': 'float 3s ease-in-out infinite',
      },
      keyframes: {
        glow: {
          'from': { boxShadow: '0 0 10px rgba(100, 255, 218, 0.5)' },
          'to': { boxShadow: '0 0 20px rgba(100, 255, 218, 0.8)' }
        },
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-10px)' }
        }
      }
    },
  },
  plugins: [],
};