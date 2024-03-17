import { useState, useEffect } from "react";
import Description from "./components/Description/Description";
import Options from "./components/Options/Options";
import Feedback from "./components/Feedback/Feedback";
import "./App.css";

function App() {
  const [feedbackCounts, setFeedbackCounts] = useState({
    good: 0,
    neutral: 0,
    bad: 0,
  });

  const updateFeedback = (feedbackType) => {
    setFeedbackCounts({
      ...feedbackCounts,
      [feedbackType]: feedbackCounts[feedbackType] + 1,
    });
    console.log(feedbackCounts);
    // Тут використовуй сеттер, щоб оновити стан
  };

  // const updateFeedback = (feedbackType) => {
  //   const lowercaseFeedbackType = feedbackType.toLowerCase();
  //   setFeedbackCounts((prevState) => ({
  //     ...prevState,
  //     [lowercaseFeedbackType]: prevState[lowercaseFeedbackType] + 1,
  //   }));
  // };

  return (
    <>
      <Description />
      <Options updateFeedback={updateFeedback} />
      <Feedback feedbackType={feedbackCounts} />
    </>
  );
}

export default App;
