import React from 'react';

import { NavBar, Section, SongList } from '../../components';

import './PlayListTemplate.css';

import { orgulhotropical } from './data';

export default function PlayListTemplate({ songs, title }) {
	return (
		<div id='playlist-page'>
			<NavBar />
			<main className='page-content'>
				<Section title={title}>
					<SongList songs={orgulhotropical} />
				</Section>
			</main>
		</div>
	);
}
