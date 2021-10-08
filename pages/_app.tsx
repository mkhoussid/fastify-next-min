import React from 'react';
import { ThemeProvider } from '@emotion/react';
import { AppProps } from 'next/dist/shared/lib/router/router';
import AppWrapper from '../components/AppWrapper';
import { palette } from 'src/theme';
import { GetServerSideProps } from 'next';

const App = React.memo(({ Component, ...pageProps }: AppProps) => {
	return (
		<ThemeProvider theme={{ palette }}>
			<AppWrapper Component={Component} {...pageProps} />
		</ThemeProvider>
	);
});

export default App;
