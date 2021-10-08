import { TColors } from '../constants';

type TTopbar = {
	backgroundColor: string;
};

type TPrimary = {
	main: string;
	darker: string;
};

type TSecondary = {
	main: string;
};

type TError = {
	main: string;
};

export interface ITheme {
	palette: {
		primary: TPrimary;
		secondary: TSecondary;
		error: TError;
		topbar: TTopbar;
		common: {
			white: string;
			black: string;
		};
		text: {
			primary: string;
			secondary: string;
		};
		COLORS: TColors;
	};
}
