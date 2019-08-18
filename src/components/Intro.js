import React, { Component } from 'react'

export default class Intro extends Component {
  constructor() {
    super()
    this.state = {
      displayText: "hi"
    }
  }

  render() {
    return (
      <div>
        <h1>{this.state.displayText}</h1>
      </div>
    )
  }
}
