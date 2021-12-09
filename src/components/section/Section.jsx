import React from 'react';
import { NavLink } from 'react-router-dom';

import './Section.css';

export default function Section({
	cards,
	children,
	classname,
	title,
	subtitle,
	link,
}) {
	return (
		<section className={`section-component ${classname || ''}`}>
			<div className='section__header'>
				<div>
					<h5 className='section__title'>{title}</h5>
					<p className='section__subtitle'>{subtitle}</p>
				</div>
				{/* <NavLink className='category__smallcaps' to={`${link || '/'}`}>
					<span>ver tudo</span>
				</NavLink> */}
			</div>
			{children}
		</section>
	);
}
