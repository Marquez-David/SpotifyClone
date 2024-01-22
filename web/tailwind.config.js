module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        gray: '#a7a7a7',
        green: '#1fd660'
      }
    },
    backgroundColor: {
      'background-base': '#121313',
      'background-highlight': '#1a1a1a',
      'background-elevated-base': '#242424',
      'background-elevated-highlight': '#2a2a2a',
      'background-green': '#1ed760',


      'side-icon-color': '#a6a7a6',
      'background-card': '#181919',
    },
  },
  plugins: [],
}
