/** @type {import('tailwindcss').Config} */
export default {
	content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
	theme: {
		fontFamily: {
			mono: ['Space Mono', 'monospace'],
		},
		colors: {
			// Neutral
			'neutral-900': '#141D2F',
			'neutral-800': '#1E2A47',
			'neutral-700': '#2B3442',
			'neutral-500': '#4B6A9B',
			'neutral-300': '#697C9A',
			'neutral-200': '#90A4D4',
			'neutral-100': '#F6F8FF',
			'neutral-0': '#FFFFFF',
			// Blue
			'blue-300': '#60ABFF',
			'blue-500': '#0079FF',
			// Red
			'red-500': '#F74646',
		},
		extend: {
			spacing: {
				0: '0px',
				25: '2px',
				50: '4px',
				75: '6px',
				100: '8px',
				125: '10px',
				150: '12px',
				200: '16px',
				250: '20px',
				300: '24px',
				400: '32px',
				500: '40px',
				600: '48px',
				800: '64px',
				1000: '80px',
			},
			borderRadius: {
				0: '0px',
				4: '4px',
				6: '6px',
				8: '8px',
				10: '10px',
				12: '12px',
				16: '16px',
				20: '20px',
				24: '24px',
				full: '999px',
			},
		},
	},
};
