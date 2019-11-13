import React from 'react'
import { AppBar, Toolbar, IconButton, Typography, Avatar, Container, Card, TextField } from '@material-ui/core'
import axios from 'axios'
import Auth from '../../lib/Auth'
import AccountCircleIcon from '@material-ui/icons/AccountCircle'
import FileCopyIcon from '@material-ui/icons/FileCopy'

import Popup from './Popup'
import Sheetcontainer from './Sheetcontainer'

class Dashboard extends React.Component {
  constructor() {
    super()
    this.state = { sheets: null }
    
  }

  getSheets = async () => {
    try {
      const res = await axios.get('/api/sheets', {
        headers: { Authorization: `Bearer ${Auth.getToken()}` }
      })
      this.setState({ sheets: res.data })
    } catch {
      console.log('error')
    }
  }

  componentDidMount() {
    this.getSheets()
  }

  render() {
    const classes = this.props.classes
    if (!this.state.sheets) return null
    return (
      <div className={classes.root}>
        
        <AppBar position="absolute" className={classes.appbar}>
          <Toolbar className={classes.toolbar}>
            <Typography component="h1" variant="h5" noWrap className={classes.title}>
              <FileCopyIcon className={classes.icon}/>
              GA Sheets
            </Typography>
            <TextField
              variant="outlined"
              margin="normal"
              placeholder="Search"
              name="search"
            />
            <IconButton color="inherit">
              <Avatar className={classes.avatar}>
                <AccountCircleIcon />
              </Avatar>
            </IconButton>
          </Toolbar>
        </AppBar>
        
        <main className={classes.content}>
          <div className={classes.appBarSpacer} />
          <Container className={classes.greyContainer} >
            <div>
              <Card className={classes.card}>
                <Popup type={'new'} classes={classes}/>
              </Card>
              <Typography className={classes.subtitle}>
                New Sheet
              </Typography>
            </div>
            <div>
              <Card className={classes.card}>
                <Popup type={'join'} classes={classes}/>
              </Card>
              <Typography className={classes.subtitle}>
                Join Sheet
              </Typography>
            </div>
            
          </Container>
          {
            this.state.sheets.map(sheet => (
              <Sheetcontainer key={sheet._id} sheet={sheet} classes={classes} />
            ))
          }
          
          
        </main>
      </div>
    )
  }
  
}

export default Dashboard