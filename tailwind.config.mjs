/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./src/app/**/*.{ts,tsx}",
    "./src/components/**/*.{ts,tsx}"
  ],
  theme: {
    extend: {
      colors: {
        sgBg: "#050816",
        sgCard: "#0b1020",
        sgAccent: "#22c55e",
        sgDanger: "#ef4444",
        sgMuted: "#6b7280"
      }
    }
  },
  plugins: []
};
