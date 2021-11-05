import React from 'react';

import { NavBar, Section, SongList, TopBar } from '../../components';

import './PlayListTemplate.css';

import { orgulhotropical } from './data';

export default function PlayListTemplate({ songs, title }) {
	return (
		<div id='playlist-page'>
			<NavBar />
			<main className='page-content'>
				<TopBar />
				<Section title={title}>
					<SongList songs={orgulhotropical} />
				</Section>
			</main>
		</div>
	);
}
