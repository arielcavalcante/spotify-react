import React from 'react';

import './Input.css';

export default function Input({
	placeholder = '',
	value,
	onChange,
	onBlur,
	type = 'text',
	name,
	id,
	label,
	label2,
	aria,
	tabindex = 0,
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
}) {
	return (
		<div className='input-container'>
			{label ? (
				<label className={labelclass} htmlFor={id || name}>
					{label}
				</label>
			) : (
				<></>
			)}
			<input
				className={`custom-input ${classname || ''} ${
					fullWidth ? 'w-full' : ''
				}`}
				placeholder={placeholder}
				type={type}
				id={id}
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
				tabIndex={tabindex}
			/>
			{label2 ? (
				<label className={labelclass} htmlFor={id || name}>
					{label2}
				</label>
			) : (
				<></>
			)}
			{error && <span>{errorText}</span>}
		</div>
	);
}
