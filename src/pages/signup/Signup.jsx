import React from 'react';
import { NavBar, Section, Input, InputSelect, Button } from '../../components';
import { logo_black } from '../../icons';

import './Signup.css';
import '../../assets/typography/Typography.css';

export default function Signup() {
	const months = [
		"Janeiro",
		"Fevereiro",
		"Março",
		"Abril",
		"Maio",
		"Junho",
		"Julho",
		"Agosto",
		"Setembro",
		"Outubro",
		"Novembro",
	]
	return (
		<main id='home-page'>
			<NavBar />
			<div className='page-content'>
				<div className='signup-container'>
                    <div className='logo-content'>
                        <div className='logo-black'>{logo_black}</div>
                    </div>
                    <hr></hr>
                    <div className='signup-form-container'>
                        <h3 className='signup-container__title'>Inscreva-se com seu endereço de e-mail</h3>
						<form className='form'>
							<Input placeholder="E-mail" name="email" fullWidth/>
							<Input placeholder="Confirmar e-mail" name="confirmar_email" fullWidth/>
							<Input placeholder="Senha" name="senha" type={"password"} fullWidth/>
							<Input placeholder="Como devemos chamar você?" name="cdcv" fullWidth/>
							<label className='input-label'>Data de nascimento</label>
							<div className= 'flex'>
								<div style={{width:'20%'}} className='pr-5'>
									<Input placeholder="Dia" name="dia" fullWidth/>
								</div>
								<div style={{width:'80%'}} className='pl-5 pr-5'>
									<InputSelect placeholder="Mês" name="mes" options={months}/>
								</div>
								<div style={{width:'20%'}} className='pl-5'>
									<Input placeholder="Ano" name="ano" fullWidth/>
								</div>
							</div>
							<div className= 'flex align-items-center' style={{margin: '16px 0'}}>
								<div className='pr-12'>
									<Input value={'masculino'} type={'radio'} name="gender"/>
									<label className='pl-5'>Masculino</label>
								</div>
								<div className='pr-12'>
									<Input value={'feminino'} type={'radio'} name="gender"/>
									<label className='pl-5'>Feminino</label>
								</div>
								<div className='pr-12'>
									<Input value={'nao-binario'} type={'radio'} name="gender"/>
									<label className='pl-5'>Não binário</label>
								</div>														
							</div>
							<div className= 'm-12'>
								<Button text='INSCREVER-SE' color='white-text'/>
							</div>
						</form>
                    </div>
                </div>
			</div>
		</main>
	);
}
