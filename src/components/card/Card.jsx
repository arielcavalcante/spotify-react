import React from 'react';
import { Link } from 'react-router-dom';
import './Card.css';

export default function Card({
	alt,
	classprop,
	link,
	source,
	subtitle,
	title,
	type,
}) {
	return (
		<div className={`card-component${classprop || ''}`}>
			<Link to={link || '/'} type={type || 'Álbum'} className='card__clickarea'>
				<figure className='card__thumbnail'>
					<img
						className={type}
						alt={`Capa do ${type} ${title}` || 'missing alt'}
						src={source || `assets/${title}.jfif`}
					/>
				</figure>
				<div className='card__text-wrapper'>
					<p className='card__title'>{title || 'title'}</p>
					<p className='card__subtitle'>{subtitle || title}</p>
				</div>
			</Link>
		</div>
	);
}
