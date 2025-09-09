import { QUIZ_STAGES } from "../constants/constants"

const Start = ({setQuizStage}) => {
    return (
        <>  
            <div className="start-screen">
                <h1>Ready for a Quiz</h1>
                <button id="start" onClick={() => (setQuizStage(QUIZ_STAGES.IN_PROGRESS))}>Start</button>
            </div>
        </>
    )
}

export default Start