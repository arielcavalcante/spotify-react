import React from 'react';
import { Link } from 'react-router-dom';
import { v4 as uuid } from 'uuid';

import './Footer.css';
import { logo } from '../../icons';

export default function Footer({ footerlist }) {
	return (
		<footer>
			<nav>
				<div className='col'>
					<Link className='logo' to='/faq'>
						{logo}
					</Link>
				</div>
				{footerlist.map((f, i) => {
					return (
						<div className='col' key={uuid()}>
							<h3 className='category__smallcaps'>{f.title}</h3>
							<ul>
								<li>
									{footerlist.map((f, i) => {
										return (
											<Link className='menu__link' to='/faq'>
												{f.li[i]}
											</Link>
										);
									})}
								</li>
							</ul>
						</div>
					);
				})}
			</nav>
		</footer>
	);
}
