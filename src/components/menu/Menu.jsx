import React from 'react';
import { v4 as uuid } from 'uuid';
import { NavLink } from 'react-router-dom';
import { useDispatch } from 'react-redux';

import './Menu.css';
import { home, library, search } from '../../icons';
import { logout } from '../../pages/store/user.reducer';

export default function Menu({ list }) {
	const dispatch = useDispatch();

	const defaultlist = [
		{ icon: home, title: 'Início', link: '/' },
		{ icon: search, title: 'Pesquisa', link: '/search' },
		{ icon: library, title: 'Sua Biblioteca', link: '/playlists' },
		{ icon: library, title: 'Sair', link: null, action: handleLogout },
	];
	function handleLogout(){
		dispatch(logout()) 
	}
	return (
		<div className='menu-component'>
			<ul className='menu__list'>
				{list
					? list.map((l, i) => {
							return (
								<li key={uuid()}>
									{l.link ? 
										(
											<NavLink
											className='menu__link'
											activeClassName='active'
											exact
											to={l.link}
										>
											{l.icon}
											<span>{l.title}</span>
										</NavLink>
										) : l.action ? (
											<span className='menu__link'>{l.title}</span>
										) : (
											<></>
										)
									}									
								</li>
							);
					  })
					: defaultlist.map((l, i) => {
							return (
								<li key={uuid()}>
									{l.link ? 
										(
											<NavLink
											className='menu__link'
											activeClassName='active'
											exact
											to={l.link}
											>
											{l.icon}
												<span>{l.title}</span>
											</NavLink>
										) : l.action ? (
											<span onClick={() => l.action()} className='menu__link'>{l.title}</span>
										) : (
											<></>
										)
									}
								</li>
							);
					  })}
			</ul>
		</div>
	);
}
