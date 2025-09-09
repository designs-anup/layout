import { useState } from "react"
import Option from "./Option"
import QUESTIONS from "../data/Questions"

const Quiz = () => {
    const [currentQuestion, setCurrentQuestion] = useState(0)

    return(
        <>
            <div className="quiz-wrapper">
                <div className="header">
                    <p>{currentQuestion + 1} of {QUESTIONS.length} questions</p>
                </div>
                <div className="quiz">
                    <p className="question">{QUESTIONS[currentQuestion].question}</p>
                    <Option data="Option 1" />
                    <Option data="Option 2" />
                    <Option data="Option 3" />
                    <Option data="Option 4" />
                </div>
                <button id="next">Next</button>
            </div>
        </>
    )
}

export default Quiz