import React from 'react';

import { Input } from '../';

import './Search.css';

export default function Search({ searchclass }) {
	return (
		<div className='search-component'>
			<Input
				type='search'
				aria='Pesquise por artistas, músicas ou podcasts'
				placeholder='Músicas, artistas, podcasts'
				classname={`round ${searchclass}`}
			/>
		</div>
	);
}
