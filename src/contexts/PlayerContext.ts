/** @format */

import { createContext } from 'react';
import { Episode } from '../models/episode';

export interface EpisodeContext extends Episode {}

type PlayerContextData = {
	episodeList: EpisodeContext[];
	currentEpisodeIndex: number;
	play: (episode: EpisodeContext) => void;
};

export const PlayerContext = createContext({} as PlayerContextData);
