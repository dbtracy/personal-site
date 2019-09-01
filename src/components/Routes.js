import React, { Component } from 'react'
import { Route, Switch, Redirect } from 'react-router-dom'

import Home from './Home'
import Projects from './Projects'

export default class Routes extends Component {
  render() {
    return (
      <Switch>
        <Route exact path="/" component={Home} />
        <Route path="/projects" component={Projects} />
        <Redirect to="/" />
      </Switch>
    )
  }
}
