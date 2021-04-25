/** @format */

import styled from 'styled-components';

export const HeaderContainer = styled.header`
	grid-area: headerApp;

	background-color: var(--white);
	height: var(--header-height);

	display: flex;
	align-items: center;

	border-bottom: 1px solid var(--gray-100);

	a {
		cursor: pointer;
	}
`;

export const HeaderText = styled.p`
	margin: 0 2rem;
	padding: 0.25rem 0 0.25rem 2rem;

	border-left: 2px solid var(--gray-100);

	@media (max-width: 768px) {
		display: none;
	}
`;

export const HeaderDate = styled.span`
	margin-left: auto;

	time {
		text-transform: capitalize;
	}
`;
