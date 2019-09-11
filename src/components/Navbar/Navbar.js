import React from 'react'
import { Link } from 'react-router-dom'
import './Navbar.css'

// MATERIAL-UI IMPORTS
import { AppBar, Toolbar, makeStyles, Button, Typography } from '@material-ui/core/'

const useStyles = makeStyles(theme => ({
  root: {
    // flexGrow: 1
  },
  menuButton: {
    marginRight: theme.spacing(2)
  },
  title: {
    display: "flex",
    justifyContent: "left",
    flexGrow: 1
  }
}))

const AdapterLink = React.forwardRef((props, ref) => (
  <Link innerRef={ref} {...props} />
))

export default function Navbar() {
  const classes = useStyles();
  return (
    <div className={classes.root}>
      <AppBar position="static">
        <Toolbar className="Navbar" style={{ minHeight: 40 }}>
          <Typography style={{ font: "Oxygen", color: 'black' }} className={classes.title}>Dan Tracy</Typography>
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
              <Button component={AdapterLink} to="/bio">
                Bio
              </Button>
            </div>
          </div>
        </Toolbar>
      </AppBar>
      <p style={{ backgroundColor: "#f5f8fa", padding: 0 }}></p>
    </div >
  )
}
