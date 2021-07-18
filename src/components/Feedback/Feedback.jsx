import React from 'react'
import { Button } from './Feedback.styles'

export const Feedback = ({
  increaseGoodFeedback,
  increaseNeutralFeedback,
  increaseBadFeedback,
}) => {
  return (
    <div>
      <Button onClick={() => increaseGoodFeedback()}>Good</Button>
      <Button onClick={() => increaseNeutralFeedback()}>Neutral</Button>
      <Button onClick={() => increaseBadFeedback()}>Bad</Button>
    </div>
  )
}
