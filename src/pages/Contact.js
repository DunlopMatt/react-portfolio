import React from 'react';
import { useNav } from '../customHooks/useNav';
import './Page.css';

const Contact = () => {

	const contactRef = useNav('Contact');

	return (
		<section ref={contactRef} id='contactContainer'>
			<div class="py-5 text-center container">
			<h1 class="display-3">Contact</h1>
				<div class="row">
					<div class="col-sm-4 offset-md-1 py-4">
						<ul class="list-unstyled">
							<li><a href="https://github.com/DunlopMatt" > <button class="btn btn-outline-secondary m-2" type="button">GitHub</button></a></li>
							<li><a href="mailto:MatthewJDunlop@outlook.com"> <button class="btn btn-outline-secondary m-2" type="button">Email</button></a></li>
							<li><a href="https://linkedin.com/in/matt-dunlop-1206a0237"> <button class="btn btn-outline-secondary m-2" type="button">Linkedin</button></a></li>
						</ul>
					</div>
					<div class="col-sm-8 col-md-7 py-4">
						<h4 class="text">View CV</h4>
						<a href='/' download={"../images/Matthew Dunlop CV 2022.pdf"}><i class="fa-solid fa-file-arrow-down fa-5x"></i></a>
					</div>
				</div>
			</div>
		</section>
	);
};


export default Contact;