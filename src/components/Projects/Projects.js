import React from 'react'
import './Projects.css'
import visualClimate from './images/visualclimate.png'

export default function Projects() {
  return (
    <div>
      <h1>Check out my projects!</h1>
      <div className="project-list">
        <div className="spec-project">
          <div className>
            <h1>VisualClimate</h1>
            <img className="pic-vc" src={visualClimate} alt="visual-climate-screenshot" />
            <p>
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
          </div>
        </div>
        <div className="spec-project">
          {/* <h1>project 2</h1> */}
        </div>
        <div className="spec-project">
          {/* <h1>project 3</h1> */}
        </div>
        <div className="spec-project">
          {/* <h1>project 4</h1> */}
        </div>
      </div>
    </div>
  )
}
