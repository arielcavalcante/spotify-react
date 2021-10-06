import React from 'react';
import { v4 as uuid } from 'uuid';

import { Song } from '../';
import './SongList.css';

export default function SongList({
	alt,
	songlist,
	classprop,
	link,
	source,
	subtitle,
	title,
	type,
}) {
	return (
		<div className={`songlist-component${classprop || ''}`}>
			{songlist.map((c, i) => {
				return <Song key={uuid()} classprop={classprop} {...c} />;
			})}
		</div>
	);
}
