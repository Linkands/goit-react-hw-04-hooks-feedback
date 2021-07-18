import { useState } from 'react'
import { Feedback } from './components/Feedback/Feedback'
import Statistics from './components/Statistics/Statistics'
import Section from './components/Section/Section'
import Notification from './components/Notification/Notification'

function App() {
  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)

  function countTotalFeedback() {
    const totalFeedback = good + neutral + bad
    return totalFeedback
  }

  function countPositiveFeedbackPercentage() {
    const totalFeedback = countTotalFeedback()
    const percentage = (good * 100) / totalFeedback
    return Math.round(percentage)
  }

  const increaseGoodFeedback = () => {
    setGood((s) => s + 1)
  }

  const increaseNeutralFeedback = () => {
    setNeutral((s) => s + 1)
  }

  const increaseBadFeedback = () => {
    setBad((s) => s + 1)
  }

  const total = countTotalFeedback()
  const positivePercentage = countPositiveFeedbackPercentage()

  return (
    <div className="App">
      <Section title="Please leave feedback">
        <Feedback
          increaseGoodFeedback={increaseGoodFeedback}
          increaseNeutralFeedback={increaseNeutralFeedback}
          increaseBadFeedback={increaseBadFeedback}
        ></Feedback>
      </Section>

      <Section title="Statistics">
        {total ? (
          <Statistics
            good={good}
            neutral={neutral}
            bad={bad}
            total={total}
            positivePercentage={positivePercentage}
          ></Statistics>
        ) : (
          <Notification message="No feedback given"></Notification>
        )}
      </Section>
    </div>
  )
}

export default App
