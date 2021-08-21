import { useSelector } from "react-redux";
import {
    selectScore,
    selectResults,
    selectQuestions,
} from "../../store/selectors";

export const Results = () => {
    const questions = useSelector(selectQuestions);
    const quizResults = useSelector(selectResults);
    console.log("results", quizResults);
    const score = useSelector(selectScore);

    const quizQuestionsMap = questions.map(
        (question, idx) => `Q${idx + 1}. ${question.question}`
    );
    console.log("quizQuestionsMap", quizQuestionsMap);

    const answersOverview = quizResults.map((overview) => {
        return `Correct answer: ${overview.correct} Your answer was: ${overview.answer}`
    //     return overview.forEach(overview.answer === overview.correct.toString()
    //         ? `your answer was CORRECT!`
    //         : `your answer was INCORRECT`;)
    // });
    console.log("answersOverview: ", answersOverview);

    return (
        <div className="resultsContainer">
            <div>Quiz results</div>
            <div>You scored {score} of 10</div>
            <ul>
                {quizQuestionsMap.map((question, idx) => {
                    return <li key={idx}>{question}</li>;
                })}
            </ul>
            {/* <ul>
                {quizResults.map((result, idx) => (
                    <li key={idx}>{result}</li>
                ))}
            </ul> */}
        </div>
    );
};
