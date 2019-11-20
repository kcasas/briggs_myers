import React, { useState } from "react";

function Question({
  question,
  options,
  answer,
  step,
  totalSteps,
  onPrevious,
  onNext,
  onAnswer,
  onShowResult
}) {
  const [hasError, setHasError] = useState(false);
  const progressWidth = `${((step + 1) / totalSteps) * 100}%`;

  const handleNext = () => {
    if (![0, 1, 2, 3].includes(answer)) {
      setHasError(true);
      return;
    }

    if (step + 1 === totalSteps) {
      onShowResult();
      return;
    }

    setHasError(false);
    onNext();
  };

  const handlePrevious = () => {
    setHasError(false);
    onPrevious();
  };

  return (
    <div className="question-container">
      <div className="step-progress" style={{ width: progressWidth }} />
      <span className="step-label">
        {step + 1}/{totalSteps}
      </span>
      <h3>{question}</h3>
      {options.map((option, index) => (
        <div key={index} className="choice-container">
          <button
            onClick={() => onAnswer(step, index)}
            className={answer === index ? "active" : null}
          >
            <span>{option.value}</span>
          </button>
        </div>
      ))}

      <div className="pager-container">
        {hasError && (
          <span
            className="error-message animated jello"
            style={{ display: "inline-block" }}
          >
            Pili ka ng isa bes!
          </span>
        )}

        <div className="buttons">
          {step !== 0 && (
            <button
              disabled={!onPrevious}
              onClick={handlePrevious}
              className="button back"
            >
              Previous
            </button>
          )}
          <button disabled={!onNext} onClick={handleNext} className="button">
            {step + 1 === totalSteps ? "See Results" : "Next"}
          </button>
        </div>
      </div>
    </div>
  );
}

export default Question;
