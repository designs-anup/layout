import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { QUIZ_STAGES } from './constants/constants'
import Start from './components/Start'
import Quiz from './components/Quiz'
import Result from './components/Result'

function App() {
  const [quizStage, setQuizStage] = useState(QUIZ_STAGES.START)

  const [count, setCount] = useState(0)

  return (
    <>

      <h1>Learn Quiz App</h1>

      {
        quizStage === QUIZ_STAGES.START ? (<Start setQuizStage={setQuizStage} />)  : 
        quizStage === QUIZ_STAGES.IN_PROGRESS ? (<Quiz/>) :
        (<Result/>)
      }

      <div>
        <a href="https://vite.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>Vite + React</h1>
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
        <p>
          Edit <code>src/App.jsx</code> and save to test HMR
        </p>
      </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>
    </>
  )
}

export default App
