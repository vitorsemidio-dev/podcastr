/** @format */

import { createContext, useState, FC, useContext } from 'react';

import { Episode } from '../models/episode';

export interface EpisodeContext extends Episode {}

type PlayerContextData = {
	episodeList: EpisodeContext[];
	currentEpisodeIndex: number;
	isPlaying: boolean;
	play: (episode: EpisodeContext) => void;
	togglePlay: () => void;
	setPlayingState: (state: boolean) => void;
};

export const PlayerContext = createContext({} as PlayerContextData);

export const PlayerContextProvider: FC = ({ children }) => {
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
			{children}
		</PlayerContext.Provider>
	);
};

export function usePlayer() {
	return useContext(PlayerContext);
}
