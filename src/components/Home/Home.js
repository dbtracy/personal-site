import React, { Component } from 'react'
import './Home.css'
import pic from './headshot.square.png'
import AboutMe from '../AboutMe/AboutMe'

export default class Home extends Component {
  render() {
    return (
      <div>
        <div className="dan-basic-info">
          <img className="headshot" src={pic} alt="dt-pic" />
          <h1>Dan Tracy</h1>
          <div>
            <p>Full stack web developer</p>
            <p>Musician</p>
            <p>Tree-hugger</p>
          </div>
        </div>
        <AboutMe />
      </div>
    )
  }
}
