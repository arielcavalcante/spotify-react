import React, { useState } from 'react';
import { v4 as uuid } from 'uuid';

import { ListItem } from '../';
import './Accordion.css';

export default function Accordion({ list }) {
	const [active, setActive] = useState(false);

	return (
		<div className='accordion-wrapper'>
			{list.map((l, i) => {
				return (
					<div className='accordion-component'>
						<h3 className='category__title' onClick={() => setActive(!active)}>
							{l.title}
						</h3>
						<div
							className={`accordion__list ${active ? 'active' : 'hide'}`}
							key={uuid()}
						>
							<ListItem list={l.items} />
						</div>
					</div>
				);
			})}
		</div>
	);
}
