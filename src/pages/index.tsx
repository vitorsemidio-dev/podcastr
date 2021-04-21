/** @format */

import { Card } from '../components/Card';
import { Table } from '../components/Table';

import { HomeWrapper } from '../styles/home-wrapper';
import { ReleaseWrapper } from '../styles/release-wrapper';

export default function Home({ episodes }: { episodes: any }) {
	return (
		<HomeWrapper>
			<section>
				<h2>Últimos Lançamentos</h2>
				<ReleaseWrapper>
					<Card />
					<Card />
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
