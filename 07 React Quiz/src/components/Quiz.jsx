import Option from "./Option"

const Quiz = () => {
    return(
        <>
            <div className="quiz-wrapper">
                <div className="header">
                    <p>1 of 3 questions</p>
                </div>
                <div className="quiz">
                    <p className="question">What is ReactJS</p>
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