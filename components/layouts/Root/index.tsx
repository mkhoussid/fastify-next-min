import * as React from 'react';
import Router from 'next/router';
import styled from '@emotion/styled';
import { GlobalStyles } from 'components/layouts';

type RootProps = {
	left: React.ReactNode;
	top: React.ReactNode;
	middle: React.ReactNode;
	right: React.ReactNode;
	bottom: React.ReactNode;
	windowed: React.ReactNode;
};
const Root = React.memo(({ left, top, right, middle, bottom, windowed }: RootProps) => {
	const componentRef = React.useRef<HTMLDivElement>();

	const resetWindowScrollPosition = React.useCallback(() => {
		componentRef.current.scrollTo(0, 0);
	}, []);

	React.useEffect(() => {
		if (!componentRef) return;

		Router.events.on('routeChangeComplete', resetWindowScrollPosition);

		return () => {
			Router.events.off('routeChangeComplete', resetWindowScrollPosition);
		};
	}, [componentRef]);

	return (
		<RootLayout>
			{GlobalStyles}
			<Wrapper>
				<Header>I am the top</Header>
				<LeftSide>I am the left side</LeftSide>
				<Middle ref={componentRef}>{middle}</Middle>
				<RightSide>I am the right side</RightSide>
				<Footer>I am the footer</Footer>
				{windowed}
			</Wrapper>
		</RootLayout>
	);
});

export default Root;

const RootLayout = styled.div`
	height: 100vh;
	width: 100%;
`;

const Wrapper = styled.div`
	height: 100%;
	display: grid;
	grid-template: auto 1fr auto / auto 1fr auto;
`;

const Part = styled.div`
	justify-content: center;
	display: flex;
	align-items: center;
`;

const Header = styled(Part)`
	background-color: lightblue;
	height: 5rem;
	grid-column: 1 / 4;
`;

const LeftSide = styled(Part)`
	background-color: cyan;
	grid-column: 1 / 2;
`;

const Middle = styled(Part)`
	background-color: lightpink;
	grid-column: 2 / 3;
`;

const RightSide = styled(Part)`
	background-color: red;
	grid-column: 3 / 4;
`;

const Footer = styled(Part)`
	background-color: lightpurple;
	background-color: purple;
	grid-column: 1 / 4;
	height: 10rem;
`;
