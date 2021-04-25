/** @format */

import styled from 'styled-components';

export const AppWrapper = styled.div`
	display: flex;

	main {
		flex: 1;
	}
`;

export const HomeWrapper = styled.div`
	width: 100%;
	height: calc(100vh - var(--header-height));
	padding: 3rem 4rem;

	overflow-y: scroll;

	h2 {
		margin-bottom: 1.5rem;
	}

	section + section {
		margin-top: 3rem;
	}
`;

export const ReleaseWrapper = styled.div`
	display: grid;
	grid-template-columns: repeat(auto-fit, minmax(480px, 1fr));
	gap: 0.5rem;
`;

export const EpisodeWrapper = styled.div`
	width: 100%;
	height: calc(100vh - var(--header-height));
	overflow-y: scroll;
`;
