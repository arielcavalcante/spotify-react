import React from 'react';
import { v4 as uuid } from 'uuid';

import { Card } from '../';
import './CardList.css';

export default function CardList({
	alt,
	cards,
	classprop,
	link,
	source,
	subtitle,
	title,
	type,
}) {
	return (
		<div className={`cardlist-component${classprop || ''} hide-scrollbar`}>
			{cards.map((c, i) => {
				return (
					<Card
						key={uuid()}
						link={`${c.link ? 'playlists/' + c.link : ''}`}
						classprop={classprop}
						{...c}
					/>
				);
			})}
		</div>
	);
}
