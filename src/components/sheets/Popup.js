import React from 'react'
import { CardActionArea, CardMedia, Button, TextField, Dialog, DialogActions, DialogContent, DialogContentText, DialogTitle } from '@material-ui/core'

class Popup extends React.Component {
  constructor() {
    super()
    this.state = { open: false }
    this.handleClickOpen = this.handleClickOpen.bind(this)
    this.handleClose = this.handleClose.bind(this)
  }

  handleClickOpen() {
    this.setState({ open: true })
  }

  handleClose() {
    this.setState({ open: false })
  }

  render() {
    const classes = this.props.classes
    const type = this.props.type

    return (
      <div>
        <CardActionArea onClick={this.handleClickOpen}>
          <CardMedia
            component="img"
            alt={type === 'join' ? 'Join Sheet' : 'New Sheet'}
            height="200px"
            image={type === 'join' ? './../assets/join.png' : './../assets/new.png'}
            title={type === 'join' ? 'Join Sheet' : 'New Sheet'}
          />
        </CardActionArea>
        <Dialog open={this.state.open} onClose={this.handleClose} aria-labelledby="form-dialog-title">
          <DialogTitle id="form-dialog-title">{type === 'join' ? 'Join Sheet' : 'New Sheet'}</DialogTitle>
          <DialogContent>
            <DialogContentText>
              {type === 'join' ? 'Join an existing sheet' : 'Create a new sheet'}
            </DialogContentText>
            <TextField
              autoFocus
              margin="dense"
              id="name"
              label={type === 'join' ? 'Sheet key' : 'Sheet name'}
              fullWidth
            />
          </DialogContent>
          <DialogActions>
            <Button onClick={this.handleClose} color="primary">
              Cancel
            </Button>
            <Button onClick={this.handleClose} color="primary">
              {type === 'join' ? 'Join' : 'Create'}
            </Button>
          </DialogActions>
        </Dialog>
      </div>
    )
  }
}

export default Popup

