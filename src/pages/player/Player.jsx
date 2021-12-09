import React, {useState, useEffect}  from 'react';

import {
	CardList,
	MusicPlayer,
	NavBar,
	Section,
	TopBar,
} from '../../components';
import { useHistory } from "react-router-dom";
import './Player.css';

import * as Provider from '../providers/provider';
import { useSelector } from 'react-redux';

export default function Player() {
	const history = useHistory();
	const user = useSelector(({user}) => user);
	const [data, setData] = useState({
		musics: [],
		playlists: [],
	});

	async function loadContent(){
		const musics = await Provider.fetchMusics();
		const playlists = await Provider.fetchAllPlaylists();
		if(musics && playlists){
			setData({
				musics: musics.data,
				playlists: playlists.data,
			})
		}
	}		
	useEffect(() => {
		loadContent();
    }, []);

	function shift() {
		const hours = new Date().getHours();
		if (hours >= 6 && hours < 12) {
			return `Bom dia, ${user.name}`;
		} else if (hours >= 12 && hours < 18) {
			return `Bom tarde, ${user.name}`;
		} else {
			return `Bom noite, ${user.name}`;
		}
	}

	const scroll = e => {
		document.querySelector('.page-content').scrollTop > 0
			? (document.querySelector('.topbar-component').style.background =
					'#121212')
			: (document.querySelector('.topbar-component').style.background =
					'transparent');
	};
	async function handleAddNewMusic(ev, id){
		ev.preventDefault();
		const result = await Provider.addMusicNewPlaylist(user._id, id);
		if(result){
			history.push("/playlists");
		}
	}
	return (
		<div id='player-page' className='inner-player'>
			<NavBar />
			<main className='page-content' onLoad={scroll} onScroll={scroll}>
				<TopBar />
				<Section title='Playlists do momento' link='playlists'>
					<CardList cards={data.playlists} />
				</Section>
				<Section title='Feitos pra você' link=''>
					<CardList
						cards={data.musics}
						subtitle='Quanto mais você escutar, melhores recomendações vai receber.'
						callback={(ev, id) => handleAddNewMusic(ev, id)}
					/>
				</Section>
			</main>
			<MusicPlayer />
		</div>
	);
}
