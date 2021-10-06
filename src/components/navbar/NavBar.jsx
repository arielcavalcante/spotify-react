import React from 'react';
import { Link } from 'react-router-dom';
import { Menu } from '../';

import './NavBar.css';
import { home, faq, logo } from '../../icons';

export default function NavBar({ title }) {
	return (
		<nav className='navbar-component'>
			<Link className='logo' to='/'>
				{logo}
			</Link>
			<Menu
				list={[
					{ icon: home, title: 'Início', link: '/' },
					{ icon: faq, title: 'Cadastrar', link: '/signup' },
					{ icon: faq, title: 'Faq', link: '/faq' },
				]}
			/>
		</nav>
	);
}
