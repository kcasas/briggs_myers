import React from 'react'
import {
  Stepper,
  Box,
  Step,
  StepContent,
  StepButton,
  StepLabel,
} from '@material-ui/core'
import Choices from '../Choices';
import Result from '../Result';
import useStyles from './styles'

export default function Questions({ traits, questions }) {
  const classes = useStyles()

  const [activeStep, setActiveStep] = React.useState(0)
  const [ans, setAns]= React.useState([])

  const getEffects = () => {
    let effects = []
    ans.map((val, i) => {
      effects[i] = questions[i]['options'][val]['effect']
    })

    return effects
  }
  
  const onAnswer = step => event => {
    setAns(ans => {
      ans[step] = parseInt(event.target.value)
      return ans
    })
    setActiveStep(prevActiveStep => prevActiveStep + 1)
  }

  const handleStep = step => () => {
    setActiveStep(step)
  };

  const handleSubmit = () => {
    setActiveStep(0)
  }

  return (
    <div className={classes.root}>
      <Stepper activeStep={activeStep} orientation="vertical">
        {questions.map((question, index) => (
          <Step 
            key={index}
            completed={ans[index] !== undefined}
            disabled={ans.length < index || ans.length === questions.length}>
            <StepButton onClick={handleStep(index)}>
              <Box fontSize={25} fontWeight="fontWeightLight" textAlign="left" component="span" display="block">
                {question.question}
              </Box>
              <Box fontSize={20} fontWeight="fontWeightBold" textAlign="left" component="span" display="block">
                {ans[index] !== undefined ?
                  question.options[ans[index]]['value'] : ''}
              </Box>
            </StepButton>
            <StepContent>
              <Choices value={ans[index]} onChange={onAnswer(index)} choices={question.options} />
            </StepContent>
          </Step>
        ))}
      </Stepper>
      {ans.length === questions.length && <Result traits={traits} effects={getEffects()} />}
    </div>
  )
}
