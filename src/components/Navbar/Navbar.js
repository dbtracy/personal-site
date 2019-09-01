import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import './Navbar.css'

export default class Navbar extends Component {
  render() {
    return (
      <div className="Navbar">
        <Link to="/">Go Home</Link>
        <Link to="/projects">See projects</Link>
        <Link to="/bio">See bio</Link>
      </div>
    )
  }
}
