/** @format */

import styled from 'styled-components';

export const AppWrapper = styled.div`
	width: 100vw;
	height: 100vh;
	overflow: hidden;

	> main {
		grid-area: main;
		overflow-y: auto;
	}

	> header {
		grid-area: headerApp;

		padding: 2rem 4rem;

		@media (max-width: 768px) {
			padding: 1.5rem 2rem;
		}
	}

	> aside {
		grid-area: player;
	}

	display: grid;
	grid-template-columns: 1fr 26.5rem;
	grid-template-rows: var(--header-height) 1fr;

	grid-template-areas:
		'headerApp player'
		'main player';

	@media (max-width: 1080px) {
		& {
			grid-template-columns: 1fr;
			grid-template-rows: var(--header-height) 1fr auto;
			grid-template-areas:
				'headerApp'
				'main'
				'player';
		}
	}
`;

export const HomeWrapper = styled.div`
	padding: 3rem 4rem;

	h2 {
		margin-bottom: 1.5rem;
	}

	section + section {
		margin-top: 3rem;
	}

	@media (max-width: 768px) {
		padding: 1.5rem 2rem;
	}
`;

export const ReleaseWrapper = styled.div`
	display: grid;
	grid-template-columns: repeat(auto-fit, minmax(480px, 1fr));
	gap: 0.5rem;

	@media (max-width: 768px) {
		grid-template-columns: 1fr;
	}
`;

export const EpisodeWrapper = styled.div`
	width: 100%;
`;
