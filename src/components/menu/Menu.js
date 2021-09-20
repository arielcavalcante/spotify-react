import React from 'react';
import { v4 as uuid } from 'uuid';
import { NavLink } from 'react-router-dom';

import './Menu.css';

export default function Menu({ list }) {
	return (
		<div className='menu-component'>
			<ul className='menu__list'>
				{list.map((l, i) => {
					return (
						<li key={uuid()}>
							<NavLink
								className='menu__link'
								activeClassName='active'
								exact
								to={l.link}
							>
								{l.icon}
								<span>{l.title}</span>
							</NavLink>
						</li>
					);
				})}
			</ul>
		</div>
	);
}
