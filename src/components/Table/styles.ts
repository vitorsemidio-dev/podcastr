/** @format */

import styled from 'styled-components';

export const TableContainer = styled.table`
	--height-row: 2.5rem;
	width: 100%;
	text-align: left;

	th:nth-child(1),
	th:nth-child(6) {
		min-width: calc(var(--height-row) + 1rem);
	}

	th:nth-child(4),
	th:nth-child(5) {
		width: 10%;
		min-width: var(--height-row);
	}
	th:nth-child(2) {
		width: 55%;
	}
	th:nth-child(3) {
		width: 20%;
	}

	th {
		text-transform: uppercase;
		color: var(--gray-200);
	}

	td {
		font-size: 0.75rem;
	}

	th,
	td {
		border-bottom: 1px solid var(--gray-100);
		padding: 0.75rem 0;
		padding-right: 0.75rem;
		height: var(--height-row);
	}

	td a {
		display: inline-block;
		font-size: 1rem;

		flex-grow: 1;
		font-weight: 600;
		font-family: 'Lexend', sans-serif;
		color: var(--gray-800);
		text-decoration: none;
	}

	td div img {
		height: var(--height-row);
		width: var(--height-row);
		object-fit: cover;
		border-radius: 0.75rem;
	}
`;
