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

export default function PlayListTemplate({ songs, title }) {
	return (
		<div id='playlist-page' className='inner-player'>
			<NavBar />
			<main className='page-content'>
				<TopBar />
				<Section title={title}>
					<SongList songs={orgulhotropical} />
				</Section>
			</main>
			<MusicPlayer />
		</div>
	);
}
