import React from 'react';
import { v4 as uuid } from 'uuid';

import { Card } from '../';
import './CardList.css';

export default function CardList({
	alt,
	cardlist,
	classprop,
	link,
	source,
	subtitle,
	title,
	type,
}) {
	return (
		<div className={`cardlist-component${classprop || ''} hide-scrollbar`}>
			{cardlist.map((c, i) => {
				return <Card key={uuid()} classprop={classprop} {...c} />;
			})}
		</div>
	);
}
