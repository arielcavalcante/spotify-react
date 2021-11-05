import React, { useState } from 'react';
import { v4 as uuid } from 'uuid';
import './InputSelect.css';

export default function InputSelect({
	options = [],
	onChange,
	name,
	label,
	labelclass,
}) {
	const [selected, setSelected] = useState('');
	const handleChange = ev => {
		setSelected(ev.target.value);
		onChange(ev.target.value);
	};
	return (
		<div className='select-container'>
			<label className={labelclass} htmlFor={name}>
				{label}
			</label>
			<select
				className='select'
				name={name}
				onChange={handleChange}
				value={selected}
			>
				<option value='' disabled selected hidden>
					Mês
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
