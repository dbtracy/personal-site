import React, { Component } from 'react'

export default class Intro extends Component {
  constructor() {
    super()
    this.state = {
      displayText: ""
    }
  }

  render() {
    setTimeout(() => {
      this.setState({ displayText: "hi" })
      setTimeout(() => {
        this.setState({ displayText: "my name's Dan" })
        setTimeout(() => {
          this.setState({ displayText: "and this is my website" })
        }, 3020);
      }, 3010);
    }, 3000);

    return (
      <div>
        <h1>{this.state.displayText}</h1>
      </div>
    )
  }
}
