import React from 'react';
import { Link } from 'react-router-dom';
import { Menu } from '../';

import './NavBar.css';
import { logo } from '../../icons';

export default function NavBar({ classprop, list, title }) {
	return (
		<nav className={`navbar-component${classprop || ''}`}>
			<Link className='logo' to='/'>
				{logo}
			</Link>
			<Menu list={list} />
		</nav>
	);
}
