import React from 'react';
import { Link } from 'react-router-dom';
import { NavBar } from '../../components';

import './Faq.css';

export default function Faq() {
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
						<h3 className='mobile section__link'> MELHORES SOLUÇÕES</h3>
						<h3 className='section__link'>AJUDA COM A COBRANÇA</h3>
						<Link>Atualizações de preço</Link>
					</div>
					<div className='topsolutions'>
						<h3 className='section__link'>PLANOS DISPONÍVEIS</h3>
						<Link>Criar ou entrar em um plano Família</Link>
					</div>
					<div className='topsolutions'>
						<h3 className='section__link'>AJUDA COM A COBRANÇA</h3>
						<Link>Ajuda com pagamento não efetuado</Link>
					</div>
					<div className='topsolutions'>
						<h3 className='section__link'>FAZENDO LOGIN</h3>
						<Link>Não consigo redefinir a senha</Link>
					</div>
				</div>
			</section>
		</main>
	);
}
