/** @type {import('tailwindcss').Config} */
export default {
    darkMode: ["class"],
    content: ["./src/**/*.{js,jsx,ts,tsx}", "./index.html"],
  theme: {
  	extend: {
  		colors: {
  			pink: 'var(--pink)',
  			grey: 'var(--grey)',
  			'grey-light': 'var(--grey-light)',
  			red: 'var(--red)',
  			lightGray: 'var(--grey-light)'
  		},
  		fontFamily: {
  			roboto: 'var(--font-family)',
  			second: 'var(--second-family)',
  			third: 'var(--third-family)'
  		},
  		screens: {
  			vsm: '400px',
  			'5xl': '1600px'
  		},
  		borderRadius: {
  			lg: 'var(--radius)',
  			md: 'calc(var(--radius) - 2px)',
  			sm: 'calc(var(--radius) - 4px)'
  		}
  	}
  },
  plugins: [require("tailwindcss-animate")],
};
