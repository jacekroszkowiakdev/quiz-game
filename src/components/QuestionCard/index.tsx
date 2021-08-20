import { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { IState } from "../../store/reducer";
import {
    selectScore,
    selectIndex,
    selectActiveQuestion,
} from "../../store/selectors";

const randomize = (max: number) => {
    return Math.floor(Math.random() * Math.floor(max));
};

export const QuestionCard = () => {
    const dispatch = useDispatch();
    // const score = useSelector(selectScore);
    const questionIndex = useSelector(selectIndex);
    const questions = useSelector<IState>((state) => state.questions);
    console.log("questions: ", questions);
    const question = useSelector(selectActiveQuestion);
    console.log("question", question);
    const [answerOptions, setAnswerOptions] = useState<string[]>([""]);
    const correctAnswer = question.correct_answer;

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

    const handleAnswer = (evt: { target: HTMLLIElement }) => {
        if (evt.target.textContent === correctAnswer) {
            dispatch({
                type: "SET_ANSWER",
            });
        }
    };

    return (
        <div className="quizContainer">
            <div className="category">{question.category}</div>
            <div>Question {questionIndex + 1}/10</div>
            <div>{question.question}</div>
            <div>Answer: </div>
            <ul>
                {answerOptions.map((answer, idx) => (
                    <li key={idx}>{answer}</li>
                ))}
            </ul>
        </div>
    );
};
