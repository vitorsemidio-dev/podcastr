/** @format */

export default function Home({ episodes }: { episodes: any }) {
	return (
		<>
			<h1>Home</h1>
			<p>{JSON.stringify(episodes)}</p>
		</>
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
