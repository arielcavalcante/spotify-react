import React from 'react';

import {
	CardList,
	MusicPlayer,
	NavBar,
	Section,
	TopBar,
} from '../../components';

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

	const scroll = e => {
		document.querySelector('.page-content').scrollTop > 0
			? (document.querySelector('.topbar-component').style.background =
					'#121212')
			: (document.querySelector('.topbar-component').style.background =
					'transparent');
	};
	return (
		<div id='player-page' className='inner-player'>
			<NavBar />
			<main className='page-content' onLoad={scroll} onScroll={scroll}>
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
			</main>
			<MusicPlayer />
		</div>
	);
}
