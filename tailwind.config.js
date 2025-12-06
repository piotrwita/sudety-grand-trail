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
          DEFAULT: '#6b4423',
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
          DEFAULT: '#a9a9a9',
        },
        accent: {
          50: '#fef2f2',
          100: '#fee2e2',
          200: '#fecaca',
          300: '#fca5a5',
          400: '#f87171',
          500: '#c94e2b', // Main accent
          600: '#b91c1c',
          700: '#991b1b',
          800: '#7f1d1d',
          900: '#651e1e',
          hover: '#c94e2bcc',
          DEFAULT: '#c94e2b',
        },
        cream: {
          50: '#fefefe', // Almost white
          100: '#fdfcfa', // Very light cream
          200: '#faf8f3', // Light cream
          300: '#f7f4ed', // Soft cream
          400: '#f6f3e9', // Medium-light cream
          500: '#f5f2e7', // Main cream (original)
          600: '#ede8db', // Slightly darker cream
          700: '#e0d9c8', // Warm cream
          800: '#d1c7b0', // Dark cream
          900: '#bfb396', // Darkest cream
          hover: '#f5f2e7e6', // Cream with opacity
          DEFAULT: '#f5f2e7',
        },
        // Page-specific theme colors
        // HOME - Neutral/Basic theme (uses existing mountain/cream)
        home: {
          primary: '#52525b', // mountain-700
          secondary: '#71717a', // mountain-600
          accent: '#a1a1aa', // mountain-400
          bg: '#f5f2e7', // cream-500
          text: '#27272a', // mountain-900
        },
        // HALL OF FAME - Gold/Treasure theme
        gold: {
          50: '#fffbeb',
          100: '#fef3c7',
          200: '#fde68a',
          300: '#fcd34d',
          400: '#fbbf24', // Main gold
          500: '#f59e0b', // Rich gold
          600: '#d97706', // Dark gold
          700: '#b45309', // Deep gold
          800: '#92400e',
          900: '#78350f',
          DEFAULT: '#fbbf24',
        },
        // TRAIL - Brown/Earth theme (uses existing earth)
        trail: {
          primary: '#6b4423', // earth-700
          secondary: '#8b6b47', // earth-600
          accent: '#a8825f', // earth-500
          bg: '#4d321b', // earth-900
          text: '#f5f2e7', // cream-500
        },
        // SZCZYTY - Green/Forest theme (uses existing forest)
        szczyty: {
          primary: '#2f4f3e', // forest-700
          secondary: '#3d6045', // forest-600
          accent: '#4f7a58', // forest-500
          bg: '#22342b', // forest-900
          text: '#f5f2e7', // cream-500
        },
        // LIVE - Orange theme
        orange: {
          50: '#fff7ed',
          100: '#ffedd5',
          200: '#fed7aa',
          300: '#fdba74',
          400: '#fb923c', // Main orange
          500: '#f97316', // Rich orange
          600: '#ea580c', // Dark orange
          700: '#c2410c', // Deep orange
          800: '#9a3412',
          900: '#7c2d12',
          DEFAULT: '#fb923c',
        },
      },
      fontFamily: {
        sans: ['var(--font-inter)', 'system-ui', 'sans-serif'],
        display: [
          'var(--font-oswald)',
          'var(--font-montserrat-alternates)',
          'system-ui',
          'sans-serif',
        ],
      },
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
        'hero-gradient':
          'linear-gradient(135deg, rgba(47, 79, 62, 0.8) 0%, rgba(107, 68, 35, 0.6) 100%)',
        'vintage-texture':
          'linear-gradient(45deg, rgba(245, 242, 231, 0.1) 25%, transparent 25%), linear-gradient(-45deg, rgba(245, 242, 231, 0.1) 25%, transparent 25%)',
        // Page-specific hero gradients
        'hero-home':
          'linear-gradient(135deg, rgba(82, 82, 91, 0.9) 0%, rgba(39, 39, 42, 0.95) 100%)',
        'hero-halloffame':
          'linear-gradient(135deg, rgba(217, 119, 6, 0.9) 0%, rgba(120, 53, 15, 0.95) 100%)',
        'hero-trail':
          'linear-gradient(135deg, rgba(107, 68, 35, 0.9) 0%, rgba(77, 50, 27, 0.95) 100%)',
        'hero-szczyty':
          'linear-gradient(135deg, rgba(47, 79, 62, 0.9) 0%, rgba(34, 52, 43, 0.95) 100%)',
        'hero-live':
          'linear-gradient(135deg, rgba(251, 146, 60, 0.9) 0%, rgba(194, 65, 12, 0.95) 100%)',
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
            transform: 'translateY(30px)',
          },
          '100%': {
            opacity: '1',
            transform: 'translateY(0)',
          },
        },
        fadeIn: {
          '0%': {
            opacity: '0',
          },
          '100%': {
            opacity: '1',
          },
        },
        scaleHover: {
          '0%': {
            transform: 'scale(1)',
          },
          '100%': {
            transform: 'scale(1.05)',
          },
        },
      },
      boxShadow: {
        vintage:
          '0 4px 6px -1px rgba(47, 79, 62, 0.1), 0 2px 4px -1px rgba(47, 79, 62, 0.06)',
        'vintage-lg':
          '0 10px 15px -3px rgba(47, 79, 62, 0.1), 0 4px 6px -2px rgba(47, 79, 62, 0.05)',
        'vintage-xl':
          '0 20px 25px -5px rgba(47, 79, 62, 0.1), 0 10px 10px -5px rgba(47, 79, 62, 0.04)',
        // Page-specific shadows
        'gold-glow': '0 0 40px rgba(251, 191, 36, 0.4)',
        'gold-glow-lg': '0 0 60px rgba(251, 191, 36, 0.5)',
        'brown-glow': '0 0 40px rgba(139, 69, 19, 0.4)',
        'brown-glow-lg': '0 0 60px rgba(139, 69, 19, 0.5)',
        'green-glow': '0 0 40px rgba(22, 163, 74, 0.4)',
        'green-glow-lg': '0 0 60px rgba(22, 163, 74, 0.5)',
        'orange-glow': '0 0 40px rgba(251, 146, 60, 0.4)',
        'orange-glow-lg': '0 0 60px rgba(251, 146, 60, 0.5)',
      },
    },
  },
  plugins: [],
};
