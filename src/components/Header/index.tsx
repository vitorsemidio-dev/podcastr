/** @format */

import { FC } from 'react';

import { formatDate } from '../../utils/formatDate';

import { HeaderContainer, HeaderText, HeaderDate } from './styles';

export const Header: FC = () => {
	const currentDate = formatDate(new Date());

	return (
		<HeaderContainer>
			<img src='/icons/logo.svg' alt='Logo Podcastr' />
			<HeaderText>O melhor para você ouvir, sempre</HeaderText>
			<HeaderDate>
				<time dateTime={currentDate}>{currentDate}</time>
			</HeaderDate>
		</HeaderContainer>
	);
};
