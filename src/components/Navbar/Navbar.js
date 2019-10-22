import React from 'react'
import { Link } from 'react-router-dom'
import './Navbar.css'
import logo from './dantracylogo.png'

// MATERIAL-UI IMPORTS
import { AppBar, Toolbar, makeStyles, Button, } from '@material-ui/core/'

const useStyles = makeStyles(theme => ({
  root: {
    flexGrow: 1
  }
}))

const AdapterLink = React.forwardRef((props, ref) => (
  <Link innerRef={ref} {...props} />
))

export default function Navbar(props) {
  const classes = useStyles();
  return (
    <div className={classes.root}>
      <AppBar position="static">
        <Toolbar className="Navbar" style={{ minHeight: 40 }}>
          <img className="navbar-logo" src={logo} alt="logo" component={AdapterLink} to="/" />
          <div className="navbar-spacer" />
          <div className="navbar-btns">
            <div>
              <Button component={AdapterLink} to="/">
                Home
              </Button>
            </div>
            <div>
              <Button component={AdapterLink} to="/projects">
                Projects
              </Button>
            </div>
            <div>
              <Button component={AdapterLink} to="/writing">
                Writing
              </Button>
            </div>
          </div>
        </Toolbar>
      </AppBar>
      <p className="navbar-bottom-spacer" />
    </div >
  )
}
