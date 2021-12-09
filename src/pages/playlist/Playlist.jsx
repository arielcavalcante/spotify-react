import React, {useEffect, useState} from 'react';
import { useParams } from 'react-router-dom';
import { PlayListTemplate } from '../../templates';
import { playlistSongs } from '../../templates/playlisttemplate/data.js';

import * as Provider from '../providers/provider';

export default function Playlist() {
	const { link } = useParams();
	const [playlist, setPlaylist] = useState()

	async function loadContent(){
		const playlist = await Provider.fetchPlaylistById(link);
		if(playlist){
			setPlaylist(playlist.data)
		}
	}		
	useEffect(() => {
		if(link){
			loadContent();
		}
    }, []);

	async function handleRemove(ev, playlist, song){
		ev.preventDefault()
		const removed = await Provider.removeMusicFromPlaylist(playlist._id, song)
		if(removed){
			loadContent();
		}
	}
	if (!playlist) return null
	
	return (
		<>
			<PlayListTemplate
				songs={playlist.musics}
				currentPlaylist={playlist}
				callbackRemove={(ev, playlist, song) => handleRemove(ev, playlist, song)}
			/>
		</>
	);
}
