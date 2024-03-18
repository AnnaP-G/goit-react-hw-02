import css from "./Feedback.module.css";

function Feedback({ feedbackType, total, positiveRate }) {
  return (
    <div className={css.feedback}>
      <ul className={css.feedbackList}>
        <li className={css.feedbackItem}>Good: {feedbackType.good}</li>
        <li className={css.feedbackItem}>Neutral: {feedbackType.neutral}</li>
        <li className={css.feedbackItem}>Bad: {feedbackType.bad}</li>
        <li className={css.feedbackItem}>Total: {total}</li>
        <li className={css.feedbackItem}>Positive: {positiveRate}</li>
      </ul>
    </div>
  );
}

export default Feedback;
