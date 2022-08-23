module.exports = {
  content: ['node_modules/daisyui/dist/**/*.js', 'node_modules/react-daisyui/dist/**/*.js'],
  safelist: [
    {
      pattern: /./
    },
  ],
  theme: {
    extend: {},
  },
  plugins: [require('daisyui')],
}
