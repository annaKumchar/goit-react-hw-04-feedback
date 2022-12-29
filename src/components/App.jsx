import React, { Component } from 'react';

import { FeedbackWrap } from '../components/Section/Section.styled';
import { Section } from '../components/Section/Section';
import { FeedbackOptions } from '../components/FeedbackOptions/FeedbackOptions';
import { Statistics } from '../components/Statistics/Statistics';
import { Notification } from '../components/Notification/Notification';

export class App extends Component {
  static defaultProps = {
    total: 0,
    positivePercentage: 0,
  };

  state = {
    good: 0,
    neutral: 0,
    bad: 0,
  };

  countTotalFeedback() {
    const { good, neutral, bad } = this.state;
    const result = good + neutral + bad;
    return result;
  }

  countPositiveFeedbackPercentage() {
    const { good } = this.state;
    const totalResult = this.countTotalFeedback();
    // const positiveResult = ;
    return Math.round((100 * good) / totalResult);
    // return ( (100*good)/(good+neutral+bad) )
  }

  handleClickFeedback = e => {
    this.setState(prevState => ({ [e]: prevState[e] + 1 }));
  };

  render() {
    const { good, neutral, bad } = this.state;
    return (
      <FeedbackWrap>
        <Section title="Please leave feedback">
          <FeedbackOptions
            options={Object.keys(this.state)}
            onLeaveFeedback={this.handleClickFeedback}
          ></FeedbackOptions>
        </Section>

        <Section title="Statistics">
          {this.countTotalFeedback() === 0 ? (
            <Notification message="There is no feedback"></Notification>
          ) : (
            <Statistics
              good={good}
              neutral={neutral}
              bad={bad}
              total={this.countTotalFeedback()}
              positivePercentage={this.countPositiveFeedbackPercentage()}
            ></Statistics>
          )}
        </Section>
      </FeedbackWrap>
    );
  }
}
