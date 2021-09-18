import React from 'react';
import { Menu } from '../';

import { home, faq } from '../../icons';

export default function NavBar({ title }) {
	return (
		<nav
			className='navbar-component'
			style={{
				position: 'fixed',
				backgroundColor: 'black',
				width: '16rem',
				minWidth: '16rem',
				height: '100vh',
				display: 'block',
				paddingTop: '1.5rem',
			}}
		>
			<Menu
				list={[
					{ icon: home, title: 'Início', link: '/' },
					{ icon: faq, title: 'Faq', link: '/faq' },
				]}
			/>
		</nav>
	);
}
