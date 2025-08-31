/** @type {import('tailwindcss').Config} */
export const content = [
	"./app/**/*.{js,ts,jsx,tsx}",
	"./components/**/*.{js,ts,jsx,tsx}",
];
export const theme = {
	extend: {
		animation: {
			"spin-slow": "spin 3s linear infinite", // slower than default spin
		},
	},
};
export const plugins = [];
