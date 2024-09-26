import React, { useState } from 'react';
import { Button, Footer, Input, InputSelect, NavBar } from '../../components';

import './Profile.css';
import { home, search, player } from '../../icons';

const formDefault = {
	email: '',
	password: '',
	gender: '',
	birth_day: '',
	birth_month: '',
	birth_year: '',
	country: 'Brasil',
};
const genders = ['Masculino', 'Feminino', 'Não-binário'];
export default function Profile() {
	const [form, setForm] = useState(formDefault);
	const [emailValid, setEmailValid] = useState(true);

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

	const handleChange = (field, newValue) => {
		setForm({ ...form, [field]: newValue });
	};
	const handleSubmit = ev => {
		ev.preventDefault();
		setForm(formDefault);

		console.log(form);
	};
	function isValidated() {
		return (
			form.email !== '' &&
			form.password !== '' &&
			form.gender !== '' &&
			form.birth_day !== '' &&
			form.birth_month !== '' &&
			form.birth_year !== '' &&
			emailValid
		);
	}

	const navlist = [
		{ icon: home, title: 'Início', link: '/' },
		{ icon: search, title: 'Suporte', link: '/faq' },
		{ icon: player, title: 'Player', link: '/player' },
	];
	return (
		<div id='profile-page'>
			<main>
				<NavBar classprop='--alt' list={navlist} />
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
							label='Email'
							type='email'
							classname='w-full'
							value={form.email}
							onChange={ev => handleChange('email', ev.target.value)}
						/>
						<Input
							label='Senha'
							type='password'
							classname='w-full'
							value={form.password}
							onChange={ev => handleChange('password', ev.target.value)}
						/>
						<InputSelect
							label='Gênero'
							options={genders}
							placeholder='Gênero'
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
						<InputSelect
							classname='country w-full'
							label='País ou Região'
							placeholder='Brasil'
							disabled
						/>
						<div className='row-revert w-full flex'>
							<Button
								text='salvar perfil'
								classname='uppercase black-text'
								disabled={!isValidated()}
							/>
							<Button
								text='cancelar'
								classname='transparent uppercase black-text'
							/>
						</div>
					</form>
				</section>
			</main>
			<Footer />
		</div>
	);
}
