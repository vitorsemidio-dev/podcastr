/** @format */

import { AppProps } from 'next/app';

import { Header } from '../components/Header';
import { Player } from '../components/Player';

import { GlobalStyles } from '../styles/global';
import { AppWrapper } from '../styles/wrappers';

import { PlayerContextProvider } from '../contexts/PlayerContext';

export default function MyApp({ Component, pageProps }: AppProps) {
	return (
		<PlayerContextProvider>
			<GlobalStyles />

			<AppWrapper>
				<Header />

				<main>
					<Component {...pageProps} />
				</main>

				<Player />
			</AppWrapper>
		</PlayerContextProvider>
	);
}
