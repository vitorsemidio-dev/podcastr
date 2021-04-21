/** @format */

import { useMemo, FC } from 'react';

import {
	convertSeconds2Hours,
	formatDateDayMonthYear,
} from '../../utils/formatDate';

import { Episode } from '../../models/episode';

import {
	CardContainer,
	CardThumbnail,
	CardTitle,
	CardExtraInfo,
	CardPlayButton,
} from './styles';

interface CardProps {
	episode: Episode;
}

export const Card: FC<CardProps> = ({ episode }) => {
	const currentDate = useMemo(() => {
		const publishedDate = new Date(episode.published_at);
		const date = formatDateDayMonthYear(publishedDate);

		return date;
	}, []);

	const duration = useMemo(() => {
		return convertSeconds2Hours(episode?.file?.duration || 0);
	}, []);

	return (
		<CardContainer>
			<CardThumbnail
				src={episode.thumbnail}
				alt={'Thumb podcast ' + episode.title}
			/>
			<CardTitle>{episode.title}</CardTitle>
			<CardExtraInfo>
				<p>{episode.members}</p>
				<time dateTime='2021-20-04'>
					{currentDate} <span className='dot'></span> {duration}
				</time>
			</CardExtraInfo>
			<CardPlayButton>
				<img
					src='/icons/play-green.svg'
					alt={'Tocar Podcast ' + episode.title}
				/>
			</CardPlayButton>
		</CardContainer>
	);
};
