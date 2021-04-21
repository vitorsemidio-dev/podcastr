/** @format */

import { useMemo } from 'react';

import {
	formatDateDayMonthYear,
	convertSeconds2Hours,
} from '../../utils/formatDate';
import { Button } from '../Button';

import { TableContainer } from './styles';

export function Table() {
	const publishedDate = useMemo(() => {
		const dateFormatted = formatDateDayMonthYear(new Date());
		return dateFormatted;
	}, []);

	const duration = useMemo(() => {
		return convertSeconds2Hours(3981);
	}, []);
	return (
		<>
			<TableContainer>
				<tr>
					<th colSpan={1}>Podcast</th>
					<th>Integrantes</th>
					<th>Data</th>
					<th>Duração</th>
					<th></th>
				</tr>
				<tr>
					<td>
						<div>
							<img
								src='https://storage.googleapis.com/golden-wind/nextlevelweek/05-podcastr/funcional.jpg'
								alt='Thumb'
							/>
							<h3>A vida é boa</h3>
						</div>
					</td>
					<td>Integrantes</td>
					<td>{publishedDate}</td>
					<td>{duration}</td>
					<td>
						<Button>
							<img
								src='/icons/play-green.svg'
								alt={
									'Tocar Podcast ' +
									'Faladev #30 | A importância da contribuição em Open Source'
								}
							/>
						</Button>
					</td>
				</tr>
			</TableContainer>
		</>
	);
}
