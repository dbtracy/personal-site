import React, { Component } from 'react'

export default class Intro extends Component {
  constructor() {
    super()
    this.state = {
      displayText: ""
    }
  }

  render() {
    return (
      <div>
        <h1>welcome to my site</h1>
      </div>
    )
  }
}
