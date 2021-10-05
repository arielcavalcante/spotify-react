import React, {useState} from 'react';
import { v4 as uuid } from 'uuid';
import './InputSelect.css';

export default function InputSelect({options = [], name}) {
	const [selected, setSelected] = useState("");
	const handleChange = (ev) => {
		setSelected(ev.target.value);
	}
	return (
		<div>
			<select className='select' 
					name={name}
					onChange={handleChange}
					value={selected}
				>
				<option value="">Mês</option>
				{options.map((opt) => <option key={uuid()} value={opt}>{opt}</option>)}
			</select>			
        </div>
	);
}
