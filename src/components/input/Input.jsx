import React from 'react';

import './Input.css';

export default function Input({
	placeholder = '',
	value = '',
	onChange,
	onBlur,
	type = 'text',
	name,
	label,
	label2,
	aria,
	error = false,
	errorText = '',
	fullWidth,
	autofocus,
	autocapitalize,
	autocomplete,
	autocorrect,
	required = 'required',
}) {
	return (
		<div className='input-container'>
			<label for={name}>{label}</label>
			<input
				className={`custom-input ${fullWidth ? 'w-full' : ''}`}
				placeholder={placeholder}
				type={type}
				id={name}
				name={name}
				value={value}
				onChange={onChange}
				onBlur={onBlur ? onBlur : null}
				aria-label={aria}
				autofocus={autofocus}
				autocapitalize={autocapitalize}
				required={required}
				autocomplete={autocomplete}
				autocorrect={autocorrect}
			/>
			<label for={name}>{label2}</label>
			{error && <span>{errorText}</span>}
		</div>
	);
}
