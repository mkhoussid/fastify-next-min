import { css, Global } from '@emotion/react';

export default (
	<Global
		styles={css`
			* {
				outline: none;
				margin: 0;
				padding: 0;
				box-sizing: border-box;
				font-family: Mulish;
				font-weight: 100;
			}
			html {
				height: 100vh;
				width: 100vw;
			}
			body {
				height: 100vh;
				width: 100vw;
				overflow: hidden;
			}
			#__next {
				height: 100%;
				width: 100%;
			}
			.dialog-reviews {
				max-width: 50rem;

				@media (max-width: 767px) {
					max-width: 95rem;
				}
			}
		`}
	/>
);
