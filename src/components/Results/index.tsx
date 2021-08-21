import { useSelector } from "react-redux";
import {
    selectScore,
    selectResults,
    selectQuestions,
} from "../../store/selectors";

export const Results = () => {
    const questions = useSelector(selectQuestions);
    const quizAnswers = useSelector(selectResults);
    const score = useSelector(selectScore);

    // QUESTIONS:
    const quizQuestions = questions.map(
        (question, idx) => `Q${idx + 1}. ${question.question}`
    );

    const quizResultsMap = quizAnswers.map((answers, index) => {
        return { ...answers, question: quizQuestions[index] };
    });
    console.log("quizResults.map: ", quizResultsMap);

    return (
        <div className="resultsContainer">
            <div>Quiz results</div>
            <div>You scored {score} of 10</div>
            <ul>
                {quizResultsMap.map((results, idx) => {
                    return (
                        <li key={idx}>
                            <h4>{results.question}</h4>
                            <div className="user-results">
                                <p>
                                    Correct answer: {results.correct.toString()}
                                </p>
                                <p>
                                    Your answer was:{" "}
                                    {results.answer.toLowerCase()}
                                </p>
                            </div>
                        </li>
                    );
                })}
            </ul>
        </div>
    );
};
