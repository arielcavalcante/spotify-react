import React from 'react';

import { NavBar, Section, SongList } from '../../components';

import './PlaylistTemplate.css';

export default function Playlist({ songlist }) {
	return (
		<div id='playlist-page'>
			<NavBar />
			<main className='page-content'>
				<Section classprop=' hide'>
					<SongList songlist={songlist} />
				</Section>
			</main>
		</div>
	);
}
