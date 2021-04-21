/** @format */

import { useMemo } from 'react';

import { Card } from '../components/Card';
import { Table } from '../components/Table';

import { Episode } from '../models/episode';

import { HomeWrapper } from '../styles/home-wrapper';
import { ReleaseWrapper } from '../styles/release-wrapper';

interface HomeProps {
	episodes: Array<Episode>;
}

export default function Home({ episodes }: HomeProps) {
	const lastTwo = useMemo(() => {
		return [episodes[0], episodes[1]];
	}, []);

	return (
		<HomeWrapper>
			<section>
				<h2>Últimos Lançamentos</h2>
				<ReleaseWrapper>
					{lastTwo.map((episode) => (
						<Card key={episode.id} episode={episode} />
					))}
				</ReleaseWrapper>
			</section>

			<section>
				<h2>Todos os Episódios</h2>

				<Table />
			</section>
		</HomeWrapper>
	);
}

export async function getStaticProps() {
	const response = await fetch('http://localhost:3333/episodes');
	const data = await response.json();

	return {
		props: {
			episodes: data,
		},
		revalidate: 60 * 60 * 8,
	};
}
