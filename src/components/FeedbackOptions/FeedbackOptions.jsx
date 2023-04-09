import React from 'react';
import PropTypes from 'prop-types';
import { INIT_STATE } from 'components/Constants/Constants';
import { FeedbackOptionWraper, FeedbackButton } from './FeedbackOptions.styled';

export function FeedbackOptions({ onLeaveFeedback }) {
  const getArrayOption = () => Object.keys(INIT_STATE);

  return (
    <FeedbackOptionWraper>
      {getArrayOption().map(elem => {
        return (
          <FeedbackButton key={elem} onClick={onLeaveFeedback} name={elem}>
            {elem}
          </FeedbackButton>
        );
      })}
    </FeedbackOptionWraper>
  );
}

FeedbackOptions.propTypes = {
  onLeaveFeedback: PropTypes.func.isRequired,
};
