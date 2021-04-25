/** @format */

import { FC, useMemo } from 'react';
import { GetStaticPaths, GetStaticProps } from 'next';
import Head from 'next/head';
import Image from 'next/image';
import Link from 'next/link';
import { ParsedUrlQuery } from 'querystring';

import { Episode as EpisodeModel } from '../../models/episode';
import { api } from '../../services/api';
import { usePlayer } from '../../contexts/PlayerContext';
import {
	convertSeconds2Hours,
	formatDateDayMonthYear,
} from '../../utils/formatDate';

import { EpisodeWrapper } from '../../styles/wrappers';

import {
	EpisodeContainer,
	EpisodeDescription,
	EpisodeHeader,
	EpisodeThumbnail,
} from '../../screen/episode';

interface EpisodeProps {
	episode: EpisodeModel;
}

const Episode: FC<EpisodeProps> = ({ episode }) => {
	const { play } = usePlayer();

	const durationFormatted = useMemo(() => {
		const formatted = convertSeconds2Hours(episode.file.duration);
		return formatted;
	}, []);

	const publishedAtFormatted = useMemo(() => {
		const formatted = formatDateDayMonthYear(new Date(episode.published_at));
		return formatted;
	}, []);

	return (
		<EpisodeWrapper>
			<Head>
				<title>{episode.title} | PodCastr</title>
				<meta name='description' content={episode.description} />
				<meta name='og:image' content={episode.thumbnail} />
			</Head>
			<EpisodeContainer>
				<EpisodeThumbnail>
					<Link href='/'>
						<button type='button'>
							<img src='/icons/arrow-left.svg' alt='Voltar' />
						</button>
					</Link>
					<Image
						className='border-radius'
						width={700}
						height={160}
						src={episode.thumbnail}
						alt={episode.title}
						objectFit='cover'
					/>
					<button>
						<img
							src='/icons/play.svg'
							alt='Tocar Podcast'
							onClick={() => play(episode)}
						/>
					</button>
				</EpisodeThumbnail>
				<EpisodeHeader>
					<h1>{episode.title}</h1>

					<span>{episode.members}</span>
					<span>{publishedAtFormatted}</span>
					<span>{durationFormatted}</span>
				</EpisodeHeader>

				<EpisodeDescription
					dangerouslySetInnerHTML={{ __html: episode.description }}
				/>
			</EpisodeContainer>
		</EpisodeWrapper>
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
