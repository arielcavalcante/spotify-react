import React from 'react';
import { NavLink } from 'react-router-dom';

import './Button.css';

export default function Button({
	text,
	color = 'black-text',
	disabled = false,
	link,
}) {
	return (
		<>
			{/* Se uma props *link* for passada, o botão será um link. */}
			{link ? (
				<NavLink
					to={link}
					className={`calltoaction ${color} ${disabled ? 'disabled' : ''}`}
					disabled={disabled}
				>
					{text}
				</NavLink>
			) : (
				<button
					className={`calltoaction ${color} ${disabled ? 'disabled' : ''}`}
					disabled={disabled}
				>
					{text}
				</button>
			)}
		</>
	);
}
