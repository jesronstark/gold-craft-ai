/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          DEFAULT: '#C9A227',
          light: '#E5C158',
          dark: '#A6841C',
        },
        accent: '#D4AF37', // Metallic Gold
        dark: {
          DEFAULT: '#0A0A0A',
          lighter: '#121212',
          card: '#1E1E1E',
        },
        gold: {
          50: '#FFFDE7',
          100: '#FFF9C4',
          200: '#FFF59D',
          300: '#FFF176',
          400: '#FFEE58',
          500: '#FFEB3B',
          600: '#FDD835',
          700: '#FBC02D',
          800: '#F9A825',
          900: '#F57F17',
        }
      },
      backgroundImage: {
        'gold-gradient': 'linear-gradient(135deg, #BF953F, #FCF6BA, #B38728, #FBF5B7, #AA771C)',
        'premium-dark': 'radial-gradient(circle at center, #1E1E1E 0%, #0A0A0A 100%)',
      },
      fontFamily: {
        playfair: ['Playfair Display', 'serif'],
        inter: ['Inter', 'sans-serif'],
      },
      boxShadow: {
        'premium': '0 4px 30px rgba(0, 0, 0, 0.5)',
        'gold-glow': '0 0 15px rgba(201, 162, 39, 0.4)',
      }
    },
  },
  plugins: [],
}
