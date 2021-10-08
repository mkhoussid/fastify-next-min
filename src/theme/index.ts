import { COLORS } from '../constants';
import { ITheme } from './theme';

export const palette: ITheme['palette'] = {
	primary: {
		main: COLORS.SKY_BLUE_5,
		darker: COLORS.SKY_BLUE_7,
	},
	secondary: {
		main: COLORS.GREEN_8,
	},
	error: {
		main: COLORS.RED_6,
	},
	topbar: {
		backgroundColor: COLORS.SKY_BLUE_5,
	},
	common: {
		white: COLORS.WHITE,
		black: COLORS.BLACK,
	},
	text: {
		primary: COLORS.BLACK,
		secondary: COLORS.WHITE,
	},
	COLORS,
};
