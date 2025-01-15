/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      fontFamily: {
        'perfect-dos': ['Perfect-DOS-VGA-437', 'monospace'], // fontu burada tanımlıyoruz
      },
    },
  },
  plugins: [],
};
