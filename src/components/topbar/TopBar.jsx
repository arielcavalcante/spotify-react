import React from 'react';
import { useHistory } from 'react-router-dom';

import { Button } from '../';

import './TopBar.css';
import { arrow_left, arrow_right } from '../../icons';

export default function TopBar() {
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
		</div>
	);
}
