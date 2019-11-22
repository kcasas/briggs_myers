import React from "react";

import { traits, questions } from "../test";

function Result({ answers }) {
  const dominantTrait = getDominantTraits(traits, getEffects(answers));
  const shareUrl = getShareUrl(dominantTrait);

  return (
    <div className="result-container">
      <p className="result-message">
        You will teach... <em className="animated jello">{dominantTrait[0]}</em>{" "}
        <span>🎉🎉🎉</span>
      </p>
      <div className="result-actions">
        <a className="button back result-retake" href="">
          Retake
        </a>
        <a href={"https://www.facebook.com/sharer/sharer.php?u="+shareUrl} className="button result-share">
          Share
        </a>
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

const getShareUrl = dominantTrait => {
  const baseUrl = window.location.origin + "/";

  switch (dominantTrait[0]) {
    case "Science":
      return baseUrl + "science.html";
    case "Math":
      return baseUrl + "math.html";
    case "Tech":
      return baseUrl + "tech.html";
    case "Humanities":
      return baseUrl + "humanities.html";
  }
  // if (dominantTrait.star)
};

export default Result;
