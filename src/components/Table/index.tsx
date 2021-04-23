/** @format */

import { useMemo, FC } from 'react';
import Image from 'next/image';
import Link from 'next/link';

import { Episode } from '../../models/episode';

import {
	formatDateDayMonthYear,
	convertSeconds2Hours,
} from '../../utils/formatDate';
import { Button } from '../Button';

import { TableContainer } from './styles';

interface TableProps {
	episodes: Array<Episode>;
}

export const Table: FC<TableProps> = ({ episodes }) => {
	const episodesFormatted = useMemo(() => {
		const episodesHelper = episodes?.map((episode) => {
			const publishedDate = new Date(episode.published_at);
			return {
				...episode,
				durationFormatted: convertSeconds2Hours(episode.file.duration),
				publishedAtFormatted: formatDateDayMonthYear(publishedDate),
			};
		});
		return episodesHelper;
	}, [episodes]);

	return (
		<>
			<TableContainer>
				<thead>
					<tr>
						<th></th>
						<th>Podcast</th>
						<th>Integrantes</th>
						<th>Data</th>
						<th>Duração</th>
						<th></th>
					</tr>
				</thead>
				<tbody>
					{episodesFormatted?.map(
						({
							id,
							members,
							publishedAtFormatted,
							durationFormatted,
							title,
							thumbnail,
						}) => (
							<tr key={id}>
								<td>
									<Image
										width={256}
										height={256}
										src={thumbnail}
										alt={'Thumbnail' + title}
										objectFit='cover'
									/>
								</td>
								<td>
									<Link href={`/episodes/${id}`}>
										<a>{title}</a>
									</Link>
								</td>
								<td>{members}</td>
								<td>{publishedAtFormatted}</td>
								<td>{durationFormatted}</td>
								<td>
									<Button>
										<img
											src='/icons/play-green.svg'
											alt={'Tocar Podcast ' + title}
										/>
									</Button>
								</td>
							</tr>
						),
					)}
				</tbody>
			</TableContainer>
		</>
	);
};
