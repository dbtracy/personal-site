import React, { Component } from 'react'
import { Route, Switch, Redirect } from 'react-router-dom'

import Home from './Home/Home'
import Projects from './Projects/Projects'
import Writing from './Writing/Writing'
import Resume from './Resume/Resume'

export default class Routes extends Component {
  render() {
    return (
      <Switch>
        <Route exact path="/" component={Home} />
        <Route path="/projects" component={Projects} />
        <Route path="/writing" component={Writing} />
        <Route path="/resume" component={Resume} />
        <Redirect to="/" />
      </Switch>
    )
  }
}
