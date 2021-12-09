import React, { useState }  from 'react';
import { NavLink } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { useHistory } from "react-router-dom";

import { Button, Input } from '../../components';
import { logo } from '../../icons';
import * as userProvider from '../providers/userProvider';
import { setUserData } from '../store/user.reducer';
import './Login.css';

const formDefault = {
	email: '',
	password: '',
};
export default function Login() {
	const dispatch = useDispatch()
	let history = useHistory();
	const [form, setForm] = useState(formDefault);

	const handleSubmit = ev => {
		ev.preventDefault();
		userProvider.login(form.email, form.password).then((res) => {
			dispatch(setUserData(res.data));
			setForm(formDefault);
			history.push("/");
		}).catch((err) => {
			console.log('err', err)
		})
	};
	const handleChange = (field, newValue) => {
		setForm({ ...form, [field]: newValue });
	};
	function isValidated() {
		return (
			form.email !== '' &&
			form.password !== ''
		);
	}
	return (
		<div id='login-page'>
			<header>
				<NavLink to='/'>{logo}</NavLink>
			</header>
			<div className='social-login'>
				<h5>Para continuar, faça login no spotify</h5>
				<Button
					text='Continue com Facebook'
					classname='fb-blue white-text uppercase noscale'
				/>
				<Button
					text='Continue com Apple'
					classname='black white-text uppercase noscale'
				/>
				<Button
					text='Continue com Google'
					classname='black-text white uppercase noscale'
				/>
				<Button
					text='Continue com Telefone'
					classname='black-text white uppercase noscale'
				/>
				<span>ou</span>
			</div>
			<form className='form-wrapper' onSubmit={handleSubmit}>
				<Input
					type='email'
					label='Email ou nome de usuário'
					placeholder='Email'
					aria='Digite seu email'
					value={form.email}
					onChange={ev => handleChange('email', ev.target.value)}					
					autofocus='autofocus'
					fullWidth='w-full'
					required
				/>
				<Input
					type='password'
					label='Senha'
					placeholder='Senha'
					aria='Digite sua senha'
					value={form.password}
					onChange={ev => handleChange('password', ev.target.value)}						
					fullWidth='w-full'
					required
				/>
				<NavLink to='/login' className='link'>
					Esqueceu sua senha?
				</NavLink>
				<div className='login-signup'>
					<div className='flex w-full gap-1'>
						<div className='checkbox-wrapper'>
							<Input
								type='checkbox'
								label2='Lembrar de mim'
								name='remember'
								aria='Permanecer logado'
							/>
						</div>
						<Button
							text='Entrar'
							classname='dark-green white-text uppercase noscale w-full'
						/>
					</div>
					<h4>Não tem uma conta?</h4>
					<Button
						text='Inscreva-se no spotify'
						classname='white uppercase noscale w-full'
						disabled={!isValidated()}
					/>
				</div>
			</form>
		</div>
	);
}
