import forms from '@tailwindcss/forms';
import type { Config } from 'tailwindcss';

export default {
	content: ['./src/**/*.{html,js,svelte,ts}'],

	theme: {
		extend: {
			fontFamily: {
				sans: ['Inter', 'sans-serif'],
				knewave: ['Knewave', 'sans-serif'],
			},
			colors: {
				'text': '#d6ecf8',

				'primary': '#8ac6ec',
				'secondary': '#2ecc71',
				'accent': '#ad11fe',

				'neutral': '#f1c40f',
				
				'background': '#09151c',
					
				'error': '#c0392b',
				'warning': '#f39c12',
				'success': '#4BB543',
				'info': '#2980b9',
				// 'dark': '#000000',
				// 'light': '#FFFFFF'
			}
		}
	},

	plugins: [forms]
} as Config;
