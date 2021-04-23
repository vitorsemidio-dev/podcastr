/** @format */

import styled from 'styled-components';

export const CardContainer = styled.div`
	position: relative;

	width: 100%;
	padding: 1.25rem;
	border-radius: 1.5rem;
	border: 1px solid var(--gray-100);
	background: var(--white);

	display: flex;
	align-items: center;
`;

export const CardThumbnail = styled.img`
	height: 7rem;
	width: 7rem;
	border-radius: 1rem;
	object-fit: cover;
`;

export const CardDetailsContainer = styled.div`
	flex: 1;
	margin-left: 1rem;

	a {
		display: block;
		width: 80%;
		color: var(--gray-800);
		text-decoration: none;

		font-size: 1rem;
		line-height: 1.25rem;

		:hover {
			text-decoration: underline;
		}
	}

	p,
	time,
	span {
		font-weight: 400;
		font-family: 'Inter', sans-serif;
		font-size: 0.875rem;
		line-height: 1.4;
	}

	p {
		margin: 0.5rem 0;
		max-width: 70%;
	}

	a,
	p {
		overflow: hidden;
		text-overflow: ellipsis;
		display: -webkit-box;
		-webkit-line-clamp: 2;
		-webkit-box-orient: vertical;
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

export const CardTitle = styled.h3``;

export const CardExtraInfo = styled.div``;

export const CardPlayButton = styled.button`
	position: absolute;
	right: 1.25rem;
	bottom: 1.25rem;
	background: transparent;
	border: 0;
	font-size: 0;

	width: 3rem;
	height: 3rem;
	border: 1px solid var(--gray-100);
	border-radius: 1rem;
	background: var(--white);

	transition: all 0.4s;

	&:hover {
		filter: brightness(0.9);
		border-color: var(--green-500);
	}

	img {
		width: 2rem;
	}
`;
