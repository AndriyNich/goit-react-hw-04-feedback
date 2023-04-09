import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { StatisticsList, StatisticsItem } from './Statistics.styled';
import { NotificationMessage } from 'components/NotificationMessage/NotificationMessage';

export class Statistics extends Component {
  countTotalFeedback() {
    const {
      state: { good, neutral, bad },
    } = this.props;
    return good + neutral + bad;
  }

  countPositiveFeedbackPercentage() {
    const {
      state: { good },
    } = this.props;
    return `${Math.round((good / this.countTotalFeedback()) * 100)} %`;
  }

  StatisticsPage() {
    const {
      state: { good, neutral, bad },
    } = this.props;
    return (
      <StatisticsList>
        <StatisticsItem>Good: {good}</StatisticsItem>
        <StatisticsItem>Neutral: {neutral}</StatisticsItem>
        <StatisticsItem>Bad: {bad}</StatisticsItem>
        <StatisticsItem>Total: {this.countTotalFeedback()}</StatisticsItem>
        <StatisticsItem>
          Positive feedback: {this.countPositiveFeedbackPercentage()}
        </StatisticsItem>
      </StatisticsList>
    );
  }

  render() {
    return this.countTotalFeedback()
      ? this.StatisticsPage()
      : NotificationMessage();
  }
}

Statistics.propTypes = {
  state: PropTypes.shape({
    good: PropTypes.number.isRequired,
    neutral: PropTypes.number.isRequired,
    bad: PropTypes.number.isRequired,
  }),
};
