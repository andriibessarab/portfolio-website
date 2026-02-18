/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,jsx,ts,tsx}", "./site-data.js", "./project-data.js"],
  theme: {
    extend: {
      colors: {
        blueprint: "#3B82F6",
        terminal: "#10B981",
        void: "#0F172A"
      },
      boxShadow: {
        glow: "0 0 0 1px rgba(59,130,246,.45), 0 0 24px rgba(59,130,246,.30)"
      },
      keyframes: {
        pulseGlow: {
          "0%, 100%": {
            boxShadow: "0 0 0 1px rgba(59,130,246,.45), 0 0 18px rgba(59,130,246,.25)"
          },
          "50%": {
            boxShadow: "0 0 0 1px rgba(59,130,246,.85), 0 0 28px rgba(59,130,246,.55)"
          }
        }
      },
      animation: {
        pulseGlow: "pulseGlow 2.2s ease-in-out infinite"
      }
    }
  },
  plugins: []
};
