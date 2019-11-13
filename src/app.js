import React from 'react'
import ReactDOM from 'react-dom'
import { BrowserRouter, Switch, Route } from 'react-router-dom'

import { makeStyles } from '@material-ui/core/styles'

import Login from './components/auth/Login'
import Register from './components/auth/Register'
import Dashboard from './components/sheets/Dashboard'

const useStyles = makeStyles(theme => ({
  '@global': {
    body: {
      backgroundColor: theme.palette.common.white
    }
  },
  paper: {
    marginTop: theme.spacing(15),
    padding: theme.spacing(5),
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    boxShadow: '0 3px 5px 2px rgba(0, 0, 0, .05)',
    borderRadius: '15px'
  },
  avatar: {
    margin: theme.spacing(1),
    backgroundColor: 'green'
  },
  form: {
    width: '100%',
    marginTop: theme.spacing(1)
    
  },
  submit: {
    margin: theme.spacing(5, 0, 2),
    backgroundColor: 'green'
  },
  root: {
    display: 'flex'
  },
  toolbar: {
    paddingRight: 24, // keep right padding when drawer closed
    backgroundColor: 'white',
    boxShadow: 'none'
  },
  toolbarIcon: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'flex-end',
    padding: '0 8px',
    ...theme.mixins.toolbar
  },
  appbar: {
    boxShadow: 'none'
  },
  title: {
    flexGrow: 1,
    color: 'grey'
  },
  appBarSpacer: {
    ...theme.mixins.toolbar,
    boxShadow: 'none'
  },
  content: {
    flexGrow: 1,
    height: '100vh',
    overflow: 'auto'
  },
  card: {
    height: '200px',
    width: '200px',
    marginRight: '100px',
    display: 'flex',
    alignItems: 'space-around'
  },
  subtitle: {
    marginTop: '20px',
    fontSize: '20px',
    color: 'grey'
  },
  cardLong: {
    height: '50%',
    backgroundColor: '#daeddf',
    borderRadius: '50px',
    display: 'flex',
    alignItems: 'center',
    marginTop: theme.spacing(5),
    boxShadow: 'none'
  },
  cardLongContent: {
    flexGrow: 1,
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center'
  },
  greyContainer: {
    padding: '50px',
    margin: '0px',
    backgroundColor: '#e8ebe8', 
    height: '40vh', 
    maxWidth: '100vw',
    display: 'flex',
    alignItems: 'center'
  },
  icon: {
    color: 'green',
    margin: '-5px 10px',
    fontSize: '30px'
  }, 
  popup: {
    height: '40% !important',
    width: '50% !important'
  }
}))

const App = () => {
  const classes = useStyles()

  return (
    <BrowserRouter>
      <Switch>
        <Route path='/dashboard' render={props => <Dashboard {...props} classes={classes} />} />
        <Route path='/register' render={props => <Register {...props} classes={classes} />} />
        <Route exact path='/' render={props => <Login {...props} classes={classes}/>} />
      </Switch>
    </BrowserRouter>
  )
}


ReactDOM.render(
  <App />,
  document.getElementById('root')
)