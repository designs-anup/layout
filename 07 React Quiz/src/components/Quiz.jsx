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

                    {QUESTIONS[currentQuestion].options.map((option) => (<Option key={option} data={option} />))}

                </div>
                <button id="next">Next</button>
            </div>
        </>
    )
}

export default Quiz