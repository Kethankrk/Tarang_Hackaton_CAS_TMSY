/** @type {import('tailwindcss').Config} */
export default {
  content: [
		'./index.html',
		'./src/**/*.{js,ts,jsx,tsx}',
	],
  theme: {
    extend: {
      backgroundImage:{
        'signinImage':"url('https://img.freepik.com/free-vector/realistic-travel-background-with-elements_52683-77784.jpg?w=1060&t=st=1706853915~exp=1706854515~hmac=a50801a745e59b16758302fd034e7e9b53ffe8ab9a940b031735fc77fef2df43')"
      }
    },
  },
  plugins: [],
}

