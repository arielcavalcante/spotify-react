import React from 'react';
import { v4 as uuid } from 'uuid';

import { Song } from '../';
import './SongList.css';

export default function SongList({
	alt,
	songs,
	classprop,
	link,
	playlist,
	source,
	subtitle,
	title,
	type,
	callbackRemove
}) {
	return (
		<div className={`songlist-component${classprop || ''}`}>
			{songs.map((c, i) => {
				return (
					<Song
						key={uuid()}
						classprop={`${classprop || ''}`}
						classname='lightgray-border uppercase'
						playlist={playlist}
						callbackRemove={(ev, id) => callbackRemove(ev, playlist, id)}
						{...c}
					/>
				);
			})}
		</div>
	);
}
