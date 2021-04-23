/** @format */

import { createContext } from 'react';
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
