import { useState } from 'react';

import { FeedbackWrap } from '../components/Section/Section.styled';
import { Section } from '../components/Section/Section';
import { FeedbackOptions } from '../components/FeedbackOptions/FeedbackOptions';
import { Statistics } from '../components/Statistics/Statistics';
import { Notification } from '../components/Notification/Notification';

export function App() {
  const [good, setGood] = useState(0);
  const [neutral, setNeutral] = useState(0);
  const [bad, setBad] = useState(0);

  const countTotalFeedback = () => {
    const result = good + neutral + bad;
    return result;
  };

  const countPositiveFeedbackPercentage = () => {
    const totalResult = countTotalFeedback();

    return Math.round((100 * good) / totalResult);
  };

  const handleClickFeedback = option => {
    switch (option) {
      case 'good':
        setGood(value => value + 1);
        break;
      case 'neutral':
        setNeutral(value => value + 1);
        break;
      case 'bad':
        setBad(value => value + 1);
        break;

      default:
        break;
    }
  };

  return (
    <FeedbackWrap>
      <Section title="Please leave feedback">
        <FeedbackOptions
          options={Object.keys({ good, neutral, bad })}
          onLeaveFeedback={handleClickFeedback}
        ></FeedbackOptions>
      </Section>

      <Section title="Statistics">
        {countTotalFeedback() === 0 ? (
          <Notification message="There is no feedback"></Notification>
        ) : (
          <Statistics
            good={good}
            neutral={neutral}
            bad={bad}
            total={countTotalFeedback()}
            positivePercentage={countPositiveFeedbackPercentage()}
          ></Statistics>
        )}
      </Section>
    </FeedbackWrap>
  );
}
