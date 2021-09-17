import React from 'react';
import { CardList, NavBar } from '../components';

export default function Home() {
	const cardlist = [
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
			title: 'Frozen 2',
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

	return (
		<main>
			<NavBar />
			<CardList cardlist={cardlist} />
		</main>
	);
}
