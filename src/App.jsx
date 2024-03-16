import { useState, useEffect } from "react";
import "./App.css";
import Description from "./components/Description/Description";
import Options from "./components/Options/Options";
import Feedback from "./components/Feedback/Feedback";

function App() {
  const [counter, setCounter] = useState({
    good: 0,
    neutral: 0,
    bad: 0,
  });

  const updateFeedback = (feedbackType) => {
    console.log("feedbackType:", feedbackType);
    // Тут використовуй сеттер, щоб оновити стан
  };

  return (
    <>
      <Description />
      <Options updateFeedback={updateFeedback} />
      <Feedback />
    </>
  );
}

export default App;
