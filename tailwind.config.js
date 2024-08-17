/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    screens:{
      'tablet':'950px',
      'small_tablet':'600px',
      'mobile':'500px',
      'small_mobile':'300px'
    },
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      fontFamily: {
        'dm-sans': ['"DM Sans"', 'sans-serif'], 
      },
      fontWeight: {
        // Add specific font weights if necessary
        'normal': 400,
        'medium': 500,
        'bold': 800,
      },
    },
  },
  plugins: [],
};
