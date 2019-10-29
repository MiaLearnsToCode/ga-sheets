import React from 'react'
import { AppBar, Toolbar, IconButton, Typography, Avatar, Container, Card, CardActionArea, CardMedia, CardContent, TextField } from '@material-ui/core'
import AccountCircleIcon from '@material-ui/icons/AccountCircle'
import FileCopyIcon from '@material-ui/icons/FileCopy'

class Dashboard extends React.Component {
  render() {
    const classes = this.props.classes

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
                <CardActionArea>
                  <CardMedia
                    component="img"
                    alt="Contemplative Reptile"
                    height="30%"
                    image="https://htmlcolorcodes.com/assets/images/color-picker/html-color-codes-color-wheel-analogous-thumb-43afde7d.png"
                    title="Contemplative Reptile"
                  />

                </CardActionArea>

              </Card>
              <Typography className={classes.subtitle}>
                New Sheet
              </Typography>
            </div>
            <div>
              <Card className={classes.card}>
                <CardActionArea>
                  <CardMedia
                    component="img"
                    alt="Contemplative Reptile"
                    height="30%"
                    image="https://amptweaker.com/wp-content/uploads/2018/11/Color-Picker-Wheel-Desk6.png"
                    title="Contemplative Reptile"
                  />
                </CardActionArea>
              </Card>
              <Typography className={classes.subtitle}>
                Join Sheet
              </Typography>
            </div>
            
          </Container>
          <Container maxWidth="lg">
            <Card className={classes.cardLong}>
              <CardContent className={classes.cardLongContent}>
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