import { makeStyles } from '@material-ui/core/styles'

const useStyles = makeStyles(theme => ({
  button: {
    marginTop: theme.spacing(1),
    marginRight: theme.spacing(1),
  },
  submitContainer: {
    padding: theme.spacing(3),
  },
}))

export default useStyles