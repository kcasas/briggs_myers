import React from 'react'
import {
  Button,
  Dialog,
  Fab,
  DialogContent,
  DialogActions,
  Slide,
  Paper,
  Typography
} from '@material-ui/core'
import { Facebook } from '@material-ui/icons'
import useStyles from './styles'
import {resultPrefix} from '../../test'

const Transition = React.forwardRef(function Transition(props, ref) {
  return <Slide direction="up" ref={ref} {...props} />;
});

const getDominantTraits = function(traits, effects) {
  let sums = []
  effects.map(effect => {
    effect.map((val, i) => {
      if (sums[i] == undefined) {
        sums[i] = val
      } else {
        sums[i] += val
      }
    })
  })

  const max = Math.max(...sums)
  let domininants = []
  sums.map((sum, i) => {
    if (sum === max) {
      domininants.push(traits[i])
    }
  })

  return domininants
}

export default function Result({traits, effects}) {
  const classes = useStyles()
  const [open, setOpen] = React.useState(false)
  const dominantTraits = getDominantTraits(traits, effects).join(' and ')

  const handleClickOpen = () => {
    setOpen(true)
  };

  const handleClose = () => {
    setOpen(false)
  };

  const message = resultPrefix + ' ' + dominantTraits + ' !!!'

  return (
    <React.Fragment>
      <Paper square elevation={0} className={classes.submitContainer}>
        <Button
          variant="outlined"
          href="#outlined-buttons"
          onClick={handleClickOpen}
          className={classes.button}
        >
          Submit
        </Button>
      </Paper>
      <Dialog
        open={open}
        TransitionComponent={Transition}
        keepMounted
        onClose={handleClose}
        aria-labelledby="alert-dialog-slide-title"
        aria-describedby="alert-dialog-slide-description"
      >
        {/* <DialogTitle id="alert-dialog-slide-title">Congratulations!!!</DialogTitle> */}
        <DialogContent>
          <Typography variant="h5" component="h5">
            {message}
          </Typography>
        </DialogContent>
      </Dialog>
    </React.Fragment>
  )
}
