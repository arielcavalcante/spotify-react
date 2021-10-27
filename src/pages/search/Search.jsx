import React from 'react';

import {
	CardList,
	Section,
	NavBar,
	TopBar,
} from '../../components';

import { recentsearches } from './data.js';
import './Search.css';

export default function Search() {
	return (
		<main id='search-page'>
			<NavBar />
			<div className='page-content'>
				<TopBar />
				<Section title='Pesquisas recentes'>
					<CardList cards={recentsearches} />
				</Section>
			</div>
		</main>
	);
}
