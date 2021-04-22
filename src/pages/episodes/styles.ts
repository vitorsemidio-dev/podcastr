/** @format */

import styled from 'styled-components';

export const EpisodeContainer = styled.div`
	max-width: 45rem;
	padding: 3rem 2rem;
	margin: 0 auto;
`;

export const EpisodeThumbnail = styled.div`
	width: 100%;

	margin: 2rem auto;
	position: relative;

	border-radius: 1rem;
	/* overflow: hidden; */

	button {
		position: absolute;
		z-index: 5;
		border: 0;
		font-size: 0;
		border-radius: 0.75rem;
		width: 3rem;
		height: 3rem;
	}

	button:first-child {
		top: 50%;
		left: 0;
		transform: translate(-50%, -50%);
		background-color: var(--purple-500);
	}

	button:last-child {
		top: 50%;
		right: 0;
		transform: translate(50%, -50%);
		background-color: var(--green-500);
	}
`;

export const EpisodeHeader = styled.header`
	padding-bottom: 1rem;
	border-bottom: 1px solid var(--gray-100);

	h1 {
		margin-top: 2rem;
		margin-bottom: 1.5rem;
	}

	span {
		display: inline-block;
		font-size: 0.875rem;

		& + span {
			margin-left: 1rem;
			padding-left: 1rem;

			position: relative;

			&::before {
				content: '';
				width: 4px;
				height: 4px;
				border-radius: 2px;
				background: var(--gray-100);
				position: absolute;
				left: 0;
				top: 50%;

				transform: translate(-50%, -50%);
			}
		}
	}
`;

export const EpisodeDescription = styled.div`
	margin-top: 2rem;
	line-height: 1.675rem;
	color: var(--gray-800);

	p {
		margin: 1.5rem 0;
	}
`;
