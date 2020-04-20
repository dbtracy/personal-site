import React from 'react'
import './Projects.css'
import visualClimate from './images/visualclimate.png'
import ptc from './images/ptc_homepage.png'
import biddingGame from './images/bidding_game_homepage.png'

export default function Projects() {
  return (
    <div>
      <h1>Check out my projects!</h1>
      <div className="project-list">
        <a className="spec-project" href="https://pipelinetheatre.org/">
          <h1>Pipeline Theatre Company official website</h1>
          <img className="pic-vc ptc" src={ptc} alt="ptc-homepage" />
          <hr />
          <p className="project-desc">
            Newly-appointed web developer for the official website of the Drama Desk-nominated Pipeline Theatre Company.
          </p>
          <p className="tech-used">Technologies used:</p>
          <ul className="tech-list">
            <li>JavaScript</li>
            <li>HML</li>
            <li>CSS</li>
            <li>PHP</li>
            <li>MAMP server</li>
            <li>Wordpress API</li>
          </ul>
        </a>
        <a className="spec-project" href="https://dbtracy-visualclimate.herokuapp.com">
          <h1>VisualClimate</h1>
          <img className="pic-vc" src={visualClimate} alt="visual-climate-screenshot" />
          <hr />
          <p className="project-desc">
            A geospatial data visualization app mapping climate data over the United States. My team and I wanted to delve into the world of data visualization to raise awareness and prompt action.
          </p>
          <p className="tech-used">Technologies used:</p>
          <ul className="tech-list">
            <li>React</li>
            <li>Mapbox</li>
            <li>D3</li>
            <li>Firebase</li>
            <li>Material UI</li>
          </ul>
        </a>
        <div className="spec-project">
          <h1>groundFound</h1>
          <iframe className="vid-gf" title="groundfound" src="https://www.youtube.com/embed/2FBVvXbtBZE" frameborder="0" allowfullscreen></iframe>
          <hr />
          <p className="project-desc">
            A fun little self-guided intro to mobile development, via React Native. I pick up change from the ground, so of course I needed to turn that into a mobile app.
          </p>
          <p className="tech-used">Technologies used:</p>
          <ul className="tech-list">
            <li>React Native</li>
            <li>Firebase</li>
          </ul>
        </div>
        <div className="spec-project">
          <h1>Coming soon: The Bidding Game utility app</h1>
          <img className="pic-vc" src={biddingGame} alt="bidding-game-homepage" />
          <hr />
          <p className="project-desc">
            An app to facilitate score-keeping while playing The Bidding Game (also known as 'Oh, Hell').
          </p>
          <p className="tech-used">Technologies used:</p>
          <ul className="tech-list">
            <li>JavaScript</li>
            <li>HTML</li>
            <li>CSS</li>
            <li>React</li>
            <li>Express</li>
            <li>PostgreSQL</li>
            <li>Sequelize</li>
          </ul>
        </div>
        {/* <div className="spec-project">
          <h1>project 3</h1>
        </div>
        <div className="spec-project">
          <h1>project 4</h1>
        </div> */}
      </div>
    </div>
  )
}
