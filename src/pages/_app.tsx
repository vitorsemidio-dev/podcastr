/** @format */

import { AppProps } from 'next/app';

import { Header } from '../components/Header';
import { Player } from '../components/Player';

import { GlobalStyles } from '../styles/global';
import { AppWrapper } from '../styles/app-wrapper';

import { PlayerContext } from '../contexts/PlayerContext';
import { useState } from 'react';
import { Episode } from '../models/episode';

export default function MyApp({ Component, pageProps }: AppProps) {
	const [episodeList, setEpisodeList] = useState<Episode[]>([]);
	const [currentEpisodeIndex, setCurrentEpisodeIndex] = useState(0);
	const [isPlaying, setIsPlaying] = useState(false);

	const play = (episode: Episode) => {
		setIsPlaying(true);
		setEpisodeList([episode]);
		setCurrentEpisodeIndex(0);
	};

	const togglePlay = () => {
		setIsPlaying(!isPlaying);
	};

	const setPlayingState = (state: boolean) => {
		setIsPlaying(state);
	};

	return (
		<PlayerContext.Provider
			value={{
				episodeList,
				currentEpisodeIndex,
				isPlaying,
				play,
				togglePlay,
				setPlayingState,
			}}>
			<GlobalStyles />

			<AppWrapper>
				<main>
					<Header />
					<Component {...pageProps} />
				</main>

				<Player />
			</AppWrapper>
		</PlayerContext.Provider>
	);
}
