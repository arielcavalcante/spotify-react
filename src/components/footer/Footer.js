import React from 'react';
import { Link } from 'react-router-dom';
import { v4 as uuid } from 'uuid';

import './Footer.css';
import { logo } from '../../icons';

export default function Footer({ footerlist }) {
	const data = new Date();

	return (
		<footer>
			<nav>
				<div className='col'>
					<Link className='logo' to='/faq'>
						{logo}
						<p>{data.toLocaleDateString()}</p>
					</Link>
				</div>
				{footerlist.map((f, i) => {
					return (
						<div className='col' key={uuid()}>
							<h3 className='category__smallcaps'>{f.title}</h3>
							<ul>
								<li>
									{f.li.map((li, y) => {
										return (
											<Link className='menu__link' to='/faq'>
												{li}
											</Link>
										);
									})}
								</li>
							</ul>
						</div>
					);
				})}
				<div className='col socialmedia'>
					<Link to='/faq'>
						<span className='socialmedia insta'></span>
					</Link>
					<Link to='/faq'>
						<span className='socialmedia twitter'></span>
					</Link>
					<Link to='/faq'>
						<span className='socialmedia face'></span>
					</Link>
				</div>
			</nav>
		</footer>
	);
}
