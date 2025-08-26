/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        // Vintage outdoors color palette
        forest: {
          50: '#f0f4f1',
          100: '#dce6df',
          200: '#b9cdc0',
          300: '#91b09a',
          400: '#6b9474',
          500: '#4f7a58',
          600: '#3d6045',
          700: '#2f4f3e', // Main brand color
          800: '#283f33',
          900: '#22342b',
        },
        earth: {
          50: '#faf8f5',
          100: '#f2ede6',
          200: '#e3d7c8',
          300: '#d1bea4',
          400: '#bc9f7e',
          500: '#a8825f',
          600: '#8b6b47',
          700: '#6b4423', // Warm earthy brown
          800: '#5a3a1f',
          900: '#4d321b',
        },
        mountain: {
          50: '#fafafa',
          100: '#f4f4f5',
          200: '#e4e4e7',
          300: '#d4d4d8',
          400: '#a1a1aa',
          500: '#a9a9a9', // Mountain gray
          600: '#71717a',
          700: '#52525b',
          800: '#3f3f46',
          900: '#27272a',
        },
        cream: '#f5f2e7', // Off-white/cream
        accent: '#c94e2b', // Accent red/orange
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', 'sans-serif'],
        display: ['Oswald', 'Montserrat Alternates', 'League Spartan', 'system-ui', 'sans-serif'],
        heading: ['Montserrat Alternates', 'Oswald', 'system-ui', 'sans-serif'],
      },
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic': 'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
        'hero-gradient': 'linear-gradient(135deg, rgba(47, 79, 62, 0.8) 0%, rgba(107, 68, 35, 0.6) 100%)',
        'vintage-texture': 'linear-gradient(45deg, rgba(245, 242, 231, 0.1) 25%, transparent 25%), linear-gradient(-45deg, rgba(245, 242, 231, 0.1) 25%, transparent 25%)',
      },
      animation: {
        'fade-in-up': 'fadeInUp 0.6s ease-out',
        'fade-in': 'fadeIn 0.8s ease-out',
        'scale-hover': 'scaleHover 0.3s ease-out',
      },
      keyframes: {
        fadeInUp: {
          '0%': {
            opacity: '0',
            transform: 'translateY(30px)'
          },
          '100%': {
            opacity: '1',
            transform: 'translateY(0)'
          }
        },
        fadeIn: {
          '0%': {
            opacity: '0'
          },
          '100%': {
            opacity: '1'
          }
        },
        scaleHover: {
          '0%': {
            transform: 'scale(1)'
          },
          '100%': {
            transform: 'scale(1.05)'
          }
        }
      },
      boxShadow: {
        'vintage': '0 4px 6px -1px rgba(47, 79, 62, 0.1), 0 2px 4px -1px rgba(47, 79, 62, 0.06)',
        'vintage-lg': '0 10px 15px -3px rgba(47, 79, 62, 0.1), 0 4px 6px -2px rgba(47, 79, 62, 0.05)',
        'vintage-xl': '0 20px 25px -5px rgba(47, 79, 62, 0.1), 0 10px 10px -5px rgba(47, 79, 62, 0.04)',
      }
    },
  },
  plugins: [],
}

