/** @format */

import { Card } from '../components/Card';
import { Table } from '../components/Table';
import { usePlayer } from '../contexts/PlayerContext';

import { Episode } from '../models/episode';

import { api } from '../services/api';

import { HomeWrapper } from '../styles/home-wrapper';
import { ReleaseWrapper } from '../styles/release-wrapper';

interface HomeProps {
	lastestEpisodes: Array<Episode>;
	allEpisodes: Array<Episode>;
}

export default function Home({ lastestEpisodes, allEpisodes }: HomeProps) {
	const { playList } = usePlayer();

	const episodeList = [...lastestEpisodes, ...allEpisodes];

	const handlePlayList = (index: number) => {
		playList(episodeList, index);
	};

	return (
		<HomeWrapper>
			<section>
				<h2>Últimos Lançamentos</h2>
				<ReleaseWrapper>
					{lastestEpisodes.map((episode, index) => (
						<Card
							key={episode.id}
							episode={episode}
							index={index}
							onPlayClick={handlePlayList}
						/>
					))}
				</ReleaseWrapper>
			</section>

			<section>
				<h2>Todos os Episódios</h2>

				<Table
					episodes={allEpisodes}
					onClickPlay={handlePlayList}
					beginIndex={lastestEpisodes.length}
				/>
			</section>
		</HomeWrapper>
	);
}

export async function getStaticProps() {
	const { data } = await api.get<Array<Episode>>('/episodes', {
		params: {
			_limit: 12,
			_order: 'desc',
			_sort: 'published_at',
		},
	});

	const lastestEpisodes = data.slice(0, 2);
	const allEpisodes = data.slice(2, data.length);

	return {
		props: {
			lastestEpisodes,
			allEpisodes,
		},
		revalidate: 60 * 60 * 8,
	};
}
