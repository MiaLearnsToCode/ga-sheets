import React from 'react'
import { CssBaseline, AppBar, Toolbar, IconButton, Typography, Avatar, Container, Card, CardContent } from '@material-ui/core'
import AccountCircleIcon from '@material-ui/icons/AccountCircle'

class Dashboard extends React.Component {
  render() {
    const classes = this.props.classes

    return (
      <div className={classes.root}>
        <CssBaseline />
        <AppBar position="absolute" className={classes.appbar}>
          <Toolbar className={classes.toolbar}>
            <Typography component="h1" variant="h5" noWrap className={classes.title}>
              GA Sheets
            </Typography>
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
            <Typography component="div"/>
          </Container>
          <Container maxWidth="lg">
            <Card className={classes.card}>
              <CardContent className={classes.cardContent}>
                <Typography>
                  Sheet name
                </Typography>
                <Typography>
                  Button?
                </Typography>
              </CardContent>
            </Card>
          </Container>
        </main>
      </div>
    )
  }
  
}

export default Dashboard