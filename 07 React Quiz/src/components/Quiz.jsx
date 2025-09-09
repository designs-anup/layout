import { useState } from "react"
import Option from "./Option"
import QUESTIONS from "../data/Questions"
import { QUIZ_STAGES } from "../constants/constants"

const Quiz = ({setQuizStage}) => {
    const [currentQuestion, setCurrentQuestion] = useState(0)
    const onNextClick = () => {

        if(currentQuestion === QUESTIONS.length -1){
            // move to result screen
            setQuizStage(QUIZ_STAGES.ENDED)
        }

        setCurrentQuestion(currentQuestion + 1)
    }

    return(
        <>
            <div className="quiz-wrapper">
                <div className="header">
                    <p>{currentQuestion + 1} of {QUESTIONS.length} questions</p>
                </div>
                <div className="quiz">
                    <p className="question">{QUESTIONS[currentQuestion].question}</p>

                    {QUESTIONS[currentQuestion].options.map((option) => (<Option key={option} data={option} />))}

                </div>
                <button id="next" onClick={onNextClick}>Next</button>
            </div>
        </>
    )
}

export default Quiz