import React from 'react';
import { Menu } from '../';

export default function Header( {title, list} ){
	return (
		<div>
			<h1>
				{title || "Sputnik"}
			</h1>
			<Menu list={list}/>
		</div>
	)
}