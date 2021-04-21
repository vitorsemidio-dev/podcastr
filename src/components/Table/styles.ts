/** @format */

import styled from 'styled-components';

export const TableContainer = styled.table`
	--height-row: 2.5rem;
	width: 100%;
	text-align: left;

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
		}

		h3 {
			flex-grow: 1;
		}
	}
`;
