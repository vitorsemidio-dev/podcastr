/** @format */

import styled from 'styled-components';

export const PlayerContainer = styled.aside`
	grid-area: player;

	display: flex;
	flex-direction: column;
	align-items: center;
	justify-content: space-between;

	background: var(--purple-500);
	color: var(--white);
	padding: 2rem 4rem;

	footer {
		align-self: stretch;
		margin-top: 1rem;
	}
`;

export const PlayerHeader = styled.header`
	display: flex;
	align-items: center;
	justify-content: center;
	gap: 1rem;
	margin-bottom: 1rem;

	strong {
		font-family: 'Lexend', sans-serif;
		font-weight: 600;
	}
`;

export const PlayerCurrentEpisode = styled.div`
	text-align: center;
	img {
		border-radius: 1rem;
	}

	h3 {
		color: var(--white);
		margin-top: 1.5rem;
		font: 600 1.25rem 'Lexend', sans-serif;
	}

	p {
		color: var(--gray-100);
		opacity: 0.6;
		line-height: 1.5rem;
		margin-top: 1rem;
	}

	@media (max-width: 1080px) {
		> *:not(.keep-small-screen) {
			display: none !important;
		}
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

	@media (max-width: 1080px) {
		display: none;
	}
`;

export const PlayerProgressContainer = styled.div`
	display: flex;
	align-items: center;
	font-size: 0.875rem;
	gap: 0.5rem;

	&.empty {
		opacity: 0.5;
	}

	span {
		display: inline-block;
		width: 4rem;
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

		transition: filter 0.2s;

		&.active {
			filter: invert(0.35) sepia(1) saturate(3) hue-rotate(100deg);
		}

		&.active:hover {
			filter: brightness(0.6) invert(0.35) sepia(1) saturate(3)
				hue-rotate(100deg);
		}

		&:disabled {
			cursor: default;
			opacity: 0.6;
		}

		&:hover:not(:disabled) {
			filter: brightness(0.75);
		}

		&.playButton {
			width: 4rem;
			height: 4rem;
			border-radius: 1rem;
			background: var(--purple-400);

			:hover:not(:disabled) {
				filter: brightness(0.95);
			}
		}
	}
`;
