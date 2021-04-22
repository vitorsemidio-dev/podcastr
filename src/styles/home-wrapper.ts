/** @format */

import styled from 'styled-components';

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
