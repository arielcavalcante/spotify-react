import React from 'react';
import { Link } from 'react-router-dom';

import { Button } from '../';

import './Song.css';

export default function Song({
	album,
	alt = '',
	artist,
	classprop = '',
	classname,
	duration,
	link,
	_id,
	playlist,
	source,
	title,
	type,
	callbackRemove
}) {
	return (
		<>
			{/* O componente padrão é renderizado exceto se for passado uma classprop 'alt', daí o componente com botão de adicionar é renderizado. */}
			{!playlist.user ? (
				<div className={`song-component${classprop || ''}`}>
					<Link
						to={link || '/'}
						type={type || 'Música'}
						className='song__clickarea'
					>
						{/* <p className='song__id'>{_id || 'id'}</p> */}
						{/* <figure className='song__thumbnail'>
							<img
								className={type}
								alt={`Capa da música ${title}` || 'missing alt'}
								src={source || `../assets/temp/${playlist.playlist}/${id}.jfif`}
							/>
						</figure> */}
						<div className='song__text-wrapper--horizontal'>
							<div className='song__text-wrapper'>
								<p className='song__title'>{title || 'title'}</p>
								<p className='song__artist'>{artist}</p>
							</div>
							<p className='song__album'>{album || title}</p>
							<p className='song__duration'>{duration || '3:21'}</p>
						</div>
					</Link>
				</div>
			) : (
				<div className={`song-component${classprop || ''}`}>
					<Link
						to={link || '/'}
						type={type || 'Música'}
						className='song__clickarea'
					>
						{/* <p className='song__id'>{_id || 'id'}</p> */}
						{/* <figure className='song__thumbnail'>
							<img
								className={type}
								alt={`Capa da música ${title}` || 'missing alt'}
								src={source || `../assets/temp/${playlist.playlist}/${id}.jfif`}
							/>
						</figure> */}
						<div className='song__text-wrapper--horizontal'>
							<div className='song__text-wrapper'>
								<p className='song__title'>{title || 'title'}</p>
								<p className='song__artist'>{artist}</p>
							</div>
							<p className='song__album'>{album || title}</p>
							<Button text='REMOVER' classname={`transparent ${classname || ''}`} onclick={(ev) => callbackRemove(ev, _id)}/>
						</div>
					</Link>
				</div>
			)}
		</>
	);
}
