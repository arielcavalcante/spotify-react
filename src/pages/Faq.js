import React from 'react';
import { Header } from '../components'

export default function Faq() {
	return (
	<div>
		<Header title="Sputnik" list={[
			{title:"Home", link:'/home'}, 
			{title:"F.A.Q", link:'/faq'}
		]}
		/>
	</div>
	);
}
