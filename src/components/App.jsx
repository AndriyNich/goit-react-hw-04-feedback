import React, { useState } from 'react';
import { Section } from './Section/Section';
import { FeedbackOptions } from './FeedbackOptions/FeedbackOptions';
import { INIT_STATE } from './Constants/Constants';
import { Statistics } from './Statistics/Statistics';

export function App() {
  const [inState, setInState] = useState({ ...INIT_STATE });

  const handelLeaveFeedback = elem => {
    const { name } = elem.currentTarget;
    setInState(prevState => ({ ...prevState, [name]: prevState[name] + 1 }));
  };

  return (
    <div>
      <Section title="Please leave feedback">
        <FeedbackOptions onLeaveFeedback={handelLeaveFeedback} />
      </Section>
      <Section title="Statistics">
        <Statistics state={inState} />
      </Section>
    </div>
  );
}
