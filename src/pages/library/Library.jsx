import React, {useState, useEffect} from 'react';
import { CardList, MusicPlayer, NavBar, Section, TopBar } from '../../components';

import './Library.css';
import * as Provider from '../providers/provider';

export default function Library() {
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

	return (
		<div id='library-page' className='inner-player'>
			<NavBar />
			<main className='page-content'>
				<TopBar />
				<Section title='Suas playlists' link='playlists'>
					<CardList cards={data.playlists} />
				</Section>
				<Section link='playlists'>
					<CardList cards={data.dailymixes} />
				</Section>
				<Section link='playlists'>
					<CardList cards={data.podcasts} />
				</Section>
				<Section link='playlists'>
					<CardList cards={data.recentlyplayed} />
				</Section>
			</main>
			<MusicPlayer />
		</div>
	);
}
