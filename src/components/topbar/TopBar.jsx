import React from 'react';
import { useHistory } from 'react-router-dom';

import { Button, Search } from '../';

import './TopBar.css';
import { arrow_left, arrow_right } from '../../icons';

export default function TopBar({ searchclass }) {
	const history = useHistory();
	return (
		<div className='topbar-component'>
			{/* TODO:  Adicionar lógica ao componente -> se houver histórico pra frente ou pra trás, habilitar o respectivobotão. */}
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
				link='profile'
				classname='transparent profilebtn'
				text={<img src='assets/temp/user.jpeg' alt='Foto de perfil' />}
			/>

		</div>
	);
}
