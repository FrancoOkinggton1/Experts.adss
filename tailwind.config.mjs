/** @type {import('tailwindcss').Config} */
export default {
	content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
	theme: {
		extend: {
			colors: {
				"primary": "#f906f9",
				"background-light": "#f8f5f8",
				"background-dark": "#1a081a",
				"accent-purple": "#4a124a",
				"glass": "rgba(255, 255, 255, 0.03)",
			},
			fontFamily: {
				"display": ["Inter", "sans-serif"]
			},
		},
	},
	plugins: [],
}