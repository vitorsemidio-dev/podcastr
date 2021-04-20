/** @format */

import { HeaderContainer, HeaderText, HeaderDate } from './styles';

import format from 'date-fns/format';
import ptBr from 'date-fns/locale/pt-BR';

export function Header() {
	const currentDate = format(new Date(), 'EEEEEE, d MMMM', {
		locale: ptBr,
	});

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
