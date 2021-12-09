import React from 'react';

import {
	MusicPlayer,
	NavBar,
	Section,
	SongList,
	TopBar,
} from '../../components';

import './PlayListTemplate.css';

export default function PlayListTemplate({ songs, title, currentPlaylist, callbackRemove }) {
	// const songsAndDuration = `・ ${songs.length} músicas, ${Math.floor(
	// 	songs
	// 		.map((s, i) => {
	// 			return (
	// 				parseInt(s.duration.split(':')[0] * 60) +
	// 				parseInt(s.duration.split(':')[1])
	// 			);
	// 		})
	// 		// .reduce((sum, s) => {
	// 		// 	return sum + s;
	// 		// }) / 60
	// )} min`;

	return (
		<div id='playlist-page' className='inner-player'>
			<NavBar />
			<main className='page-content'>
				<TopBar searchclass='hide' />
				<Section title={title} classname='playlist-header flex align-center'>
					<div className='text-wrapper'>
						<p className='category__smallcaps'>{currentPlaylist.type}</p>
						<h2 className='text__huge'>{currentPlaylist.title}</h2>
						<p className='subtitle'>{currentPlaylist.subtitle}</p>
						<div className='flex gap-05 align-center'>
							<h4 className='text__owner'>{currentPlaylist.owner}</h4>
						</div>
					</div>
				</Section>
				<Section title={title}>
					{/* TODO: Trocar pela prop songs, pra q o link dê match */}
					<SongList callbackRemove={callbackRemove} songs={songs} playlist={currentPlaylist} />
				</Section>
				{/* <Section title='Recomendados'>
					TODO: Trocar pela prop songs, pra q o link dê match
					<SongList
						songs={songs}
						playlist={currentPlaylist}
						classprop='--alt'
					/>
				</Section> */}
			</main>
			<MusicPlayer />
		</div>
	);
}
