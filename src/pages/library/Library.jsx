import React, {useState, useEffect} from 'react';
import {
	CardList,
	MusicPlayer,
	NavBar,
	Section,
	TopBar,
} from '../../components';
import { useSelector } from 'react-redux';
import './Library.css';
import * as Provider from '../providers/provider';

export default function Library() {
	const user = useSelector(({user}) => user);
	const [data, setData] = useState({
		playlists: [],
	});

	async function loadContent(){
		const playlists = await Provider.fetchPlaylistsByUser(user._id);
		if(playlists){
			setData({
				playlists: playlists.data,
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
			</main>
			<MusicPlayer />
		</div>
	);
}
