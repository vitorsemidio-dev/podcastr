/** @format */

import styled from 'styled-components';

export const TableContainer = styled.table`
	--height-row: 2.5rem;
	width: 100%;
	text-align: left;

	th:nth-child(1) {
		width: 55%;
	}
	th:nth-child(2) {
		width: 20%;
	}
	th:nth-child(3),
	th:nth-child(4) {
		width: 10%;
	}
	th:nth-child(5) {
		width: 5%;
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

	td div {
		display: flex;
		align-items: center;
		gap: 1rem;
		font-size: 1rem;

		img {
			height: var(--height-row);
			width: var(--height-row);
			object-fit: cover;
			border-radius: 0.75rem;
		}

		a {
			display: inline-block;
			font-size: 1rem;

			flex-grow: 1;
			font-weight: 600;
			font-family: 'Lexend', sans-serif;
			color: var(--gray-800);
			text-decoration: none;
		}
	}
`;
