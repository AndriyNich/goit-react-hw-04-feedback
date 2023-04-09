import React from 'react';
import PropTypes from 'prop-types';
import { StatisticsList, StatisticsItem } from './Statistics.styled';
import { NotificationMessage } from 'components/NotificationMessage/NotificationMessage';

export function Statistics(props) {
  const countTotalFeedback = () => {
    const {
      state: { good, neutral, bad },
    } = props;
    return good + neutral + bad;
  };

  const countPositiveFeedbackPercentage = () => {
    const {
      state: { good },
    } = props;
    return `${Math.round((good / countTotalFeedback()) * 100)} %`;
  };

  const StatisticsPage = () => {
    const {
      state: { good, neutral, bad },
    } = props;
    return (
      <StatisticsList>
        <StatisticsItem>Good: {good}</StatisticsItem>
        <StatisticsItem>Neutral: {neutral}</StatisticsItem>
        <StatisticsItem>Bad: {bad}</StatisticsItem>
        <StatisticsItem>Total: {countTotalFeedback()}</StatisticsItem>
        <StatisticsItem>
          Positive feedback: {countPositiveFeedbackPercentage()}
        </StatisticsItem>
      </StatisticsList>
    );
  };

  return countTotalFeedback() ? StatisticsPage() : NotificationMessage();
}

Statistics.propTypes = {
  state: PropTypes.shape({
    good: PropTypes.number.isRequired,
    neutral: PropTypes.number.isRequired,
    bad: PropTypes.number.isRequired,
  }),
};
