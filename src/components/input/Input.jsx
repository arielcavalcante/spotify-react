import React from 'react';

import './Input.css';

export default function Input({placeholder = '', type='text', label='teste', name, fullWidth}) {
	return (
        <input className={`custom-input ${fullWidth ? 'w-full' : ''}`}placeholder={placeholder} type={type} id={name} name={name}/>
	);
}
