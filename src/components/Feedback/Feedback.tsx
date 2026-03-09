import { useState } from 'react';
import Section from '../Section/Section';
import Statistics from '../Statistics/Statistics';
import FeedbackOptions from '../FeedbackOptions/FeedbackOptions';
import Notification from '../Notification/Notification';
import { Container } from '../Styled/Feedback.styled';

type FeedbackState = {
  good: number;
  neutral: number;
  bad: number;
};

type FeedbackType = keyof FeedbackState;

function Feedback() {
  const [feedback, setFeedback] = useState<FeedbackState>({
    good: 0,
    neutral: 0,
    bad: 0,
  });

  //---------------------------------------------------->
  const feedbackType = (type: FeedbackType) => {
    setFeedback(prevState => ({
      ...prevState,
      [type]: prevState[type] + 1,
    }));
  };
  //---------------------------------------------------->
  const counterTotalFeedback = () =>
    feedback.bad + feedback.good + feedback.neutral;
  //---------------------------------------------------->
  const positivePercentage = () => {
    const totalFeedback = counterTotalFeedback();
    return totalFeedback === 0
      ? 0
      : Math.round((100 / totalFeedback) * feedback.good);
  };
  //---------------------------------------------------->
  const { good, neutral, bad } = feedback;
  const positive = positivePercentage();
  const totalFeedback = counterTotalFeedback();
  //---------------------------------------------------->
  return (
    <Container>
      <h2>Please leave feedback!!!</h2>
      <FeedbackOptions
        options={Object.keys(feedback) as (keyof typeof feedback)[]}
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
