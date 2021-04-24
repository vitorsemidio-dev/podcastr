/** @format */

import { FC } from 'react';
import Link from 'next/link';

import { formatDate } from '../../utils/formatDate';

import { HeaderContainer, HeaderText, HeaderDate } from './styles';

export const Header: FC = () => {
	const currentDate = formatDate(new Date());

	return (
		<HeaderContainer>
			<Link href='/'>
				<a>
					<img src='/icons/logo.svg' alt='Logo Podcastr' />
				</a>
			</Link>
			<HeaderText>O melhor para você ouvir, sempre</HeaderText>
			<HeaderDate>
				<time dateTime={currentDate}>{currentDate}</time>
			</HeaderDate>
		</HeaderContainer>
	);
};
