/** @format */

import { FC, useRef, useEffect } from 'react';
import Image from 'next/image';
import Slider from 'rc-slider';
import 'rc-slider/assets/index.css';

import { usePlayer } from '../../contexts/PlayerContext';

import {
	PlayerContainer,
	PlayerHeader,
	PlayerCurrentEpisode,
	PlayerEmpty,
	PlayerProgressContainer,
	PlayerButtonContainer,
} from './styles';

export const Player: FC = () => {
	const {
		currentEpisodeIndex,
		episodeList,
		isPlaying,
		togglePlay,
		setPlayingState,
	} = usePlayer();

	const episode =
		(episodeList.length && episodeList[currentEpisodeIndex]) || null;

	const audioRef = useRef<HTMLAudioElement>(null);

	useEffect(() => {
		if (!audioRef.current) {
			return;
		}

		if (isPlaying) {
			audioRef.current.play();
		} else {
			audioRef.current.pause();
		}
	}, [isPlaying]);

	return (
		<PlayerContainer>
			<PlayerHeader>
				<img src='/icons/playing.svg' alt='Tocando agora' />
				<strong>Tocando agora</strong>
			</PlayerHeader>

			<>
				{episode ? (
					<PlayerCurrentEpisode>
						<Image
							width={592}
							height={592}
							src={episode.thumbnail}
							objectFit='cover'
						/>

						<h3>{episode.title}</h3>

						<p>{episode.members}</p>
					</PlayerCurrentEpisode>
				) : (
					<PlayerEmpty>
						<p>Selecione um Podcast pra ouvir</p>
					</PlayerEmpty>
				)}
			</>

			<footer className={episode ? '' : 'empty'}>
				<PlayerProgressContainer>
					<span>00:00</span>
					<div className='slider'>
						{episode ? (
							<Slider
								trackStyle={{
									backgroundColor: '#04d361',
								}}
								handleStyle={{
									borderColor: '#04d361',
									borderWidth: 4,
								}}
								railStyle={{ backgroundColor: '#9f75ff' }}
							/>
						) : (
							<div className='emptySlider'></div>
						)}
					</div>
					<span>00:00</span>
				</PlayerProgressContainer>

				{episode && (
					<audio
						ref={audioRef}
						autoPlay
						src={episode.file.url}
						onPlay={() => setPlayingState(true)}
						onPause={() => setPlayingState(false)}
					/>
				)}

				<PlayerButtonContainer>
					<button type='button' disabled={!episode}>
						<img src='/icons/shuffle.svg' alt='Embaralhar' />
					</button>
					<button type='button' disabled={!episode}>
						<img src='/icons/play-previous.svg' alt='Tocar Anterior' />
					</button>
					<button
						type='button'
						className='playButton'
						disabled={!episode}
						onClick={togglePlay}>
						{isPlaying ? (
							<img src='/icons/pause.svg' alt='Pausar' />
						) : (
							<img src='/icons/play.svg' alt='Tocar' />
						)}
					</button>
					<button type='button' disabled={!episode}>
						<img src='/icons/play-next.svg' alt='Tocar Próxima' />
					</button>
					<button type='button' disabled={!episode}>
						<img src='/icons/repeat.svg' alt='Repetir' />
					</button>
				</PlayerButtonContainer>
			</footer>
		</PlayerContainer>
	);
};
