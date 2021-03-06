import React from 'react';
import { Link } from 'react-router-dom';

import './ListItem.css';

export default function ListItem({ list }) {
	return (
		<ul className='listitem-component'>
			{list.map((li, i) => {
				return (
					<li>
						<Link className='category__link' to='/faq'>
							{list[i]}
						</Link>
					</li>
				);
			})}
		</ul>
	);
}
