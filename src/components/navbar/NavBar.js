import React from 'react';
import { Menu } from '../';

import './NavBar.css';
import { home, faq } from '../../icons';

export default function NavBar({ title }) {
	return (
		<nav className='navbar-component'>
			<Menu
				list={[
					{ icon: home, title: 'Home', link: '/' },
					{ icon: faq, title: 'F.A.Q', link: '/faq' },
				]}
			/>
		</nav>
	);
}
