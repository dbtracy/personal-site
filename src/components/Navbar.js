import React, { Component } from 'react'
import { Link } from 'react-router-dom'

export default class Navbar extends Component {
  render() {
    return (
      <div>
        <Link to="/">Go Home</Link>
        <Link to="/projects">See projects</Link>
      </div>
    )
  }
}
