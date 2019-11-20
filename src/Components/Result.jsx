import React from "react";
import FacebookProvider, { ShareButton } from "react-facebook-sdk";

import { traits, questions } from "../test";

function Result({ answers }) {
  const dominantTrait = getDominantTraits(traits, getEffects(answers));

  return (
    <div className="result-container">
      <p className="result-message">
        You will teach... <em className="animated jello">{dominantTrait}</em>{" "}
        <span>🎉🎉🎉</span>
      </p>
      <div className="result-actions">
        <a className="button back result-retake" href="/">
          Retake
        </a>
        <FacebookProvider appId="641499649714690">
          <ShareButton
            href="http://www.facebook.com"
            className="button result-share"
          >
            Share
          </ShareButton>
        </FacebookProvider>
        {/* <button className="button result-share">Share</button> */}
      </div>
    </div>
  );
}

const getEffects = answers => {
  let effects = [];

  answers.map((val, i) => {
    effects[i] = questions[i]["options"][val]["effect"];
  });

  return effects;
};

const getDominantTraits = function(traits, effects) {
  let sums = [];
  effects.map(effect => {
    effect.map((val, i) => {
      if (sums[i] == undefined) {
        sums[i] = val;
      } else {
        sums[i] += val;
      }
    });
  });

  const max = Math.max(...sums);
  let domininants = [];

  sums.map((sum, i) => {
    if (sum === max) {
      domininants.push(traits[i]);
    }
  });

  return domininants;
};

export default Result;
