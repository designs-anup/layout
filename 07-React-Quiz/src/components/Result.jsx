import { QUIZ_STAGES } from "../constants/constants"

const Result = ({score, setScore, setQuizStage}) => {
    const onRestart = () => {
        setScore(0)
        setQuizStage(QUIZ_STAGES.IN_PROGRESS)
    }

    return(
        <>
            <div className="result-screen">
                <h2>Result</h2>
                Your Score : {score}
                <button id="restart" onClick={onRestart}>Restart</button>
            </div>
        </>
    )
}

export default Result