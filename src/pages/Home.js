import React from 'react';
import { CardList, NavBar } from '../components';

export default function Home() {
	const cardlist = [
		{
			title: 'Indo e Voltando',
			type: 'podcast',
		},
		{
			title: 'QuebraDev',
			type: 'podcast',
		},
		{
			title: 'QuebraDev',
			type: 'podcast',
		},
		{
			title: 'QuebraDev',
			type: 'podcast',
		},
		{
			title: 'QuebraDev',
			type: 'podcast',
		},
		{
			title: 'QuebraDev',
			type: 'podcast',
		},
	];

	return (
		<main>
			<NavBar />
			<CardList cardlist={cardlist} />
		</main>
	);
}
