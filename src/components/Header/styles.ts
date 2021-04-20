/** @format */

import styled from 'styled-components';

export const HeaderContainer = styled.header`
	background-color: var(--white);

	display: flex;

	height: 6.5rem;

	align-items: center;
	padding: 2rem 4rem;

	border-bottom: 1px solid var(--gray-100);
`;

export const HeaderText = styled.p`
	margin-left: 2rem;
	padding: 0.25rem 0 0.25rem 2rem;

	border-left: 2px solid var(--gray-100);
`;

export const HeaderDate = styled.span`
	margin-left: auto;

	time {
		text-transform: capitalize;
	}
`;
