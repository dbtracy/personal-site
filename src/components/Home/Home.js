import React from 'react'
import './Home.css'
import pic from './headshot.square.png'
import AboutMe from '../AboutMe/AboutMe'

export default function Home() {
  return (
    <div>
      <div className="dan-basic-info">
        <div className="headshot-border">
          <img className="headshot" src={pic} alt="dt-pic" />
        </div>
        <h1>Dan Tracy</h1>
        <div className="home-desc">
          <p>Full stack web developer</p>
          <p>Musician</p>
          <p>Tree-hugger</p>
        </div>
      </div>
      <AboutMe />
    </div>
  )
}
