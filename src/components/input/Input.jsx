import React from 'react';

import './Input.css';

export default function Input({
	placeholder = '',
	value,
	onChange,
	onBlur,
	type = 'text',
	name,
	label,
	label2,
	aria,
	error = false,
	errorText = '',
	classname,
	labelclass = '',
	fullWidth,
	autofocus,
	autocapitalize,
	autocomplete,
	autocorrect,
	required = 'required',
	disabled
}) {
	return (
		<div className='input-container'>
			<label className={labelclass} htmlFor={name}>
				{label}
			</label>
			<input
				className={`custom-input ${classname || ''} ${
					fullWidth ? 'w-full' : ''
				}`}
				placeholder={placeholder}
				type={type}
				id={name}
				name={name}
				value={value ? value : undefined}
				onChange={onChange}
				onBlur={onBlur ? onBlur : null}
				aria-label={aria}
				autoFocus={autofocus}
				autoCapitalize={autocapitalize}
				required={required}
				autoComplete={autocomplete}
				autoCorrect={autocorrect}
				disabled={disabled}
			/>
			<label htmlFor={name} className={labelclass}>
				{label2}
			</label>
			{error && <span>{errorText}</span>}
		</div>
	);
}
