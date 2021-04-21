/** @format */

import { Card } from '../components/Card';

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
