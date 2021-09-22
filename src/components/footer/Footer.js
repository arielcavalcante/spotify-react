import React from 'react';
import { Link } from 'react-router-dom';
import { v4 as uuid } from 'uuid';

import './Footer.css';
import { logo, ig, fb, tt } from '../../icons';

export default function Footer({ footerlist }) {
	return (
		<footer className='footer-component'>
			<nav>
				<div className='col'>
					<Link className='logo' to='/faq'>
						{logo}
					</Link>
				</div>
				<div className='footer__menu'>
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
				</div>
				<div className='col socialmedia'>
					<Link to='/faq'>{ig}</Link>
					<Link to='/faq'>{tt}</Link>
					<Link to='/faq'>{fb}</Link>
				</div>
			</nav>
		</footer>
	);
}
