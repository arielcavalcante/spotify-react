import React from 'react';
import { useParams } from 'react-router-dom';

import { PlayListTemplate } from '../../templates';

export default function Playlist() {
	const { link } = useParams();
	return (
		<>
			<PlayListTemplate songs={link} />
		</>
	);
}
