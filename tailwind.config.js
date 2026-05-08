module.exports = {
  content: ['./index.html', './src/**/*.{js,jsx}'],
  theme: {
    extend: {
      colors: {
        blue: { DEFAULT: '#1B4F8A', hover: '#163F70', tint: '#EEF4FB' },
        red: { DEFAULT: '#C0392B', hover: '#A93226' },
        cream: { DEFAULT: '#F5F0E8', warm: '#FAFAF8' },
        border: '#E0D9D0',
        secondary: '#555555',
        muted: '#888888',
      },
      fontFamily: {
        heading: ['"Playfair Display"', 'serif'],
        body: ['"Source Sans 3"', 'sans-serif'],
      },
    },
  },
  plugins: [],
}
