import * as React from 'react';
import styled from '@emotion/styled';
import Head from 'next/head';

type TPage = JSX.IntrinsicElements['div'] & {
	title: string;
	image?: string;
	isListing?: boolean;
	isFilter?: boolean;
};
const Page = React.memo(
	({ children, className, isListing = false, isFilter = false, title = '', image = '', ...rest }: TPage) => {
		return (
			<PageContainer {...rest}>
				<Head>
					<title>{title}</title>
					<link rel='icon' type='image/png' sizes='16x16' href='/images/favicon-16x16.png' />
					<meta property='og:title' content={isListing || isFilter ? `Аквавир - ${title}` : `Аквавир`} />
					<meta name='description' content={isListing || isFilter ? title : 'Душевые кабины и ограждения'} />
					<meta
						property='og:description'
						content={isListing || isFilter ? title : 'Душевые кабины и ограждения'}
					/>
					<meta
						property='og:image'
						content={
							isListing || isFilter
								? image || 'https://storage.yandexcloud.net/aquavir-migrated/site_image.jpeg'
								: 'https://storage.yandexcloud.net/aquavir-migrated/site_image.jpeg'
						}
					/>
					<meta
						property='og:url'
						content={
							isListing
								? `https://aquavir-ssr.herokuapp.com/listings/${title}`
								: isFilter
								? `https://aquavir-ssr.herokuapp.com/listings?filter=${title}`
								: `https://aquavir-ssr.herokuapp.com`
						}
					/>
				</Head>
				<ChildrenContainer>{children}</ChildrenContainer>
			</PageContainer>
		);
	},
);

export default Page;

const PageContainer = styled.div`
	height: 100%;
`;

const ChildrenContainer = styled.div`
	height: 100%;
`;
