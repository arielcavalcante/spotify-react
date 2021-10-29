import React from 'react';

import { Button, Footer, NavBar } from '../../components';

import './Home.css';
import { edit, search, player } from '../../icons';

export default function Home() {
	const list = [
		{ icon: edit, title: 'Premium', link: '/signup' },
		{ icon: search, title: 'Suporte', link: '/faq' },
		{ icon: player, title: 'Player', link: '/player' },
	];
	return (
		<div id='home-page'>
			<NavBar classprop='--alt' list={list} />
			<section>
				<h1 className='hero green-text'>Suas músicas estão com saudade</h1>
				<h4 className='green-text'>Continue curtindo de onde parou.</h4>
				<Button
					link={'/player'}
					color='blue-text uppercase'
					text='Acesse o Web Player'
				></Button>
			</section>
			<Footer />
		</div>
	);
}
