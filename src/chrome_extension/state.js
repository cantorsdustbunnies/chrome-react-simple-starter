import { fisherPrice, unstyled } from './themes/index.js';

const default_themes = [
	{
		name: 'Fisher Price',
		data: fisherPrice,
		isDefault: true,
	},
	{
		name: 'Unstyled',
		data: unstyled,
		isDefault: true,
	},
];

const default_graphemes = 'abcdefghijklmnopqrstuvwxyz0123456789'.split('');
const selected_theme = default_themes[0];

const default_state = {
	default_themes,
	default_graphemes,
	selected_theme,
	user_themes: [],
	user_graphemes: [],
	allow_background_edit: false,
	background_color: { r: 255, g: 255, b: 255, a: 1 },
};

export default default_state;
