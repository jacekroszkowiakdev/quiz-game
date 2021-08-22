import { useSelector } from "react-redux";
import {
    selectScore,
    selectResults,
    selectQuestions,
} from "../../store/selectors";
import { ContainedButton } from "./../../UI/Button";

export const Results = () => {
    const questions = useSelector(selectQuestions);
    const quizAnswers = useSelector(selectResults);
    const score = useSelector(selectScore);

    const quizQuestions = questions.map(
        (question, idx) => `Q${idx + 1}. ${question.question}`
    );

    const quizResultsMap = quizAnswers.map((answers, index) => {
        return { ...answers, question: quizQuestions[index] };
    });

    return (
        <div className="resultsContainer">
            <h1>Quiz results</h1>
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
                                    Your answer: {results.answer.toLowerCase()}
                                </p>
                            </div>
                        </li>
                    );
                })}
            </ul>
            <ContainedButton
                path="/"
                buttonText="Play Again?"
            ></ContainedButton>
        </div>
    );
};
