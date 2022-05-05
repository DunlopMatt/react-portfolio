import React from 'react';
import { useNav } from '../customHooks/useNav';
import './Page.css';

const Projects = () => {


	const projectsRef = useNav('Projects');

	return (
		<section ref={projectsRef} id='projectsContainer'>
		<div class="album py-5 bg-light">
    <h1 className='display-3 mb-5 text-center'>Projects</h1>
    <div class="container">
      <div class="row row-cols-1 row-cols-sm-2 row-cols-md-3 g-3">
        <div class="col">
          <div class="card shadow-sm">
					<img alt="Screen shot" src={require('../images/Ecomm.PNG')}></img>
            <div class="card-body">
							<h5 class="card-title ">Ecommerce Site</h5>
              <p class="card-text">A mock Ecommerce site built using React on the font end and node on the back end.</p>
              <div class="d-flex justify-content-between align-items-center">
                <div class="btn-group">
                  <a href='https://github.com/DunlopMatt/react-portfolio' target="_blank" rel="noopener noreferrer"><button type="button" class="btn btn-sm btn-outline-secondary">GitHub</button></a>
                  <a href='https://react-app-ecomm.herokuapp.com/' target="_blank" rel="noopener noreferrer"><button type="button" class="btn btn-sm btn-outline-secondary">Live site</button></a>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div class="col">
          <div class="card shadow-sm">
					<img alt="Screen shot" src={require('../images/MovieDash.PNG')}></img>
            <div class="card-body">
							<h5 class="card-title ">Movie Dashboard</h5>
              <p class="card-text">A website to searh for and find stats for you favioute movie using OMDb API.</p>
              <div class="d-flex justify-content-between align-items-center">
                <div class="btn-group">
                  <a href='https://github.com/DunlopMatt/Moive-Data-Dashboard' target="_blank" rel="noopener noreferrer"><button type="button" class="btn btn-sm btn-outline-secondary">GitHub</button></a>
                  <a href='https://dunlopmatt.github.io/Moive-Data-Dashboard/' target="_blank" rel="noopener noreferrer"><button type="button" class="btn btn-sm btn-outline-secondary">Live site</button></a>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div class="col">
          <div class="card shadow-sm">
					<img alt="Screen shot" src={require('../images/MatterBirds.PNG')}></img>
            <div class="card-body">
						<h5 class="card-title ">Matter Birds</h5>
              <p class="card-text">A simple angry birds type game built using Matter.js.</p>
              <div class="d-flex justify-content-between align-items-center">
                <div class="btn-group">
                  <a href='https://github.com/DunlopMatt/MatterBirds' target="_blank" rel="noopener noreferrer"><button type="button" class="btn btn-sm btn-outline-secondary">GitHub</button></a>
                  <a href='https://dunlopmatt.github.io/MatterBirds/' target="_blank" rel="noopener noreferrer"><button type="button" class="btn btn-sm btn-outline-secondary">Live site</button></a>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div class="col">
          <div class="card shadow-sm">
					<img alt="Screen shot" src={require('../images/Fitness.PNG')}></img>
            <div class="card-body">
						<h5 class="card-title ">Health and Fitness Mock-up</h5>
              <p class="card-text">A mock up I created for my brother when he was considering becoing a Personal Trainer.Built using HTML CSS (BootStrap) and a little JS </p>
              <div class="d-flex justify-content-between align-items-center">
                <div class="btn-group">
                  <a href='https://github.com/DunlopMatt/J-Dunlop-Fitness' target="_blank" rel="noopener noreferrer"><button type="button" class="btn btn-sm btn-outline-secondary">GitHub</button></a>
                  <a href='https://jdunlopfitness.herokuapp.com/' target="_blank" rel="noopener noreferrer"><button type="button" class="btn btn-sm btn-outline-secondary">Live site</button></a>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div class="col">
          <div class="card shadow-sm">
					<img alt="Screen shot" src={require('../images/Portfolio.PNG')}></img>
            <div class="card-body">
							<h5 class="card-title ">Portfolio</h5>
              <p class="card-text">This Portfolio that you are current viewing. Built in React</p>
              <div class="d-flex justify-content-between align-items-center">
                <div class="btn-group">
                  <a href='https://github.com/DunlopMatt/react-portfolio' target="_blank" rel="noopener noreferrer"><button type="button" class="btn btn-sm btn-outline-secondary">GitHub</button></a>
                  <a href='https://dunlopmatt.github.io/react-portfolio/'><button type="button" class="btn btn-sm btn-outline-secondary">Live site</button></a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  	</div>
		</section>
	);
};

export default Projects;