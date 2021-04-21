/** @format */

import { formatDate } from '../../utils/formatDate';

import { HeaderContainer, HeaderText, HeaderDate } from './styles';

export function Header() {
	const currentDate = formatDate(new Date());

	return (
		<HeaderContainer>
			<img src='/icons/logo.svg' alt='Logo Podcastr' />
			<HeaderText>O melhor para você ouvir, sempre</HeaderText>
			<HeaderDate>
				<time dateTime={new Date().toString()}>{currentDate}</time>
			</HeaderDate>
		</HeaderContainer>
	);
}
