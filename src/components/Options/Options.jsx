import css from "./Options.module.css";

const Options = ({ updateFeedback, handleResetFeedback, total }) => {
  return (
    <div className={css.options}>
      <button className={css.optionBtn} onClick={() => updateFeedback("good")}>
        Good
      </button>
      <button
        className={css.optionBtn}
        onClick={() => updateFeedback("neutral")}
      >
        Neutral
      </button>
      <button className={css.optionBtn} onClick={() => updateFeedback("bad")}>
        Bad
      </button>
      {total !== 0 && (
        <button onClick={handleResetFeedback} className={css.optionBtn}>
          Reset
        </button>
      )}
    </div>
  );
};

export default Options;
