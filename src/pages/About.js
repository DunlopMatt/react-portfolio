import React from 'react';
import { useNav } from '../customHooks/useNav';
import './Page.css';

const About = () => {

	const aboutRef = useNav('About');

	return (
		<section ref={aboutRef} id='aboutContainer'>
		<div class="py-5 text-center container">
    <div class="row py-lg-5">
      <div class="col-lg-6 col-md-8 mx-auto">
        <h1 class="display-1">Hello</h1>
        <p class="lead text-muted">My name is Matt Dunlop. I am Web Developer. I am passionate about tech, driven to do my best and always hungry to learn more.</p>
      </div>
    </div>
  </div>
  <div class="container mb-5 text-center">
  <h4>Skills</h4>
  <div class="row row-cols-2 row-cols-lg-5 g-2 g-lg-3">
    <div class="col">
      <div class="p-3 border bg-light"><img alt="" src={require('../images/w3_html5-ar21.svg').default}></img></div>
    </div>
    <div class="col">
      <div class="p-3 border bg-light"><img alt="" src={require('../images/w3_css-ar21.svg').default}></img></div>
    </div>
    <div class="col">
      <div class="p-3 border bg-light"><img alt="" src={require('../images/javascript-ar21.svg').default}></img></div>
    </div>
    <div class="col">
      <div class="p-3 border bg-light"><img alt="" src={require('../images/reactjs-ar21.svg').default}></img></div>
    </div>
    <div class="col">
      <div class="p-3 border bg-light"><img alt="" src={require('../images/nodejs-ar21.svg').default}></img></div>
    </div>
    <div class="col">
      <div class="p-3 border bg-light"><img alt="" src={require('../images/mongodb-ar21.svg').default}></img></div>
    </div>
    <div class="col">
      <div class="p-3 border bg-light"><img alt="" src={require('../images/jquery-ar21.svg').default}></img></div>
    </div>
    <div class="col">
      <div class="p-3 border bg-light"><img alt="" src={require('../images/heroku-ar21.svg').default}></img></div>
    </div>
    <div class="col">
      <div class="p-3 border bg-light"><img alt="" src={require('../images/git-scm-ar21.svg').default}></img></div>
    </div>
    <div class="col">
      <div class="p-3 border bg-light"><img alt="" src={require('../images/getbootstrap-ar21.svg').default}></img></div>
    </div>
  </div>
</div>

		</section>
	);
};

export default About;