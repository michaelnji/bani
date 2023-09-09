/** @type {import('tailwindcss').Config}*/
const config = {
	content: ['./src/**/*.{html,js,svelte,ts}'],

	theme: {
		extend: {}
	},

	plugins: [require('daisyui')],
	daisyui: {
		themes: [
			{
				bani: {
					primary: '#6366f1',

					secondary: '#374151',

					accent: '#c7d2fe',

					neutral: '#f3f4f6',

					'base-100': '#f3f4f6',

					info: '#3b82f6',

					success: '#4ade80',

					warning: '#f3ae4f',

					error: '#f75989'
				},
				dark: {
					primary: '#6366f1',

					secondary: '#dbeafe',

					accent: '#c7d2fe',

					neutral: '#f3f4f6',

					'base-100': '#374151',

					info: '#3b82f6',

					success: '#4ade80',

					warning: '#f3ae4f',

					error: '#f75989'
				}
			}
		]
	}
};

module.exports = config;
