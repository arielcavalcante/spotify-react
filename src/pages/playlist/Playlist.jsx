import React from 'react';
import { PlaylistTemplate } from '../../templates';

export default function Playlist({ songlist }) {
	return (
		<div>
			<PlaylistTemplate songlist={songlist} />
		</div>
	);
}
