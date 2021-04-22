/** @format */

import { useMemo, FC } from 'react';

import Link from 'next/link';
import Image from 'next/image';

import {
	convertSeconds2Hours,
	formatDateDayMonthYear,
} from '../../utils/formatDate';

import { Episode } from '../../models/episode';

import {
	CardContainer,
	CardThumbnail,
	CardTitle,
	CardDetailsContainer,
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
			<CardDetailsContainer>
				<CardTitle>
					<Link href={`/episodes/${episode.id}`}>
						<a>{episode.title}</a>
					</Link>
				</CardTitle>
				<CardExtraInfo>
					<p>{episode.members}</p>
					<time dateTime='2021-20-04'>
						{currentDate} <span className='dot'></span> {duration}
					</time>
				</CardExtraInfo>
			</CardDetailsContainer>
			<CardPlayButton>
				<Image
					width={192}
					height={192}
					src='/icons/play-green.svg'
					alt={'Tocar Podcast ' + episode.title}
				/>
			</CardPlayButton>
		</CardContainer>
	);
};
