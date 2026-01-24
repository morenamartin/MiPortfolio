/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: "class",
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
 
    // Or if using `src` directory:
    "./src/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          bg: 'var(--bg-primary)',
          text: 'var(--text-primary)',
        },
        secondary: {
          bg: 'var(--bg-secondary)',
          text: 'var(--text-secondary)',
        },
        tertiary: {
          bg: 'var(--bg-tertiary)',
          text: 'var(--text-tertiary)',
        },
        accent: {
          primary: 'var(--accent-primary)',
          secondary: 'var(--accent-secondary)',
        },
        border: 'var(--border-color)',
      }
    },
  },
  plugins: [],
}

