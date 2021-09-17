import React from 'react';
import { NavBar, Section } from '../components';

import './Home.css';

export default function Home() {
	const recentlyplayed = [
		{
			title: 'This is Charlie Brown Jr.',
			subtitle:
				'Da baixada santista para os maiores palcos do Brasil! Relembre os grandes sucessos da banda.',
			type: 'playlist',
		},
		{
			title: 'Indo e Voltando',
			type: 'podcast',
		},
		{
			title: 'QuebraDev',
			type: 'podcast',
		},
		{
			title: 'Frozen 2 (Original Motion Picture Soundtrack)',
			type: 'álbum',
		},
		{
			title: 'Indigo Borboleta Anil',
			type: 'álbum',
		},
		{
			title: 'Sextou Gostosin',
			type: 'playlist',
		},
	];
	const podcasts = [
		{
			title: 'Indo e Voltando',
			type: 'podcast',
		},
		{
			title: 'QuebraDev',
			type: 'podcast',
		},
		{
			title: 'Café da Manhã',
			subtitle: 'Spotify Studios',
			type: 'podcast',
		},
		{
			title: 'Histórias de Ninar para Garotas Rebeldes',
			type: 'podcast',
		},
		{
			title: 'Layers Ponto Tech',
			type: 'podcast',
		},
	];
	const dailymixes = [
		{
			title: 'Daily Mix 1',
			subtitle: 'Luedji Luna, Charlie Brown Jr., Tom Zé e mais',
			type: 'daily mix',
		},
		{
			title: 'Daily Mix 2',
			subtitle: 'Epic Nature, Skyyy, HD Rain and Water e mais',
			type: 'daily mix',
		},
		{
			title: 'Daily Mix 3',
			subtitle: 'Liniker, Linn da Quebrada, Valuá e mais',
			type: 'daily mix',
		},
		{
			title: 'Daily Mix 4',
			subtitle: 'Cardi B, Lizzo, Doja Cat e mais',
			type: 'daily mix',
		},
		{
			title: 'Daily Mix 5',
			subtitle:
				'Kristen Anderson-Lopez, Kristen Bell, Christopher Jackson e mais',
			type: 'daily mix',
		},
		{
			title: 'Daily Mix 6',
			subtitle: 'Alaska Thunderfuck, Jessie Ware, Billie Eilish e mais',
			type: 'daily mix',
		},
	];

	return (
		<main>
			<NavBar />
			<div className='content-spacing'>
				<Section
					title='Boa tarde'
					classprop=' card-alt'
					cardlist={recentlyplayed}
				></Section>
				<Section title='Seus programas' cardlist={podcasts}></Section>
				<Section
					cardlist={dailymixes}
					title='Feitos pra você'
					subtitle='Quanto mais você escutar, melhores recomendações vai receber.'
				></Section>
			</div>
		</main>
	);
}
