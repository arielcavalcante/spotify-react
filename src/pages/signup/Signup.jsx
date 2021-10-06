import React, {useState} from 'react';
import { NavBar, Input, InputSelect, Button } from '../../components';
import { logo_black } from '../../icons';

import './Signup.css';
import '../../assets/typography/Typography.css';

const formDefault = {
	email:'',
	email_confirm:'',
	password:'',
	cdcv:'',
	birth_day:'',
	birth_month:'',
	birth_year:'',
	gender:''
}
const genders = [
	"Masculino",
	"Feminino",
	"Não-binário"
]
export default function Signup() {
	const [form, setForm] = useState(formDefault);
	const [emailValid, setEmailValid] = useState(true);
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
	const handleChange = (field, newValue) => {
		setForm({...form, [field]:newValue})
	}
	const handleSubmit = (ev) => {
		ev.preventDefault()

		console.log(form)
	}
	function checkEmails(){
		if((form.email !== form.email_confirm) && (form.email !== "" && form.email_confirm !== "")){
			setEmailValid(false);
		} else {
			setEmailValid(true);
		}
	}
	function isValidated(){
        return (
            form.email !== "" &&
			form.email_confirm !== "" &&
			form.password !== "" &&
			form.cdcv !== "" &&
			form.birth_day !== "" &&
			form.birth_month !== "" &&
			form.birth_year !== "" &&
			form.gender !== "" &&
			emailValid
        );
	}
	return (
		<main id='home-page'>
			<NavBar />
			<div className='page-content bg-white'>
				<div className='signup-container'>
                    <div className='logo-content'>
                        <div className='logo-black'>{logo_black}</div>
                    </div>
                    <hr></hr>
                    <div className='signup-form-container'>
                        <h3 className='signup-container__title'>Inscreva-se com seu endereço de e-mail</h3>
						<form className='form' onSubmit={handleSubmit}>
							<Input placeholder="E-mail" 
									name="email" 
									value={form.email} 
									onChange={(ev) => handleChange('email', ev.target.value)}
									fullWidth/>
							<Input placeholder="Confirmar e-mail" 
									name="confirmar_email" 
									value={form.email_confirm} 
									onChange={(ev) => handleChange('email_confirm', ev.target.value)}
									error={!emailValid}
									onBlur={() => checkEmails()}
									errorText={'Email de confirmação inválido'}
									fullWidth/>
							<Input placeholder="Senha" 
									name="senha" 
									type={"password"} 
									value={form.password} 
									onChange={(ev) => handleChange('password', ev.target.value)}
									fullWidth/>
							<Input placeholder="Como devemos chamar você?"
							 		name="cdcv"
									value={form.cdcv}
									onChange={(ev) => handleChange('cdcv', ev.target.value)}
									fullWidth/>
							<label className='input-label'>Data de nascimento</label>
							<div className= 'flex'>
								<div style={{width:'20%'}} className='pr-5'>
									<Input placeholder="Dia" 
											name="dia" 
											type="number"
											value={form.birth_day}
											onChange={(ev) => handleChange('birth_day', ev.target.value)}
											fullWidth/>
								</div>
								<div style={{width:'80%'}} className='pl-5 pr-5'>
									<InputSelect placeholder="Mês" 
												 name="mes" 
												 options={months}
												 onChange={(value) => handleChange('birth_month', value)}/>
								</div>
								<div style={{width:'20%'}} className='pl-5'>
									<Input placeholder="Ano" 
											name="ano" 
											type="number"
											value={form.birth_year}
											onChange={(ev) => handleChange('birth_year', ev.target.value)}
											fullWidth/>
								</div>
							</div>
							<div className= 'flex align-items-center' style={{margin: '16px 0'}}>
								{genders.map((g) => {
									return <div className='pr-12'>
										<Input value={g} 
												type={'radio'} 
												name="gender"
												onChange={(ev) => handleChange('gender', g)}/>
										<label className='pl-5'>{g}</label>
									</div>
								}	  
								)}
							</div>
							<div className= 'm-12'>
								<Button text='INSCREVER-SE' 
										color='white-text'
										disabled={!isValidated()}/>
							</div>
						</form>
                    </div>
                </div>
			</div>
		</main>
	);
}
