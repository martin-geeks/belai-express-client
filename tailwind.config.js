/** @type {import('tailwindcss').Config} */
const withMT = require('@material-tailwind/react/utils/withMT'); 

module.exports = withMT({
  content: [
    './node_modules/flowbite-react/**/*.js',
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
     
  },
  plugins: [],
}
});
