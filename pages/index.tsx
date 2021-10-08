import * as React from 'react';
import { GetServerSideProps } from 'next';
import Page from 'components/layouts/Page';
import styled from '@emotion/styled';

const Index = React.memo(({ ...pageProps }) => {
	return (
		<Page title='Main'>
			<Container>Hello World!</Container>
		</Page>
	);
});

export default Index;

export const getServerSideProps: GetServerSideProps = async function (ctx) {
	return {
		props: {},
	};
};

const Container = styled.div`
	display: flex;
	align-items: center;
	justify-content: center;
	height: 100%;
`;
