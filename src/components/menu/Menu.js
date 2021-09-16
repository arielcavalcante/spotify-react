import React from 'react';
import { v4 as uuid } from 'uuid';
import { Link } from 'react-router-dom';

import './Menu.css';

import { logo } from '../../icons';

export default function Menu({ list }) {
	return (
		<div className='menu-component'>
			<Link to='/' className='logo'>
				{logo}
			</Link>
			<ul className='menu__list'>
				{list.map((l, i) => {
					return (
						<li key={uuid()}>
							<Link to={l.link} className='menu__link'>
								{l.icon}
								<span>{l.title}</span>
							</Link>
						</li>
					);
				})}
			</ul>
		</div>
	);
}
