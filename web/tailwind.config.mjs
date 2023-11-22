/** @type {import('tailwindcss').Config} */
export default {
	content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
	theme: {
		extend: {
			colors: {
				gray: '#a7a7a7',
			}
		},
		backgroundColor: {
			'background-side-color': '#121313',
			'side-icon-color': '#a6a7a6',
		},
	},
	plugins: [],
}
