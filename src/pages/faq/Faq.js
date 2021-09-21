import React from 'react';
import { Link } from 'react-router-dom';
import { Accordion, Button, NavBar } from '../../components';

import './Faq.css';

export default function Faq() {
	const list = [
		{
			title: 'Ajuda com a conta',
			items: [
				'Fazendo login',
				'Ajuda com o perfil',
				'Ajuda com as preferências da conta',
				'Segurança',
			],
		},
		{
			title: 'Ajuda com o pagamento',
			items: [
				'Gerenciando pagamentos',
				'Formas de pagamento',
				'Ajuda com a cobrança',
			],
		},
		{
			title: 'Ajuda com o plano',
			items: [
				'Planos disponíveis',
				'Ajuda com as preferências do plano',
				'Premium Família e Kids',
				'Premium Universitário',
				'Premium Duo',
			],
		},
		{
			title: 'Ajuda com o app',
			items: [
				'Como começar',
				'Preferências do app',
				'Solução de problemas',
				'Playlists',
				'Recursos',
				'Recursos de redes sociais',
				'Assistentes de voz',
			],
		},
		{
			title: 'Ajuda com o dispositivo',
			items: ['Alto-falantes', 'Smartwatches', 'TVs', 'Videogames', 'Carros'],
		},
		{
			title: 'Ajuda com o privacidade e dados',
			items: [
				'Privacidade de reprodução',
				'Informações de privacidade e dados',
			],
		},
	];

	return (
		<main id='faq-page'>
			<NavBar />
			<section className='bubblebackground'>
				<div className='search-container'>
					<h1>Como podemos ajudar?</h1>
					<div>
						<input type='search' placeholder='Buscar' />
					</div>
				</div>
				<div className='topsolutions-container'>
					<div className='topsolutions'>
						<h3 className='mobile category__smallcaps'> MELHORES SOLUÇÕES</h3>
						<h3 className='category__smallcaps'>AJUDA COM A COBRANÇA</h3>
						<Link className='category__link'>Atualizações de preço</Link>
					</div>
					<div className='topsolutions'>
						<h3 className='category__smallcaps'>PLANOS DISPONÍVEIS</h3>
						<Link className='category__link'>
							Criar ou entrar em um plano Família
						</Link>
					</div>
					<div className='topsolutions'>
						<h3 className='category__smallcaps'>AJUDA COM A COBRANÇA</h3>
						<Link className='category__link'>
							Ajuda com pagamento não efetuado
						</Link>
					</div>
					<div className='topsolutions'>
						<h3 className='category__smallcaps'>FAZENDO LOGIN</h3>
						<Link className='category__link'>
							Não consigo redefinir a senha
						</Link>
					</div>
				</div>
			</section>
			<section className='category-section'>
				<Accordion list={list} />
			</section>
			<section className='comunity-section'>
				<h1>Visite a Comunidade</h1>
				<p>
					Tem uma pergunta? Encontre respostas na nossa Comunidade de fãs
					especialistas do mundo todo!
				</p>
				<Button text='Encontrar respostas' />
			</section>
		</main>
	);
}
