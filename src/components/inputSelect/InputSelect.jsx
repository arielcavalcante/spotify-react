import React, { useState } from 'react';
import { v4 as uuid } from 'uuid';
import './InputSelect.css';

export default function InputSelect({
	options = [],
	onChange,
	classname,
	disabled,
	name,
	label,
	labelclass,
	placeholder = 'Mês',
}) {
	const [selected, setSelected] = useState('');
	const handleChange = ev => {
		setSelected(ev.target.value);
		onChange(ev.target.value);
	};
	return (
		<div className={`select-container ${classname || ''}`}>
			<label className={labelclass} htmlFor={name}>
				{label}
			</label>
			<select
				className={`select ${disabled ? 'disabled' : ''}`}
				name={name}
				onChange={handleChange}
				value={selected}
				disabled={`${disabled ? 'disabled' : ''}`}
			>
				<option value='' disabled defaultValue hidden>
					{placeholder}
				</option>
				{options.map(opt => (
					<option key={uuid()} value={opt}>
						{opt}
					</option>
				))}
			</select>
		</div>
	);
}
