import { useState, useEffect } from "react";
import { useHistory } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import {
    selectIndex,
    selectActiveQuestion,
    selectQuestions,
} from "../../store/selectors";
import "./questionCard.css";

const randomize = (max: number) => {
    return Math.floor(Math.random() * Math.floor(max));
};

export const QuestionCard = () => {
    const dispatch = useDispatch();
    const [score, setScore] = useState<number>(0);
    const questionIndex = useSelector(selectIndex);
    const questions = useSelector(selectQuestions);
    const question = useSelector(selectActiveQuestion);
    const [answerOptions, setAnswerOptions] = useState<string[]>([""]);
    const correctAnswer = question.correct_answer;
    console.log("correctAnswer", correctAnswer);
    const { push } = useHistory();

    // parse the string to render all chars correctly

    useEffect(() => {
        let answers: string[] = [...question.incorrect_answers];
        if (question) {
            answers.splice(
                randomize(question.incorrect_answers.length),
                0,
                correctAnswer
            );
            setAnswerOptions(answers);
        }
        return;
    }, [question, correctAnswer]);

    const handleAnswer = (evt: Event | any) => {
        evt.stopPropagation();
        const target = evt.target as HTMLButtonElement;
        setTimeout(() => {
            dispatch({
                type: "SET_ANSWER",
                answer: target.textContent,
            });

            dispatch({
                type: "SET_INDEX",
                index: questionIndex + 1,
            });

            if (target.textContent === correctAnswer) {
                setScore(score + 1);
            }
        }, 300);
        if (questionIndex === questions.length - 1) {
            dispatch({
                type: "SET_SCORE",
                score: score,
            });
            push("/results/");
        }
    };

    return (
        <div
            className="container"
            style={{ borderRadius: "10px", width: "60vw" }}
        >
            <h3 className="category">{question.category}</h3>
            <div className="display-question">
                {question.question
                    .replace(/&quot;/g, '"')
                    .replace(/&#039;/g, "'")
                    .replace(/&aring;/g, "å")}
            </div>
            <div className="answers-container">
                {answerOptions.map((answer, idx) => (
                    <button className="answer-button" onClick={handleAnswer}>
                        {answer}
                    </button>
                ))}
            </div>
            <h6 className="display-question-number">
                Question {questionIndex + 1}/10
            </h6>
        </div>
    );
};
