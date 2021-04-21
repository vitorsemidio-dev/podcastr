/** @format */

import { useState } from 'react';
import { addSeconds, format } from 'date-fns';
import ptBr from 'date-fns/locale/pt-BR';

import {
	CardContainer,
	CardThumbnail,
	CardTitle,
	CardExtraInfo,
	CardPlayButton,
} from './styles';

export function Card() {
	const [currentDate, setCurrentDate] = useState(() => {
		const date = format(new Date(), 'd MMM yy', {
			locale: ptBr,
		});

		return date;
	});

	const [duration, setDuration] = useState(() => {
		const begin = new Date(0).setHours(0);
		const helperDate = addSeconds(begin, 3981);
		return format(helperDate, 'h:mm:ss');
	});

	return (
		<CardContainer>
			<CardThumbnail
				src='https://storage.googleapis.com/golden-wind/nextlevelweek/05-podcastr/opensource.jpg'
				alt='Thumbnail Podcast'
			/>
			<CardTitle>
				Faladev #30 | A importância da contribuição em Open Source
			</CardTitle>
			<CardExtraInfo>
				<p>Diego e Richard</p>
				<time dateTime='2021-20-04'>
					{currentDate} <span className='dot'></span> {duration}
				</time>
			</CardExtraInfo>
			<CardPlayButton>
				<img
					src='/icons/play-green.svg'
					alt={
						'Tocar Podcast ' +
						'Faladev #30 | A importância da contribuição em Open Source'
					}
				/>
			</CardPlayButton>
		</CardContainer>
	);
}
