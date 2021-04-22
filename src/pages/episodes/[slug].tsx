/** @format */

import { FC } from 'react';
import { GetStaticPaths, GetStaticProps } from 'next';

import { Episode as EpisodeModel } from '../../models/episode';
import { api } from '../../services/api';

interface EpisodeProps {
	episode: EpisodeModel;
}

const Episode: FC<EpisodeProps> = ({ episode }) => {
	return (
		<>
			<h1>hellow</h1>
			<div dangerouslySetInnerHTML={{ __html: episode.description }} />
		</>
	);
};

export default Episode;

export const getStaticProps: GetStaticProps = async (ctx) => {
	const { slug } = ctx.params;

	const { data } = await api.get(`/episodes/${slug}`);

	const episode = {
		...data,
	};

	return {
		props: {
			episode,
		},
	};
};

export const getStaticPaths: GetStaticPaths = async () => {
	return {
		paths: [],
		fallback: 'blocking',
	};
};
