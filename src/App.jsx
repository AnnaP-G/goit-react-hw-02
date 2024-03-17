import { useState, useEffect } from "react";
import Description from "./components/Description/Description";
import Options from "./components/Options/Options";
import Feedback from "./components/Feedback/Feedback";
import Notification from "./components/Notification/Notification";
import "./App.css";

function App() {
  const [feedbackCounts, setFeedbackCounts] = useState({
    good: 0,
    neutral: 0,
    bad: 0,
  });

  // const [isFeedbackVisible, setisFeedbackVisible] = useState(false);

  const updateFeedback = (feedbackType) => {
    setFeedbackCounts({
      ...feedbackCounts,
      [feedbackType]: feedbackCounts[feedbackType] + 1,
    });
    console.log(feedbackCounts);
  };

  const totalFeedback =
    feedbackCounts.good + feedbackCounts.neutral + feedbackCounts.bad;

  const positiveResponseRate = `${Math.round(
    ((feedbackCounts.good + feedbackCounts.neutral) / totalFeedback) * 100
  )}%`;

  return (
    <>
      <Description />
      <Options updateFeedback={updateFeedback} total={totalFeedback} />
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
