import React from 'react';
import Logo from '../../assets/img/Logo.png';
import './Menu.css';
import Button from './components/Button';
// import ButtonLink from './components/ButtonLink';

function Menu () {
	return (
		<nav className="Menu">
			<a href="/">
				<img src={Logo} alt="AlisonFlix Logo" className="Logo" />
			</a>

			<Button as="a" href="/" className="Button">
				Novo vídeo
			</Button>
		
		</nav>
		);
}

export default Menu;