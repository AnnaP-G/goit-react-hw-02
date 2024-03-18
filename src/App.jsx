import { useState, useEffect } from "react";
import Description from "./components/Description/Description";
import Options from "./components/Options/Options";
import Feedback from "./components/Feedback/Feedback";
import Notification from "./components/Notification/Notification";
import "./App.css";

const feedbackObject = { good: 0, neutral: 0, bad: 0 };

function App() {
  const [feedbackCounts, setFeedbackCounts] = useState(() => {
    const stringifiedFeedbackCounts = localStorage.getItem("FeedbackValues");
    const parsedFeedbackCounts =
      JSON.parse(stringifiedFeedbackCounts) ?? feedbackObject;
    return parsedFeedbackCounts;
  });

  const updateFeedback = (feedbackType) => {
    setFeedbackCounts({
      ...feedbackCounts,
      [feedbackType]: feedbackCounts[feedbackType] + 1,
    });
  };

  useEffect(() => {
    localStorage.setItem("FeedbackValues", JSON.stringify(feedbackCounts));
  }, [feedbackCounts]);

  const totalFeedback =
    feedbackCounts.good + feedbackCounts.neutral + feedbackCounts.bad;

  const positiveResponseRate = `${Math.round(
    ((feedbackCounts.good + feedbackCounts.neutral) / totalFeedback) * 100
  )}%`;

  const handleResetFeedback = () => {
    setFeedbackCounts(feedbackObject);
  };

  return (
    <>
      <Description />
      <Options
        updateFeedback={updateFeedback}
        total={totalFeedback}
        handleResetFeedback={handleResetFeedback}
      />
      {totalFeedback !== 0 ? (
        <Feedback
          feedbackType={feedbackCounts}
          total={totalFeedback}
          positiveRate={positiveResponseRate}
        />
      ) : (
        <Notification />
      )}
    </>
  );
}

export default App;
