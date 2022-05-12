import React from 'react';
import { useNav } from '../customHooks/useNav';
import './Page.css';

const Contact = () => {

	const contactRef = useNav('Contact');

	return (
		<section ref={contactRef} id='contactContainer'>
			<div class="py-5 text-center container">
			<h1 class="display-3">Contact</h1>
				<div class="row p-5">
					<div class="btn-group justify-content-center">
						<a href='https://github.com/DunlopMatt' target="_blank" rel="noopener noreferrer"><button type="button" class="btn btn-outline-secondary m-2">GitHub</button></a>
						<a href='mailto:MatthewJDunlop@outlook.com' target="_blank" rel="noopener noreferrer"><button type="button" class="btn btn-outline-secondary m-2">Email</button></a>
						<a href='https://linkedin.com/in/matt-dunlop-1206a0237' target="_blank" rel="noopener noreferrer"><button type="button" class="btn btn-outline-secondary m-2">Linkedin</button></a>
						<a href={'public/MatthewDunlopCV2022.pdf'} download="MatthewDunlopCV2022" target="_blank"><button type="button" class="btn btn-outline-secondary m-2">View CV</button></a>
				</div>
				</div>
			</div>
		</section>
	);
};


export default Contact;

