import React from 'react'
import './AboutMe.css'

export default function AboutMe() {
  return (
    <div className="about-and-social">
      <div className="about-me">
        <h1>About Me</h1>
        <p>
          Welcome to my personal site! I enjoy programming, writing, and playing music. I relish any opportunity to work on a team to build something that turns our good planet into a great one.
      </p>
        <p>
          I spent the last decade as a professional actor and musician and I'm proud of my accomplishments, but with the world in such a state of climatic upheaval, I saw the tech world as an up-to-date and imminently actionable way of more directly impacting life on our planet. I'd love to be a part of the solution!
      </p>
        <p>
          I am a full stack software developer proficient in the NERDS stack (Node, Express, React, Database: Postgres, Sequelize), as well as Redux for my React state management. I am also currently exploring React Native, D3, and ArcGIS.
      </p>
      </div>
      <div className="social-media">
        <h3>Contact Me:</h3>
        <div className="social-media-links">
          <a className="social-link" href="https://www.linkedin.com/in/dan-tracy/">
            <i className="fa fa-linkedin-square" aria-hidden="true" style={{ paddingRight: '5px' }}></i>
            <p>LinkedIn</p>
          </a>
          <a className="social-link" href="https://www.linkedin.com/in/dan-tracy/">
            <i className="fa fa-github" aria-hidden="true" style={{ paddingRight: '5px' }}></i>
            <p>Github</p>
          </a>
          <a className="social-link" href="https://www.linkedin.com/in/dan-tracy/">
            <i className="fa fa-envelope" aria-hidden="true" style={{ paddingRight: '5px' }}></i>
            <p>Email</p>
          </a>
        </div>
      </div>
    </div>
  )
}
