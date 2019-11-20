import React, { useState } from "react";

import Question from "./Components/Question";
import Result from "./Components/Result";

import { questions } from "./test";

function App() {
  const [activeStep, setActiveStep] = useState(0);
  const [ans, setAns] = useState([]);
  const [showResult, setShowResult] = useState(false);

  const prevStep = () => {
    setActiveStep(prevActiveStep => prevActiveStep - 1);
  };

  const nextStep = () => {
    setActiveStep(prevActiveStep => prevActiveStep + 1);
  };

  const chooseAnswer = (step, choiceIndex) => {
    setAns(ans => {
      const ansCopy = [...ans];
      ansCopy[step] = choiceIndex;

      return ansCopy;
    });
  };

  const onShowResult = () => setShowResult(true);

  const currentQuestion = questions[activeStep];

  return (
    <div className="app-container">
      <div className="hero"></div>
      <div className="form">
        {showResult ? (
          <Result answers={ans} />
        ) : (
          <Question
            question={currentQuestion.question}
            options={currentQuestion.options}
            answer={ans[activeStep]}
            step={activeStep}
            totalSteps={questions.length}
            onPrevious={prevStep}
            onNext={nextStep}
            onAnswer={chooseAnswer}
            onShowResult={onShowResult}
          />
        )}
      </div>
    </div>
  );
}

export default App;
