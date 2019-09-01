import React from 'react'
import { Link } from 'react-router-dom'
import './Navbar.css'

// MATERIAL-UI IMPORTS
import { AppBar, Toolbar, makeStyles, Button } from '@material-ui/core/'

const useStyles = makeStyles(theme => ({
  root: {
    flexGrow: 1
  },
  menuButton: {
    marginRight: theme.spacing(2)
  },
  title: {
    flexGrow: 1
  }
}))

export default function Navbar() {
  const classes = useStyles();
  return (
    <div className={classes.root}>
      <AppBar position="static">
        <Toolbar>
          <div>
            <Button>
              <Link to="/">Home</Link>
            </Button>
            <Button>
              <Link to="/projects">Projects</Link>
            </Button>
            <Button>
              <Link to="/bio">Bio</Link>
            </Button>
          </div>
        </Toolbar>
      </AppBar>
    </div>
  )
}
