import React from 'react';

import { CardList, NavBar, Section, TopBar } from '../../components';

import './Player.css';

import { playlists, podcasts, dailymixes, recentlyplayed } from './data';

export default function Player() {
	function shift() {
		const hours = new Date().getHours();
		if (hours >= 6 && hours < 12) {
			return 'Bom dia';
		} else if (hours >= 12 && hours < 18) {
			return 'Boa tarde';
		} else {
			return 'Boa noite';
		}
	}

	return (
		<main id='player-page'>
			<NavBar />
			<div className='page-content'>
				<TopBar />
				<Section title={shift()} link='playlists'>
					<CardList classprop='--card-alt' cards={recentlyplayed} />
				</Section>
				<Section title='Suas playlists' link='playlists'>
					<CardList cards={playlists} />
				</Section>
				<Section title='Seus programas' link='playlists'>
					<CardList cards={podcasts} />
				</Section>
				<Section title='Feitos pra você' link='playlists'>
					<CardList
						cards={dailymixes}
						subtitle='Quanto mais você escutar, melhores recomendações vai receber.'
					/>
				</Section>
			</div>
		</main>
	);
}
