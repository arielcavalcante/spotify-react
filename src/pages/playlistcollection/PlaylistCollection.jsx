import React from 'react';
import { CardList, NavBar, Section } from '../../components';

import './PlaylistCollection.css';
import '../../assets/typography/Typography.css';

import {
	playlists,
	podcasts,
	dailymixes,
	recentlyplayed,
} from '../player/data.js';

export default function PlaylistCollection() {
	return (
		<main id='playlistcollection-page'>
			<NavBar />
			<div className='page-content'>
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
			</div>
		</main>
	);
}
