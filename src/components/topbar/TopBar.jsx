import React from 'react';
import { useHistory } from 'react-router-dom';

import { Button, Search } from '../';

import './TopBar.css';
import { arrow_left, arrow_right } from '../../icons';

export default function TopBar({ searchclass, src }) {
	const history = useHistory();
	return (
		<div className='topbar-component'>
			<Button
				onclick={() => history.go(-1)}
				classname='black white-text arrow'
				text={arrow_left}
			/>
			<Button
				onclick={() => history.go(1)}
				classname='black white-text arrow'
				text={arrow_right}
				disabled
			/>
			<Search />
			<Button
				link='/profile'
				classname='transparent profilebtn'
				text={
					<img src={`${src || ''}assets/temp/user.jpeg`} alt='Foto de perfil' />
				}
			/>
		</div>
	);
}
