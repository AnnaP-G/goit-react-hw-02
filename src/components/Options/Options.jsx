import React from "react";
import css from "./Options.module.css";

const Options = ({ updateFeedback }) => {
  return (
    <div>
      <button onClick={() => updateFeedback("Good")}>Good</button>
      <button onClick={() => updateFeedback("Neutral")}>Neutral</button>
      <button onClick={() => updateFeedback("Bad")}>Bad</button>
      <button>Reset</button>
    </div>
  );
};

export default Options;
