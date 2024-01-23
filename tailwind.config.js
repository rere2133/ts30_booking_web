/** @type {import('tailwindcss').Config} */
import { img_desktop_host } from "./src/utils/imageSource";
export default {
  content: [
    "./index.html",
    "./src/**/*.{vue,js,ts,jsx,tsx}",
  ],
  prefix: 'tw-',
  theme: {
    screens: {
      'sm': '600px',
      'md': '960px',
      'lg': '1280px',
      'xl': '1920px',
      '2xl': '2560px',
    },
    extend: {
      colors: {
        'primary': {
          120: '#7B6651',
          100: '#BF9D7D',
          80: '#AE9984',
          60: '#E1D1C2',
          40: '#F1EAE4',
          tint: 'FAF7F5'
        },
        'success': {
          120: '#299F65',
          100: '#52DD7E',
          20: '#BCFBBD',
          10: '#E8FEE7',
        },
        'info': {
          120: '#1D66AC',
          100: '#3BADEF',
          20: '#B1EFFD',
          10: '#E6FBFE',
        },
        'error': {
          120: '#C22538',
          100: '#DA3E51',
          20: '#F5CCD1',
          10: '#FDECEF',
        },
        'black': {
          100: '#000000',
          80: '#4B4B4B',
          60: '#909090',
          40: '#ECECEC',
          10: '#F9F9F9',
          bg: '#140F0A'
        },
      },
      backgroundImage: {
        'member-hero': `url("${img_desktop_host}/hero.png")`,
        'desktop-bottom-line': `url("@/assets/svg/desktop_bottom_line.svg")`,
        'food1': `url("/imgs/web/food1.png")`,
        'food2': `url("/imgs/web/food2.png")`,
        'food3': `url("/imgs/web/food3.png")`,
        'food4': `url("/imgs/web/food4.png")`,
        'food5': `url("/imgs/web/food5.png")`,
      },

    },
  },
  plugins: [],
  safelist: [
    'tw-bg-food1',
    'tw-bg-food2',
    'tw-bg-food3',
    'tw-bg-food4',
    'tw-bg-food5',
  ]
}

