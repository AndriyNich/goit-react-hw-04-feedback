import React, { Component } from 'react';
import { Section } from './Section/Section';
import { FeedbackOptions } from './FeedbackOptions/FeedbackOptions';
import { INIT_STATE } from './Constants/Constants';
import { Statistics } from './Statistics/Statistics';

export class App extends Component {
  state = Object.freeze({ ...INIT_STATE });

  handelLeaveFeedback = elem => {
    const { name } = elem.currentTarget;
    this.setState(prevState => ({ [name]: prevState[name] + 1 }));
  };

  render() {
    // console.log(this.state);
    return (
      <div>
        <Section title="Please leave feedback">
          <FeedbackOptions onLeaveFeedback={this.handelLeaveFeedback} />
        </Section>
        <Section title="Statistics">
          <Statistics state={this.state} />
        </Section>
      </div>
    );
  }
}
