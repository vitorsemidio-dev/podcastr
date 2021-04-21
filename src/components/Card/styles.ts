/** @format */

import styled from 'styled-components';

export const CardContainer = styled.div`
	max-width: 28rem;
	width: 100%;
	padding: 1rem 2rem 1rem 1rem;
	border-radius: 1.5rem;
	background: var(--white);

	display: grid;
	gap: 1rem;
	grid-template-columns: repeat(6, 1fr);
	grid-template-areas:
		'thumb thumb title title title title title title'
		'thumb thumb extra extra extra extra extra button';
`;

export const CardThumbnail = styled.img`
	grid-area: thumb;
	height: 6rem;
	width: 6rem;
	border-radius: 1rem;
	object-fit: cover;
`;

export const CardTitle = styled.h3`
	grid-area: title;
	font-size: 1rem;
	line-height: 1.25rem;

	max-width: 100%;
	overflow: hidden;
	text-overflow: ellipsis;
	white-space: nowrap;
`;

export const CardPeople = styled.p``;

export const CardTimeContainer = styled.div``;

export const CardExtraInfo = styled.div`
	grid-area: extra;
	font-weight: 400;
	font-family: 'Inter', sans-serif;
	font-size: 0.875rem;

	> p,
	> time {
		line-height: 1.25rem;
	}

	time {
		display: flex;
		align-items: center;
		gap: 0.5rem;

		.dot {
			width: 4px;
			height: 4px;

			border-radius: 2px;
			background-color: var(--gray-100);
		}
	}
`;

export const CardPlayButton = styled.button`
	grid-area: button;
	background: transparent;
	border: 0;
	font-size: 0;

	width: 3rem;
	height: 3rem;
	border: 1px solid var(--gray-100);
	border-radius: 1rem;
	background: var(--white);

	img {
		width: 2rem;
	}
`;
