import React from 'react';
import { AppProps } from 'next/dist/shared/lib/router/router';
import { Root } from 'components/layouts';
import styled from '@emotion/styled';

export default React.memo(({ Component, pageProps }: AppProps) => {
	return (
		<Root
			left={<div />}
			top={<div />}
			right={<div />}
			middle={<Component {...pageProps} />}
			bottom={<div />}
			windowed={<></>}
		/>
	);
});
