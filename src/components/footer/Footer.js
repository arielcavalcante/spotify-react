import React from 'react';
import { Link } from 'react-router-dom';
import { v4 as uuid } from 'uuid';

import './Footer.css';
import { country, logo, ig, fb, tt } from '../../icons';

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
					<ul>
						<li>
							<Link to='/faq'>{ig}</Link>
						</li>
						<li>
							<Link to='/faq'>{tt}</Link>
						</li>
						<li>
							<Link to='/faq'>{fb}</Link>
						</li>
					</ul>
				</div>
				<div className='footer__bottom-links country'>
					<Link className='type-tiny' to='/faq'>
						{country}
						<span>Brasil</span>
					</Link>
				</div>
				<div className='footer__bottom-links'>
					<ul>
						<li>
							<Link className='type-tiny' to='/faq'>
								Legal
							</Link>
						</li>
						<li>
							<Link className='type-tiny' to='/faq'>
								Centro de Privacidade
							</Link>
						</li>
						<li>
							<Link className='type-tiny' to='/faq'>
								Política de Privacidade
							</Link>
						</li>
						<li>
							<Link className='type-tiny' to='/faq'>
								Cookies
							</Link>
						</li>
						<li>
							<Link className='type-tiny' to='/faq'>
								Sobre anúncios
							</Link>
						</li>
					</ul>
					<span className='type-tiny'>© 2021 Spotify AB</span>
				</div>
			</nav>
		</footer>
	);
}
