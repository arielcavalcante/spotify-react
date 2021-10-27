import React, { useState } from 'react';
import { NavBar, Input, InputSelect, Button } from '../../components';
import { logo_black } from '../../icons';

import './Signup.css';
import '../../assets/typography/Typography.css';
import { edit, search, player } from '../../icons';

const formDefault = {
	email: '',
	email_confirm: '',
	password: '',
	cdcv: '',
	birth_day: '',
	birth_month: '',
	birth_year: '',
	gender: '',
};
const genders = ['Masculino', 'Feminino', 'Não-binário'];
export default function Signup() {
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

		download(JSON.stringify(form), 'json.txt', 'text/plain');
	};
	function download(content, fileName, contentType) {
		var a = document.createElement('a');
		var file = new Blob([content], { type: contentType });
		a.href = URL.createObjectURL(file);
		a.download = fileName;
		a.click();
	}
	function checkEmails() {
		if (
			form.email !== form.email_confirm &&
			form.email !== '' &&
			form.email_confirm !== ''
		) {
			setEmailValid(false);
		} else {
			setEmailValid(true);
		}
	}
	function isValidated() {
		return (
			form.email !== '' &&
			form.email_confirm !== '' &&
			form.password !== '' &&
			form.cdcv !== '' &&
			form.birth_day !== '' &&
			form.birth_month !== '' &&
			form.birth_year !== '' &&
			form.gender !== '' &&
			emailValid
		);
	}
	const navlist = [
		{ icon: edit, title: 'Premium', link: '/signup' },
		{ icon: search, title: 'Suporte', link: '/faq' },
		{ icon: player, title: 'Player', link: '/player' },
	];
	return (
		<main id='signup-page'>
			<NavBar classprop='--alt' list={navlist} />
			<div className='page-content bg-white'>
				<div>
					<span>Cadastro realizado com sucesso!</span>
				</div>
				<div className='signup-container'>
					<div className='logo-content'>
						<div className='logo-black'>{logo_black}</div>
					</div>
					<hr></hr>
					<div className='signup-form-container'>
						<h3 className='signup-container__title'>
							Inscreva-se com seu endereço de e-mail
						</h3>
						<form className='form' onSubmit={handleSubmit}>
							<Input
								label='Qual é o seu e-mail?'
								placeholder='Insira seu e-mail'
								name='email'
								value={form.email}
								onChange={ev => handleChange('email', ev.target.value)}
								fullWidth
							/>
							<Input
								label='Confirme email'
								placeholder='Insira o e-mail novamente'
								name='confirmar_email'
								value={form.email_confirm}
								onChange={ev => handleChange('email_confirm', ev.target.value)}
								error={!emailValid}
								onBlur={() => checkEmails()}
								errorText={'Email de confirmação inválido'}
								fullWidth
							/>
							<Input
								label='Crie uma senha'
								placeholder='Crie uma senha'
								name='senha'
								type={'password'}
								value={form.password}
								onChange={ev => handleChange('password', ev.target.value)}
								fullWidth
							/>
							<Input
								label='Como devemos te chamar?'
								placeholder='Insira um nome de perfil'
								name='cdcv'
								value={form.cdcv}
								onChange={ev => handleChange('cdcv', ev.target.value)}
								fullWidth
							/>
							<label className='input-label'>
								Qual sua data de nascimento?
							</label>
							<div className='flex'>
								<div style={{ width: '20%' }} className='pr-5'>
									<Input
										label='Dia'
										placeholder='Dia'
										name='dia'
										type='number'
										labelclass='font-regular'
										value={form.birth_day}
										onChange={ev => handleChange('birth_day', ev.target.value)}
										fullWidth
									/>
								</div>
								<div style={{ width: '80%' }} className='pl-5 pr-5'>
									<InputSelect
										label='Mês'
										placeholder='Mês'
										labelclass='font-regular'
										name='mes'
										options={months}
										onChange={value => handleChange('birth_month', value)}
									/>
								</div>
								<div style={{ width: '20%' }} className='pl-5'>
									<Input
										label='Ano'
										placeholder='Ano'
										name='ano'
										type='number'
										value={form.birth_year}
										onChange={ev => handleChange('birth_year', ev.target.value)}
										fullWidth
									/>
								</div>
							</div>
							<div
								className='flex align-items-center'
								style={{ margin: '16px 0' }}
							>
								{genders.map(g => {
									return (
										<div className='flex align-items-center pr-12'>
											<Input
												value={g}
												label2={g}
												classname='black-text flex'
												type={'radio'}
												name='gender'
												onChange={ev => handleChange('gender', g)}
											/>
										</div>
									);
								})}
							</div>
							<div className='m-12'>
								<Button
									text='INSCREVER-SE'
									classname='white-text'
									disabled={!isValidated()}
								/>
							</div>
						</form>
					</div>
				</div>
			</div>
		</main>
	);
}
