import React from 'react';
import { Link } from 'react-router-dom';
import { Button } from '../../components';

import './Card.css';

export default function Card({
	alt,
	classprop,
	_id,
	source,
	subtitle,
	title,
	type,
	callback
}) {
	return (
		<div className={`card-component${classprop || ''}`}>
			<Link
				to={type == "playlist" ? `playlist/${_id}` : ''}
				type={type || 'Álbum'}
				className='card__clickarea'
			>
				<figure className='card__thumbnail'>
					<img
						className={type}
						alt={`Capa do ${type} ${title}` || 'missing alt'}
						src={source || `assets/${title}.jfif`}
						onError="if (this.src != 'error.jpg') this.src = 'error.jpg';"
					/>
				</figure>
				<div className='card__text-wrapper'>
					<p className='card__title'>{title || 'title'}</p>
					<p className='card__subtitle'>{subtitle || title}</p>
				</div>
			</Link>
			{type !== 'playlist' && 
				<Button classname="add" text='ADD' onclick={(ev) => callback(ev, _id)}/>
			}
		</div>
	);
}
