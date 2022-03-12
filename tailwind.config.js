module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        'login-background':"url('../src/assets/model-3.png'), linear-gradient(#a16207, #713f12)",
        'register-background':"url('../src/assets/model-2.png'), linear-gradient(#eec185, #c27984)",
        'slider-1': "url('/src/assets/bg-1.jpg')",
        'slider-2': "url('/src/assets/table.jpg')",
        'slider-2': "url('/src/assets/chair.jpg')",
      },
      animation: {
        'bg': 'change-bg 1s infinite'
      },
      keyframes: {
        'change-bg': {
          '0%': {
            "background-image": "url('/src/assets/sofa.jpg')",
          },
          '50%': {
            "background-image": "url('/src/assets/table.jpg')",
          }
        }
      }
    },
  },
  plugins: [],
}
