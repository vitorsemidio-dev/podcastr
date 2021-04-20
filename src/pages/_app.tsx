/** @format */

import { AppProps } from 'next/app';

import { Header } from '../components/Header';
import { Player } from '../components/Player';

import { GlobalStyles } from '../styles/global';
import { AppWrapper } from '../styles/app-wrapper';

export default function MyApp({ Component, pageProps }: AppProps) {
	return (
		<>
			<GlobalStyles />

			<AppWrapper>
				<main>
					<Header />
					<Component {...pageProps} />
				</main>

				<Player />
			</AppWrapper>
		</>
	);
}
