import { useState } from 'react'
import './App.css'
import { QUIZ_STAGES } from './constants/constants'
import Start from './components/Start'
import Quiz from './components/Quiz'
import Result from './components/Result'

function App() {
  const [quizStage, setQuizStage] = useState(QUIZ_STAGES.START)
  const [score, setScore] = useState(0)

  return (
    <>

      <h1>Learn Quiz App</h1>

      {
        quizStage === QUIZ_STAGES.START ? (<Start setQuizStage={setQuizStage} />)  : 
        quizStage === QUIZ_STAGES.IN_PROGRESS ? (<Quiz setQuizStage={setQuizStage} score={score} setScore={setScore} />) :
        (<Result setQuizStage={setQuizStage} score={score} setScore={setScore}/>)
      }
    </>
  )
}

export default App
