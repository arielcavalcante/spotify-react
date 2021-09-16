import React from 'react';

export default function Menu( {list} ) {
	return(
		<nav>
			<ul>
				{list.map((l, i) => { 
					return(
						<li key={i}>
							<a href={l.link}>
								{l.title}
							</a>
						</li>
					)
				})}
			</ul>
		</nav>
	)
}