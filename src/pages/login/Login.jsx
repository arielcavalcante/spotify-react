import React from 'react';
import { NavLink } from 'react-router-dom';

import { Button, Input } from '../../components';
import { logo } from '../../icons';

import './Login.css';

export default function Login() {
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
			<form className='form-wrapper'>
				<Input
					type='email'
					label='Email ou nome de usuário'
					placeholder='Email'
					aria='Digite seu email'
					autofocus='autofocus'
					fullWidth='w-full'
					required
				/>
				<Input
					type='password'
					label='Senha'
					placeholder='Senha'
					aria='Digite sua senha'
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
					/>
				</div>
			</form>
		</div>
	);
}
