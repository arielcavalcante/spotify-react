import React from 'react';

import {
	MusicPlayer,
	NavBar,
	Section,
	SongList,
	TopBar,
} from '../../components';

import './PlayListTemplate.css';

import { orgulhotropical } from './data';
import { playlists } from '../../pages/player/data.js';

export default function PlayListTemplate({ songs, title }) {
	const songsAndDuration = `・ ${orgulhotropical.length} músicas, ${Math.floor(
		orgulhotropical
			.map((s, i) => {
				return (
					parseInt(s.duration.split(':')[0] * 60) +
					parseInt(s.duration.split(':')[1])
				);
			})
			.reduce((sum, s) => {
				return sum + s;
			}) / 60
	)} min`;

	return (
		<div id='playlist-page' className='inner-player'>
			<NavBar />
			<main className='page-content'>
				<TopBar searchclass='hide' />
				<Section title={title} classname='playlist-header flex align-center'>
					<figure className='playlist__thumbnail'>
						<img
							alt={
								`Capa do ${playlists[1].type} ${playlists[1].title}` ||
								'missing alt'
							}
							src={`assets/${playlists[1].title}.jfif`}
						/>
					</figure>
					<div className='text-wrapper'>
						<p className='category__smallcaps'>{playlists[1].type}</p>
						<h2 className='text__huge'>{playlists[1].title}</h2>
						<p className='subtitle'>{playlists[1].subtitle}</p>
						<div className='flex gap-05 align-center'>
							<h4 className='text__owner'>{playlists[1].owner}</h4>
							<h6>{songsAndDuration}</h6>
						</div>
					</div>
				</Section>
				<Section title={title}>
					<SongList songs={orgulhotropical} />
				</Section>
			</main>
			<MusicPlayer />
		</div>
	);
}
