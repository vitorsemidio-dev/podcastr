/** @format */

import styled from 'styled-components';

export const PlayerContainer = styled.div`
	position: sticky;
	top: 0;

	width: 26.5rem;
	min-height: 100vh;
	height: 100vh;

	display: flex;
	flex-direction: column;
	align-items: center;
	justify-content: space-between;

	background: var(--purple-500);
	color: var(--white);
	padding: 2rem 4rem;

	footer {
		align-self: stretch;

		&.empty {
			opacity: 0.5;
		}
	}
`;

export const PlayerHeader = styled.header`
	display: flex;
	align-items: center;
	justify-content: center;
	gap: 1rem;

	strong {
		font-family: 'Lexend', sans-serif;
		font-weight: 600;
	}
`;

export const PlayerEmpty = styled.div`
	display: flex;
	place-items: center;

	border: 2px dashed var(--purple-300);
	border-radius: 1.5rem;

	width: 100%;
	height: 20rem;

	background: linear-gradient(
		143.8deg,
		rgba(145, 100, 250, 0.8) 0%,
		rgba(145, 100, 250, 0) 100%
	);

	padding: 4rem;
	text-align: center;
`;

export const PlayerProgressContainer = styled.div`
	display: flex;
	align-items: center;
	font-size: 0.875rem;
	gap: 0.5rem;

	span {
		display: inline-block;
		width: 3rem;
		text-align: center;
	}

	.slider {
		flex: 1;
		.emptySlider {
			width: 100%;
			height: 4px;
			background: var(--purple-300);
			border-radius: 2px;
		}
	}
`;

export const PlayerButtonContainer = styled.div`
	display: flex;
	justify-content: center;
	align-items: center;
	gap: 1.5rem;
	margin-top: 2.5rem;

	button {
		background: transparent;
		border: 0;
		font-size: 0;

		&.playButton {
			width: 4rem;
			height: 4rem;
			border-radius: 1rem;
			background: var(--purple-400);
		}
	}
`;
