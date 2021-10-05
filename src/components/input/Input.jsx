import React from 'react';

import './Input.css';

export default function Input({placeholder = '', value='', onChange, onBlur, type='text', name, error=false, errorText='', fullWidth}) {
	return (
		<div className='input-container'>
        <input className={`custom-input ${fullWidth ? 'w-full' : ''}`}
				placeholder={placeholder} 
				type={type}
				id={name}
				name={name}
				value={value}
				onChange={onChange}
				onBlur={onBlur ? onBlur : null}/>
		{error && <span>{errorText}</span>}
		</div>
	);
}
