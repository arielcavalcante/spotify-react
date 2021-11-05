import React from 'react';
import {
	CardList,
	MusicPlayer,
	NavBar,
	Section,
	TopBar,
} from '../../components';

import './Library.css';

import {
	playlists,
	podcasts,
	dailymixes,
	recentlyplayed,
} from '../player/data.js';

export default function Library() {
	return (
		<div id='library-page' className='inner-player'>
			<NavBar />
			<main className='page-content'>
				<TopBar />
				<Section title='Suas playlists' link='playlists'>
					<CardList cards={playlists} />
				</Section>
				<Section link='playlists'>
					<CardList cards={dailymixes} />
				</Section>
				<Section link='playlists'>
					<CardList cards={podcasts} />
				</Section>
				<Section link='playlists'>
					<CardList cards={recentlyplayed} />
				</Section>
			</main>
			<MusicPlayer />
		</div>
	);
}
