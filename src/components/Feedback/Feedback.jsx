import React from "react";
import css from "./Feedback.module.css";

function Feedback({ feedbackType }) {
  return (
    <div>
      <ul>
        <li>Good: {feedbackType.good}</li>
        <li>Neutral: {feedbackType.neutral}</li>
        <li>Bad: {feedbackType.bad}</li>
      </ul>
    </div>
  );
}

export default Feedback;
