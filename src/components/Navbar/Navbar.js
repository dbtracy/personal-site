import React from 'react'
import { Link } from 'react-router-dom'
import './Navbar.css'

// MATERIAL-UI IMPORTS
import { AppBar, Toolbar, makeStyles, Button, Typography } from '@material-ui/core/'

const useStyles = makeStyles(theme => ({
  root: {
    flexGrow: 1
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

export default function Navbar() {
  const classes = useStyles();
  return (
    <div className={classes.root}>
      <AppBar position="static">
        <Toolbar className="Navbar" style={{ minHeight: 40 }}>
          <Typography variant="h6" className={classes.title}>Dan Tracy</Typography>
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
    </div >
  )
}
