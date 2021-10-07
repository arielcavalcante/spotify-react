import React from 'react';
import { useParams } from 'react-router-dom';

import { PlayListTemplate } from '../../templates';

import './PlayList.css';

export default function PlayList() {
	const { link } = useParams();
	return (
		<>
			<PlayListTemplate songs={link} />
		</>
	);
}
