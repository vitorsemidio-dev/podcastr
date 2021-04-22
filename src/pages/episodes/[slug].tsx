/** @format */

import { FC } from 'react';
import { GetStaticPaths, GetStaticProps } from 'next';
import Link from 'next/link';
import Image from 'next/image';
import { ParsedUrlQuery } from 'querystring';

import { Episode as EpisodeModel } from '../../models/episode';
import { api } from '../../services/api';

import {
	EpisodeContainer,
	EpisodeHeader,
	EpisodeThumbnail,
	EpisodeDescription,
} from './styles';

interface EpisodeProps {
	episode: EpisodeModel;
}

const Episode: FC<EpisodeProps> = ({ episode }) => {
	return (
		<EpisodeContainer>
			<EpisodeThumbnail>
				<Link href='/'>
					<button>
						<img src='/icons/arrow-left.svg' alt='Voltar' />
					</button>
				</Link>
				<Image
					width={700}
					height={160}
					src={episode.thumbnail}
					alt={episode.title}
					objectFit='cover'
				/>
				<button>
					<img src='/icons/play.svg' alt='Tocar Podcast' />
				</button>
			</EpisodeThumbnail>
			<EpisodeHeader>
				<h1>{episode.title}</h1>

				<span>{episode.members}</span>
				<span>{episode.published_at}</span>
				<span>{episode.file.duration}</span>
			</EpisodeHeader>

			<EpisodeDescription
				dangerouslySetInnerHTML={{ __html: episode.description }}
			/>
		</EpisodeContainer>
	);
};

export default Episode;

export const getStaticPaths: GetStaticPaths = async () => {
	const { data } = await api.get<EpisodeModel[]>(`/episodes`, {
		params: {
			_limit: 12,
			_sort: 'published_at',
			_order: 'desc',
		},
	});

	const paths = data.map((episode) => {
		return {
			params: {
				slug: episode.id,
			},
		};
	});

	return {
		paths,
		fallback: 'blocking',
	};
};

type Props = {};
interface Params extends ParsedUrlQuery {
	slug: string;
}

export const getStaticProps: GetStaticProps<Props, Params> = async (ctx) => {
	const slug = ctx.params?.slug;

	const { data } = await api.get<EpisodeModel>(`/episodes/${slug}`);

	const episode = {
		...data,
	};

	return {
		props: {
			episode,
		},
	};
};
