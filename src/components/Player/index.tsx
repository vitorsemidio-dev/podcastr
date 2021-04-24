/** @format */

import { FC, useRef, useEffect, useMemo, useState } from 'react';
import Image from 'next/image';
import Slider from 'rc-slider';
import 'rc-slider/assets/index.css';

import { usePlayer } from '../../contexts/PlayerContext';
import { convertSeconds2Hours } from '../../utils/formatDate';

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
		isLooping,
		isShuffling,
		playNext,
		playPrevious,
		setPlayingState,
		togglePlay,
		toggleLoop,
		toggleShuffle,
	} = usePlayer();

	const [progress, setProgress] = useState(0);

	const episode =
		(episodeList.length && episodeList[currentEpisodeIndex]) || null;

	const audioRef = useRef<HTMLAudioElement>(null);

	const hasPrevious = useMemo(() => {
		return currentEpisodeIndex > 0;
	}, [currentEpisodeIndex]);

	const hasNext = useMemo(() => {
		return currentEpisodeIndex + 1 < episodeList.length;
	}, [currentEpisodeIndex]);

	const setupProgressListener = () => {
		if (audioRef && audioRef.current) {
			audioRef.current.currentTime = 0;

			audioRef.current.addEventListener('timeupdate', () => {
				setProgress(Math.floor(audioRef.current?.currentTime || 0));
			});
		}
	};

	const handleSeek = (amount: number) => {
		if (audioRef.current) {
			audioRef.current.currentTime = amount;
			setProgress(amount);
		}
	};

	const handleEpisodeEnded = () => {
		playNext();
	};

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

			<footer>
				<PlayerProgressContainer className={episode ? '' : 'empty'}>
					<span>{convertSeconds2Hours(progress)}</span>
					<div className='slider'>
						{episode ? (
							<Slider
								max={episode.file.duration}
								value={progress}
								onChange={handleSeek}
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
					<span>{convertSeconds2Hours(episode?.file.duration ?? 0)}</span>
				</PlayerProgressContainer>

				{episode && (
					<audio
						ref={audioRef}
						autoPlay
						src={episode.file.url}
						loop={isLooping}
						onPlay={() => setPlayingState(true)}
						onPause={() => setPlayingState(false)}
						onLoadedMetadata={setupProgressListener}
						onEnded={handleEpisodeEnded}
					/>
				)}

				<PlayerButtonContainer>
					<button
						type='button'
						disabled={!episode || episodeList.length === 1}
						className={isShuffling ? 'active' : ''}
						onClick={toggleShuffle}>
						<img src='/icons/shuffle.svg' alt='Embaralhar' />
					</button>
					<button
						type='button'
						disabled={!episode || !hasPrevious}
						onClick={playPrevious}>
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
					<button
						type='button'
						disabled={!episode || !hasNext}
						onClick={playNext}>
						<img src='/icons/play-next.svg' alt='Tocar Próxima' />
					</button>
					<button
						type='button'
						disabled={!episode}
						className={isLooping ? 'active' : ''}
						onClick={toggleLoop}>
						<img src='/icons/repeat.svg' alt='Repetir' />
					</button>
				</PlayerButtonContainer>
			</footer>
		</PlayerContainer>
	);
};
