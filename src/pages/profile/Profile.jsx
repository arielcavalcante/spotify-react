import React, { useState, useEffect } from 'react';

import { Button, Footer, Input, InputSelect, NavBar, TopBar } from '../../components';

import './Profile.css';
import { edit, search, player } from '../../icons';

import { useSelector, useDispatch } from 'react-redux';

import { setUserData } from '../store/user.reducer';

import * as userProvider from '../providers/userProvider';

const formDefault = {
	name:'',
	gender: '',
	birth_day: '',
	birth_month: '',
	birth_year: '',
	country: 'Brasil',
};
const genders = ['Masculino', 'Feminino', 'Não-binário'];
export default function Profile() {
	const dispatch = useDispatch()
	const [form, setForm] = useState(formDefault);
	const user = useSelector(({user}) => user);

	const months = [
		'Janeiro',
		'Fevereiro',
		'Março',
		'Abril',
		'Maio',
		'Junho',
		'Julho',
		'Agosto',
		'Setembro',
		'Outubro',
		'Novembro',
		'Dezembro',
	];

	useEffect(() => {
		setForm({
			name:user.name,
			gender: user.gender,
			birth_day: user.birth_day,
			birth_month: user.birth_month,
			birth_year: user.birth_year,
			country: 'Brasil',
		});
    }, []);

	const handleChange = (field, newValue) => {
		setForm({ ...form, [field]: newValue });
	};
	const handleSubmit = ev => {
		ev.preventDefault();
		userProvider.update({id: user._id, ...form}).then((res) => {
			dispatch(setUserData({...user, ...form}));
		}).catch((err) => {
			console.log('err', err)
		})		
	};
	function isValidated() {
		return (
			form.name !== '' &&
			form.gender !== '' &&
			form.birth_day !== '' &&
			form.birth_month !== '' &&
			form.birth_year !== ''
		);
	}

	const navlist = [
		{ icon: edit, title: 'Premium', link: '/signup' },
		{ icon: search, title: 'Suporte', link: '/faq' },
		{ icon: player, title: 'Player', link: '/player' },
	];
	return (
		<div id='player-page' className='inner-player'>
			<NavBar />
			<main className='page-content'>
				<TopBar />
				<div id='profile-page'>
			<main>
				{/* <NavBar classprop='--alt' list={navlist} /> */}
				<section className='herocover'>
					<div className='text-container'>
						<h1 className='hero'>Olá!</h1>
						<p>
							Quer editar seu perfil? Encontrar uma playlist antiga? Descansar
							um pouco do trabalho? Você pode fazer tudo isso aqui.
						</p>
					</div>
					<img
						src='https://www.scdn.co/i/account/overview/iphone-ddd9e69.png'
						alt='Celular com capa de singl da Zara Larsson'
					/>
				</section>
				<section>
					<form className='form-wrapper' onSubmit={handleSubmit}>
						<Input
							label='Como devemos te chamar?'
							placeholder='Insira um nome de perfil'
							name='name'
							value={form.name}
							onChange={ev => handleChange('name', ev.target.value)}
							fullWidth
						/>						
						<Input
							label='Email'
							type='email'
							classname='w-full'
							value={user.email}
							disabled={true}
							onChange={ev => handleChange('email', ev.target.value)}
						/>
						{/* <Input
							label='Senha'
							type='password'
							classname='w-full'
							value={form.password}
							onChange={ev => handleChange('password', ev.target.value)}
						/> */}
						<InputSelect
							label='Gênero'
							options={genders}
							placeholder='Gênero'
							value={form.gender}
							onChange={value => handleChange('gender', value)}
						/>
						<div className='inputs-row flex w-full align-center'>
							<label className='w-full'>Data de Nascimento</label>
							<Input
								type='number'
								classname='day h-full'
								labelclass='hide'
								value={form.birth_day}
								onChange={ev => handleChange('birth_day', ev.target.value)}
							/>
							<InputSelect
								classname='month h-full'
								labelclass='hide'
								options={months}
								onChange={value => handleChange('birth_month', value)}
							/>
							<Input
								type='number'
								classname='year h-full'
								labelclass='hide'
								value={form.birth_year}
								onChange={ev => handleChange('birth_year', ev.target.value)}
							/>
						</div>
						<div className='row-revert w-full flex'>
							<Button
								text='salvar perfil'
								classname='uppercase black-text'
								disabled={!isValidated()}
							/>
						</div>
					</form>
				</section>
			</main>
			</div>
			</main>
		</div>		

	);
}
