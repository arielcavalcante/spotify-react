import React, { useState } from 'react';
import Playlist from 'react-h5-audio-player';

import 'react-h5-audio-player/lib/styles.css';

import './MusicPlayer.css';

export default function MusicPlayer() {
	const playlist = [
		{ name: 'Principia', src: '/assets/amarelo/02 - Principia.mp3' },
		{
			name: 'A Ordem Natural das Coisas',
			src: '/assets/amarelo/03 - A Ordem Natural das Coisas.mp3',
		},
		{
			name: 'Pequenas Alegrias da Vida Adulta',
			src: '/assets/amarelo/04 - Pequenas Alegrias da Vida Adulta.mp3',
		},
		{
			name: 'Quem Tem Um Amigo (Tem Tudo)',
			src: '/assets/amarelo/05 - Quem Tem Um Amigo (Tem Tudo).mp3',
		},
		{ name: 'Paisagem', src: '/assets/amarelo/06 - Paisagem.mp3' },
		{
			name: 'Cananéia, Iguape e Ilha Comprida',
			src: '/assets/amarelo/07 - Cananéia, Iguape e Ilha Comprida.mp3',
		},
		{ name: '9nha', src: '/assets/amarelo/08 - 9nha.mp3' },
		{ name: 'Ismália', src: '/assets/amarelo/09 - Ismália.mp3' },
		{
			name: 'Eminência Parda',
			src: '/assets/amarelo/10 - Eminência Parda.mp3',
		},
		{
			name: 'AmarElo (Sample: Sujeito de Sorte - Belchior)',
			src: '/assets/amarelo/11 - AmarElo (Sample_ Sujeito de Sorte - Belchior).mp3',
		},
		{ name: 'Libre', src: '/assets/amarelo/12 - Libre.mp3' },
	];

	const [musicIndex, setMusicIndex] = useState(0);

	function handlePrevious() {
		musicIndex === 0
			? setMusicIndex(playlist.length - 1)
			: setMusicIndex(musicIndex - 1);
	}
	function handleNext() {
		musicIndex < playlist.length - 1
			? setMusicIndex(musicIndex + 1)
			: setMusicIndex(0);
	}

	return (
		<footer className='musicplayer-component'>
			<Playlist
				src={playlist[musicIndex].src}
				layout='stacked-reverse'
				showSkipControls={true}
				showJumpControls={false}
				showDownloadProgress={false}
				preload='metadata'
				onClickPrevious={handlePrevious}
				onClickNext={handleNext}
			/>
		</footer>
	);
}
