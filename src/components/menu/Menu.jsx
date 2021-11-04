import React from 'react';
import { v4 as uuid } from 'uuid';
import { NavLink } from 'react-router-dom';

import './Menu.css';
import { home, library, search } from '../../icons';

export default function Menu({ list }) {
	const defaultlist = [
		{ icon: home, title: 'Início', link: '/player' },
		{ icon: search, title: 'Pesquisa', link: '/search' },
		{ icon: library, title: 'Sua Biblioteca', link: '/playlists' },
	];
	return (
		<div className='menu-component'>
			<ul className='menu__list'>
				{list
					? list.map((l, i) => {
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
					  })
					: defaultlist.map((l, i) => {
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
