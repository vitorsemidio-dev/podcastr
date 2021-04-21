/** @format */

import { FC } from 'react';

import {
	PlayerContainer,
	PlayerHeader,
	PlayerEmpty,
	PlayerProgressContainer,
	PlayerButtonContainer,
} from './styles';

export const Player: FC = () => {
	return (
		<PlayerContainer>
			<PlayerHeader>
				<img src='/icons/playing.svg' alt='Tocando agora' />
				<strong>Tocando agora</strong>
			</PlayerHeader>

			<PlayerEmpty>
				<p>Selecione um Podcast pra ouvir</p>
			</PlayerEmpty>

			<footer className='empty'>
				<PlayerProgressContainer>
					<span>00:00</span>
					<div className='slider'>
						<div className='emptySlider'></div>
					</div>
					<span>00:00</span>
				</PlayerProgressContainer>

				<PlayerButtonContainer>
					<button type='button'>
						<img src='/icons/shuffle.svg' alt='Embaralhar' />
					</button>
					<button type='button'>
						<img src='/icons/play-previous.svg' alt='Tocar Anterior' />
					</button>
					<button type='button' className='playButton'>
						<img src='/icons/play.svg' alt='Tocar' />
					</button>
					<button type='button'>
						<img src='/icons/play-next.svg' alt='Tocar Próxima' />
					</button>
					<button type='button'>
						<img src='/icons/repeat.svg' alt='Repetir' />
					</button>
				</PlayerButtonContainer>
			</footer>
		</PlayerContainer>
	);
};
