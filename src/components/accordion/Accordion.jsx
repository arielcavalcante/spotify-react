import React, { useState } from 'react';
import { v4 as uuid } from 'uuid';

import { ListItem } from '../';
import './Accordion.css';

export default function Accordion({ list = [] }) {
	const [data, setData] = useState(list);

	function setItemActive(i, active) {
		let newList = [...data];
		newList[i]['active'] = active;
		setData(newList);
	}
	return (
		<div className='accordion-wrapper'>
			{data.map((l, i) => {
				return (
					<div
						className={`accordion-component ${l['active'] ? 'active' : 'hide'}`}
						key={uuid()}
					>
						<h3
							className='category__title'
							onClick={() => setItemActive(i, !l['active'])}
						>
							{l.title}
						</h3>
						<div
							className={`accordion__list ${l['active'] ? 'active' : 'hide'}`}
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
