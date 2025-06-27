/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        border: "hsl(var(--border))",
        input: "hsl(var(--input))",
        ring: "hsl(var(--ring))",
        background: "hsl(var(--background))",
        foreground: "hsl(var(--foreground))",
        primary: {
          DEFAULT: "hsl(var(--primary))",
          foreground: "hsl(var(--primary-foreground))",
        },
        secondary: {
          DEFAULT: "hsl(var(--secondary))",
          foreground: "hsl(var(--secondary-foreground))",
        },
        destructive: {
          DEFAULT: "hsl(var(--destructive))",
          foreground: "hsl(var(--destructive-foreground))",
        },
        muted: {
          DEFAULT: "hsl(var(--muted))",
          foreground: "hsl(var(--muted-foreground))",
        },
        accent: {
          DEFAULT: "hsl(var(--accent))",
          foreground: "hsl(var(--accent-foreground))",
        },
        popover: {
          DEFAULT: "hsl(var(--popover))",
          foreground: "hsl(var(--popover-foreground))",
        },
        card: {
          DEFAULT: "hsl(var(--card))",
          foreground: "hsl(var(--card-foreground))",
        },
        wood: {
          50: '#fdf8f3',
          100: '#f7e6d3',
          200: '#edc9a3',
          300: '#dfa55c',
          400: '#d4853a',
          500: '#c1692f',
          600: '#a6522a',
          700: '#8a4127',
          800: '#703625',
          900: '#5c2f21',
        },
        bark: {
          50: '#f9f7f4',
          100: '#ede6d8',
          200: '#dbc8b0',
          300: '#c5a382',
          400: '#b1815a',
          500: '#9e6741',
          600: '#885537',
          700: '#6f452f',
          800: '#5c3a29',
          900: '#4d3025',
        },
      },
      borderRadius: {
        lg: "var(--radius)",
        md: "calc(var(--radius) - 2px)",
        sm: "calc(var(--radius) - 4px)",
        organic: "0.75rem 0.5rem 0.75rem 0.5rem",
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', 'sans-serif'],
        display: ['Inter', 'system-ui', 'sans-serif'],
      },
      backgroundImage: {
        'wood-grain': 'repeating-linear-gradient(90deg, transparent, transparent 2px, rgba(139, 69, 19, 0.1) 2px, rgba(139, 69, 19, 0.1) 4px), repeating-linear-gradient(0deg, transparent, transparent 1px, rgba(160, 82, 45, 0.05) 1px, rgba(160, 82, 45, 0.05) 2px)',
        'bark-texture': 'radial-gradient(circle at 25% 25%, rgba(101, 67, 33, 0.1) 1px, transparent 1px), radial-gradient(circle at 75% 75%, rgba(139, 69, 19, 0.1) 1px, transparent 1px)',
      },
    },
  },
  plugins: [],
}