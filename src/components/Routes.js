import React, { Component } from 'react'
import { Route, Switch, Redirect } from 'react-router-dom'

import Home from './Home'
import Projects from './Projects'
import Bio from './Bio'

export default class Routes extends Component {
  render() {
    return (
      <Switch>
        <Route exact path="/" component={Home} />
        <Route path="/projects" component={Projects} />
        <Route path="/bio" component={Bio} />
        <Redirect to="/" />
      </Switch>
    )
  }
}
