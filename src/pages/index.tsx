/** @format */

import styled from 'styled-components';

import { GlobalStyles } from '../styles/global';

const Title = styled.h1``;

const Subtitle = styled.h2``;

export default function Home() {
	return (
		<>
			<GlobalStyles />
			<Title>My page</Title>
			<Subtitle>My sub page</Subtitle>
		</>
	);
}
