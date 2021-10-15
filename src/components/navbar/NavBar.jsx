import React from 'react';
import { Link } from 'react-router-dom';
import { Menu } from '../';

import './NavBar.css';
import { home, edit, faq, logo } from '../../icons';

export default function NavBar({ classprop, title }) {
	return (
		<nav className={`navbar-component${classprop || ''}`}>
			<Link className='logo' to='/'>
				{logo}
			</Link>
			<Menu
				list={[
					{ icon: home, title: 'Início', link: '/' },
					{ icon: edit, title: 'Cadastrar', link: '/signup' },
					{ icon: faq, title: 'Faq', link: '/faq' },
				]}
			/>
		</nav>
	);
}
