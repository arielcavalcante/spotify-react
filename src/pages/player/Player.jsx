import React from 'react';

import { CardList, NavBar, Section } from '../../components';

import './Player.css';
import '../../assets/typography/Typography.css';

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
				<Section title={shift()}>
					<CardList classprop='--card-alt' cards={recentlyplayed} />
				</Section>
				<Section title='Suas playlists' link='playlists'>
					<CardList cards={playlists} />
				</Section>
				<Section title='Seus programas'>
					<CardList link='playlists' cards={podcasts} />
				</Section>
				<Section title='Feitos pra você'>
					<CardList
						cards={dailymixes}
						subtitle='Quanto mais você escutar, melhores recomendações vai receber.'
					/>
				</Section>
			</div>
		</main>
	);
}
