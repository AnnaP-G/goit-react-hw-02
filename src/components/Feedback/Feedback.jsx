import React from "react";
import css from "./Feedback.module.css";

function Feedback({ feedbackType, total, positiveRate }) {
  return (
    <div>
      <ul>
        <li>Good: {feedbackType.good}</li>
        <li>Neutral: {feedbackType.neutral}</li>
        <li>Bad: {feedbackType.bad}</li>
        <li>Total: {total}</li>
        <li>Positive: {positiveRate}</li>
      </ul>
    </div>
  );
}

export default Feedback;
