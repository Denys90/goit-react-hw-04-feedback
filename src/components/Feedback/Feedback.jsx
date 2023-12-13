import { useState } from 'react';
import Section from './Section';
import Statistics from './Statistics';
import FeedbackOptions from './FeedbackOptions';
import Notification from './Notification';
import { Container } from './Styled/Feedback.styled';

function Feedback() {
  const [feedback, setFeedback] = useState({
    good: 0,
    neutral: 0,
    bad: 0,
  });

  //---------------------------------------------------->
  const feedbackType = type => {
    setFeedback(prevState => ({
      ...prevState,
      [type]: prevState[type] + 1,
    }));
  };
  //---------------------------------------------------->
  const countTotalFeedback = () => {
    const { good, neutral, bad } = feedback;
    return good + neutral + bad;
  };
  //---------------------------------------------------->
  const positivePercentage = () => {
    const totalFeedback = countTotalFeedback();
    return totalFeedback === 0
      ? 0
      : Math.round((100 / totalFeedback) * feedback.good);
  };
  //---------------------------------------------------->
  const { good, neutral, bad } = feedback;
  const positive = positivePercentage();
  const totalFeedback = countTotalFeedback();
  //---------------------------------------------------->
  return (
    <Container>
      <h2>Please leave feedback</h2>
      <FeedbackOptions
        options={Object.keys(feedback)}
        onLeaveFeedback={feedbackType}
      />
      <Section title="Statistics">
        {totalFeedback > 0 ? (
          <Statistics
            good={good}
            neutral={neutral}
            bad={bad}
            total={totalFeedback}
            positivePercentage={positive}
          />
        ) : (
          <Notification message="There is no feedback" />
        )}
      </Section>
    </Container>
  );
}

export default Feedback;
