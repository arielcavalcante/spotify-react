import React from 'react';
import { useParams } from 'react-router-dom';

import { PlayListTemplate } from '../../templates';

import { playlistSongs } from '../../templates/playlisttemplate/data.js';
import { playlists } from '../player/data.js';

export default function Playlist() {
	const { link } = useParams();

	const fltrUrl = item => {
		return item.link === link;
	};

	//metadata da playlist
	const currentPlaylist = playlists.filter(fltrUrl)[0];

	//lista de musicas
	const currentSongs = []
	// playlistSongs[currentPlaylist.playlist];

	//add id às musicas
	currentSongs.map((s, i) => {
		return (s.id = i + 1);
	});

	return (
		<>
			<PlayListTemplate
				songs={currentSongs}
				currentPlaylist={currentPlaylist}
			/>
		</>
	);
}
