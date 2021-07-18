import React from 'react'
import { StatisticsList, StatisticsItem } from './Statistics.styles'
import PropTypes from 'prop-types'

function Statistics({ good, neutral, bad, total, positivePercentage }) {
  return (
    <StatisticsList>
      <StatisticsItem>Good: {good}</StatisticsItem>
      <StatisticsItem>Neutral: {neutral}</StatisticsItem>
      <StatisticsItem>Bad: {bad}</StatisticsItem>
      <StatisticsItem>Total: {total}</StatisticsItem>
      <StatisticsItem>Positive feedback:{positivePercentage}%</StatisticsItem>
    </StatisticsList>
  )
}

Statistics.propTypes = {
  good: PropTypes.number,
  neutral: PropTypes.number,
  bad: PropTypes.number,
  total: PropTypes.number,
  positivePercentage: PropTypes.number,
}

export default Statistics