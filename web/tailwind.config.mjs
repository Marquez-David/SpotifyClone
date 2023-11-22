/** @type {import('tailwindcss').Config} */
export default {
	content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
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


			'side-icon-color': '#a6a7a6',
			'background-card': '#181919',
		},
	},
	plugins: [],
}
