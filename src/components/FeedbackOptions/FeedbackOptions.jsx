import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { INIT_STATE } from 'components/Constants/Constants';
import { FeedbackOptionWraper, FeedbackButton } from './FeedbackOptions.styled';

export class FeedbackOptions extends Component {
  getArrayOption() {
    return Object.keys(INIT_STATE);
  }

  render() {
    const { onLeaveFeedback } = this.props;

    return (
      <FeedbackOptionWraper>
        {this.getArrayOption().map(elem => {
          return (
            <FeedbackButton key={elem} onClick={onLeaveFeedback} name={elem}>
              {elem}
            </FeedbackButton>
          );
        })}
      </FeedbackOptionWraper>
    );
  }
}

FeedbackOptions.propTypes = {
  onLeaveFeedback: PropTypes.func.isRequired,
};
