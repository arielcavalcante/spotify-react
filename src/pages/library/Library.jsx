import React from 'react';
import { CardList, NavBar, Section, TopBar } from '../../components';

import './Library.css';
import '../../assets/typography/Typography.css';

import {
	playlists,
	podcasts,
	dailymixes,
	recentlyplayed,
} from '../player/data.js';

export default function Library() {
	return (
		<main id='library-page'>
			<NavBar />
			<div className='page-content'>
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
			</div>
		</main>
	);
}
