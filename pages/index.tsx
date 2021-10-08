import * as React from 'react';
import { GetServerSideProps } from 'next';
import Page from 'components/layouts/Page';
import styled from '@emotion/styled';
import { useStore, useEvent } from 'effector-react';
import { $data, buttonClicked, pageLoaded } from '../effector/models';
import { withStart } from 'effector-next';

const enhance = withStart(pageLoaded);

const Index = React.memo(({ ...pageProps }) => {
	const data = useStore($data);
	const handleClick = useEvent(buttonClicked);

	return (
		<Page title='Main'>
			<Container>
				<h2>Store state: {JSON.stringify({ data })}</h2>
				<button onClick={handleClick}>click to change store state</button>
			</Container>
		</Page>
	);
});

export default enhance(Index);

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
	flex-direction: column;
`;
