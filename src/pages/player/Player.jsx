import React, {useState, useEffect}  from 'react';

import { CardList, NavBar, Section, TopBar } from '../../components';

import './Player.css';

import * as Provider from '../providers/provider';
export default function Player() {

	const [data, setData] = useState({
		dailymixes: [],
		playlists: [],
		podcasts: [],
		recentlyplayed: [],
	});

	async function loadContent(){
		const dailymixes = await Provider.fetchDailyMixes();
		const playlists = await Provider.fetchPlaylists();
		const podcasts = await Provider.fetchPodcasts();
		const recentlyplayed = await Provider.fetchRecentlyPlayed();
		if(dailymixes && playlists && podcasts && recentlyplayed){
			setData({
				dailymixes: dailymixes.data,
				playlists: playlists.data,
				podcasts: podcasts.data,
				recentlyplayed: recentlyplayed.data,
			})
		}
	}	
	useEffect(() => {
		loadContent();
    }, []);

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
					<CardList classprop='--card-alt' cards={data.recentlyplayed} />
				</Section>
				<Section title='Suas playlists' link='playlists'>
					<CardList cards={data.playlists} />
				</Section>
				<Section title='Seus programas' link='playlists'>
					<CardList cards={data.podcasts} />
				</Section>
				<Section title='Feitos pra você' link='playlists'>
					<CardList
						cards={data.dailymixes}
						subtitle='Quanto mais você escutar, melhores recomendações vai receber.'
					/>
				</Section>
			</div>
		</main>
	);
}
