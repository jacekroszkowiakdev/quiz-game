import { useSelector } from "react-redux";
import {
    selectScore,
    selectResults,
    selectQuestions,
} from "../../store/selectors";

export const Results = () => {
    const questions = useSelector(selectQuestions);
    const quizResults = useSelector(selectResults);
    const score = useSelector(selectScore);

    const quizQuestions = questions.map(
        (question, idx) => `Q${idx + 1}. ${question.question}`
    );
    const quizQuestionsObj = { ...quizQuestions };

    const splitQuestionsArr: Array<{}> = Object.values(quizQuestionsObj).map(
        (question) => ({
            question,
        })
    );

    const splitQuestionsArrayOfObj = splitQuestionsArr.map((question) => ({
        question,
    }));
    console.log("splitQuestionsObj", splitQuestionsArrayOfObj);

    // const answersOverview = quizResults.map((overview) => {
    //     return `Correct answer: ${overview.correct} Your answer was: ${overview.answer}`;
    // });

    return (
        <div className="resultsContainer">
            <div>Quiz results</div>
            {/* move score back to SET_ANSWER */}
            <div>You scored {score} of 10</div>
            {/* <ul>
                {quizQuestionsMap.map((question, idx) => {
                    return <li key={idx}>{question}</li>;
                })}
            </ul> */}
        </div>
    );
};
