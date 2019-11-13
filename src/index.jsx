import "./styles.css";

import React from 'react'
import ReactDOM from 'react-dom'
import {
  ThemeProvider,
  Container,
  CssBaseline,
  Typography,
  AppBar,
  Toolbar,
} from '@material-ui/core'
import Questions from './Components/Questions'
import {title, traits, questions} from './test'
import theme from './theme'

function App() {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <AppBar>
        <Toolbar>
          <Typography variant="h6">{title}</Typography>
        </Toolbar>
      </AppBar>
      <Toolbar />
      <Container maxWidth="lg">
        <Questions traits={traits} questions={questions} />
      </Container>
    </ThemeProvider>
  )
}

ReactDOM.render(<App />, document.querySelector('#app'))
