import React from 'react';
import { NavLink } from 'react-router-dom';

import './Button.css';

export default function Button({
	historic,
	text,
	classname = 'black-text',
	disabled = false,
	link,
	onclick,
}) {
	return (
		<>
			{/* Se uma props *link* for passada, o componente será um link. */}
			{link ? (
				<NavLink
					to={link}
					className={`calltoaction ${classname || ''} ${
						disabled ? 'disabled' : ''
					}`}
					disabled={disabled}
					onClick={onclick}
				>
					{text}
				</NavLink>
			) : (
				<button
					onClick={onclick}
					className={`calltoaction ${classname || ''} ${
						disabled ? 'disabled' : ''
					}`}
					disabled={disabled}
				>
					{text}
				</button>
			)}
		</>
	);
}
