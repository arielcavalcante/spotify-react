import React from 'react';

import {
	CardList,
	MusicPlayer,
	NavBar,
	Section,
	TopBar,
} from '../../components';

import { recentsearches } from './data.js';
import './Search.css';

export default function Search() {
	return (
		<div id='search-page' className='inner-player'>
			<NavBar />
			<main className='page-content'>
				<TopBar />
				<Section title='Pesquisas recentes'>
					<CardList cards={recentsearches} />
				</Section>
			</main>
			<MusicPlayer />
		</div>
	);
}
