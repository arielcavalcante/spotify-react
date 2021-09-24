import React from 'react';
import { NavLink } from 'react-router-dom';
import { CardList } from '../';

import './Section.css';

export default function Section({
	title,
	subtitle,
	link,
	cardlist,
	classprop,
}) {
	return (
		<section className='section-component'>
			<div className='section__header'>
				<div>
					<h5 className='section__title'>{title}</h5>
					<p className='section__subtitle'>{subtitle}</p>
				</div>
				<NavLink className='category__smallcaps' to='/'>
					<span>{link || 'ver tudo'}</span>
				</NavLink>
			</div>
			<CardList
				className={classprop}
				classprop={classprop}
				cardlist={cardlist}
			/>
		</section>
	);
}
