/** @format */

import { createContext, useState, FC, useContext } from 'react';

import { Episode } from '../models/episode';

export interface EpisodeContext extends Episode {}

type PlayerContextData = {
	episodeList: EpisodeContext[];
	currentEpisodeIndex: number;
	isPlaying: boolean;
	isLooping: boolean;
	isShuffling: boolean;
	hasNext: boolean;
	hasPrevious: boolean;
	play: (episode: EpisodeContext) => void;
	playList: (list: Episode[], index: number) => void;
	playNext: () => void;
	playPrevious: () => void;
	setPlayingState: (state: boolean) => void;
	togglePlay: () => void;
	toggleLoop: () => void;
	toggleShuffle: () => void;
};

export const PlayerContext = createContext({} as PlayerContextData);

export const PlayerContextProvider: FC = ({ children }) => {
	const [episodeList, setEpisodeList] = useState<Episode[]>([]);
	const [currentEpisodeIndex, setCurrentEpisodeIndex] = useState(0);
	const [isPlaying, setIsPlaying] = useState(false);
	const [isLooping, setIsLooping] = useState(false);
	const [isShuffling, setIsShuffling] = useState(false);

	const [hasNext, setHasNext] = useState(
		currentEpisodeIndex <= episodeList.length,
	);
	const [hasPrevious, setHasPrevious] = useState(currentEpisodeIndex > 0);

	const updateState = () => {
		setHasNext(currentEpisodeIndex <= episodeList.length);
		setHasPrevious(currentEpisodeIndex > 0);
	};

	const play = (episode: Episode) => {
		setIsPlaying(true);
		setEpisodeList([episode]);
		setCurrentEpisodeIndex(0);
		updateState();
	};

	const togglePlay = () => {
		setIsPlaying(!isPlaying);
	};

	const toggleLoop = () => {
		setIsLooping(!isLooping);
	};

	const toggleShuffle = () => {
		setIsShuffling(!isShuffling);
	};

	const setPlayingState = (state: boolean) => {
		setIsPlaying(state);
	};

	const playList = (list: Episode[], index: number) => {
		setEpisodeList(list);
		setCurrentEpisodeIndex(index);
		setIsPlaying(true);
		updateState();
	};

	const playNext = () => {
		if (isShuffling) {
			playRandomEpisode();
		} else if (hasNext) {
			setCurrentEpisodeIndex(currentEpisodeIndex + 1);
		}
		updateState();
	};

	const playPrevious = () => {
		if (isShuffling) {
			playRandomEpisode();
		} else if (hasPrevious) {
			setCurrentEpisodeIndex(currentEpisodeIndex - 1);
			updateState();
		}
	};

	const playRandomEpisode = () => {
		const nextRandomEpisodeIndex = Math.floor(
			Math.random() * episodeList.length,
		);
		setCurrentEpisodeIndex(nextRandomEpisodeIndex);
	};

	return (
		<PlayerContext.Provider
			value={{
				episodeList,
				currentEpisodeIndex,
				isPlaying,
				hasNext,
				hasPrevious,
				isLooping,
				isShuffling,
				play,
				togglePlay,
				setPlayingState,
				playList,
				playNext,
				playPrevious,
				toggleLoop,
				toggleShuffle,
			}}>
			{children}
		</PlayerContext.Provider>
	);
};

export function usePlayer() {
	return useContext(PlayerContext);
}
