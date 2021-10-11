import { useSelector } from "react-redux";
import {
    selectScore,
    selectResults,
    selectQuestions,
} from "../../store/selectors";
import { ContainedButton } from "./../../UI/Button";
import "./results.css";
import sanitizeHtml from "sanitize-html";

export const Results = () => {
    const questions = useSelector(selectQuestions);
    console.log("Questions :", questions);
    const quizAnswers = useSelector(selectResults);
    console.log("Answers :", quizAnswers);
    const score = useSelector(selectScore);

    const quizQuestions = questions.map(
        (question, idx) => `Q${idx + 1}. ${question.question}`
    );
    console.log("quizQuestionsMap", quizQuestions);

    // const quizResultsMap = quizAnswers.map((answers, index) => {
    //     return { ...answers, question: quizQuestions[index] };
    // });

    const quizResultsMap = quizAnswers.map((answers, index) => {
        return {
            ...answers,
            correct_answer: questions[index].correct_answer,
            question: quizQuestions[index],
        };
    });

    console.log("quizResultsMap", quizResultsMap);

    return (
        <div
            className="container"
            style={{ borderRadius: "10px", width: "60vw" }}
        >
            <h2>Quiz results</h2>
            <div className="score">You scored {score} of 10</div>
            <ul>
                {quizResultsMap.map((results, idx) => {
                    return (
                        <li key={idx}>
                            <h4>{sanitizeHtml(results.question)}</h4>
                            <div className="user-results">
                                <p>
                                    Correct answer:{" "}
                                    {results.correct_answer.toString()}
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
                className="play-again-button"
            ></ContainedButton>
        </div>
    );
};
